import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const navItems = [
  {
    label: 'Services',
    id: 'services',
    mega: true,
    groups: [
      {
        title: 'Technology Services',
        icon: '⚙️',
        items: ['Custom Software', 'Product Engineering', 'Web Development', 'Mobile App Dev', 'Cloud & DevOps', 'AI & Automation'],
      },
      {
        title: 'Digital Growth',
        icon: '📈',
        items: ['SEO & Content', 'Performance Marketing', 'D2C & E-Commerce', 'B2B Marketing', 'UI/UX Design'],
      },
      {
        title: 'Creative Studio',
        icon: '🎨',
        items: ['Brand Strategy', 'Social Media', 'Creative Design', 'Influencer Marketing', 'ORM'],
      },
      {
        title: '⭐ Growth Partnership',
        icon: '🚀',
        items: ['Full Managed Growth', 'Dedicated Team', '30+ Deliverables', 'Everything Under One Roof'],
        highlight: true,
      },
    ],
  },
  {
    label: 'Industries',
    id: 'industries',
    dropdown: ['Healthcare', 'Real Estate', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Hospitality', 'Technology', 'Government', 'Logistics', 'Agriculture', 'Media'],
  },
  {
    label: 'Technologies',
    id: 'technologies',
    dropdown: ['React & Next.js', 'Django & Node.js', 'Flutter & React Native', 'AWS & Azure', 'OpenAI & Gemini', 'Shopify & WordPress'],
  },
  {
    label: 'Company',
    id: 'about',
    dropdown: ['About Us', 'Our Mission & Vision', 'Core Values', 'Why Fuse Market', 'Our Process'],
  },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 border-b border-gray-100'
            : 'py-4 bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="focus:outline-none">
            <Logo size={scrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="nav-group relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    scrolled ? 'text-gray-700 hover:text-[#8B2A4A] hover:bg-maroon/5' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {(item.mega || item.dropdown) && (
                    <ChevronDown size={13} className="opacity-60" />
                  )}
                </button>

                {/* Mega menu */}
                {item.mega && activeDropdown === item.label && (
                  <div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-4 gap-4">
                      {item.groups.map((group) => (
                        <div key={group.title} className={`rounded-xl p-4 ${group.highlight ? 'bg-gradient-to-br from-[#8B2A4A]/8 to-[#3D4F6B]/8 border border-[#8B2A4A]/20' : 'hover:bg-gray-50'} transition-colors`}>
                          <p className={`text-xs font-black uppercase tracking-wider mb-3 ${group.highlight ? 'text-[#8B2A4A]' : 'text-gray-400'}`}>
                            {group.title}
                          </p>
                          <ul className="space-y-1.5">
                            {group.items.map((it) => (
                              <li key={it}>
                                <button
                                  onClick={() => scrollTo('services')}
                                  className={`text-xs font-medium text-left w-full flex items-center gap-1.5 transition-colors ${group.highlight ? 'text-[#8B2A4A] hover:text-[#6B1E38]' : 'text-gray-600 hover:text-[#8B2A4A]'}`}
                                >
                                  <ChevronRight size={10} className="opacity-40 shrink-0" />
                                  {it}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="nav-dropdown absolute top-full left-0 pt-3 w-56">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                      {item.dropdown.map((d) => (
                        <button
                          key={d}
                          onClick={() => scrollTo(item.id)}
                          className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#8B2A4A] hover:bg-rose-50 rounded-xl transition-colors"
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => scrollTo('contact')}
              id="header-cta-btn"
              className="shine-btn bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 maroon-glow"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Free Consultation →
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            id="mobile-menu-btn"
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl overflow-y-auto"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="pt-24 pb-10 px-6">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left font-bold text-gray-800 hover:text-[#8B2A4A] transition-colors"
                    onClick={() => {
                      if (item.mega || item.dropdown) {
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                      } else {
                        scrollTo(item.id);
                      }
                    }}
                  >
                    <span className="text-base">{item.label}</span>
                    {(item.mega || item.dropdown) && (
                      <ChevronDown size={18} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pb-3"
                      >
                        {item.mega && item.groups.map((g) => (
                          <div key={g.title} className="mb-3">
                            <p className="text-[11px] font-black uppercase tracking-widest text-[#8B2A4A] mb-2 px-2">{g.title}</p>
                            <div className="flex flex-wrap gap-1.5 px-2">
                              {g.items.map(i => (
                                <button key={i} onClick={() => scrollTo('services')} className="text-xs bg-gray-100 hover:bg-[#8B2A4A]/10 text-gray-700 px-2.5 py-1 rounded-full font-medium">{i}</button>
                              ))}
                            </div>
                          </div>
                        ))}
                        {item.dropdown && (
                          <div className="flex flex-wrap gap-2 px-2">
                            {item.dropdown.map(d => (
                              <button key={d} onClick={() => scrollTo(item.id)} className="text-sm text-gray-600 hover:text-[#8B2A4A] py-1 font-medium">{d}</button>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full bg-gradient-to-r from-[#8B2A4A] to-[#c0445e] text-white font-bold py-4 rounded-full text-base text-center maroon-glow"
                >
                  Get Free Consultation →
                </button>
                <a
                  href="https://wa.me/918418818469?text=Hi! I want to learn about Fuse Market services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-4 rounded-full"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.727.977.994-3.634-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
