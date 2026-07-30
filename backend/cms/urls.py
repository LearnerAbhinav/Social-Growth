from django.urls import path
from .views import (
    ServicesView, TestimonialsView, FAQsView,
    CaseStudiesView, StatsView, IndustriesView
)

urlpatterns = [
    path('services/', ServicesView.as_view(), name='services'),
    path('testimonials/', TestimonialsView.as_view(), name='testimonials'),
    path('faqs/', FAQsView.as_view(), name='faqs'),
    path('case-studies/', CaseStudiesView.as_view(), name='case-studies'),
    path('stats/', StatsView.as_view(), name='stats'),
    path('industries/', IndustriesView.as_view(), name='industries'),
]
