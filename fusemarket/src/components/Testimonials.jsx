import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fetchTestimonials } from '../api/client';

const STATIC_TESTIMONIALS = [
  { id: 1, client_name: 'Rajesh Sharma', company: 'MedCare Hospitals', industry: 'Healthcare', designation: 'Marketing Director', content: 'Fuse Market completely transformed our digital presence. Within 6 months, our website traffic grew by 320% and we started getting consistent patient enquiries from Google. Their SEO and content strategy is world-class.', rating: 5, avatar_initials: 'RS', avatar_color: '#8B2A4A', service_used: 'SEO & Content Marketing' },
  { id: 2, client_name: 'Priya Nair', company: 'StyleHouse D2C', industry: 'Fashion & Retail', designation: 'Founder & CEO', content: 'The Growth Partnership programme changed everything for us. Fuse Market handled our brand, website, ads, influencers and content all at once. Our Shopify revenue doubled in 4 months. I finally have a proper team.', rating: 5, avatar_initials: 'PN', avatar_color: '#3D4F6B', service_used: 'Growth Partnership' },
  { id: 3, client_name: 'Arjun Mehta', company: 'TechVenture SaaS', industry: 'Technology', designation: 'Co-Founder', content: 'We needed an MVP built fast and with quality. Fuse Market delivered in 8 weeks — React + Django stack, clean APIs, and even helped us set up CI/CD. Post-launch, they also run our B2B marketing. Absolute gold.', rating: 5, avatar_initials: 'AM', avatar_color: '#F5A623', service_used: 'Product Engineering + B2B Marketing' },
  { id: 4, client_name: 'Sunita Kapoor', company: 'LuxeRealty Group', industry: 'Real Estate', designation: 'GM — Sales & Marketing', content: 'Our real estate project needed premium branding and aggressive lead generation. Fuse Market built us a stunning website, ran Google and Meta ads, and managed our reputation — all coordinated by one team.', rating: 5, avatar_initials: 'SK', avatar_color: '#8B2A4A', service_used: 'Web Dev + Performance Marketing' },
  { id: 5, client_name: 'Mohammed Iqbal', company: 'EduSpark Coaching', industry: 'Education', designation: 'Director', content: 'Fuse Market helped us go from zero online presence to 15,000 Instagram followers and 200+ monthly admissions from digital channels in just 7 months. Their social media strategy for education is unmatched.', rating: 5, avatar_initials: 'MI', avatar_color: '#3D4F6B', service_used: 'Social Media + Influencer Marketing' },
  { id: 6, client_name: 'Kavitha Rajan', company: 'GreenBite Foods', industry: 'Food & FMCG', designation: 'Brand Head', content: 'The team understands brand building at a deep level. They redid our entire visual identity, packaging and brand guidelines, then executed a full D2C launch on Shopify and Amazon. Results exceeded expectations.', rating: 5, avatar_initials: 'KR', avatar_color: '#10B981', service_used: 'Brand Identity + D2C Growth' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [testimonials, setTestimonials] = useState(STATIC_TESTIMONIALS);
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   fetchTestimonials()
  //     .then(data => { if (data?.length > 0) setTestimonials(data); })
  //     .catch(() => {});
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="section-dark py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(61,79,107,0.4), transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Client Stories</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            What Our <span className="text-gradient-premium whitespace-nowrap">Clients Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            className="glass-dark rounded-3xl p-8 sm:p-12 glow-border mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5" fill="#F5A623">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/80 text-xl leading-relaxed mb-8 italic">
              "{t.content}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{ background: t.avatar_color }}
                >
                  {t.avatar_initials}
                </div>
                <div>
                  <p className="text-white font-bold">{t.client_name}</p>
                  <p className="text-white/50 text-sm">{t.designation}, {t.company}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-medium px-3 py-1 rounded-full text-white/50" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {t.industry}
                </span>
                {t.service_used && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'rgba(139,42,74,0.2)', color: '#c0445e', border: '1px solid rgba(139,42,74,0.3)' }}>
                    {t.service_used}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                background: i === active ? '#8B2A4A' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
