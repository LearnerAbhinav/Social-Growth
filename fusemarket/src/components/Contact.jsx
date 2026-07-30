import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { submitLead } from '../api/client';

const SERVICES = [
  'Technology Services (Software, AI, Cloud)',
  'Digital Marketing (SEO, Performance)',
  'Social Media Marketing',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Creative & Brand Studio',
  'Growth Partnership / Managed Growth',
  'E-Commerce & D2C Growth',
  'AI & Automation',
  'Online Reputation Management',
  'Influencer Marketing',
  'Business Consultation',
  'Other / Not Sure',
];

const BUDGETS = [
  'Under ₹25,000/month',
  '₹25,000 – ₹50,000/month',
  '₹50,000 – ₹1,00,000/month',
  '₹1,00,000 – ₹3,00,000/month',
  'Above ₹3,00,000/month',
  'Project-Based (One-Time)',
  'Prefer to Discuss',
];

const initialForm = { name: '', email: '', phone: '', company: '', service_interest: '', budget: '', message: '' };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const serviceKey = SERVICES.indexOf(form.service_interest);
      const serviceMap = ['technology','digital_marketing','social_media','web_development','mobile_app','ui_ux','brand_creative','growth_partnership','ecommerce','automation_ai','orm','influencer','consultation','other'];
      const budgetMap = ['under_25k','25k_50k','50k_1L','1L_3L','above_3L','project_based','discuss'];
      const budgetKey = BUDGETS.indexOf(form.budget);
      await submitLead({
        ...form,
        service_interest: serviceMap[serviceKey] || 'other',
        budget: budgetMap[budgetKey] || 'discuss',
        source: 'website_contact',
      });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-dark py-24" ref={ref}>
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,42,74,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8B2A4A]">Get in Touch</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-2">
            Start Your <span className="text-gradient-maroon">Growth Journey</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Tell us about your business and we'll get back to you within 24 hours with a tailored plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — wider */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-dark rounded-3xl p-8 glow-border">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-black text-white mb-3">Enquiry Received!</h3>
                  <p className="text-white/60 mb-6">We've received your enquiry and will get back to you within 24 hours. Check your email for a confirmation.</p>
                  <button onClick={() => setStatus(null)} className="text-[#8B2A4A] text-sm font-bold hover:underline">Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Sharma" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors" />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rajesh@yourcompany.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors" />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Company / Brand Name</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Service Interested In *</label>
                      <select name="service_interest" value={form.service_interest} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors appearance-none" style={{background: 'rgba(255,255,255,0.05)'}}>
                        <option value="" disabled className="bg-gray-900">Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold mb-1.5 block">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors appearance-none" style={{background: 'rgba(255,255,255,0.05)'}}>
                        <option value="" disabled className="bg-gray-900">Select budget</option>
                        {BUDGETS.map(b => <option key={b} value={b} className="bg-gray-900">{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-semibold mb-1.5 block">Tell Us About Your Requirements *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Describe your business, goals and what you're looking to achieve..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#8B2A4A]/60 transition-colors resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                      Something went wrong. Please try WhatsApp or email us directly.
                    </p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full shine-btn bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-black py-4 rounded-xl text-base disabled:opacity-70 transition-all maroon-glow"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending...
                      </span>
                    ) : 'Send My Enquiry →'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { icon: '📞', label: 'Phone', value: '+91 8418818469', href: 'tel:+918418818469' },
              { icon: '📧', label: 'Email', value: 'hello@fusemarket.in', href: 'mailto:hello@fusemarket.in' },
              { icon: '🌐', label: 'Website', value: 'www.fusemarket.in', href: 'https://fusemarket.in' },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.label === 'Website' ? '_blank' : undefined} rel="noopener noreferrer"
                className="glass-dark rounded-2xl p-5 glow-border flex items-center gap-4 hover:scale-[1.02] transition-transform"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-bold text-sm mt-0.5">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA card */}
            <a
              href="https://wa.me/918418818469?text=Hi! I want to learn about Fuse Market services."
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #075e54, #128c7e)' }}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              <div>
                <p className="text-white font-black text-sm">Chat on WhatsApp</p>
                <p className="text-white/70 text-xs mt-0.5">Fastest response • Usually replies in minutes</p>
              </div>
            </a>

            {/* Quick response promise */}
            <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[#F5A623] font-black text-lg mb-1">⚡ 24-Hour Response</p>
              <p className="text-white/50 text-xs">We read every enquiry personally and reply with a tailored plan — not a template.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
