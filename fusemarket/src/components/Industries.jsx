import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fetchIndustries } from '../api/client';

const STATIC_INDUSTRIES = [
  { name: 'Healthcare', icon: '🏥', sub_verticals: ['Hospital', 'Clinic', 'Pharma', 'Diagnostics', 'Ayurveda', 'Medical Devices'], color: '#EF4444' },
  { name: 'Real Estate', icon: '🏢', sub_verticals: ['Builders', 'Developers', 'Commercial', 'Residential', 'Luxury'], color: '#F97316' },
  { name: 'Education', icon: '🎓', sub_verticals: ['Schools', 'Universities', 'Coaching', 'EdTech', 'Training'], color: '#3B82F6' },
  { name: 'Finance', icon: '💰', sub_verticals: ['FinTech', 'NBFC', 'Insurance', 'Banking', 'Investment Firms'], color: '#10B981' },
  { name: 'Retail & Fashion', icon: '🛍️', sub_verticals: ['Fashion', 'Jewellery', 'Furniture', 'Lifestyle', 'Luxury'], color: '#8B5CF6' },
  { name: 'Manufacturing', icon: '🏭', sub_verticals: ['Automobile', 'Industrial', 'Electronics', 'Textile', 'Chemical'], color: '#6B7280' },
  { name: 'Hospitality', icon: '🏨', sub_verticals: ['Hotels', 'Restaurants', 'Travel', 'Tourism', 'Events'], color: '#F59E0B' },
  { name: 'Construction', icon: '🏗️', sub_verticals: ['Interior Design', 'Architecture', 'Infrastructure', 'Civil'], color: '#D97706' },
  { name: 'Technology & SaaS', icon: '💻', sub_verticals: ['Startups', 'SaaS', 'IT Services', 'Cloud', 'AI', 'Cybersecurity'], color: '#06B6D4' },
  { name: 'Government & NGO', icon: '🏛️', sub_verticals: ['Public Sector', 'NGOs', 'Smart Cities'], color: '#1D4ED8' },
  { name: 'Logistics', icon: '🚛', sub_verticals: ['Transportation', 'Warehousing', 'Supply Chain', 'Courier', 'Fleet'], color: '#0891B2' },
  { name: 'Agriculture', icon: '🌱', sub_verticals: ['AgriTech', 'Dairy', 'Food Processing', 'Cold Storage'], color: '#16A34A' },
  { name: 'Media & Entertainment', icon: '🎬', sub_verticals: ['Entertainment', 'Sports', 'Gaming', 'Music', 'OTT'], color: '#DC2626' },
  { name: 'Food & FMCG', icon: '🍽️', sub_verticals: ['D2C Food Brands', 'FMCG', 'Beverages', 'Organic', 'Packaged Foods'], color: '#EA580C' },
  { name: 'Pharma & Life Sciences', icon: '💊', sub_verticals: ['Generic Pharma', 'Nutraceuticals', 'Biotech', 'Medical Devices'], color: '#0EA5E9' },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [industries, setIndustries] = useState(STATIC_INDUSTRIES);
  const [hovered, setHovered] = useState(null);

  // useEffect(() => {
  //   fetchIndustries()
  //     .then(data => { if (data?.length > 0) setIndustries(data); })
  //     .catch(() => {});
  // }, []);

  return (
    <section id="industries" className="section-dark py-24" ref={ref}>
      {/* Gradient accent */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,42,74,0.4), transparent)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Industries We Serve</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Expertise Across <span className="text-gradient-premium whitespace-nowrap">Every Sector</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Deep domain knowledge across 15+ industries — from healthcare and real estate to technology and agriculture.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="industry-card rounded-2xl p-4 cursor-pointer relative overflow-hidden"
              style={{
                background: hovered === ind.name ? `${ind.color}15` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered === ind.name ? `${ind.color}40` : 'rgba(255,255,255,0.06)'}`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onMouseEnter={() => setHovered(ind.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon */}
              <div className="text-2xl mb-3">{ind.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2 leading-tight">{ind.name}</h3>

              {/* Sub-verticals (show on hover) */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: hovered === ind.name ? '120px' : '0px', opacity: hovered === ind.name ? 1 : 0 }}
              >
                <div className="flex flex-wrap gap-1 mt-2">
                  {ind.sub_verticals?.slice(0, 4).map(sv => (
                    <span key={sv} className="text-[9px] font-medium px-1.5 py-0.5 rounded text-white/60" style={{ background: `${ind.color}20` }}>
                      {sv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color accent bar */}
              <div className="mt-3 h-0.5 rounded-full transition-all duration-300" style={{ background: ind.color, opacity: hovered === ind.name ? 1 : 0.3 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
