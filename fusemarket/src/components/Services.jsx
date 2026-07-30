import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fetchServices } from '../api/client';

const STATIC_TABS = [
  {
    id: 'technology', label: 'Technology Services', icon: '⚙️',
    services: [
      { name: 'Custom Software Development', desc: 'Bespoke software — CRM, ERP, SaaS platforms built for your exact needs.', sub: ['Custom Software', 'Enterprise Software', 'SaaS Development', 'CRM Development', 'ERP', 'AI Software'] },
      { name: 'Product Engineering', desc: 'From MVP to enterprise product — architecture, development and modernisation.', sub: ['MVP', 'Startup Product', 'Enterprise Product', 'Modernisation', 'API Development'] },
      { name: 'Web Development', desc: 'High-performance websites — corporate, ecommerce, healthcare, real estate.', sub: ['Corporate Website', 'Ecommerce', 'Landing Pages', 'Healthcare', 'Real Estate'] },
      { name: 'Mobile App Development', desc: 'Native and cross-platform apps for Android, iOS and enterprise.', sub: ['Android', 'iOS', 'Flutter', 'React Native', 'PWA', 'Enterprise Apps'] },
      { name: 'Cloud & DevOps', desc: 'End-to-end cloud infrastructure, CI/CD and managed servers.', sub: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Cloud Migration'] },
      { name: 'AI & Automation', desc: 'AI agents, LLMs, chatbots and workflow automation for modern businesses.', sub: ['Chatbots', 'AI Agents', 'LLM Integration', 'Workflow Automation', 'RPA', 'Generative AI'] },
    ]
  },
  {
    id: 'digital_growth', label: 'Digital Growth', icon: '📈',
    services: [
      { name: 'SEO & Content Marketing', desc: 'Dominate search with technical SEO, content strategy and local rankings.', sub: ['Local SEO', 'International SEO', 'Technical SEO', 'Content Marketing', 'Link Building'] },
      { name: 'Performance Marketing', desc: 'High-ROI campaigns across Meta, Google, YouTube and LinkedIn.', sub: ['Meta Ads', 'Google Ads', 'YouTube Ads', 'Shopping Ads', 'Lead Generation', 'Remarketing'] },
      { name: 'D2C & E-Commerce Growth', desc: 'Scale your D2C brand on Shopify, Amazon and Flipkart.', sub: ['Shopify Marketing', 'Amazon Growth', 'Flipkart', 'Email Automation', 'Loyalty Programs'] },
      { name: 'B2B Marketing', desc: 'ABM, LinkedIn campaigns, lead funnels and CRM-integrated pipelines.', sub: ['LinkedIn Ads', 'ABM Strategy', 'Lead Funnels', 'CRM Integration', 'Sales Funnels'] },
      { name: 'UI/UX Design', desc: 'User-centred design from research to full design systems and dashboards.', sub: ['UX Research', 'Wireframing', 'Prototyping', 'Dashboard Design', 'Design Systems'] },
    ]
  },
  {
    id: 'creative', label: 'Creative Studio', icon: '🎨',
    services: [
      { name: 'Brand Strategy & Identity', desc: 'Premium brand positioning, visual identity and brand guidelines.', sub: ['Brand Positioning', 'Brand Identity', 'Visual Identity', 'Brand Guidelines', 'Messaging'] },
      { name: 'Social Media Marketing', desc: 'Strategic social management across Instagram, Facebook, LinkedIn, YouTube, X.', sub: ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Threads', 'X (Twitter)', 'Community Mgmt'] },
      { name: 'Creative Design', desc: 'Logo, packaging, brochures, catalogues, social media and outdoor design.', sub: ['Logo Design', 'Packaging', 'Brochure & Catalogue', 'Social Creatives', 'Print & Outdoor'] },
      { name: 'Influencer Marketing', desc: 'End-to-end influencer campaigns from nano to celebrity.', sub: ['Nano', 'Micro', 'Macro', 'Celebrity', 'UGC', 'Brand Collaborations'] },
      { name: 'Online Reputation Management', desc: 'Google reviews, PR, crisis management and reputation building.', sub: ['Google Reviews', 'PR Coverage', 'Brand Reputation', 'Crisis Management'] },
    ]
  },
  {
    id: 'growth_partnership', label: '⭐ Growth Partnership', icon: '🚀',
    services: [
      { name: 'Managed Growth Services', desc: 'We become your complete extended business team. 30+ deliverables. Everything under one roof.', sub: ['Business Strategy', 'Brand Identity', 'Website', 'CRM', 'Automation', 'Sales Funnel', 'SEO', 'Performance Marketing', 'Social Media', 'Content Production', 'Influencer', 'PR', 'Lead Generation', 'Analytics', 'Conversion Optimisation', 'Email Marketing', 'Retention Marketing', 'Tech Support', 'Dedicated Account Manager', 'Monthly Strategy Meetings'] },
    ]
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('technology');
  const [tabs, setTabs] = useState(STATIC_TABS);

  const activeData = tabs.find(t => t.id === activeTab);
  const isGrowth = activeTab === 'growth_partnership';

  return (
    <section id="services" className="section-soft py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2">
            Everything Your Business <span className="text-gradient-maroon">Needs to Grow</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Divided into four major business units — choose what you need or let us manage everything.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {STATIC_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'tab-active text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#8B2A4A]/30 hover:text-[#8B2A4A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {isGrowth ? (
              // Growth Partnership — premium card
              <div className="bg-gradient-to-br from-[#0A0D1A] to-[#1a0d1a] rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8B2A4A, transparent)' }} />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#F5A623] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    ⭐ Premium Flagship Service
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                    Growth Partnership
                  </h3>
                  <p className="text-white/60 text-lg mb-3 max-w-2xl">
                    We become your complete extended business team — handling strategy, branding, technology, marketing and growth all under one roof.
                  </p>
                  <p className="text-[#F5A623] font-semibold text-sm mb-8">
                    "We don't simply run campaigns. We help businesses build, launch, market and scale sustainably."
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
                    {activeData.services[0].sub.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B2A4A] shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => document.getElementById('growth-partnership')?.scrollIntoView({ behavior: 'smooth' })}
                    className="shine-btn inline-flex items-center gap-2 bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-8 py-4 rounded-full maroon-glow"
                  >
                    See Full Package <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ) : (
              // Regular service grid
              <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
                {activeData?.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group cursor-pointer glow-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B2A4A]/10 to-[#3D4F6B]/10 flex items-center justify-center mb-4">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#8B2A4A] to-[#3D4F6B]" />
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-[#8B2A4A] transition-colors">{service.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.sub.slice(0, 4).map(s => (
                        <span key={s} className="text-[11px] bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                      {service.sub.length > 4 && (
                        <span className="text-[11px] text-[#8B2A4A] font-semibold">+{service.sub.length - 4} more</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
