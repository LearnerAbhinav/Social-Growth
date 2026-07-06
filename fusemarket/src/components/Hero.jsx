import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import DashboardMockup from './DashboardMockup';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      ref={ref}
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-pink/10 text-pink font-semibold text-sm px-4 py-2 rounded-full w-fit border border-pink/20"
            >
              <span className="w-2 h-2 rounded-full bg-pink animate-pulse" />
              India's #1 Social Growth Agency
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1
                variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              >
                <span className="text-navy block">Stop posting</span>
                <span className="text-pink block">just to stay active.</span>
              </motion.h1>
            </div>

            {/* Pain points */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3 flex-wrap">
                {['Low reach?', 'No views?', 'Page stuck?'].map((q) => (
                  <span
                    key={q}
                    className="font-bold text-lg text-gray-600 border-b-2 border-pink/30 pb-0.5"
                  >{q}</span>
                ))}
              </div>
              <p className="text-xl font-bold text-gray-700 mt-2">
                It's not consistency.{' '}
                <span className="text-pink">It's strategy.</span>
              </p>
            </motion.div>

            {/* Sub-description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              FuseMarket builds content that works — trend-driven reels, strategic posts, and 
              full page management designed to turn scrollers into followers and followers into customers.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://wa.me/918418818469?text=Hi! I want to grow my brand with FuseMarket."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="flex items-center justify-center gap-2 bg-pink text-white font-bold px-8 py-4 rounded-full text-base pink-glow transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                DM to Get Started
              </motion.a>

              <motion.button
                id="hero-services-btn"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 border-2 border-navy text-navy font-bold px-8 py-4 rounded-full text-base hover:bg-navy hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                See Our Services
              </motion.button>
            </motion.div>

            {/* Social proof mini-bar */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex -space-x-2">
                {['#E91467', '#141652', '#F5A623', '#8B1A3A'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {['A', 'R', 'S', 'M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 text-gold fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">Trusted by 50+ brands</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <DashboardMockup animate={inView} />

            {/* Strategy badge */}
            <motion.div
              className="badge-tilt absolute -bottom-8 right-8 bg-navy text-white rounded-2xl px-5 py-3 shadow-2xl z-20 cursor-pointer"
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold fill-none stroke-gold" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                <div>
                  <p className="text-[10px] font-semibold text-white/80 leading-none">Strategy Today,</p>
                  <p className="text-sm font-black text-gold leading-tight">Results Tomorrow!</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
