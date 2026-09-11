import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Dine-in · Takeaway · Delivery',
    '4.7★ Rated on Google (557 Reviews)',
    'Legendary Hot Peanut Butter Starter',
    'Women-Owned & LGBTQ+ Friendly Sanctuary',
    'Near Teen Patti Square, Wright Town',
    'Slow-Simmered House Special Curry',
    'Wood-Fired Continental & Creamy Pastas',
    'Open Daily 11:00 AM – 11:30 PM',
    'Warm Chocolate Molten Finale',
  ];

  return (
    <div className="relative w-full border-y border-[#d4a656]/20 bg-[#1a0810]/90 py-4 overflow-hidden select-none">
      {/* Side fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#1a0810] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#1a0810] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center">
        {/* Render sequence twice for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap mx-6">
            <span className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d4a656] font-medium">
              {text}
            </span>
            <span className="ml-8 text-[#d4a656]/50 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
