import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 340, suffix: '%', label: 'Avg. Reach Growth', sub: 'in first 90 days', color: '#E91467' },
  { value: 280, suffix: '%', label: 'Engagement Boost', sub: 'across all clients', color: '#F5A623' },
  { value: 50, suffix: '+', label: 'Brands Grown', sub: 'and counting', color: '#141652' },
  { value: 2.1, suffix: 'M+', label: 'Total Impressions', sub: 'generated monthly', color: '#a78bfa', decimals: 1 },
];

function AnimatedCounter({ target, suffix, decimals = 0, duration = 2000, color, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span style={{ color }} className="text-4xl sm:text-5xl font-black">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-navy relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Glow blobs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(233,20,103,0.1)' }} />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(245,166,35,0.1)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-pink font-bold text-sm tracking-widest uppercase mb-2">The Numbers Don't Lie</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Real results. Real brands.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl p-6 text-center card-hover"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  color={stat.color}
                  started={inView}
                  duration={2000 + i * 200}
                />
              </div>
              <p className="text-white font-bold text-sm">{stat.label}</p>
              <p className="text-white/50 text-xs mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
