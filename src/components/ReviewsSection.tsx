import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const current = REVIEWS[currentIndex];

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 border-b border-[#d4a656]/15 bg-[#1a0810]/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block mb-2">
              04 / Guest Reflections
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
              Words From <span className="italic text-[#d4a656]">Our Diners</span>
            </h2>
          </div>

          {/* Rating Summary Box */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#2a0a12]/80 border border-[#d4a656]/20">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end text-[#d4a656]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-mono-code text-[#b8a48a] mt-0.5">
                {RESTAURANT_INFO.reviewsCount} Google Reviews
              </div>
            </div>
            <div className="font-display text-4xl font-semibold text-[#f5ead8] border-l border-[#d4a656]/20 pl-4">
              {RESTAURANT_INFO.rating}
            </div>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-[#2a0a12]/90 border border-[#d4a656]/30 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Ambient Watermark Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-[#d4a656]/10 pointer-events-none" />

            {/* Stars & Tag Bar */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a656] text-[#d4a656]" />
                ))}
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono-code tracking-wider bg-[#3d1420] text-[#e8c887] border border-[#d4a656]/20">
                {current.tag}
              </span>
            </div>

            {/* Review Body */}
            <div className="my-auto py-2">
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-light text-[#f5ead8] leading-relaxed">
                "{current.quote}{' '}
                {current.highlightedText && (
                  <span className="italic text-[#d4a656] font-normal underline decoration-[#d4a656]/40 underline-offset-4">
                    {current.highlightedText}
                  </span>
                )}"
              </blockquote>
            </div>

            {/* Review Author & Carousel Controls */}
            <div className="pt-8 border-t border-[#d4a656]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-[#f5ead8] tracking-wide">
                  {current.author}
                </div>
                <div className="text-xs font-mono-code text-[#b8a48a]">
                  {current.role}
                </div>
              </div>

              {/* Navigation Arrows & Counter */}
              <div className="flex items-center gap-4">
                <span className="font-mono-code text-xs text-[#b8a48a] tracking-widest">
                  0{currentIndex + 1} / 0{REVIEWS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    id="reviews-prev-btn"
                    onClick={prevReview}
                    className="p-2.5 rounded-full border border-[#d4a656]/30 text-[#f5ead8] hover:text-[#d4a656] hover:border-[#d4a656] hover:bg-[#3d1420] transition-all"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    id="reviews-next-btn"
                    onClick={nextReview}
                    className="p-2.5 rounded-full border border-[#d4a656]/30 text-[#f5ead8] hover:text-[#d4a656] hover:border-[#d4a656] hover:bg-[#3d1420] transition-all"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* External Google Reviews Action Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono-code text-[#b8a48a]">
            <span>Verified Google Place Ratings</span>
            <span>·</span>
            <a
              id="google-reviews-external-link"
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a656] hover:text-[#f5ead8] flex items-center gap-1.5 underline underline-offset-4 transition-colors"
            >
              <span>Read all 557+ Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
