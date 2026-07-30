from rest_framework import serializers
from .models import Lead


class LeadCreateSerializer(serializers.ModelSerializer):
    """Used for POST requests from the contact form."""
    class Meta:
        model = Lead
        fields = [
            'name', 'email', 'phone', 'company',
            'service_interest', 'budget', 'message', 'source'
        ]

    def validate_phone(self, value):
        cleaned = ''.join(c for c in value if c.isdigit() or c in ['+', '-', ' '])
        if len(cleaned.replace(' ', '').replace('-', '').replace('+', '')) < 7:
            raise serializers.ValidationError("Please enter a valid phone number.")
        return value


class LeadListSerializer(serializers.ModelSerializer):
    """Used for GET requests (admin/internal use)."""
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    service_display = serializers.CharField(source='get_service_interest_display', read_only=True)
    budget_display = serializers.CharField(source='get_budget_display', read_only=True)

    class Meta:
        model = Lead
        fields = '__all__'


class LeadUpdateSerializer(serializers.ModelSerializer):
    """Used for PATCH — update status and notes only."""
    class Meta:
        model = Lead
        fields = ['status', 'notes', 'assigned_to']
