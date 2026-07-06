import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Heart } from 'lucide-react';

const cases = [
  {
    brand: 'The Brew Co.',
    niche: 'F&B Brand',
    before: { reach: '1.2K', followers: '820', engagement: '2.1%' },
    after: { reach: '42.6K', followers: '8.4K', engagement: '8.7%' },
    growth: 3450,
    color: '#E91467',
    bg: 'from-pink/5 to-rose-50',
    months: 3,
  },
  {
    brand: 'Glow Studio',
    niche: 'Beauty & Skincare',
    before: { reach: '3.5K', followers: '2.1K', engagement: '3.4%' },
    after: { reach: '98.4K', followers: '24.7K', engagement: '9.2%' },
    growth: 2714,
    color: '#F5A623',
    bg: 'from-gold/5 to-orange-50',
    months: 4,
  },
  {
    brand: 'FitZone',
    niche: 'Fitness & Health',
    before: { reach: '800', followers: '430', engagement: '1.8%' },
    after: { reach: '35.2K', followers: '11.2K', engagement: '7.4%' },
    growth: 4300,
    color: '#141652',
    bg: 'from-navy/5 to-blue-50',
    months: 3,
  },
];

function MiniBarChart({ color }) {
  const bars = [20, 35, 28, 55, 70, 85, 95];
  return (
    <div className="flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-700"
          style={{
            height: `${h}%`,
            background: i >= 4
              ? `linear-gradient(180deg, ${color}, ${color}99)`
              : '#e5e7eb',
            transitionDelay: `${i * 100}ms`,
          }}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hero-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink font-bold text-sm tracking-widest uppercase">Client Results</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy mt-2">
            Proof is in the <span className="text-gradient-pink">numbers</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Real brands. Real growth. Here's what FuseMarket did for them.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.brand}
              className={`card-hover bg-gradient-to-br ${c.bg} rounded-3xl border border-white/50 shadow-xl overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              {/* Top accent */}
              <div className="h-1.5" style={{ background: c.color }} />

              <div className="p-6">
                {/* Brand info */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-black text-navy text-lg">{c.brand}</h3>
                    <p className="text-gray-500 text-xs font-medium">{c.niche}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-2xl" style={{ color: c.color }}>
                      +{c.growth}%
                    </div>
                    <div className="text-gray-400 text-xs">reach growth</div>
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-5">
                  <MiniBarChart color={c.color} />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">Week 1</span>
                    <span className="text-xs text-gray-400">Week {c.months * 4}</span>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-wide mb-2">Before</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <TrendingUp size={10} className="text-red-400" />
                        <span className="text-xs text-gray-600">{c.before.reach} reach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={10} className="text-red-400" />
                        <span className="text-xs text-gray-600">{c.before.followers} followers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={10} className="text-red-400" />
                        <span className="text-xs text-gray-600">{c.before.engagement}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <p className="text-[10px] font-bold text-green-500 uppercase tracking-wide mb-2">After</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <TrendingUp size={10} className="text-green-500" />
                        <span className="text-xs text-gray-600 font-semibold">{c.after.reach} reach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={10} className="text-green-500" />
                        <span className="text-xs text-gray-600 font-semibold">{c.after.followers} followers</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={10} className="text-green-500" />
                        <span className="text-xs text-gray-600 font-semibold">{c.after.engagement}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400">Results in </span>
                  <span className="text-xs font-bold" style={{ color: c.color }}>{c.months} months</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
