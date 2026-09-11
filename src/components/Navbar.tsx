import React, { useState, useEffect } from 'react';
import { Phone, UtensilsCrossed, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current visible section
      const sections = ['about', 'menu', 'signatures', 'reviews', 'gallery', 'reservation', 'visit'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Signatures', href: '#signatures', id: 'signatures' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Atmosphere', href: '#gallery', id: 'gallery' },
    { name: 'Location', href: '#visit', id: 'visit' },
  ];

  return (
    <>
      {/* Top scroll progress line */}
      <div
        id="scroll-progress-line"
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#a87c30] via-[#d4a656] to-[#f5ead8] z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#2a0a12]/92 backdrop-blur-md py-3 border-b border-[#d4a656]/15 shadow-2xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Location */}
            <a
              id="nav-brand-link"
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full border border-[#d4a656]/40 flex items-center justify-center bg-[#3d1420]/80 group-hover:border-[#d4a656] transition-colors shadow-inner">
                <span className="font-display text-lg text-[#d4a656] italic font-semibold">O</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-medium tracking-wide text-[#f5ead8] group-hover:text-[#d4a656] transition-colors">
                  Hotel Options
                </span>
                <span className="font-mono-code text-[10px] text-[#d4a656] uppercase tracking-[0.2em] flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 inline" /> Wright Town · Jabalpur
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#d4a656] relative py-1 ${
                    activeSection === link.id ? 'text-[#d4a656]' : 'text-[#f5ead8]/80'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d4a656]" />
                  )}
                </a>
              ))}
            </nav>

            {/* Right side CTA & Quick Contacts */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Live status badge */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a0810]/70 border border-[#d4a656]/20 text-[11px] font-mono-code text-[#b8a48a]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open · Until 11:30 PM</span>
              </div>

              {/* Quick phone link */}
              <a
                id="nav-phone-call-btn"
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="p-2.5 rounded-full bg-[#3d1420] text-[#f5ead8] hover:text-[#d4a656] hover:bg-[#521a2a] border border-[#d4a656]/20 transition-all"
                title={`Call ${RESTAURANT_INFO.phone}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Reserve CTA */}
              <button
                id="nav-reserve-btn"
                onClick={onReserveClick}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4a656] to-[#e8c887] text-[#1a0810] font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(212,166,86,0.25)] hover:shadow-[0_6px_25px_rgba(212,166,86,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile menu hamburger toggle */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#f5ead8] hover:text-[#d4a656] lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a0810]/98 border-b border-[#d4a656]/20 px-6 py-6 mt-3 space-y-4 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#d4a656]/15">
              <span className="font-mono-code text-xs text-[#d4a656] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open · 11:00 AM – 11:30 PM
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="text-xs text-[#f5ead8] flex items-center gap-1 text-right font-mono-code"
              >
                <Phone className="w-3 h-3 text-[#d4a656]" />
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-1 ${
                    activeSection === link.id ? 'text-[#d4a656] font-semibold' : 'text-[#f5ead8]/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#d4a656] to-[#e8c887] text-[#1a0810] font-semibold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Reserve a Table
              </button>

              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full border border-[#d4a656]/40 text-[#d4a656] text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                Explore Menu
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
