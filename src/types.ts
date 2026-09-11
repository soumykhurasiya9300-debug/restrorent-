export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  tag: string;
  img: string;
  category: 'starters' | 'mains' | 'continental' | 'desserts' | 'beverages';
  isVeg?: boolean;
  calories?: string;
  spicyLevel?: number;
}

export interface SignatureDish {
  id: string;
  numberStr: string;
  title: string;
  emphasis: string;
  subtitle: string;
  desc: string;
  price: string;
  tag: string;
  img: string;
  details?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  quote: string;
  highlightedText?: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  label: string;
  img: string;
  wide?: boolean;
  tall?: boolean;
  square?: boolean;
  medium?: boolean;
  alt: string;
}

export interface ReservationData {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion?: string;
  notes?: string;
  createdAt: string;
}
