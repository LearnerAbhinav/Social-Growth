import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const TECH_TABS = [
  {
    id: 'frontend', label: 'Frontend',
    items: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#ffffff' },
      { name: 'Angular', color: '#DD0031' },
      { name: 'Vue.js', color: '#4FC08D' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
    ]
  },
  {
    id: 'backend', label: 'Backend',
    items: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Django', color: '#092e20' },
      { name: 'Laravel', color: '#FF2D20' },
      { name: '.NET', color: '#512BD4' },
      { name: 'Python', color: '#3776AB' },
    ]
  },
  {
    id: 'mobile', label: 'Mobile',
    items: [
      { name: 'Flutter', color: '#02569B' },
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Swift', color: '#FA7343' },
      { name: 'Kotlin', color: '#7F52FF' },
    ]
  },
  {
    id: 'database', label: 'Database & Cloud',
    items: [
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Redis', color: '#DC382D' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Docker', color: '#2496ED' },
    ]
  },
  {
    id: 'ai', label: 'AI & ML',
    items: [
      { name: 'OpenAI', color: '#10a37f' },
      { name: 'Gemini', color: '#8e75ff' },
      { name: 'Claude', color: '#d97757' },
      { name: 'LangChain', color: '#1C3C3C' },
    ]
  },
  {
    id: 'marketing', label: 'Marketing',
    items: [
      { name: 'GA4', color: '#F9AB00' },
      { name: 'SEMrush', color: '#FF642D' },
      { name: 'HubSpot', color: '#FF7A59' },
      { name: 'Meta Ads', color: '#1877F2' },
    ]
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('frontend');
  const activeData = TECH_TABS.find(t => t.id === activeTab);

  return (
    <section id="technologies" className="py-32 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-brand-maroon"></span>
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">Tech Stack</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Technologies We <span className="text-white/40 font-medium whitespace-nowrap">Master.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-sm text-sm leading-relaxed"
          >
            We choose the right tool for each project — no one-size-fits-all approach. Built for performance, security, and scale.
          </motion.p>
        </div>

        {/* Layout: Left Tabs, Right Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {TECH_TABS.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-300 text-left flex-shrink-0 lg:flex-shrink ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white shadow-lg shadow-black/20'
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 sm:p-12 min-h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="flex flex-wrap justify-center gap-4 sm:gap-6"
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3 }}
                >
                  {activeData?.items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center gap-4 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {/* Abstract logo representation (colored dot for now, replacing with real SVG would be ideal) */}
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-xl"
                        style={{ background: `linear-gradient(135deg, ${tech.color}40, ${tech.color}10)`, border: `1px solid ${tech.color}50` }}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ background: tech.color }} />
                      </div>
                      <span className="font-bold text-white/70 group-hover:text-white transition-colors text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
