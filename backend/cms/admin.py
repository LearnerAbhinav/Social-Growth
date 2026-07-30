from django.contrib import admin
from .models import Service, Testimonial, FAQ, CaseStudy, CompanyStat, Industry


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'is_active', 'is_featured', 'order']
    list_filter = ['category', 'is_active', 'is_featured']
    list_editable = ['is_active', 'is_featured', 'order']
    search_fields = ['name', 'short_desc']
    ordering = ['category', 'order']
    fieldsets = (
        ('Service Info', {'fields': ('name', 'slug', 'category', 'icon', 'color')}),
        ('Content', {'fields': ('short_desc', 'sub_services')}),
        ('Settings', {'fields': ('is_active', 'is_featured', 'order')}),
    )
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['client_name', 'company', 'industry', 'rating', 'is_featured', 'order']
    list_filter = ['industry', 'rating', 'is_featured']
    list_editable = ['is_featured', 'order']
    search_fields = ['client_name', 'company', 'content']


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question_short', 'category', 'is_active', 'order']
    list_filter = ['category', 'is_active']
    list_editable = ['is_active', 'order']
    search_fields = ['question', 'answer']

    def question_short(self, obj):
        return obj.question[:80]
    question_short.short_description = 'Question'


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ['title', 'client', 'industry', 'service', 'is_featured', 'order']
    list_filter = ['industry', 'service', 'is_featured']
    list_editable = ['is_featured', 'order']
    search_fields = ['title', 'client', 'challenge', 'solution']


@admin.register(CompanyStat)
class CompanyStatAdmin(admin.ModelAdmin):
    list_display = ['label', 'value', 'icon', 'is_active', 'order']
    list_editable = ['value', 'is_active', 'order']


@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'is_active', 'order']
    list_editable = ['is_active', 'order']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
