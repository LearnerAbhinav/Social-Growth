import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Share2, Film, Megaphone, Lightbulb, BarChart2, Users
} from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Full-service management of your Instagram, Facebook & LinkedIn presence.',
    color: 'from-pink/10 to-pink/5',
    iconColor: 'text-pink',
    iconBg: 'bg-pink/10',
    border: 'border-pink/20',
  },
  {
    icon: Film,
    title: 'Reels & Content Creation',
    desc: 'Trend-driven, scroll-stopping reels and posts crafted to maximize reach.',
    color: 'from-purple-50 to-pink/5',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    border: 'border-purple-200',
  },
  {
    icon: Megaphone,
    title: 'Paid Ads',
    desc: 'Data-driven Meta and Google ad campaigns that convert views into customers.',
    color: 'from-gold/10 to-orange-50',
    iconColor: 'text-gold',
    iconBg: 'bg-gold/10',
    border: 'border-gold/20',
  },
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    desc: 'Build a brand voice, visual identity, and content strategy that stands out.',
    color: 'from-navy/5 to-blue-50',
    iconColor: 'text-navy',
    iconBg: 'bg-navy/10',
    border: 'border-navy/20',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Monthly performance reports with actionable insights to keep growing.',
    color: 'from-green-50 to-teal-50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    border: 'border-green-200',
  },
  {
    icon: Users,
    title: 'Community Management',
    desc: 'Active engagement, DM responses, and community building that creates loyal fans.',
    color: 'from-rose-50 to-pink/5',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
    border: 'border-rose-200',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(233,20,103,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink font-bold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy mt-2">
            Services built for <span className="text-gradient-pink">results</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            From content creation to paid ads — every service is designed with one goal: your growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`card-hover rounded-2xl p-6 bg-gradient-to-br ${s.color} border ${s.border} relative overflow-hidden group`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl bg-white/30 group-hover:bg-white/50 transition-colors duration-300" />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-4 relative z-10`}>
                <s.icon size={24} className={s.iconColor} />
              </div>

              <h3 className="text-navy font-black text-lg mb-2 relative z-10">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">{s.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-4 flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" style={{color: s.iconColor.replace('text-', '')}}>
                <span className={s.iconColor}>Learn more →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
