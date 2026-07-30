import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FooterCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div 
        className="relative rounded-[3rem] overflow-hidden p-12 sm:p-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Deep premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-maroon/90 via-[#8a1231] to-brand-dark z-0" />
        
        {/* Glow orb overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-white/80 font-bold tracking-widest uppercase text-xs">The Next Step</span>
            <span className="w-8 h-px bg-white/40"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            Stop guessing. <br />
            Start scaling.
          </h2>
          
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            Whether you need a cutting-edge web platform or a full-funnel marketing strategy, let's build something exceptional together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-white text-brand-dark font-black rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] tracking-wide"
            >
              Book Discovery Call
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors tracking-wide"
            >
              Explore Services
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
