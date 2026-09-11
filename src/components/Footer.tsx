import React from 'react';
import { Phone, MapPin, Clock, Star, Heart, ArrowUp, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a0810] border-t border-[#d4a656]/20 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#d4a656]/15">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4a656]/40 flex items-center justify-center bg-[#3d1420]/80">
                <span className="font-display text-lg text-[#d4a656] italic font-semibold">O</span>
              </div>
              <div>
                <span className="font-display text-xl font-medium text-[#f5ead8]">
                  Hotel Options
                </span>
                <span className="font-mono-code text-[10px] text-[#d4a656] uppercase tracking-[0.2em] block">
                  Fine Dining · Jabalpur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b8a48a] font-light leading-relaxed max-w-sm">
              Crafting unforgettable culinary memories near Teen Patti Square, Wright Town. Celebrated for rich tastes, warm hospitality, and an inclusive spirit.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a0a12] border border-[#d4a656]/20 text-[11px] font-mono-code text-[#e0a5a5]">
                <Heart className="w-3 h-3 fill-current" /> Women-Owned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a0a12] border border-[#d4a656]/20 text-[11px] font-mono-code text-[#d4a656]">
                🏳️‍🌈 LGBTQ+ Friendly
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#d4a656]">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-[#b8a48a]">
              <li>
                <a href="#about" className="hover:text-[#d4a656] transition-colors">Our Story &amp; Values</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4a656] transition-colors">Culinary Menu</a>
              </li>
              <li>
                <a href="#signatures" className="hover:text-[#d4a656] transition-colors">House Signatures</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#d4a656] transition-colors">Guest Reviews (4.7★)</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4a656] transition-colors">Restaurant Atmosphere</a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#d4a656] transition-colors">Table Reservation</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#d4a656] transition-colors">Location &amp; Timings</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#d4a656]">
              Connect &amp; Visit
            </h4>

            <div className="space-y-2.5 text-xs text-[#b8a48a]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4a656] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#d4a656] shrink-0" />
                <span>{RESTAURANT_INFO.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4a656] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="text-[#f5ead8] hover:text-[#d4a656] transition-colors font-mono-code"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-whatsapp-btn"
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-mono-code flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                id="footer-google-maps-btn"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#3d1420] hover:bg-[#521a2a] text-[#d4a656] text-xs font-mono-code border border-[#d4a656]/20 transition-colors"
              >
                <span>Google Maps (4.7★)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#b8a48a]/70">
          <div>
            © {new Date().getFullYear()} Hotel Options Restaurant. All rights reserved. Wright Town, Jabalpur.
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#d4a656] hover:text-[#f5ead8] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
