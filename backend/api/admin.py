from django.contrib import admin
from django.utils.html import format_html
from .models import Lead


STATUS_COLORS = {
    'new': '#3B82F6',
    'contacted': '#F59E0B',
    'qualified': '#8B5CF6',
    'proposal_sent': '#06B6D4',
    'negotiation': '#F97316',
    'won': '#10B981',
    'lost': '#EF4444',
    'on_hold': '#6B7280',
}


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'phone', 'email', 'company_short', 'service_interest_display',
        'budget_display', 'colored_status', 'source', 'auto_reply_sent',
        'team_notified', 'created_at'
    ]
    list_filter = ['status', 'service_interest', 'source', 'budget', 'created_at']
    search_fields = ['name', 'email', 'phone', 'company', 'message']
    readonly_fields = ['created_at', 'updated_at', 'auto_reply_sent', 'team_notified']
    list_per_page = 30
    date_hierarchy = 'created_at'

    fieldsets = (
        ('📋 Contact Information', {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ('🎯 Enquiry Details', {
            'fields': ('service_interest', 'budget', 'message')
        }),
        ('📊 Lead Management', {
            'fields': ('status', 'source', 'assigned_to', 'notes')
        }),
        ('📧 Email Status', {
            'fields': ('auto_reply_sent', 'team_notified'),
            'classes': ('collapse',)
        }),
        ('🕐 Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    actions = ['mark_contacted', 'mark_qualified', 'mark_won', 'mark_lost']

    def company_short(self, obj):
        return obj.company[:30] if obj.company else '—'
    company_short.short_description = 'Company'

    def service_interest_display(self, obj):
        return obj.get_service_interest_display()
    service_interest_display.short_description = 'Service'

    def budget_display(self, obj):
        return obj.get_budget_display() if obj.budget else '—'
    budget_display.short_description = 'Budget'

    def colored_status(self, obj):
        color = STATUS_COLORS.get(obj.status, '#6B7280')
        return format_html(
            '<span style="background:{};color:white;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600;">{}</span>',
            color,
            obj.get_status_display()
        )
    colored_status.short_description = 'Status'

    @admin.action(description='Mark selected leads as Contacted')
    def mark_contacted(self, request, queryset):
        queryset.update(status='contacted')

    @admin.action(description='Mark selected leads as Qualified')
    def mark_qualified(self, request, queryset):
        queryset.update(status='qualified')

    @admin.action(description='Mark selected leads as Won ✅')
    def mark_won(self, request, queryset):
        queryset.update(status='won')

    @admin.action(description='Mark selected leads as Lost ❌')
    def mark_lost(self, request, queryset):
        queryset.update(status='lost')
