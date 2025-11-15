import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface HeroSlide {
  imageUrl: string;
  title: string;
  subtitle: string;
  cta1_text: string;
  cta1_link: string;
  cta2_text: string;
  cta2_link: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface Branch {
  city: string;
  address: string;
  phone: string;
  mapUrl: string;
}