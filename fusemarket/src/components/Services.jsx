import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fetchServices } from '../api/client';

// Keep the same STATIC_SERVICES structure but we'll render it differently
const STATIC_SERVICES = {
  'technology_services': {
    title: 'Technology Services',
    icon: '💻',
    color: '#0ea5e9',
    items: [
      { id: 1, title: 'Custom Software', description: 'Bespoke CRM, ERP, and SaaS platforms built for scale.', features: 'Architecture, Cloud, APIs' },
      { id: 2, title: 'Product Engineering', description: 'End-to-end product development from MVP to enterprise.', features: 'React, Node, Python' },
      { id: 3, title: 'Mobile Apps', description: 'Native and cross-platform mobile experiences.', features: 'iOS, Android, Flutter' },
    ]
  },
  'digital_growth': {
    title: 'Digital Growth',
    icon: '📈',
    color: '#10b981',
    items: [
      { id: 4, title: 'SEO & Content', description: 'Dominate search rankings with data-driven content.', features: 'Technical SEO, Link Building' },
      { id: 5, title: 'Performance Marketing', description: 'High-ROI campaigns across Meta, Google, and LinkedIn.', features: 'PPC, Social Ads' },
      { id: 6, title: 'D2C E-Commerce', description: 'Scale your Shopify or custom store rapidly.', features: 'CRO, Funnels' },
    ]
  },
  'creative_studio': {
    title: 'Creative Studio',
    icon: '🎨',
    color: '#f59e0b',
    items: [
      { id: 7, title: 'Brand Identity', description: 'Logos, guidelines, and visual language that stands out.', features: 'Guidelines, Typography' },
      { id: 8, title: 'UI/UX Design', description: 'User-centric interfaces that drive conversion.', features: 'Figma, Wireframing' },
      { id: 9, title: 'Video Production', description: 'High-end commercials and social-first video content.', features: 'Reels, Ads, Shoots' },
    ]
  },
  'growth_partnership': {
    title: 'Growth Partnership',
    icon: '🤝',
    color: '#e11d48', // Using the brand maroon
    items: [
      { id: 10, title: 'Managed Growth', description: 'Your entire marketing and tech team, fully managed by us.', features: '30+ Deliverables' },
      { id: 11, title: 'Fractional CMO', description: 'Executive-level marketing leadership for your board.', features: 'Strategy, Hiring' },
      { id: 12, title: 'Venture Scaling', description: 'Aggressive growth strategies for funded startups.', features: 'CAC Optimization, LTV' },
    ]
  }
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [services, setServices] = useState(STATIC_SERVICES);
  const [activeTab, setActiveTab] = useState('technology_services');

  // useEffect(() => {
  //   fetchServices()
  //     .then(data => { /* Data shape changed in redesign */ })
  //     .catch(() => {});
  // }, []);

  const activeCategory = services[activeTab];

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-maroon"></span>
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">Our Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Everything Your Business <br/>
              <span className="text-white/40 font-medium">Needs to Grow.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-sm text-sm leading-relaxed"
          >
            We don't believe in fragmented solutions. Our four core business units work in synergy to deliver compounding results.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Vertical Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {Object.entries(services).map(([key, category], index) => {
              const isActive = activeTab === key;
              return (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveTab(key)}
                  className={`relative flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden group ${
                    isActive ? 'bg-white/[0.05] border border-white/10' : 'hover:bg-white/[0.02] border border-transparent'
                  }`}
                >
                  {/* Active Indicator Glow */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl shadow-[0_0_15px_rgba(225,29,72,0.8)]"
                      style={{ backgroundColor: category.color || '#E11D48' }}
                    />
                  )}
                  
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                      isActive ? 'bg-white/10 scale-110' : 'bg-brand-dark border border-white/5 group-hover:border-white/10'
                    }`}
                  >
                    {category.icon}
                  </div>
                  
                  <div>
                    <h3 className={`font-bold transition-colors ${isActive ? 'text-white text-lg' : 'text-white/50 group-hover:text-white/80 text-base'}`}>
                      {category.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Bento Box Content Grid */}
          <div className="lg:col-span-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-4 h-full"
              >
                {activeCategory?.items.map((item, i) => (
                  <div 
                    key={item.id} 
                    className={`glass-card p-8 group relative overflow-hidden flex flex-col justify-between ${
                      i === 0 ? 'sm:col-span-2' : '' // Make first item wide
                    }`}
                  >
                    {/* Hover Gradient Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 100% 100%, ${activeCategory.color || '#E11D48'}, transparent)` }}
                    />
                    
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black bg-white/5 border border-white/10"
                          style={{ color: activeCategory.color || '#E11D48' }}
                        >
                          0{i+1}
                        </div>
                        <svg className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                      {item.features?.split(',').map((feat, idx) => (
                        <span key={idx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40">
                          {feat.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
