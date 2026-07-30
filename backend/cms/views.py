from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Service, Testimonial, FAQ, CaseStudy, CompanyStat, Industry
from .serializers import (
    ServiceSerializer, TestimonialSerializer, FAQSerializer,
    CaseStudySerializer, CompanyStatSerializer, IndustrySerializer
)


class ServicesView(APIView):
    """GET /api/services/ — Returns all active services, grouped by category."""
    permission_classes = [AllowAny]

    def get(self, request):
        services = Service.objects.filter(is_active=True)
        category = request.query_params.get('category')
        if category:
            services = services.filter(category=category)
        serializer = ServiceSerializer(services, many=True)
        # Group by category
        grouped = {}
        for item in serializer.data:
            cat = item['category']
            if cat not in grouped:
                grouped[cat] = {
                    'category': cat,
                    'category_display': item['category_display'],
                    'services': []
                }
            grouped[cat]['services'].append(item)
        return Response({
            'grouped': list(grouped.values()),
            'all': serializer.data
        })


class TestimonialsView(APIView):
    """GET /api/testimonials/ — Returns featured testimonials."""
    permission_classes = [AllowAny]

    def get(self, request):
        testimonials = Testimonial.objects.filter(is_featured=True)
        serializer = TestimonialSerializer(testimonials, many=True)
        return Response(serializer.data)


class FAQsView(APIView):
    """GET /api/faqs/ — Returns all active FAQs, optionally filtered by category."""
    permission_classes = [AllowAny]

    def get(self, request):
        faqs = FAQ.objects.filter(is_active=True)
        category = request.query_params.get('category')
        if category and category != 'all':
            faqs = faqs.filter(category=category)
        serializer = FAQSerializer(faqs, many=True)
        # Group by category
        grouped = {}
        for item in serializer.data:
            cat = item['category']
            if cat not in grouped:
                grouped[cat] = {
                    'category': cat,
                    'category_display': item['category_display'],
                    'faqs': []
                }
            grouped[cat]['faqs'].append(item)
        return Response({
            'grouped': list(grouped.values()),
            'all': serializer.data
        })


class CaseStudiesView(APIView):
    """GET /api/case-studies/ — Returns featured case studies."""
    permission_classes = [AllowAny]

    def get(self, request):
        studies = CaseStudy.objects.filter(is_featured=True)
        serializer = CaseStudySerializer(studies, many=True)
        return Response(serializer.data)


class StatsView(APIView):
    """GET /api/stats/ — Returns company stats for the hero section."""
    permission_classes = [AllowAny]

    def get(self, request):
        stats = CompanyStat.objects.filter(is_active=True)
        serializer = CompanyStatSerializer(stats, many=True)
        return Response(serializer.data)


class IndustriesView(APIView):
    """GET /api/industries/ — Returns all active industries."""
    permission_classes = [AllowAny]

    def get(self, request):
        industries = Industry.objects.filter(is_active=True)
        serializer = IndustrySerializer(industries, many=True)
        return Response(serializer.data)
