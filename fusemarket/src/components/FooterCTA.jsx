import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, MessageCircle } from 'lucide-react';

const contacts = [
  {
    icon: MessageCircle,
    title: 'DM to Get Started!',
    sub: "Let's grow your brand, the smart way.",
    value: 'WhatsApp / DM',
    link: 'https://wa.me/918418818469?text=Hi! I want to grow my brand with FuseMarket.',
    id: 'footer-cta-whatsapp',
    color: '#E91467',
  },
  {
    icon: Phone,
    title: '+91 8418818469',
    sub: 'Call us anytime, Mon–Sat 9am–7pm',
    value: 'Call Now',
    link: 'tel:+918418818469',
    id: 'footer-cta-phone',
    color: '#F5A623',
  },
  {
    icon: Globe,
    title: 'www.fusemarket.in',
    sub: 'Visit our website for more info',
    value: 'Open Website',
    link: 'https://fusemarket.in',
    id: 'footer-cta-website',
    color: '#a78bfa',
  },
];

export default function FooterCTA() {
  return (
    <section id="contact" className="bg-navy relative overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink to-transparent" />

      {/* Glow blobs */}
      <div className="absolute left-1/4 -top-20 w-80 h-80 rounded-full bg-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 -bottom-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-pink font-bold text-sm tracking-widest uppercase mb-3">Ready to Grow?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            DM to get started!{' '}
            <span className="text-gradient-pink">Let's grow your brand,</span>
            <br />
            <span className="text-gold">the smart way.</span>
          </h2>
        </motion.div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              id={c.id}
              className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${c.color}20` }}
              >
                <c.icon size={22} style={{ color: c.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-black text-base truncate">{c.title}</p>
                <p className="text-white/50 text-xs mt-0.5 leading-tight">{c.sub}</p>
              </div>
              <div
                className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                style={{ background: `${c.color}20`, color: c.color }}
              >
                {c.value} →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
