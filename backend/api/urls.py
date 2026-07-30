from django.urls import path
from .views import LeadListCreateView, LeadDetailView, LeadStatsView

urlpatterns = [
    path('leads/', LeadListCreateView.as_view(), name='lead-list-create'),
    path('leads/stats/', LeadStatsView.as_view(), name='lead-stats'),
    path('leads/<int:pk>/', LeadDetailView.as_view(), name='lead-detail'),
]
