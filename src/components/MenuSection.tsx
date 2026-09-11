import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Utensils, Eye, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onReserveClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish, onReserveClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'continental', label: 'Continental' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === 'all' || item.category === activeCategory;
      const matchVeg = !vegOnly || item.isVeg === true;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchVeg && matchSearch;
    });
  }, [activeCategory, vegOnly, searchQuery]);

  return (
    <section id="menu" className="relative py-24 sm:py-32 border-b border-[#d4a656]/15 bg-[#1a0810]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="font-mono-code text-xs text-[#d4a656] tracking-[0.3em] uppercase block">
            02 / The Menu
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#f5ead8] tracking-tight">
            Crafted with Care, <span className="italic text-[#d4a656]">Served with Pride</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b8a48a] font-normal leading-relaxed">
            From our iconic Hot Peanut Butter to slow-simmered rich curries and velvety pastas, every dish is prepared fresh to order with pure ingredients.
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#d4a656]/15">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-cat-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#d4a656] text-[#1a0810] font-semibold shadow-md'
                    : 'bg-[#3d1420]/60 text-[#b8a48a] hover:text-[#f5ead8] hover:bg-[#521a2a]/60 border border-[#d4a656]/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Veg Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Vegetarian Toggle Button */}
            <button
              id="menu-veg-toggle"
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-mono-code transition-all whitespace-nowrap ${
                vegOnly
                  ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300'
                  : 'border-[#d4a656]/20 bg-[#2a0a12]/70 text-[#b8a48a] hover:text-[#f5ead8]'
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                  vegOnly ? 'border-emerald-400 bg-emerald-400' : 'border-emerald-500'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
              </span>
              <span>Veg Only</span>
            </button>

            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-[#b8a48a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-full bg-[#2a0a12]/90 border border-[#d4a656]/20 text-xs text-[#f5ead8] placeholder-[#b8a48a]/50 focus:outline-none focus:border-[#d4a656] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#2a0a12]/40 rounded-2xl border border-[#d4a656]/15">
            <p className="font-display text-xl text-[#f5ead8] mb-2">No dishes found</p>
            <p className="text-xs text-[#b8a48a] mb-4">Try clearing your search query or vegetarian filter</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-[#3d1420] text-[#d4a656] text-xs font-mono-code hover:bg-[#521a2a]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="group rounded-xl bg-[#2a0a12]/70 border border-[#d4a656]/20 overflow-hidden hover:border-[#d4a656]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Photo & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a0810]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a12] via-transparent to-transparent opacity-70" />

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider bg-[#1a0810]/85 text-[#d4a656] border border-[#d4a656]/30 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Veg indicator dot */}
                  <div className="absolute top-3 right-3">
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center bg-[#1a0810]/80 backdrop-blur-sm ${
                        item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                      }`}
                      title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Hover Quick View Trigger */}
                  <button
                    onClick={() => onSelectDish(item)}
                    className="absolute inset-0 flex items-center justify-center bg-[#1a0810]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="View dish details"
                  >
                    <span className="px-3 py-1.5 rounded-full bg-[#d4a656] text-[#1a0810] text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-display text-lg font-medium text-[#f5ead8] group-hover:text-[#d4a656] transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-display text-base font-semibold text-[#d4a656] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#b8a48a] line-clamp-2 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t border-[#d4a656]/10 flex items-center justify-between">
                    <span className="font-mono-code text-[11px] text-[#b8a48a]/70 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <button
                      onClick={() => onSelectDish(item)}
                      className="text-xs font-mono-code text-[#d4a656] hover:text-[#e8c887] flex items-center gap-1 group/btn"
                    >
                      <span>Explore</span>
                      <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Menu Footer CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-[#3d1420]/60 via-[#2a0a12] to-[#3d1420]/60 border border-[#d4a656]/25 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="font-display text-xl sm:text-2xl text-[#f5ead8] font-light">
              Planning a family gathering or celebration?
            </h3>
            <p className="text-xs text-[#b8a48a]">
              We accommodate custom menus, Jain preparation on request, and private party seating.
            </p>
          </div>
          <button
            onClick={onReserveClick}
            className="px-6 py-3 rounded-full bg-[#d4a656] text-[#1a0810] font-semibold text-xs tracking-wider uppercase hover:bg-[#e8c887] transition-all whitespace-nowrap shadow-md"
          >
            Book Table For Tonight
          </button>
        </div>
      </div>
    </section>
  );
};
