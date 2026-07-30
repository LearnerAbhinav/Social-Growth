from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser

from .models import Lead
from .serializers import LeadCreateSerializer, LeadListSerializer, LeadUpdateSerializer


def send_lead_emails(lead):
    """Send auto-reply to client and notification to team."""
    # 1. Auto-reply to the lead
    try:
        client_subject = f"We received your enquiry, {lead.name.split()[0]}! — Fuse Market"
        client_message = f"""
Hi {lead.name},

Thank you for reaching out to Fuse Market! 🎉

We've received your enquiry for {lead.get_service_interest_display()} and our team will get back to you within 24 hours.

Your enquiry details:
• Service: {lead.get_service_interest_display()}
• Budget: {lead.get_budget_display() if lead.budget else 'To be discussed'}
• Message: {lead.message[:200]}...

In the meantime, feel free to reach us on WhatsApp:
👉 https://wa.me/918418818469

— Team Fuse Market
📧 hello@fusemarket.in
🌐 www.fusemarket.in
"""
        send_mail(
            subject=client_subject,
            message=client_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[lead.email],
            fail_silently=True,
        )
        lead.auto_reply_sent = True
    except Exception:
        pass

    # 2. Notify the team
    try:
        team_subject = f"🔔 New Lead: {lead.name} — {lead.get_service_interest_display()}"
        team_message = f"""
New lead received from the Fuse Market website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:     {lead.name}
📧 Email:    {lead.email}
📞 Phone:    {lead.phone}
🏢 Company:  {lead.company or 'Not provided'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Service:  {lead.get_service_interest_display()}
💰 Budget:   {lead.get_budget_display() if lead.budget else 'To be discussed'}
📡 Source:   {lead.get_source_display()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Message:
{lead.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

View in admin: http://localhost:8000/admin/api/lead/{lead.id}/change/
"""
        team_email = getattr(settings, 'TEAM_EMAIL', 'hello@fusemarket.in')
        send_mail(
            subject=team_subject,
            message=team_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[team_email],
            fail_silently=True,
        )
        lead.team_notified = True
    except Exception:
        pass

    lead.save(update_fields=['auto_reply_sent', 'team_notified'])


class LeadListCreateView(APIView):
    """
    GET  /api/leads/   — List all leads (admin only)
    POST /api/leads/   — Create lead from contact form (public)
    """

    def get_permissions(self):
        if self.request.method == 'GET':
            return [IsAdminUser()]
        return [AllowAny()]

    def get(self, request):
        leads = Lead.objects.all()
        # Filtering
        status_filter = request.query_params.get('status')
        service_filter = request.query_params.get('service')
        if status_filter:
            leads = leads.filter(status=status_filter)
        if service_filter:
            leads = leads.filter(service_interest=service_filter)
        serializer = LeadListSerializer(leads, many=True)
        return Response({'count': leads.count(), 'results': serializer.data})

    def post(self, request):
        serializer = LeadCreateSerializer(data=request.data)
        if serializer.is_valid():
            lead = serializer.save()
            # Send emails in background-friendly way
            try:
                send_lead_emails(lead)
            except Exception:
                pass  # Don't fail the request if emails fail
            return Response(
                {
                    'success': True,
                    'message': "Thank you! We've received your enquiry and will get back to you within 24 hours.",
                    'id': lead.id,
                },
                status=status.HTTP_201_CREATED
            )
        return Response(
            {'success': False, 'errors': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )


class LeadDetailView(APIView):
    """
    GET   /api/leads/{id}/  — Lead detail (admin only)
    PATCH /api/leads/{id}/  — Update status/notes (admin only)
    """
    permission_classes = [IsAdminUser]

    def get_object(self, pk):
        try:
            return Lead.objects.get(pk=pk)
        except Lead.DoesNotExist:
            return None

    def get(self, request, pk):
        lead = self.get_object(pk)
        if not lead:
            return Response({'error': 'Lead not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = LeadListSerializer(lead)
        return Response(serializer.data)

    def patch(self, request, pk):
        lead = self.get_object(pk)
        if not lead:
            return Response({'error': 'Lead not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = LeadUpdateSerializer(lead, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'data': serializer.data})
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class LeadStatsView(APIView):
    """GET /api/leads/stats/ — Summary stats for dashboard."""
    permission_classes = [IsAdminUser]

    def get(self, request):
        from django.db.models import Count
        total = Lead.objects.count()
        by_status = Lead.objects.values('status').annotate(count=Count('id'))
        by_service = Lead.objects.values('service_interest').annotate(count=Count('id'))
        return Response({
            'total': total,
            'by_status': list(by_status),
            'by_service': list(by_service),
        })
