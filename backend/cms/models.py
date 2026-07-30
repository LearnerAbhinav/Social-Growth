from django.db import models


CATEGORY_CHOICES = [
    ('technology', 'Technology Services'),
    ('digital_growth', 'Digital Growth Services'),
    ('creative', 'Creative & Brand Studio'),
    ('growth_partnership', 'Growth Partnership'),
]

FAQ_CATEGORY_CHOICES = [
    ('general', 'General'),
    ('services', 'Services'),
    ('process', 'Process'),
    ('pricing', 'Pricing & Engagement'),
    ('technology', 'Technology'),
]


class Service(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)
    short_desc = models.TextField()
    icon = models.CharField(max_length=50, help_text="Lucide icon name e.g. Code2, Brain, Palette")
    sub_services = models.JSONField(default=list, help_text='["Sub-service 1", "Sub-service 2"]')
    color = models.CharField(max_length=20, default='maroon', help_text='Accent color class')
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'order', 'name']
        verbose_name = 'Service'
        verbose_name_plural = 'Services'

    def __str__(self):
        return f"[{self.get_category_display()}] {self.name}"


class Testimonial(models.Model):
    client_name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    industry = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    content = models.TextField()
    rating = models.IntegerField(default=5, choices=[(i, i) for i in range(1, 6)])
    avatar_initials = models.CharField(max_length=3)
    avatar_color = models.CharField(max_length=7, default='#8B2A4A', help_text='Hex color')
    service_used = models.CharField(max_length=100, blank=True)
    is_featured = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'

    def __str__(self):
        return f"{self.client_name} — {self.company}"


class FAQ(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()
    category = models.CharField(max_length=30, choices=FAQ_CATEGORY_CHOICES, default='general')
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'order']
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQs'

    def __str__(self):
        return self.question[:80]


class CaseStudy(models.Model):
    title = models.CharField(max_length=300)
    client = models.CharField(max_length=200)
    industry = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
    challenge = models.TextField()
    solution = models.TextField()
    result_1_label = models.CharField(max_length=50)
    result_1_value = models.CharField(max_length=50)
    result_2_label = models.CharField(max_length=50, blank=True)
    result_2_value = models.CharField(max_length=50, blank=True)
    result_3_label = models.CharField(max_length=50, blank=True)
    result_3_value = models.CharField(max_length=50, blank=True)
    is_featured = models.BooleanField(default=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = 'Case Study'
        verbose_name_plural = 'Case Studies'

    def __str__(self):
        return f"{self.title} — {self.client}"


class CompanyStat(models.Model):
    label = models.CharField(max_length=100, help_text="e.g. 'Clients Served'")
    value = models.CharField(max_length=20, help_text="e.g. '500+'")
    icon = models.CharField(max_length=50, help_text="Lucide icon name")
    description = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = 'Company Stat'
        verbose_name_plural = 'Company Stats'

    def __str__(self):
        return f"{self.value} {self.label}"


class Industry(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    icon = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    sub_verticals = models.JSONField(default=list, help_text='["Sub 1", "Sub 2"]')
    color = models.CharField(max_length=7, default='#8B2A4A')
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Industry'
        verbose_name_plural = 'Industries'

    def __str__(self):
        return self.name
