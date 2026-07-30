import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fetchFAQs } from '../api/client';

const STATIC_FAQS = [
  { id: 1, question: 'What is Fuse Market and what do you do?', answer: 'Fuse Market is a full-service Digital Transformation, Technology & Growth Partner. We help startups, SMEs and enterprises build, market and scale their businesses — from software development and AI solutions to performance marketing, branding and managed growth. We are your extended business team, handling everything under one roof.', category: 'general' },
  { id: 2, question: 'What is the Growth Partnership / Managed Growth programme?', answer: 'Growth Partnership is our premium flagship service where we become your complete extended business team. It covers 30+ deliverables including Business Strategy, Brand Identity, Website, CRM, Automation, Sales Funnel, SEO, Performance Marketing, Social Media, Content Production, Influencer Collaboration, PR, Lead Generation, Analytics, Email Marketing, Retention Marketing, Technology Support, Dedicated Account Manager, Monthly Strategy Meetings, Quarterly Planning, and more — everything under one roof.', category: 'services' },
  { id: 3, question: 'What services does Fuse Market offer?', answer: 'We offer four major service pillars: (1) Technology Services — software development, mobile apps, AI, cloud & DevOps; (2) Digital Growth Services — SEO, performance marketing, D2C growth, B2B marketing; (3) Creative & Brand Studio — brand identity, social media, influencer marketing, ORM; (4) Growth Partnership — our flagship managed growth programme covering 30+ deliverables.', category: 'services' },
  { id: 4, question: 'What is your typical process when starting a new project?', answer: 'We follow a 12-step process: Discovery → Consultation → Research → Strategy → Planning → Design → Development → Testing → Launch → Marketing → Optimisation → Scaling. Every engagement starts with a free consultation where we understand your goals, then we create a tailored strategy before any work begins.', category: 'process' },
  { id: 5, question: 'How long does it take to see results?', answer: 'For technology deliverables (websites, apps), timelines range from 3 weeks to 6 months. For SEO, expect meaningful results in 3-6 months. Performance marketing can show results within 30-60 days. Our Growth Partnership clients typically see significant business impact within the first quarter.', category: 'process' },
  { id: 6, question: 'How does your pricing work?', answer: 'Our pricing depends on scope, duration and service mix. Technology projects are quoted fixed-price or time-and-materials. Marketing and growth services are on monthly retainers. Growth Partnership is a custom engagement based on your business size. We offer a free consultation before any pricing discussion.', category: 'pricing' },
  { id: 7, question: 'Do you work with startups and small businesses?', answer: 'Yes. We work with businesses at all stages — from early-stage startups needing their first MVP or brand identity, to SMEs scaling their marketing, to enterprises requiring complex technology solutions. We design our engagement models to match your stage and budget.', category: 'pricing' },
  { id: 8, question: 'What technologies do you use?', answer: 'Frontend: React, Next.js, Angular, Vue, TypeScript. Backend: Node.js, Django, Laravel, .NET, Python. Mobile: Flutter, React Native, Swift, Kotlin. Cloud: AWS, Azure, Google Cloud. AI: OpenAI, Gemini, Claude, LangChain. CMS: WordPress, Shopify, Webflow. We choose the best stack for each project.', category: 'technology' },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'technology', label: 'Technology' },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [faqs, setFaqs] = useState(STATIC_FAQS);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  // useEffect(() => {
  //   fetchFAQs()
  //     .then(data => { if (data?.all?.length > 0) setFaqs(data.all); })
  //     .catch(() => {});
  // }, []);

  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-maroon/5 rounded-full filter blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-maroon"></span>
            <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">Clarity & Transparency</span>
            <span className="w-8 h-px bg-brand-maroon"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Frequently Asked <span className="text-white/40 font-medium whitespace-nowrap">Questions.</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-brand-dark shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                className={`glass-card overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-white/30 bg-white/[0.05]' : 'border-white/5 bg-white/[0.02]'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-6 text-left group"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className={`font-bold text-lg transition-colors pr-6 ${openId === faq.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openId === faq.id ? 'bg-brand-maroon rotate-180' : 'bg-white/5 group-hover:bg-white/10 border border-white/10'}`}>
                    {openId === faq.id
                      ? <Minus size={16} className="text-white" />
                      : <Plus size={16} className="text-white/70" />
                    }
                  </span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
