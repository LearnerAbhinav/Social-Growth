import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Founder, The Brew Co.',
    quote: 'FuseMarket completely transformed our Instagram. We went from 800 followers to 8K+ in just 3 months. The content quality is exceptional — every reel they make goes viral!',
    rating: 5,
    avatar: 'AS',
    color: '#E91467',
  },
  {
    name: 'Rahul Mehta',
    role: 'CEO, FitZone Gym',
    quote: 'I was skeptical about social media marketing until FuseMarket proved its value. Our monthly inquiries tripled and our reach grew by 4300%. Best investment we\'ve made.',
    rating: 5,
    avatar: 'RM',
    color: '#141652',
  },
  {
    name: 'Sneha Patel',
    role: 'Owner, Glow Studio',
    quote: 'The strategy team at FuseMarket really understands the beauty niche. Our engagement rate shot up to 9.2% and our DMs are now flooded with customer inquiries. Highly recommend!',
    rating: 5,
    avatar: 'SP',
    color: '#F5A623',
  },
  {
    name: 'Karan Joshi',
    role: 'Director, TechFlow Solutions',
    quote: 'Professional, creative, and results-driven. FuseMarket delivered beyond our expectations. Our LinkedIn presence grew massively and we\'ve signed 3 new enterprise clients through social.',
    rating: 5,
    avatar: 'KJ',
    color: '#8B1A3A',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(233,20,103,0.04),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink font-bold text-sm tracking-widest uppercase">Client Love</span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy mt-2">
            What our clients say
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
            <span className="ml-2 text-gray-500 font-semibold text-sm">5.0 average across 50+ reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-gradient-to-br from-white to-pink/5 rounded-3xl border border-pink/10 shadow-2xl p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-black text-pink/10 leading-none select-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(testimonials[current].rating).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed font-medium mb-8 relative z-10">
                "{testimonials[current].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg"
                  style={{ background: testimonials[current].color }}
                >
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-black text-navy text-base">{testimonials[current].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                </div>
                <div className="ml-auto">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Verified Client</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-green-500 font-semibold">Growth Confirmed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center hover:border-pink hover:text-pink transition-all duration-200 text-navy"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-3 bg-pink' : 'w-3 h-3 bg-gray-300 hover:bg-pink/50'
                  }`}
                />
              ))}
            </div>

            <button
              id="testimonial-next"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-navy/20 flex items-center justify-center hover:border-pink hover:text-pink transition-all duration-200 text-navy"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
