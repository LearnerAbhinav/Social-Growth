import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2 } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const barHeights = [35, 48, 42, 60, 72, 88, 95]; // percentage heights

function CircularProgress({ percent, color = '#F5A623', size = 60 }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <circle cx="30" cy="30" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="5" />
      <circle
        cx="30" cy="30" r={radius} fill="none"
        stroke={color} strokeWidth="5"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
      />
      <text x="30" y="34" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">{percent}%</text>
    </svg>
  );
}

export default function DashboardMockup({ animate = false }) {
  const [bars, setBars] = useState(barHeights.map(() => 0));

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setBars(barHeights);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Laptop Frame */}
      <div className="relative">
        {/* Screen */}
        <div className="bg-gray-900 rounded-t-2xl p-3 shadow-2xl border border-gray-700">
          {/* Browser bar */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-700 rounded-full h-5 flex items-center px-3">
              <span className="text-gray-400 text-[9px] font-mono">fusemarket.in/dashboard</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="bg-white rounded-xl p-4 min-h-[260px]">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider">Growth Overview</p>
                <div className="flex gap-2 mt-1">
                  {['DAILY', 'STRATEGY.', 'CONTENT.', 'GROWTH.'].map((t, i) => (
                    <span key={t} className={`text-[11px] font-black ${i === 0 ? 'text-navy' : 'text-gold'}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp size={10} className="text-green-500" />
                <span className="text-[9px] font-bold text-green-600">+32.6%</span>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Bar chart */}
              <div className="flex-1">
                <div className="flex items-end gap-1.5 h-28">
                  {days.map((day, i) => (
                    <div key={day} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-end justify-center h-24">
                        <div
                          className="w-full rounded-t-sm"
                          style={{
                            height: `${bars[i]}%`,
                            background: i === 6
                              ? 'linear-gradient(180deg, #E91467, #ff6699)'
                              : `linear-gradient(180deg, #F5A623, #ffcc66)`,
                            transition: `height ${0.3 + i * 0.1}s cubic-bezier(0.34,1.56,0.64,1)`,
                            minHeight: '4px',
                          }}
                        />
                      </div>
                      <span className="text-[7px] text-gray-400 font-medium">{day}</span>
                    </div>
                  ))}
                </div>
                {/* Trend line overlay hint */}
                <div className="flex items-center gap-1 mt-1">
                  <BarChart2 size={8} className="text-pink" />
                  <span className="text-[7px] text-gray-500">Weekly performance</span>
                </div>
              </div>

              {/* Stat cards */}
              <div className="flex flex-col gap-2 w-24">
                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <p className="text-[8px] text-gray-400 font-medium">Total Reach</p>
                  <p className="text-[13px] font-black text-navy">98.4K</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={8} className="text-green-500" />
                    <span className="text-[8px] font-semibold text-green-500">32.6%</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <p className="text-[8px] text-gray-400 font-medium">Engagement</p>
                  <p className="text-[13px] font-black text-navy">25.7K</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={8} className="text-green-500" />
                    <span className="text-[8px] font-semibold text-green-500">28.1%</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                  <p className="text-[8px] text-gray-400 font-medium">Content Growth</p>
                  <div className="flex justify-center mt-1">
                    <CircularProgress percent={75} size={44} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base / hinge */}
        <div className="bg-gray-800 h-3 rounded-b-sm mx-4 shadow-lg" />
        <div className="bg-gray-700 h-2 rounded-b-2xl mx-0 shadow-2xl" />
        <div className="bg-gray-600 h-1 rounded-b-3xl mx-6" />
      </div>

      {/* Floating stat cards */}
      <motion.div
        className="absolute -left-6 top-8 glass-card rounded-xl px-3 py-2 shadow-xl float-card z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-[9px] text-gray-500 font-medium">Followers</p>
        <p className="text-sm font-black text-navy">+12.4K</p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[8px] text-green-500 font-semibold">This month</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-16 glass-card rounded-xl px-3 py-2 shadow-xl float-card-delay z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <p className="text-[9px] text-gray-500 font-medium">Impressions</p>
        <p className="text-sm font-black text-pink">2.1M</p>
        <div className="flex items-center gap-1">
          <TrendingUp size={8} className="text-pink" />
          <span className="text-[8px] text-pink font-semibold">+41%</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 left-8 glass-card rounded-xl px-3 py-2 shadow-xl float-card-delay2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-[9px] text-gray-500 font-medium">ROI</p>
        <p className="text-sm font-black text-gold">340%</p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[8px] text-gray-500 font-semibold">avg. return</span>
        </div>
      </motion.div>
    </div>
  );
}
