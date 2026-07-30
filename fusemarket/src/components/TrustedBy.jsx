import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'MedCare Hospitals', 'StyleHouse', 'TechVenture', 'LuxeRealty',
  'EduSpark', 'GreenBite Foods', 'NovaBuild', 'UrbanEats',
  'FinEdge', 'CloudNex', 'PharmaPlus', 'RetailMax',
  'AgroTech', 'MediaPulse', 'LegalPro', 'FitLife',
];

export default function TrustedBy() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-14 overflow-hidden border-y border-white/5 bg-[#030712] relative z-10">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
          Trusted by India's Fastest-Growing Brands
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />

        {/* Marquee track using Framer Motion */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap pl-6"
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 px-6 py-3 bg-white/[0.02] rounded-xl border border-white/5 shadow-sm flex items-center gap-3 hover:border-brand-maroon/30 transition-all duration-300"
            >
              {/* Colored dot as brand icon */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white/90 text-[10px] font-black shrink-0"
                style={{ background: `hsla(${(i * 53) % 360}, 55%, 45%, 0.8)` }}
              >
                {name[0]}
              </div>
              <span className="text-sm font-bold text-white/70 tracking-wide">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
