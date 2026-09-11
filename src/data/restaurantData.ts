import { MenuItem, SignatureDish, Review, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Hotel Options Restaurant',
  tagline: 'Where Flavour Meets Atmosphere',
  subtitle: 'Fine Dining in Wright Town, Jabalpur',
  phone: '083057 01904',
  phoneClean: '+918305701904',
  address: 'Bus Stand, 872, near Teen Patti Square, Wright Town, Jabalpur, MP 482002',
  plusCode: '5W8J+54 Jabalpur, Madhya Pradesh',
  hours: 'Open Daily · 11:00 AM – 11:30 PM',
  popularTime: 'Popular time — Fridays & Weekends after 6:00 PM',
  priceRange: '₹200 – ₹1,400 per person',
  rating: '4.7',
  reviewsCount: '557',
  googleMapsUrl: 'https://maps.google.com/?q=Hotel+Options+Restaurant+Wright+Town+Jabalpur',
  whatsappUrl: 'https://wa.me/918305701904?text=Hello%20Hotel%20Options%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table',
  values: [
    { label: 'Women-Owned', icon: '🌸', desc: 'Crafted with passion, warmth and personal hospitality' },
    { label: 'LGBTQ+ Friendly', icon: '🏳️‍🌈', desc: 'An inclusive, safe sanctuary where everyone has a seat' },
    { label: '4.7★ · 557 Reviews', icon: '⭐', desc: 'Top-rated verified dining experience in Jabalpur' },
    { label: 'Dine-in · Takeaway · Delivery', icon: '🍽️', desc: 'Flexible service options tailored for your comfort' },
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Hot Peanut Butter',
    desc: 'Crispy outside, warm and comforting inside — our legendary talk-of-the-town signature',
    price: '₹220',
    tag: 'Must Try',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop',
    category: 'starters',
    isVeg: true,
  },
  {
    id: 'starter-2',
    name: 'Paneer Tikka',
    desc: 'Smoky tandoor-grilled cottage cheese marinated in hung curd with fresh mint chutney',
    price: '₹280',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?q=80&w=600&auto=format&fit=crop',
    category: 'starters',
    isVeg: true,
  },
  {
    id: 'starter-3',
    name: 'Chicken Malai Kebab',
    desc: 'Melt-in-the-mouth tender chicken kebabs infused with rich cream, cheese, and saffron',
    price: '₹340',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop',
    category: 'starters',
    isVeg: false,
  },
  {
    id: 'starter-4',
    name: 'Crispy Corn Salt & Pepper',
    desc: 'Golden crisp American sweet corn kernels tossed with crushed peppercorns and spring herbs',
    price: '₹240',
    tag: 'Veggie',
    img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop',
    category: 'starters',
    isVeg: true,
  },
  {
    id: 'starter-5',
    name: 'Dahi Ke Kebab',
    desc: 'Velvety spiced yogurt patties coated in crispy panko with a delicate coriander heart',
    price: '₹260',
    tag: 'Chef Special',
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600&auto=format&fit=crop',
    category: 'starters',
    isVeg: true,
  },

  // Main Course
  {
    id: 'main-1',
    name: 'House Special Curry',
    desc: 'Slow-simmered rich gravy infused with secret royal spices, roasted nuts, and fresh cream',
    price: '₹380',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop',
    category: 'mains',
    isVeg: true,
  },
  {
    id: 'main-2',
    name: 'Classic Butter Chicken',
    desc: 'Smoked tandoori chicken cooked in velvety tomato silk gravy finished with generous churned butter',
    price: '₹420',
    tag: 'Popular',
    img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
    category: 'mains',
    isVeg: false,
  },
  {
    id: 'main-3',
    name: 'Dal Makhani Slow-Simmered',
    desc: 'Black Urad lentils slow-cooked overnight on gentle embers with organic butter and dairy cream',
    price: '₹300',
    tag: 'Vegetarian',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop',
    category: 'mains',
    isVeg: true,
  },
  {
    id: 'main-4',
    name: 'Dum Biryani Royale',
    desc: 'Fragrant long-grain aged basmati rice layered with caramelized onions, saffron, and choice cuts',
    price: '₹460',
    tag: "Chef's Pick",
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop',
    category: 'mains',
    isVeg: false,
  },
  {
    id: 'main-5',
    name: 'Paneer Lababdar',
    desc: 'Succulent paneer cubes tossed in a fragrant chunky onion-tomato gravy with grated cottage cheese',
    price: '₹360',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',
    category: 'mains',
    isVeg: true,
  },

  // Continental
  {
    id: 'cont-1',
    name: 'Creamy Alfredo Fettuccine',
    desc: 'Handmade pasta tossed in aged Parmesan, garlic infused butter, and rich cream sauce',
    price: '₹350',
    tag: 'Guest Favourite',
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600&auto=format&fit=crop',
    category: 'continental',
    isVeg: true,
  },
  {
    id: 'cont-2',
    name: 'Grilled Herb Chicken Steak',
    desc: 'Tender chicken breast pan-seared in rosemary thyme butter, served with sautéed vegetables & mash',
    price: '₹420',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    category: 'continental',
    isVeg: false,
  },
  {
    id: 'cont-3',
    name: 'Wood-Fired Margherita Pizza',
    desc: 'Hand-stretched sourdough base with San Marzano pomodoro, fresh bocconcini & fragrant basil leaves',
    price: '₹380',
    tag: 'Wood Fired',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
    category: 'continental',
    isVeg: true,
  },
  {
    id: 'cont-4',
    name: 'Exotic Mushroom Risotto',
    desc: 'Creamy Arborio rice simmered with wild shiitake & button mushrooms, truffle oil drizzle',
    price: '₹390',
    tag: 'Gourmet',
    img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop',
    category: 'continental',
    isVeg: true,
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Warm Chocolate Finale',
    desc: 'Molten Belgian chocolate lava cake served alongside Madagascan vanilla bean gelato',
    price: '₹260',
    tag: 'Guest Favourite',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
    category: 'desserts',
    isVeg: true,
  },
  {
    id: 'dessert-2',
    name: 'Gulab Jamun Cheesecake',
    desc: 'Artisanal fusion of warm khoya gulab jamun set inside a creamy New York baked cheesecake',
    price: '₹240',
    tag: 'Fusion',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop',
    category: 'desserts',
    isVeg: true,
  },
  {
    id: 'dessert-3',
    name: 'Classic Kulfi Falooda',
    desc: 'Rich rabri-drenched pistachio kulfi layered with silky vermicelli, rose syrup, and soaked sabja seeds',
    price: '₹220',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
    category: 'desserts',
    isVeg: true,
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Signature Cold Coffee',
    desc: 'Slow-brewed dark roast espresso whipped thick with cream, crushed ice & cocoa dusting',
    price: '₹180',
    tag: 'Signature',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop',
    category: 'beverages',
    isVeg: true,
  },
  {
    id: 'bev-2',
    name: 'Fresh Mint Lime Soda',
    desc: 'Chilled sparkling soda with hand-squeezed fresh limes, muddled garden mint & rock salt',
    price: '₹120',
    tag: 'Refreshing',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop',
    category: 'beverages',
    isVeg: true,
  },
  {
    id: 'bev-3',
    name: 'Kulhad Masala Chai',
    desc: 'Authentic clay-pot brewed tea with green cardamom, crushed ginger, cinnamon & clove',
    price: '₹90',
    tag: 'Classic',
    img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=600&auto=format&fit=crop',
    category: 'beverages',
    isVeg: true,
  },
  {
    id: 'bev-4',
    name: 'Kesar Mango Lassi',
    desc: 'Thick, chilled Alphonso mango pulp churned with probiotic yogurt and saffron threads',
    price: '₹160',
    tag: 'Seasonal',
    img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&auto=format&fit=crop',
    category: 'beverages',
    isVeg: true,
  }
];

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: 'sig-1',
    numberStr: 'N° 01',
    title: 'Hot',
    emphasis: 'Peanut Butter',
    subtitle: 'Signature · Starter',
    desc: 'Our most-talked-about starter — crisp crackling exterior, warm, decadent, and comforting inside. A Jabalpur sensation you simply cannot leave without tasting.',
    price: '₹220',
    tag: 'Must Try',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop',
    details: 'Prepared fresh to order using house-ground roasted peanuts and savory spices with a golden crispy crust.'
  },
  {
    id: 'sig-2',
    numberStr: 'N° 02',
    title: 'House',
    emphasis: 'Special Curry',
    subtitle: 'Signature · Main',
    desc: 'Slow-cooked for hours with whole aromatic spices and served with freshly baked butter garlic naans — the rich recipe that keeps our regulars returning weekly.',
    price: '₹380',
    tag: "Chef's Pick",
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=900&auto=format&fit=crop',
    details: 'Handcrafted gravy infused with dried fenugreek, royal saffron, and stone-ground spices.'
  },
  {
    id: 'sig-3',
    numberStr: 'N° 03',
    title: 'Warm',
    emphasis: 'Chocolate Finale',
    subtitle: 'Signature · Dessert',
    desc: 'A molten dark chocolate cake that cascades velvety warmth onto a scoop of cold vanilla bean gelato. The supreme conclusion to every memorable dining experience.',
    price: '₹260',
    tag: 'Guest Favourite',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=900&auto=format&fit=crop',
    details: 'Pure 70% cocoa core, baked just until crisp on the periphery and flowing at the heart.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Verified Guest',
    role: 'Google Review · Dine-in Experience',
    rating: 5,
    quote: 'Surbhi’s service was excellent. Staff behaviour good, food quality good.',
    highlightedText: 'A genuinely pleasant experience.',
    tag: 'Google Verified'
  },
  {
    id: 'rev-2',
    author: 'Regular Diner',
    role: 'Google Review · Evening Visit',
    rating: 5,
    quote: 'Very peaceful place. Hot peanut butter was',
    highlightedText: 'very crispy and tasty — must try.',
    tag: 'Recommended'
  },
  {
    id: 'rev-3',
    author: 'Local Family',
    role: 'Google Review · Family Dinner',
    rating: 5,
    quote: 'Must try within the city —',
    highlightedText: 'delicious food, beautiful interior, flamboyant atmosphere.',
    tag: 'Family Favorite'
  },
  {
    id: 'rev-4',
    author: 'New Guest',
    role: 'Google Review · Recent Visit',
    rating: 5,
    quote: 'Great place, great food and great service. The staff made us feel at home from the moment we walked in.',
    highlightedText: 'Highly recommended for anyone visiting Jabalpur.',
    tag: '5-Star Diner'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    label: 'The Dining Room',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1400&auto=format&fit=crop',
    wide: true,
    alt: 'Hotel Options dining area interior with warm mood lighting'
  },
  {
    id: 'gal-2',
    label: 'Plated with Care',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=900&auto=format&fit=crop',
    tall: true,
    alt: 'Artisanal gourmet dish plated with seasonal microgreens'
  },
  {
    id: 'gal-3',
    label: 'Cozy Corner',
    img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop',
    square: true,
    alt: 'Warm inviting private restaurant nook with velvet seating'
  },
  {
    id: 'gal-4',
    label: 'Table for Two',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
    square: true,
    alt: 'Fine dining table setup with glassware and candlelight'
  },
  {
    id: 'gal-5',
    label: 'Evenings at Options',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    medium: true,
    alt: 'Warm vibrant restaurant dining atmosphere during dinner service'
  },
  {
    id: 'gal-6',
    label: 'From Our Kitchen',
    img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop',
    medium: true,
    alt: 'Master chef finishing a gourmet entree plate'
  }
];
