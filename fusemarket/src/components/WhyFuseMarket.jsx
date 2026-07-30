import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DIFFERENTIATORS = [
  {
    icon: '🏗️',
    title: 'Full-Spectrum Partner',
    desc: 'From strategy and branding to software engineering, AI, marketing and analytics — everything under one roof. One team, one vision.',
    color: '#8B2A4A',
  },
  {
    icon: '🧠',
    title: 'Strategy-First Approach',
    desc: 'Every campaign, product and campaign starts with deep research and a data-backed strategy — no guesswork, no vanity metrics.',
    color: '#3D4F6B',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Execution',
    desc: 'We integrate AI automation, LLMs and intelligent workflows to deliver faster results, smarter targeting and better ROI.',
    color: '#F5A623',
  },
  {
    icon: '👥',
    title: 'Your Extended Team',
    desc: 'A dedicated account manager plus a cross-functional team of specialists who treat your business as their own.',
    color: '#10B981',
  },
  {
    icon: '📊',
    title: 'Transparent ROI',
    desc: 'Real dashboards, real numbers. Monthly reports with full accountability — no fluff, no vanity metrics, only business impact.',
    color: '#06B6D4',
  },
  {
    icon: '🌍',
    title: '20+ Industries Served',
    desc: 'Deep domain expertise across healthcare, real estate, education, finance, FMCG, technology and 15 more verticals.',
    color: '#8B5CF6',
  },
];

export default function WhyFuseMarket() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-light py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Why Businesses <br />
              <span className="text-gradient-maroon">Choose Fuse Market</span>
            </h2>
            <p className="text-gray-500 text-lg mt-5 leading-relaxed">
              We are not just another digital agency. We are a full-service growth partner that becomes part of your team — aligning our success with yours.
            </p>
            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-[#8B2A4A]/5 to-[#3D4F6B]/5 border border-[#8B2A4A]/15">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "We don't simply run campaigns. We help businesses <strong>build, launch, market and scale</strong> sustainably. We become your extended business team."
              </p>
              <p className="text-[#8B2A4A] font-bold text-xs mt-3 uppercase tracking-wider">— Fuse Market Manifesto</p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[['500+','Clients'], ['20+','Industries'], ['1200+','Projects']].map(([v, l]) => (
                <div key={l} className="text-center">
                  <p className="text-2xl font-black text-[#8B2A4A]">{v}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                className="bg-white rounded-2xl p-5 border border-gray-100 card-hover group glow-border"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: `${d.color}15` }}
                >
                  {d.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2 group-hover:text-[#8B2A4A] transition-colors">{d.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
                <div className="mt-3 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, ${d.color}, transparent)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
