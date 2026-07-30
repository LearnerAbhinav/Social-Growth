import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'MedCare Hospitals', 'StyleHouse', 'TechVenture', 'LuxeRealty',
  'EduSpark', 'GreenBite Foods', 'NovaBuild', 'UrbanEats',
  'FinEdge', 'CloudNex', 'PharmaPlus', 'RetailMax',
  'AgroTech', 'MediaPulse', 'LegalPro', 'FitLife',
];

export default function TrustedBy() {
  const doubled = [...clients, ...clients]; // double for seamless loop

  return (
    <section className="section-soft py-14 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
          Trusted by India's Fastest-Growing Brands
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#f4f6ff] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#f4f6ff] to-transparent pointer-events-none" />

        {/* Marquee track */}
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="shrink-0 mx-4 px-6 py-3 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2 hover:border-[#8B2A4A]/30 hover:shadow-maroon transition-all duration-300"
            >
              {/* Colored dot as brand icon */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-black shrink-0"
                style={{ background: `hsl(${(i * 53) % 360}, 55%, 45%)` }}
              >
                {name[0]}
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
