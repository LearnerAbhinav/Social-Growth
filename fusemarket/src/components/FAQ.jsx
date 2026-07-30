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
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [faqs, setFaqs] = useState(STATIC_FAQS);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetchFAQs()
      .then(data => { if (data?.all?.length > 0) setFaqs(data.all); })
      .catch(() => {});
  }, []);

  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="section-soft py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">FAQs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2">
            Frequently Asked <span className="text-gradient-maroon">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Everything you need to know about Fuse Market's services, process and partnership.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'tab-active text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-[#8B2A4A] hover:border-[#8B2A4A]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          <AnimatePresence>
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="font-bold text-gray-900 text-sm sm:text-base pr-4 group-hover:text-[#8B2A4A] transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors" style={{ background: openId === faq.id ? '#8B2A4A' : '#f3f4f6' }}>
                    {openId === faq.id
                      ? <Minus size={14} className="text-white" />
                      : <Plus size={14} className="text-gray-500" />
                    }
                  </span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="h-px bg-gray-100 mb-4" />
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center p-8 rounded-2xl border border-[#8B2A4A]/20"
          style={{ background: 'linear-gradient(135deg, rgba(139,42,74,0.04), rgba(61,79,107,0.04))' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="font-bold text-gray-900 mb-2">Still have questions?</p>
          <p className="text-gray-500 text-sm mb-5">Talk to our team — we're happy to help you find the right solution.</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-7 py-3 rounded-full text-sm maroon-glow"
          >
            Get in Touch →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
