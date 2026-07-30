from django.db import models


SERVICE_CHOICES = [
    ('technology', 'Technology Services (Software, AI, Cloud)'),
    ('digital_marketing', 'Digital Marketing (SEO, Performance)'),
    ('social_media', 'Social Media Marketing'),
    ('web_development', 'Web Development'),
    ('mobile_app', 'Mobile App Development'),
    ('ui_ux', 'UI/UX Design'),
    ('brand_creative', 'Creative & Brand Studio'),
    ('growth_partnership', 'Growth Partnership / Managed Growth'),
    ('ecommerce', 'E-Commerce & D2C Growth'),
    ('automation_ai', 'AI & Automation'),
    ('orm', 'Online Reputation Management'),
    ('influencer', 'Influencer Marketing'),
    ('consultation', 'Business Consultation'),
    ('other', 'Other / Not Sure'),
]

BUDGET_CHOICES = [
    ('under_25k', 'Under ₹25,000/month'),
    ('25k_50k', '₹25,000 – ₹50,000/month'),
    ('50k_1L', '₹50,000 – ₹1,00,000/month'),
    ('1L_3L', '₹1,00,000 – ₹3,00,000/month'),
    ('above_3L', 'Above ₹3,00,000/month'),
    ('project_based', 'Project-Based (One-Time)'),
    ('discuss', 'Prefer to Discuss'),
]

STATUS_CHOICES = [
    ('new', 'New'),
    ('contacted', 'Contacted'),
    ('qualified', 'Qualified'),
    ('proposal_sent', 'Proposal Sent'),
    ('negotiation', 'In Negotiation'),
    ('won', 'Won'),
    ('lost', 'Lost'),
    ('on_hold', 'On Hold'),
]

SOURCE_CHOICES = [
    ('website_contact', 'Website Contact Form'),
    ('whatsapp', 'WhatsApp'),
    ('instagram', 'Instagram'),
    ('facebook', 'Facebook'),
    ('linkedin', 'LinkedIn'),
    ('referral', 'Referral'),
    ('google_ads', 'Google Ads'),
    ('direct', 'Direct'),
    ('other', 'Other'),
]


class Lead(models.Model):
    # Contact info
    name = models.CharField(max_length=200, verbose_name='Full Name')
    email = models.EmailField(verbose_name='Email Address')
    phone = models.CharField(max_length=20, verbose_name='Phone Number')
    company = models.CharField(max_length=200, blank=True, verbose_name='Company / Brand Name')

    # Inquiry details
    service_interest = models.CharField(
        max_length=50, choices=SERVICE_CHOICES, default='other',
        verbose_name='Service Interested In'
    )
    budget = models.CharField(
        max_length=30, choices=BUDGET_CHOICES, default='discuss',
        blank=True, verbose_name='Budget Range'
    )
    message = models.TextField(verbose_name='Message / Requirements')

    # Tracking
    source = models.CharField(
        max_length=30, choices=SOURCE_CHOICES, default='website_contact',
        verbose_name='Lead Source'
    )
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='new',
        verbose_name='Lead Status'
    )
    assigned_to = models.CharField(max_length=100, blank=True, verbose_name='Assigned To')
    notes = models.TextField(blank=True, verbose_name='Internal Notes')

    # Email flags
    auto_reply_sent = models.BooleanField(default=False, verbose_name='Auto-Reply Sent?')
    team_notified = models.BooleanField(default=False, verbose_name='Team Notified?')

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Lead'
        verbose_name_plural = 'Leads'

    def __str__(self):
        return f"{self.name} — {self.get_service_interest_display()} ({self.get_status_display()})"
