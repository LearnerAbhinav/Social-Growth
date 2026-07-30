import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const INCLUSIONS = [
  { icon: '📊', label: 'Business Strategy' },
  { icon: '🎨', label: 'Brand Identity' },
  { icon: '🌐', label: 'Website Development' },
  { icon: '🤝', label: 'CRM Setup' },
  { icon: '⚙️', label: 'Automation' },
  { icon: '🔁', label: 'Sales Funnel' },
  { icon: '🔍', label: 'SEO' },
  { icon: '📣', label: 'Performance Marketing' },
  { icon: '📱', label: 'Social Media Management' },
  { icon: '🎬', label: 'Content Production' },
  { icon: '⭐', label: 'Influencer Collaboration' },
  { icon: '📰', label: 'PR & Media Coverage' },
  { icon: '🎯', label: 'Lead Generation' },
  { icon: '📈', label: 'Analytics & Reporting' },
  { icon: '💡', label: 'Conversion Optimisation' },
  { icon: '📧', label: 'Email Marketing' },
  { icon: '🔄', label: 'Retention Marketing' },
  { icon: '💻', label: 'Technology Support' },
  { icon: '👤', label: 'Dedicated Account Manager' },
  { icon: '📅', label: 'Monthly Strategy Meeting' },
  { icon: '🗓️', label: 'Quarterly Planning' },
  { icon: '📊', label: 'Investor Presentation' },
  { icon: '🚀', label: 'Pitch Deck' },
  { icon: '🧠', label: 'Business Consultation' },
  { icon: '👥', label: 'Hiring Support' },
  { icon: '📋', label: 'Marketing SOP' },
  { icon: '💼', label: 'Sales SOP' },
  { icon: '🗺️', label: 'Customer Journey Mapping' },
  { icon: '📱', label: 'Business Dashboard' },
  { icon: '🌟', label: 'Everything Under One Roof' },
];

export default function GrowthPartnership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="growth-partnership" className="relative py-24 overflow-hidden" ref={ref} style={{ background: 'linear-gradient(135deg, #080b14 0%, #1a0d14 40%, #080b14 100%)' }}>
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #8B2A4A, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #3D4F6B, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/25 text-[#F5A623] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            ⭐ Our Premium Flagship Service
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Growth Partnership
          </h2>
          <p className="text-white/50 text-lg mt-4 font-medium tracking-wide">Managed Growth Services</p>
          <div className="mt-6 max-w-2xl mx-auto space-y-3">
            <p className="text-white/70 text-xl font-semibold">We become your extended business team.</p>
            <p className="text-white/50 text-base leading-relaxed">
              We don't simply run campaigns. We help businesses <span className="text-white/80 font-semibold">build, launch, market and scale sustainably</span>. Everything under one roof — from strategy to execution, managed end-to-end.
            </p>
          </div>
        </motion.div>

        {/* Inclusions grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {INCLUSIONS.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 p-3.5 rounded-xl cursor-default group"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
              whileHover={{ background: 'rgba(139,42,74,0.15)', borderColor: 'rgba(139,42,74,0.35)', scale: 1.02 }}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              <span className="text-white/70 text-xs font-semibold group-hover:text-white/90 transition-colors leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <p className="text-2xl font-black text-white mb-2">Everything under one roof.</p>
          <p className="text-white/40 text-sm mb-8">One team. One vision. Unlimited growth potential.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              id="gp-cta-btn"
              className="shine-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-10 py-4 rounded-full text-base maroon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Partnership →
            </motion.button>
            <a
              href="https://wa.me/918418818469?text=Hi! I want to learn about the Growth Partnership programme."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-10 py-4 rounded-full text-base hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
