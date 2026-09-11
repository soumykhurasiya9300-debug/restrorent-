import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="lightbox-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-[99990] bg-[#1a0810]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300 animate-fadeIn"
    >
      <div
        id="lightbox-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full bg-[#2a0a12] border border-[#d4a656]/40 rounded-2xl overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.8)]"
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1a0810]/80 text-[#f5ead8] hover:text-[#d4a656] border border-[#d4a656]/30 transition-all hover:rotate-90 duration-200"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={item.img}
            alt={item.alt}
            className="w-full h-full max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption bar */}
        <div className="p-6 bg-[#1a0810] border-t border-[#d4a656]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-mono-code text-[#d4a656] uppercase tracking-widest block mb-1">
              Hotel Options · Atmosphere &amp; Dining
            </span>
            <h3 className="font-display text-xl text-[#f5ead8] font-light">
              {item.label}
            </h3>
          </div>
          <span className="text-xs font-mono-code text-[#b8a48a]">
            Wright Town, Jabalpur
          </span>
        </div>
      </div>
    </div>
  );
};
