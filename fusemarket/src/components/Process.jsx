import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Understand your business, goals, audience and challenges through an in-depth discovery session.' },
  { num: '02', title: 'Consultation', desc: 'Free strategy consultation to identify the best approach and services for your specific situation.' },
  { num: '03', title: 'Research', desc: 'Deep market research, competitor analysis and audience insights to inform the strategy.' },
  { num: '04', title: 'Strategy', desc: 'A bespoke growth strategy tailored to your business goals, budget and timeline.' },
  { num: '05', title: 'Planning', desc: 'Detailed project plan with timelines, deliverables, milestones and team assignments.' },
  { num: '06', title: 'Design', desc: 'Creative design across branding, UI/UX, creatives and all visual touchpoints.' },
  { num: '07', title: 'Development', desc: 'Engineering and development with clean code, best practices and quality benchmarks.' },
  { num: '08', title: 'Testing', desc: 'Rigorous QA, performance testing and review before anything goes live.' },
  { num: '09', title: 'Launch', desc: 'Coordinated go-live with monitoring, tracking and performance benchmarks in place.' },
  { num: '10', title: 'Marketing', desc: 'Full-funnel marketing execution — SEO, ads, social, email and content — activated.' },
  { num: '11', title: 'Optimisation', desc: 'Data-driven iteration to continuously improve performance and ROI based on real results.' },
  { num: '12', title: 'Scaling', desc: 'Expand what works — scale campaigns, products and markets for sustained, compounding growth.' },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-maroon"></span>
            <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">How We Work</span>
            <span className="w-8 h-px bg-brand-maroon"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Our <span className="text-white/40 font-medium whitespace-nowrap">12-Step Process.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A proven framework that takes you from idea to scalable growth — step by step. No guesswork, just results.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow (2 rows of 6) */}
        <div className="hidden xl:block relative">
          {[STEPS.slice(0, 6), STEPS.slice(6, 12)].map((row, rowIdx) => (
            <div key={rowIdx} className={`grid grid-cols-6 gap-6 mb-12 ${rowIdx === 1 ? 'direction-rtl' : ''}`}>
              {row.map((step, i) => {
                const globalIdx = rowIdx * 6 + i;
                const isLast = i === row.length - 1;
                return (
                  <motion.div
                    key={step.num}
                    className="relative flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: globalIdx * 0.05 }}
                  >
                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="absolute top-7 left-[calc(50%+30px)] right-[-30px] h-px bg-white/10 group-hover:bg-brand-maroon/50 transition-colors duration-500" />
                    )}
                    
                    {/* Step Number Circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center bg-brand-dark border-2 border-white/10 text-white/40 font-black text-lg mb-6 group-hover:border-brand-maroon group-hover:text-white group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all duration-300">
                      {step.num}
                    </div>
                    
                    <h3 className="font-bold text-white text-base mb-2 group-hover:text-brand-maroon transition-colors">{step.title}</h3>
                    <p className="text-white/40 text-[11px] leading-relaxed px-2">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          ))}
          
          {/* Connector down arrow between rows */}
          <div className="absolute right-[calc(8.33%)] top-[120px] w-px h-16 bg-white/10" />
        </div>

        {/* Mobile/Tablet: vertical list with glass cards */}
        <div className="xl:hidden max-w-3xl mx-auto space-y-4 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] top-4 bottom-4 w-px bg-white/10 hidden sm:block" />
          
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="glass-card p-5 flex flex-col sm:flex-row gap-5 items-start relative z-10 hover:border-brand-maroon/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-brand-maroon font-black text-sm shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/50 text-sm font-medium tracking-wide uppercase mb-6">Ready to start your journey?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-premium"
          >
            Book a Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}
