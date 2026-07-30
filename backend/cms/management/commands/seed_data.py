"""
Management command to seed default Fuse Market content.
Run: python manage.py seed_data
"""
from django.core.management.base import BaseCommand
from cms.models import Service, Testimonial, FAQ, CompanyStat, Industry, CaseStudy


class Command(BaseCommand):
    help = 'Seeds default content for Fuse Market website'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('[*] Seeding Fuse Market content...'))
        self._seed_stats()
        self._seed_services()
        self._seed_testimonials()
        self._seed_faqs()
        self._seed_industries()
        self._seed_case_studies()
        self.stdout.write(self.style.SUCCESS('[DONE] All content seeded successfully!'))

    def _seed_stats(self):
        CompanyStat.objects.all().delete()
        stats = [
            {'label': 'Clients Served', 'value': '500+', 'icon': 'Users', 'description': 'Across India & globally', 'order': 1},
            {'label': 'Industries', 'value': '20+', 'icon': 'Building2', 'description': 'From healthcare to tech', 'order': 2},
            {'label': 'Projects Delivered', 'value': '1200+', 'icon': 'CheckCircle', 'description': 'On time, every time', 'order': 3},
            {'label': 'Team Members', 'value': '100+', 'icon': 'UserCheck', 'description': 'Experts across domains', 'order': 4},
            {'label': 'Countries', 'value': '15+', 'icon': 'Globe', 'description': 'Global reach, local expertise', 'order': 5},
            {'label': 'Years Experience', 'value': '5+', 'icon': 'Award', 'description': 'Building growth stories', 'order': 6},
        ]
        for s in stats:
            CompanyStat.objects.create(**s)
        self.stdout.write('  ✓ Company stats seeded')

    def _seed_services(self):
        Service.objects.all().delete()
        services = [
            # ── Technology Services ──────────────────────────────────
            {
                'name': 'Custom Software Development',
                'slug': 'custom-software-development',
                'category': 'technology',
                'short_desc': 'Bespoke software solutions tailored to your exact business needs — from CRM to ERP to SaaS platforms.',
                'icon': 'Code2',
                'sub_services': ['Custom Software', 'Enterprise Software', 'SaaS Development', 'CRM Development', 'ERP Development', 'AI Software', 'Automation Software'],
                'is_featured': True,
                'order': 1,
            },
            {
                'name': 'Product Engineering',
                'slug': 'product-engineering',
                'category': 'technology',
                'short_desc': 'From MVP to enterprise-grade product — we architect, build and modernize your digital products.',
                'icon': 'Layers',
                'sub_services': ['MVP Development', 'Startup Product', 'Enterprise Product', 'Product Modernization', 'API Development'],
                'order': 2,
            },
            {
                'name': 'Web Development',
                'slug': 'web-development',
                'category': 'technology',
                'short_desc': 'High-performance websites and web apps — corporate, ecommerce, healthcare, real estate & more.',
                'icon': 'Globe',
                'sub_services': ['Corporate Website', 'Business Website', 'Landing Page', 'Healthcare Website', 'Real Estate Website', 'Ecommerce Website', 'Hotel & Restaurant'],
                'order': 3,
            },
            {
                'name': 'Mobile App Development',
                'slug': 'mobile-app-development',
                'category': 'technology',
                'short_desc': 'Native and cross-platform mobile apps for Android, iOS, and enterprise — from booking to healthcare.',
                'icon': 'Smartphone',
                'sub_services': ['Android', 'iOS', 'Flutter', 'React Native', 'PWA', 'Enterprise Apps', 'Healthcare Apps', 'Food Delivery Apps'],
                'order': 4,
            },
            {
                'name': 'Cloud & DevOps',
                'slug': 'cloud-devops',
                'category': 'technology',
                'short_desc': 'End-to-end cloud infrastructure, CI/CD pipelines, containerisation and managed server solutions.',
                'icon': 'Cloud',
                'sub_services': ['AWS', 'Azure', 'Google Cloud', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud Migration', 'Server Management'],
                'order': 5,
            },
            {
                'name': 'AI & Automation',
                'slug': 'ai-automation',
                'category': 'technology',
                'short_desc': 'Intelligent automation, AI agents, LLM integrations and generative AI solutions for modern businesses.',
                'icon': 'Brain',
                'sub_services': ['Chatbots', 'AI Agents', 'LLM Integration', 'Workflow Automation', 'RPA', 'Generative AI', 'AI Analytics'],
                'is_featured': True,
                'order': 6,
            },
            # ── Digital Growth Services ──────────────────────────────
            {
                'name': 'SEO & Content Marketing',
                'slug': 'seo-content-marketing',
                'category': 'digital_growth',
                'short_desc': 'Dominate search rankings with technical SEO, local SEO, content strategy and link-building.',
                'icon': 'Search',
                'sub_services': ['Local SEO', 'International SEO', 'Technical SEO', 'Content Marketing', 'Email Marketing', 'Affiliate Marketing', 'CRO'],
                'is_featured': True,
                'order': 1,
            },
            {
                'name': 'Performance Marketing',
                'slug': 'performance-marketing',
                'category': 'digital_growth',
                'short_desc': 'High-ROI ad campaigns across Meta, Google, YouTube and LinkedIn — with full funnel ownership.',
                'icon': 'TrendingUp',
                'sub_services': ['Meta Ads', 'Google Ads', 'YouTube Ads', 'Shopping Ads', 'Lead Generation', 'Remarketing', 'LinkedIn Ads', 'ABM'],
                'is_featured': True,
                'order': 2,
            },
            {
                'name': 'D2C & E-Commerce Growth',
                'slug': 'd2c-ecommerce-growth',
                'category': 'digital_growth',
                'short_desc': 'Scale your D2C brand on Shopify, Amazon, Flipkart — with email automation, loyalty & retention.',
                'icon': 'ShoppingBag',
                'sub_services': ['Shopify Marketing', 'Amazon Growth', 'Flipkart', 'Website Conversion', 'Email Automation', 'SMS Marketing', 'Loyalty Programs'],
                'order': 3,
            },
            {
                'name': 'B2B Marketing',
                'slug': 'b2b-marketing',
                'category': 'digital_growth',
                'short_desc': 'Account-based marketing, LinkedIn campaigns, lead funnels and CRM-integrated sales pipelines for B2B.',
                'icon': 'Briefcase',
                'sub_services': ['LinkedIn Ads', 'Google Search', 'ABM Strategy', 'Lead Funnels', 'CRM Integration', 'Email Automation', 'Sales Funnels'],
                'order': 4,
            },
            {
                'name': 'UI/UX Design',
                'slug': 'ui-ux-design',
                'category': 'digital_growth',
                'short_desc': 'User-centred design that converts — from research and wireframes to full design systems and dashboards.',
                'icon': 'Figma',
                'sub_services': ['UX Research', 'Wireframing', 'Prototyping', 'Dashboard Design', 'Design Systems', 'Mobile App Design'],
                'order': 5,
            },
            # ── Creative & Brand Studio ──────────────────────────────
            {
                'name': 'Brand Strategy & Identity',
                'slug': 'brand-strategy-identity',
                'category': 'creative',
                'short_desc': 'Build a brand that commands premium positioning — from identity and visual system to messaging and guidelines.',
                'icon': 'Palette',
                'sub_services': ['Brand Positioning', 'Brand Identity', 'Visual Identity', 'Brand Guidelines', 'Messaging & Tone', 'Brand Audit'],
                'is_featured': True,
                'order': 1,
            },
            {
                'name': 'Social Media Marketing',
                'slug': 'social-media-marketing',
                'category': 'creative',
                'short_desc': 'Strategic social media management across Instagram, Facebook, LinkedIn, YouTube, X and Threads.',
                'icon': 'Share2',
                'sub_services': ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Pinterest', 'Threads', 'X (Twitter)', 'Community Management'],
                'order': 2,
            },
            {
                'name': 'Creative Design',
                'slug': 'creative-design',
                'category': 'creative',
                'short_desc': 'Premium design across every touchpoint — logo, packaging, brochures, catalogues, print and outdoor.',
                'icon': 'PenTool',
                'sub_services': ['Logo Design', 'Packaging Design', 'Brochure & Catalogue', 'Social Media Creatives', 'Presentation Design', 'Print & Outdoor'],
                'order': 3,
            },
            {
                'name': 'Influencer Marketing',
                'slug': 'influencer-marketing',
                'category': 'creative',
                'short_desc': 'End-to-end influencer campaigns — from nano creators to celebrities — with UGC and brand collaborations.',
                'icon': 'Star',
                'sub_services': ['Nano Influencers', 'Micro Influencers', 'Macro Influencers', 'Celebrity', 'UGC Content', 'Brand Collaborations', 'Campaign Management'],
                'order': 4,
            },
            {
                'name': 'Online Reputation Management',
                'slug': 'online-reputation-management',
                'category': 'creative',
                'short_desc': 'Protect and strengthen your brand reputation — Google reviews, PR, crisis management and review strategy.',
                'icon': 'Shield',
                'sub_services': ['Google Reviews', 'PR Coverage', 'Brand Reputation', 'Crisis Management', 'Review Management'],
                'order': 5,
            },
            # ── Growth Partnership ───────────────────────────────────
            {
                'name': 'Growth Partnership',
                'slug': 'growth-partnership',
                'category': 'growth_partnership',
                'short_desc': 'Everything under one roof. We become your extended business team — strategy to execution, managed end-to-end.',
                'icon': 'Rocket',
                'sub_services': [
                    'Business Strategy', 'Brand Identity', 'Website', 'CRM Setup', 'Automation',
                    'Sales Funnel', 'SEO', 'Performance Marketing', 'Social Media',
                    'Content Production', 'Influencer Collaboration', 'PR',
                    'Lead Generation', 'Analytics Dashboard', 'Conversion Optimization',
                    'Email Marketing', 'Retention Marketing', 'Technology Support',
                    'Dedicated Account Manager', 'Monthly Strategy Meeting',
                    'Quarterly Planning', 'Investor Presentation', 'Pitch Deck',
                    'Business Consultation', 'Hiring Support', 'Marketing SOP',
                    'Sales SOP', 'Customer Journey Mapping', 'Business Dashboard',
                ],
                'is_featured': True,
                'order': 1,
            },
        ]
        for s in services:
            Service.objects.create(**s)
        self.stdout.write(f'  ✓ {len(services)} services seeded')

    def _seed_testimonials(self):
        Testimonial.objects.all().delete()
        testimonials = [
            {
                'client_name': 'Rajesh Sharma',
                'company': 'MedCare Hospitals',
                'industry': 'Healthcare',
                'designation': 'Marketing Director',
                'content': 'Fuse Market completely transformed our digital presence. Within 6 months, our website traffic grew by 320% and we started getting consistent patient enquiries from Google. Their SEO and content strategy is world-class.',
                'rating': 5,
                'avatar_initials': 'RS',
                'avatar_color': '#8B2A4A',
                'service_used': 'SEO & Content Marketing',
                'order': 1,
            },
            {
                'client_name': 'Priya Nair',
                'company': 'StyleHouse D2C',
                'industry': 'Fashion & Retail',
                'designation': 'Founder & CEO',
                'content': 'The Growth Partnership programme changed everything for us. Fuse Market handled our brand, website, ads, influencers and content all at once. Our Shopify revenue doubled in 4 months. I feel like I finally have a proper team.',
                'rating': 5,
                'avatar_initials': 'PN',
                'avatar_color': '#3D4F6B',
                'service_used': 'Growth Partnership',
                'order': 2,
            },
            {
                'client_name': 'Arjun Mehta',
                'company': 'TechVenture SaaS',
                'industry': 'Technology / SaaS',
                'designation': 'Co-Founder',
                'content': 'We needed an MVP built fast and with quality. Fuse Market delivered in 8 weeks — React + Node.js stack, clean APIs, and even helped us set up our CI/CD pipeline. Post-launch, they also run our B2B marketing. Absolute gold.',
                'rating': 5,
                'avatar_initials': 'AM',
                'avatar_color': '#F5A623',
                'service_used': 'Product Engineering + B2B Marketing',
                'order': 3,
            },
            {
                'client_name': 'Sunita Kapoor',
                'company': 'LuxeRealty Group',
                'industry': 'Real Estate',
                'designation': 'GM — Sales & Marketing',
                'content': 'Our real estate project needed premium branding and aggressive lead generation. Fuse Market built us a stunning website, ran Google and Meta ads, and managed our reputation — all coordinated by one team. Lead quality improved dramatically.',
                'rating': 5,
                'avatar_initials': 'SK',
                'avatar_color': '#8B2A4A',
                'service_used': 'Web Dev + Performance Marketing + ORM',
                'order': 4,
            },
            {
                'client_name': 'Mohammed Iqbal',
                'company': 'EduSpark Coaching',
                'industry': 'Education',
                'designation': 'Director',
                'content': 'Fuse Market helped us go from zero online presence to 15,000 Instagram followers and 200+ monthly admissions from digital channels in just 7 months. Their social media and influencer strategy for education is unmatched.',
                'rating': 5,
                'avatar_initials': 'MI',
                'avatar_color': '#3D4F6B',
                'service_used': 'Social Media + Influencer Marketing',
                'order': 5,
            },
            {
                'client_name': 'Kavitha Rajan',
                'company': 'GreenBite Foods',
                'industry': 'Food & FMCG',
                'designation': 'Brand Head',
                'content': 'The team at Fuse Market understands brand building at a deep level. They redid our entire visual identity, packaging and brand guidelines, then executed a full D2C launch on Shopify and Amazon. Results exceeded our expectations.',
                'rating': 5,
                'avatar_initials': 'KR',
                'avatar_color': '#10B981',
                'service_used': 'Brand Identity + D2C Growth',
                'order': 6,
            },
        ]
        for t in testimonials:
            Testimonial.objects.create(**t)
        self.stdout.write(f'  ✓ {len(testimonials)} testimonials seeded')

    def _seed_faqs(self):
        FAQ.objects.all().delete()
        faqs = [
            # General
            {'question': 'What is Fuse Market and what do you do?', 'answer': 'Fuse Market is a full-service Digital Transformation, Technology & Growth Partner. We help startups, SMEs and enterprises build, market and scale their businesses — from software development and AI solutions to performance marketing, branding and managed growth. We are your extended business team, handling everything under one roof.', 'category': 'general', 'order': 1},
            {'question': 'Where is Fuse Market based and do you work globally?', 'answer': 'Fuse Market is headquartered in India with a distributed team of specialists across technology, marketing and creative domains. We work with clients across India, UAE, UK, USA, Australia and Southeast Asia — delivering results remotely and with on-ground support where needed.', 'category': 'general', 'order': 2},
            {'question': 'How is Fuse Market different from a typical digital agency?', 'answer': 'Most agencies handle one thing — ads, or design, or development. Fuse Market is a full-service growth partner that handles everything from strategy and branding to technology, marketing, automation and analytics. Our flagship Growth Partnership programme makes us the only vendor you need for all business growth needs.', 'category': 'general', 'order': 3},
            # Services
            {'question': 'What services does Fuse Market offer?', 'answer': 'We offer four major service pillars: (1) Technology Services — software development, mobile apps, AI, cloud & DevOps; (2) Digital Growth Services — SEO, performance marketing, D2C growth, B2B marketing; (3) Creative & Brand Studio — brand identity, social media, influencer marketing, ORM; (4) Growth Partnership — our flagship managed growth programme covering 30+ deliverables under one roof.', 'category': 'services', 'order': 1},
            {'question': 'Do you build mobile apps? Which platforms?', 'answer': 'Yes. We build native Android (Kotlin), native iOS (Swift), and cross-platform apps using Flutter and React Native. We also develop Progressive Web Apps (PWA) and enterprise mobile applications for healthcare, education, booking, food delivery and more.', 'category': 'services', 'order': 2},
            {'question': 'What is the Growth Partnership / Managed Growth programme?', 'answer': 'Growth Partnership is our premium flagship service where we become your complete extended business team. It covers 30+ deliverables including: Business Strategy, Brand Identity, Website, CRM, Automation, Sales Funnel, SEO, Performance Marketing, Social Media, Content Production, Influencer Collaboration, PR, Lead Generation, Analytics, Email Marketing, Retention Marketing, Technology Support, Dedicated Account Manager, Monthly Strategy Meetings, Quarterly Planning, and more — everything under one roof with a dedicated team managing all of it for you.', 'category': 'services', 'order': 3},
            {'question': 'Do you offer ongoing retainer support or only project-based work?', 'answer': 'Both. For technology projects (apps, software, websites), we can work on a project basis or offer post-launch maintenance retainers. For marketing, SEO, social media and growth services, we work on monthly retainers. The Growth Partnership programme is a monthly engagement with quarterly reviews.', 'category': 'services', 'order': 4},
            # Process
            {'question': 'What is your typical process when starting a new project?', 'answer': 'We follow a 12-step process: Discovery → Consultation → Research → Strategy → Planning → Design → Development → Testing → Launch → Marketing → Optimisation → Scaling. Every engagement starts with a free consultation where we understand your goals, then we create a tailored strategy before any work begins.', 'category': 'process', 'order': 1},
            {'question': 'How long does it take to see results?', 'answer': 'For technology deliverables (websites, apps), timelines range from 3 weeks to 6 months depending on complexity. For SEO and organic growth, expect meaningful results in 3-6 months. Performance marketing and paid ads can show results within the first 30-60 days. Our Growth Partnership clients typically see significant business impact within the first quarter.', 'category': 'process', 'order': 2},
            {'question': 'Will I have a dedicated point of contact?', 'answer': 'Absolutely. Every client gets a dedicated Account Manager who is your single point of contact for all queries, updates and strategy discussions. For Growth Partnership clients, you also get monthly strategy meetings and quarterly planning sessions with senior leadership.', 'category': 'process', 'order': 3},
            # Pricing
            {'question': 'How does your pricing work?', 'answer': 'Our pricing depends on the scope of work, duration and service mix. Technology projects are typically quoted on a fixed-price or time-and-materials basis. Marketing and growth services are on monthly retainers. Growth Partnership is a custom engagement quoted based on your business size and needs. We offer a free consultation to understand your requirements before any pricing discussion.', 'category': 'pricing', 'order': 1},
            {'question': 'Do you work with startups and small businesses?', 'answer': 'Yes. We work with businesses at all stages — from early-stage startups needing their first MVP or brand identity, to SMEs scaling their marketing, to enterprises requiring complex technology solutions. We design our engagement models to match your stage and budget.', 'category': 'pricing', 'order': 2},
            # Technology
            {'question': 'What technologies and platforms do you use?', 'answer': 'Frontend: React, Next.js, Angular, Vue, TypeScript. Backend: Node.js, Django, Laravel, .NET, Spring Boot, Python. Mobile: Flutter, React Native, Swift, Kotlin. Database: MongoDB, MySQL, PostgreSQL, Firebase. Cloud: AWS, Azure, Google Cloud. AI: OpenAI, Gemini, Claude, LangChain. CMS: WordPress, Shopify, Webflow, Strapi. We choose the best stack for each project, not a one-size-fits-all approach.', 'category': 'technology', 'order': 1},
            {'question': 'Can you integrate AI into my existing business systems?', 'answer': 'Yes. Our AI & Automation team specialises in LLM integration, AI chatbots, AI agents, workflow automation, RPA (Robotic Process Automation) and Generative AI solutions. We can build new AI-powered systems or integrate AI into your existing software, CRM or operational workflows.', 'category': 'technology', 'order': 2},
        ]
        for f in faqs:
            FAQ.objects.create(**f)
        self.stdout.write(f'  ✓ {len(faqs)} FAQs seeded')

    def _seed_industries(self):
        Industry.objects.all().delete()
        industries = [
            {'name': 'Healthcare', 'slug': 'healthcare', 'icon': 'HeartPulse', 'sub_verticals': ['Hospital', 'Clinic', 'Pharma', 'Diagnostics', 'Ayurveda', 'Medical Devices'], 'color': '#EF4444', 'order': 1},
            {'name': 'Real Estate', 'slug': 'real-estate', 'icon': 'Building', 'sub_verticals': ['Builders', 'Developers', 'Commercial', 'Residential', 'Luxury'], 'color': '#F97316', 'order': 2},
            {'name': 'Education', 'slug': 'education', 'icon': 'GraduationCap', 'sub_verticals': ['Schools', 'Universities', 'Coaching', 'EdTech', 'Training Institutes'], 'color': '#3B82F6', 'order': 3},
            {'name': 'Finance', 'slug': 'finance', 'icon': 'DollarSign', 'sub_verticals': ['FinTech', 'NBFC', 'Insurance', 'Banking', 'Investment Firms'], 'color': '#10B981', 'order': 4},
            {'name': 'Retail & Fashion', 'slug': 'retail', 'icon': 'ShoppingBag', 'sub_verticals': ['Fashion', 'Jewellery', 'Furniture', 'Lifestyle', 'Beauty', 'Luxury'], 'color': '#8B5CF6', 'order': 5},
            {'name': 'Manufacturing', 'slug': 'manufacturing', 'icon': 'Factory', 'sub_verticals': ['Automobile', 'Industrial', 'Electronics', 'Chemical', 'Textile', 'Food Manufacturing'], 'color': '#6B7280', 'order': 6},
            {'name': 'Hospitality & Travel', 'slug': 'hospitality', 'icon': 'Hotel', 'sub_verticals': ['Hotels', 'Restaurants', 'Travel', 'Tourism', 'Events'], 'color': '#F59E0B', 'order': 7},
            {'name': 'Construction', 'slug': 'construction', 'icon': 'HardHat', 'sub_verticals': ['Interior Design', 'Architecture', 'Infrastructure', 'Civil Engineering'], 'color': '#D97706', 'order': 8},
            {'name': 'Technology & SaaS', 'slug': 'technology', 'icon': 'Cpu', 'sub_verticals': ['Startups', 'SaaS', 'IT Services', 'Cloud', 'Cybersecurity', 'AI'], 'color': '#06B6D4', 'order': 9},
            {'name': 'Government & NGO', 'slug': 'government', 'icon': 'Landmark', 'sub_verticals': ['Public Sector', 'NGOs', 'Smart Cities', 'Government IT'], 'color': '#1D4ED8', 'order': 10},
            {'name': 'Logistics', 'slug': 'logistics', 'icon': 'Truck', 'sub_verticals': ['Transportation', 'Warehousing', 'Supply Chain', 'Courier', 'Fleet Management'], 'color': '#0891B2', 'order': 11},
            {'name': 'Agriculture', 'slug': 'agriculture', 'icon': 'Sprout', 'sub_verticals': ['AgriTech', 'Dairy', 'Food Processing', 'Cold Storage'], 'color': '#16A34A', 'order': 12},
            {'name': 'Media & Entertainment', 'slug': 'media', 'icon': 'Play', 'sub_verticals': ['Entertainment', 'Sports', 'Gaming', 'Music', 'OTT'], 'color': '#DC2626', 'order': 13},
            {'name': 'Food & FMCG', 'slug': 'food-fmcg', 'icon': 'UtensilsCrossed', 'sub_verticals': ['D2C Food Brands', 'FMCG', 'Beverages', 'Organic', 'Packaged Foods'], 'color': '#EA580C', 'order': 14},
            {'name': 'Pharma & Life Sciences', 'slug': 'pharma', 'icon': 'Pill', 'sub_verticals': ['Generic Pharma', 'Nutraceuticals', 'Biotech', 'Medical Devices', 'Labs'], 'color': '#0EA5E9', 'order': 15},
        ]
        for ind in industries:
            Industry.objects.create(**ind)
        self.stdout.write(f'  ✓ {len(industries)} industries seeded')

    def _seed_case_studies(self):
        CaseStudy.objects.all().delete()
        studies = [
            {
                'title': '320% Traffic Growth for a Multi-City Hospital Chain',
                'client': 'MedCare Hospitals',
                'industry': 'Healthcare',
                'service': 'SEO & Content Marketing',
                'challenge': 'A 5-hospital chain with zero digital presence struggling to attract patients from search engines in competitive metropolitan markets.',
                'solution': 'Implemented comprehensive technical SEO, local SEO for each city, published 80+ healthcare articles, and built 200+ quality backlinks over 6 months.',
                'result_1_label': 'Traffic Increase',
                'result_1_value': '+320%',
                'result_2_label': 'Monthly Patient Enquiries',
                'result_2_value': '500+',
                'result_3_label': 'Keywords on Page 1',
                'result_3_value': '180+',
                'is_featured': True,
                'order': 1,
            },
            {
                'title': 'D2C Fashion Brand Scales from ₹0 to ₹40L/Month',
                'client': 'StyleHouse D2C',
                'industry': 'Fashion & Retail',
                'service': 'Growth Partnership',
                'challenge': 'A new D2C fashion label with no digital presence, no website, no brand identity — starting from scratch with a tight budget.',
                'solution': 'Built full brand identity, Shopify store, ran Meta and Google ads, managed Instagram, partnered with 50+ micro influencers, set up email automation and loyalty programme.',
                'result_1_label': 'Monthly Revenue',
                'result_1_value': '₹40L+',
                'result_2_label': 'ROAS on Meta Ads',
                'result_2_value': '4.8x',
                'result_3_label': 'Instagram Followers',
                'result_3_value': '28,000+',
                'is_featured': True,
                'order': 2,
            },
            {
                'title': 'SaaS MVP Launched in 8 Weeks — B2B Clients in 30 Days',
                'client': 'TechVenture SaaS',
                'industry': 'Technology / SaaS',
                'service': 'Product Engineering + B2B Marketing',
                'challenge': 'A funded startup needed a production-ready MVP built quickly and then needed to start acquiring B2B clients immediately post-launch.',
                'solution': 'Built React + Django + PostgreSQL MVP with full API, CI/CD pipeline and cloud hosting. Then ran LinkedIn ABM campaigns targeting decision-makers in 3 target industries.',
                'result_1_label': 'MVP Delivered In',
                'result_1_value': '8 Weeks',
                'result_2_label': 'B2B Clients (30 days)',
                'result_2_value': '12',
                'result_3_label': 'Lead Cost (LinkedIn)',
                'result_3_value': '₹850/Lead',
                'is_featured': True,
                'order': 3,
            },
        ]
        for cs in studies:
            CaseStudy.objects.create(**cs)
        self.stdout.write(f'  ✓ {len(studies)} case studies seeded')
