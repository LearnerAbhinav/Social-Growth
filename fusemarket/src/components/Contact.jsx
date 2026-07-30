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
  const inView = useInView(ref, { once: true, margin: '-100px' });
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
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Subtle Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-brand-maroon"></span>
            <span className="text-brand-maroon font-bold tracking-widest uppercase text-xs">Get in Touch</span>
            <span className="w-8 h-px bg-brand-maroon"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Start Your <br/>
            <span className="text-white/40 font-medium">Growth Journey.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Tell us about your business and we'll get back to you within 24 hours with a tailored, data-backed plan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — wider */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8 sm:p-10 glow-border">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-3xl font-black text-white mb-4">Enquiry Received!</h3>
                  <p className="text-white/60 mb-8 max-w-sm mx-auto">We've received your enquiry and will get back to you within 24 hours. Check your email for a confirmation.</p>
                  <button onClick={() => setStatus(null)} className="text-brand-maroon text-sm font-bold tracking-widest uppercase hover:text-white transition-colors">Submit another enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Sharma" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all" />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rajesh@yourcompany.com" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all" />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Company / Brand Name</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Service Interested In *</label>
                      <select name="service_interest" value={form.service_interest} onChange={handleChange} required className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all appearance-none">
                        <option value="" disabled className="bg-brand-dark">Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s} className="bg-brand-dark">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all appearance-none">
                        <option value="" disabled className="bg-brand-dark">Select budget</option>
                        {BUDGETS.map(b => <option key={b} value={b} className="bg-brand-dark">{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2 block">Tell Us About Your Requirements *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Describe your business, goals and what you're looking to achieve..." className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-maroon/60 focus:bg-white/[0.05] transition-all resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 font-medium">
                      Something went wrong connecting to the server. Please try WhatsApp or email us directly.
                    </p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-premium w-full !rounded-xl !py-4"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5 text-brand-dark" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending Request...
                      </span>
                    ) : 'Submit Enquiry →'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { icon: '📞', label: 'Phone', value: '+91 8418818469', href: 'tel:+918418818469' },
              { icon: '📧', label: 'Email', value: 'hello@fusemarket.in', href: 'mailto:hello@fusemarket.in' },
              { icon: '📍', label: 'HQ', value: 'New Delhi, India', href: '#' },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.label === 'HQ' ? '_self' : '_blank'} rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-bold text-base">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Premium WhatsApp Card */}
            <a
              href="https://wa.me/918418818469?text=Hi! I want to learn about Fuse Market services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
              style={{ background: 'linear-gradient(135deg, #075e54 0%, #128c7e 100%)' }}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
              
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
              <div className="relative z-10">
                <p className="text-white font-black text-xl mb-1 tracking-tight">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm font-medium">Fastest response • Usually replies in minutes</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
