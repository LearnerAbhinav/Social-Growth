import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = ['Home', 'Services', 'Pricing', 'Portfolio', 'Contact'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-white/95 backdrop-blur-xl shadow-lg shadow-navy/5'
          : 'py-4 bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="focus:outline-none">
          <Logo size={scrolled ? 'sm' : 'md'} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              id={`nav-${link.toLowerCase()}`}
              onClick={() => handleNav(link)}
              className="text-navy font-semibold text-sm tracking-wide hover:text-pink transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://wa.me/918418818469?text=Hi! I want to grow my brand with FuseMarket."
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-btn"
            className="bg-pink hover:bg-pink-dark text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 pink-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started →
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          className="md:hidden text-navy focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white/98 backdrop-blur-xl border-t border-pink/10 px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-navy font-semibold text-base text-left hover:text-pink transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="https://wa.me/918418818469?text=Hi! I want to grow my brand with FuseMarket."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink text-white font-bold px-6 py-3 rounded-full text-sm text-center mt-2"
          >
            Get Started →
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
