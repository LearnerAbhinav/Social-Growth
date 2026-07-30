import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fetchStats } from '../api/client';

const STATIC_STATS = [
  { value: '500+', label: 'Clients Served', icon: '👥' },
  { value: '20+', label: 'Industries', icon: '🏭' },
  { value: '1200+', label: 'Projects Delivered', icon: '✅' },
  { value: '100+', label: 'Team Members', icon: '🤝' },
];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [stats, setStats] = useState(STATIC_STATS);

  useEffect(() => {
    fetchStats()
      .then(data => {
        if (data && data.length > 0) setStats(data.map(s => ({ value: s.value, label: s.label, icon: '📊' })));
      })
      .catch(() => {});
  }, []);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center pt-28 pb-20" ref={ref}>
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(#8B2A4A 1px, transparent 1px), linear-gradient(90deg, #8B2A4A 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 font-semibold text-xs px-4 py-2 rounded-full w-fit backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              Full-Service Growth Partner • Fusse Market Pvt Ltd
            </motion.div>

            {/* Headline */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight">
                <span className="text-white block">We Build.</span>
                <span className="block" style={{ background: 'linear-gradient(135deg, #c0445e, #F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  We Market.
                </span>
                <span className="text-white/90 block">We Scale.</span>
              </h1>
            </motion.div>

            {/* Sub copy */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/60 text-lg leading-relaxed max-w-xl"
            >
              Fuse Market is a full-service Digital Transformation, Technology & Growth Partner helping startups, SMEs and enterprises build, market and scale successful businesses globally — from strategy and branding to software engineering, AI solutions, performance marketing and managed growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                id="hero-cta-primary"
                onClick={scrollToContact}
                className="shine-btn flex items-center justify-center gap-2 bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-8 py-4 rounded-full text-base transition-all maroon-glow"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Growth Journey →
              </motion.button>
              <motion.button
                id="hero-cta-secondary"
                onClick={scrollToServices}
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-base hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {['#8B2A4A','#3D4F6B','#F5A623','#c0445e','#0d1a2a'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-[10px] font-black" style={{ background: c }}>
                    {['R','P','A','S','M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#F5A623"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-white/50 text-xs font-medium">Trusted by 500+ brands across India & globally</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {stats.slice(0, 4).map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`glass-dark rounded-2xl p-6 glow-border ${i % 2 === 1 ? 'mt-6' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <p className="text-4xl font-black text-white mb-1" style={{ background: 'linear-gradient(135deg, #fff, #c0445e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
                <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-[#8B2A4A] to-[#3D4F6B] opacity-60" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          className="lg:hidden grid grid-cols-2 gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {stats.slice(0, 4).map((stat) => (
            <div key={stat.label} className="glass-dark rounded-xl p-4 text-center glow-border">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-white/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2.5 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
