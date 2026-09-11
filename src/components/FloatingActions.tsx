import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="floating-scroll-top-btn"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#2a0a12]/90 border border-[#d4a656]/30 text-[#d4a656] hover:bg-[#3d1420] shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Connect */}
      <a
        id="floating-whatsapp-btn"
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        title="Chat with Hotel Options on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Quick Phone Call on mobile */}
      <a
        id="floating-phone-btn"
        href={`tel:${RESTAURANT_INFO.phoneClean}`}
        className="sm:hidden w-12 h-12 rounded-full bg-[#d4a656] text-[#1a0810] shadow-[0_4px_20px_rgba(212,166,86,0.4)] flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        title={`Call ${RESTAURANT_INFO.phone}`}
        aria-label="Call Restaurant"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
