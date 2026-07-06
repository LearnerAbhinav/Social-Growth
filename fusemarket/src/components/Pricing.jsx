import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Target, Video, Calendar, Hash, LayoutDashboard, BarChart3, Shield, CheckCircle2
} from 'lucide-react';

const features = [
  { icon: Target, label: '20 high-impact posts.' },
  { icon: Video, label: '10 trend-driven reels.' },
  { icon: Calendar, label: 'Monthly content plan.' },
  { icon: Hash, label: 'Captions + hashtags that boost reach.' },
  { icon: LayoutDashboard, label: 'Full page management.' },
  { icon: BarChart3, label: 'Monthly performance insights.' },
  { icon: Shield, label: 'Consistent brand identity.' },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink/5 via-white to-navy/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink font-bold text-sm tracking-widest uppercase">Transparent Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy mt-2">
            One plan. Total growth.
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Everything you need to dominate social media — bundled into one powerful monthly package.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="relative max-w-md w-full"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* "Most Popular" ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-pink text-white font-bold text-xs px-6 py-1.5 rounded-full shadow-lg shadow-pink/30 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                MOST POPULAR
              </div>
            </div>

            {/* Main card */}
            <div className="card-hover rounded-3xl border-2 border-pink bg-white shadow-2xl shadow-pink/10 overflow-hidden">
              {/* Card top gradient */}
              <div className="h-2 bg-gradient-to-r from-pink via-pink-dark to-pink" />

              <div className="p-8">
                {/* Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-navy tracking-wide">
                    ✦ Digital Growth Pack
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">For brands serious about growth</p>
                </div>

                {/* Price box */}
                <div className="bg-navy rounded-2xl p-6 text-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy opacity-80" />
                  <div className="relative z-10">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-black text-white tracking-tight">₹9,999</span>
                      <span className="text-white/70 font-semibold text-lg">/month</span>
                    </div>
                    <p className="text-white/50 text-xs mt-1">GST applicable</p>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute top-2 right-3 w-8 h-8 rounded-full bg-white/5" />
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-white/5" />
                </div>

                {/* Tag */}
                <div className="bg-pink rounded-xl py-2.5 text-center mb-8 shadow-sm">
                  <span className="text-white font-bold text-sm tracking-wide">
                    Your Growth. Our Strategy.
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {features.map(({ icon: Icon, label }, i) => (
                    <motion.li
                      key={label}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-pink" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">
                        {label.split(/(\d+|Monthly|Full|Consistent|Captions|Trend-driven)/).map((part, j) =>
                          /^\d+$/.test(part) ? (
                            <strong key={j} className="text-navy font-black">{part}</strong>
                          ) : /^(Monthly|Full|Consistent|Captions|Trend-driven)$/.test(part) ? (
                            <em key={j} className="text-pink not-italic font-bold">{part}</em>
                          ) : part
                        )}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/918418818469?text=Hi! I want to sign up for the Digital Growth Pack."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pricing-cta-btn"
                  className="block w-full bg-pink hover:bg-pink-dark text-white font-black text-base py-4 rounded-2xl text-center transition-all duration-300 pink-glow"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Growing Today →
                </motion.a>

                <p className="text-center text-gray-400 text-xs mt-3">
                  No long-term lock-in • Results in 30 days
                </p>
              </div>
            </div>

            {/* Guarantee badge */}
            <motion.div
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-gold rounded-2xl p-3 shadow-xl float-card hidden lg:flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9, type: 'spring' }}
            >
              <CheckCircle2 size={20} className="text-navy" />
              <span className="text-navy font-black text-[9px] mt-1 text-center leading-tight">Results<br/>Backed</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
