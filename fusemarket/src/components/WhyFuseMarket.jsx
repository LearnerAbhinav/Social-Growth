import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DIFFERENTIATORS = [
  {
    icon: '🏗️',
    title: 'Full-Spectrum Partner',
    desc: 'From strategy and branding to software engineering, AI, marketing and analytics — everything under one roof. One team, one vision.',
    color: '#E11D48',
  },
  {
    icon: '🧠',
    title: 'Strategy-First Approach',
    desc: 'Every campaign, product and campaign starts with deep research and a data-backed strategy — no guesswork, no vanity metrics.',
    color: '#0ea5e9',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Execution',
    desc: 'We integrate AI automation, LLMs and intelligent workflows to deliver faster results, smarter targeting and better ROI.',
    color: '#f59e0b',
  },
  {
    icon: '👥',
    title: 'Your Extended Team',
    desc: 'A dedicated account manager plus a cross-functional team of specialists who treat your business as their own.',
    color: '#10b981',
  },
  {
    icon: '📊',
    title: 'Transparent ROI',
    desc: 'Real dashboards, real numbers. Monthly reports with full accountability — no fluff, no vanity metrics, only business impact.',
    color: '#8b5cf6',
  },
  {
    icon: '🌍',
    title: '20+ Industries Served',
    desc: 'Deep domain expertise across healthcare, real estate, education, finance, FMCG, technology and 15 more verticals.',
    color: '#3b82f6',
  },
];

export default function WhyFuseMarket() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-maroon/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Heading & Sticky Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-maroon"></span>
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Why Businesses <br />
              <span className="text-white/40 font-medium">Choose Fuse Market.</span>
            </h2>
            
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We are not just another digital agency. We are a full-service growth partner that becomes part of your team — aligning our success with yours.
            </p>
            
            <div className="glass-card p-6 mb-10 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-maroon" />
              <p className="text-white/80 text-sm leading-relaxed italic relative z-10">
                "We don't simply run campaigns. We help businesses <strong className="text-white">build, launch, market and scale</strong> sustainably. We become your extended business team."
              </p>
              <p className="text-brand-maroon font-bold text-[10px] mt-4 uppercase tracking-widest relative z-10">— Fuse Market Manifesto</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[['500+','Clients'], ['20+','Industries'], ['1200+','Projects']].map(([v, l]) => (
                <div key={l}>
                  <p className="text-3xl font-black text-white mb-1">{v}</p>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Premium Glass Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                className="glass-card p-8 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Subtle top border color glow */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-30 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ background: `linear-gradient(90deg, ${d.color}, transparent)` }} 
                />
                
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                >
                  {d.icon}
                </div>
                
                <h3 className="font-bold text-white text-xl mb-3 tracking-tight">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
