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
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="section-soft py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">How We Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-2">
            Our <span className="text-gradient-maroon">12-Step Process</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            A proven framework that takes you from idea to scalable growth — step by step.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow (2 rows of 6) */}
        <div className="hidden lg:block">
          {[STEPS.slice(0, 6), STEPS.slice(6, 12)].map((row, rowIdx) => (
            <div key={rowIdx} className={`grid grid-cols-6 gap-0 mb-4 ${rowIdx === 1 ? 'direction-rtl' : ''}`}>
              {row.map((step, i) => {
                const globalIdx = rowIdx * 6 + i;
                const isLast = i === row.length - 1;
                return (
                  <motion.div
                    key={step.num}
                    className="relative flex flex-col items-center text-center px-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: globalIdx * 0.06 }}
                  >
                    {/* Connector line */}
                    {!isLast && (
                      <div className="absolute top-5 left-[calc(50%+20px)] right-0 h-0.5 bg-gradient-to-r from-[#8B2A4A]/40 to-gray-200" />
                    )}
                    {/* Step circle */}
                    <motion.div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white mb-4 shrink-0"
                      style={{ background: 'linear-gradient(135deg, #8B2A4A, #c0445e)' }}
                      whileHover={{ scale: 1.15 }}
                    >
                      {step.num}
                    </motion.div>
                    <h3 className="font-black text-gray-900 text-sm mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 text-[11px] leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          ))}
          {/* Down arrow between rows */}
          <div className="flex justify-end pr-8 my-1">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#8B2A4A] to-gray-200" />
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0" style={{ background: 'linear-gradient(135deg, #8B2A4A, #c0445e)' }}>
                {step.num}
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-sm">{step.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-500 text-sm mb-4">Ready to start your journey?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="shine-btn inline-flex items-center gap-2 bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-8 py-3.5 rounded-full maroon-glow text-sm"
          >
            Book a Free Discovery Call →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
