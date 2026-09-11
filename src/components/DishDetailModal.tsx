import React, { useEffect } from 'react';
import { X, Sparkles, Utensils, Calendar, Check } from 'lucide-react';
import { MenuItem, SignatureDish } from '../types';

interface DishDetailModalProps {
  dish: MenuItem | SignatureDish | null;
  onClose: () => void;
  onReserveForDish: (dishName: string) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onReserveForDish,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const isSig = 'numberStr' in dish;
  const dishTitle = isSig ? `${dish.title} ${dish.emphasis}` : dish.name;
  const isVeg = 'isVeg' in dish ? dish.isVeg : true;

  return (
    <div
      id="dish-detail-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-[99990] bg-[#1a0810]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300"
    >
      <div
        id="dish-detail-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#2a0a12] border border-[#d4a656]/40 rounded-2xl overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.8)] flex flex-col"
      >
        {/* Close Button */}
        <button
          id="dish-detail-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1a0810]/80 text-[#f5ead8] hover:text-[#d4a656] border border-[#d4a656]/30 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Hero Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1a0810]">
          <img
            src={dish.img}
            alt={dishTitle}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a12] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider bg-[#1a0810]/90 text-[#d4a656] border border-[#d4a656]/30 backdrop-blur-md">
              {dish.tag}
            </span>
            <span className="font-display text-2xl font-bold text-[#d4a656]">
              {dish.price}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono-code uppercase text-[#d4a656] tracking-wider">
                  {isSig ? (dish as SignatureDish).subtitle : (dish as MenuItem).category}
                </span>
                <span className="text-[#b8a48a]">·</span>
                <span className={`text-[10px] font-mono-code ${isVeg ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-[#f5ead8] font-light">
                {dishTitle}
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#b8a48a] font-light leading-relaxed">
            {dish.desc}
          </p>

          {isSig && (dish as SignatureDish).details && (
            <div className="p-4 rounded-xl bg-[#1a0810]/70 border border-[#d4a656]/20 text-xs text-[#f5ead8]/90 font-light flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#d4a656] shrink-0 mt-0.5" />
              <span>{(dish as SignatureDish).details}</span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#d4a656]/15 flex flex-col sm:flex-row gap-3">
            <button
              id="dish-modal-reserve-btn"
              onClick={() => {
                onClose();
                onReserveForDish(dishTitle);
              }}
              className="flex-1 py-3.5 rounded-xl bg-[#d4a656] text-[#1a0810] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#e8c887] transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Table for this Dish</span>
            </button>

            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-xl border border-[#d4a656]/30 text-[#f5ead8] text-xs font-mono-code hover:bg-[#3d1420] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
