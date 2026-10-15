export type Language = 'bm' | 'en';

export interface LocalizedString {
  bm: string;
  en: string;
}

export interface ServicePackage {
  id: string;
  name: LocalizedString;
  category: 'wedding' | 'occasion' | 'combo';
  price: number;
  duration: LocalizedString;
  description: LocalizedString;
  inclusions: LocalizedString[];
  recommendedFor: LocalizedString;
  popular?: boolean;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  category: 'sanding' | 'nikah' | 'bridesmaid' | 'dinner' | 'family' | 'hightea' | 'engagement' | 'glass-skin' | 'graduation' | 'sambut-menantu' | string;
  image: string;
  lookType: LocalizedString;
  finish: LocalizedString;
  notes: LocalizedString;
  productsHighlight: LocalizedString;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: LocalizedString;
}

export interface FaqItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface TermItem {
  badge: LocalizedString;
  title: LocalizedString;
  detail: LocalizedString;
}
