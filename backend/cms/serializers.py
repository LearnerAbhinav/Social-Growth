from rest_framework import serializers
from .models import Service, Testimonial, FAQ, CaseStudy, CompanyStat, Industry


class ServiceSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = Service
        fields = [
            'id', 'name', 'slug', 'category', 'category_display',
            'short_desc', 'icon', 'sub_services', 'color',
            'is_featured', 'order'
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = [
            'id', 'client_name', 'company', 'industry', 'designation',
            'content', 'rating', 'avatar_initials', 'avatar_color',
            'service_used', 'order'
        ]


class FAQSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category', 'category_display', 'order']


class CaseStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudy
        fields = [
            'id', 'title', 'client', 'industry', 'service',
            'challenge', 'solution',
            'result_1_label', 'result_1_value',
            'result_2_label', 'result_2_value',
            'result_3_label', 'result_3_value',
            'order'
        ]


class CompanyStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyStat
        fields = ['id', 'label', 'value', 'icon', 'description', 'order']


class IndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Industry
        fields = [
            'id', 'name', 'slug', 'icon',
            'description', 'sub_verticals', 'color', 'order'
        ]
