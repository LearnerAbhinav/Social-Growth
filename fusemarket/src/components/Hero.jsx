import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchStats } from '../api/client';

const STATIC_STATS = [
  { value: '500+', label: 'Clients Served' },
  { value: '20+', label: 'Industries' },
  { value: '1200+', label: 'Projects Delivered' },
  { value: '100+', label: 'Team Members' },
];

export default function Hero() {
  const [stats, setStats] = useState(STATIC_STATS);

  useEffect(() => {
    fetchStats()
      .then(data => { if (data?.length > 0) setStats(data); })
      .catch(() => {});
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-mesh-gradient">
      
      {/* Decorative Orbs for extra depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-maroon/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-maroon animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Full-Service Growth Partner</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              <span className="whitespace-nowrap">We <span className="text-gradient-premium">Build.</span></span><br />
              <span className="whitespace-nowrap">We <span className="text-gradient-premium">Market.</span></span><br />
              <span className="whitespace-nowrap">We <span className="text-gradient-premium">Scale.</span></span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed font-medium">
              Fuse Market is your extended business team. From strategy and branding to software engineering and managed growth — everything under one roof.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollTo('contact')}
                className="btn-premium flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                onClick={() => scrollTo('services')}
                className="btn-outline flex items-center justify-center"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Glass Stats */}
          <div className="relative h-[500px] hidden lg:block">
            {stats.map((stat, i) => {
              // Position cards in an asymmetrical, floating arrangement
              const positions = [
                { top: '10%', left: '10%', delay: 0.2 },
                { top: '45%', right: '5%', delay: 0.4 },
                { bottom: '15%', left: '15%', delay: 0.6 },
                { bottom: '5%', right: '20%', delay: 0.8 },
              ];
              const pos = positions[i % 4];
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: pos.delay, ease: "easeOut" }}
                  className="absolute glass-card p-6 w-64 glow-border cursor-default"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bottom: pos.bottom,
                  }}
                  whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <h3 className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</h3>
                  <p className="text-sm text-white/60 font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Stats Grid */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-10">
             {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="glass-card p-5 text-center"
                >
                  <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                  <p className="text-xs text-white/60 font-medium uppercase">{stat.label}</p>
                </motion.div>
              ))}
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
