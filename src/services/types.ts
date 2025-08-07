/**
 * Type definitions for JAAZL Frontend
 */

export type Language = 'en' | 'ar';

export interface LocalizedContent {
  en: string;
  ar: string;
}

export interface ServiceCategory {
  id: string;
  name: LocalizedContent;
  slug: string;
  description: LocalizedContent;
  icon?: string;
  color?: string;
  gradient?: string;
}

export interface Service {
  id: string;
  name: LocalizedContent;
  slug: string;
  categoryId: string; // ID of the service category this service belongs to
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  imageSrc?: string; // For backwards compatibility
  image?: ImageAsset;
  icon?: string;
  benefits?: Benefit[];
  features: Feature[];
  faqs?: FAQ[];
  relatedIndustries: string[]; // Array of industry IDs
  meta?: MetaData;
}

export interface ImageAsset {
  id: string;
  url: string;
  altText?: LocalizedContent;
  width?: number;
  height?: number;
}

export interface CaseStudy {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  imageSrc?: string; // For backwards compatibility
  image?: ImageAsset;
  tags?: string[];
  date?: string;
  outcome?: LocalizedContent;
  results?: LocalizedContent; // Alternative to outcome in some mock data
  serviceId?: string; // ID of the related service
  industryId?: string; // ID of the related industry
}

export interface MetaData {
  title: LocalizedContent;
  description: LocalizedContent;
  keywords?: string[];
}

export interface Industry {
  id: string;
  name: LocalizedContent;
  slug: string;
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  imageSrc?: string; // For backwards compatibility
  image?: ImageAsset;
  icon?: string;
  sector?: LocalizedContent;
  meta?: MetaData;
  challenges?: Challenge[];
  solutions?: Solution[];
  caseStudies?: CaseStudy[];
  relatedServices: string[]; // Array of service IDs
  isFeatured?: boolean;
}

export interface Benefit {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon: string;
}

export interface Feature {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon: string;
}

export interface FAQ {
  id: string;
  question: LocalizedContent;
  answer: LocalizedContent;
}

export interface Challenge {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
}

export interface Solution {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
}

export interface CoreValue {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string | LocalizedContent; // Allow both string and LocalizedContent for name
  position: LocalizedContent;
  bio: LocalizedContent;
  imageSrc?: string; // For backwards compatibility
  image?: ImageAsset;
}

export interface Certification {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  imageSrc?: string; // For backwards compatibility
  image?: ImageAsset;
  year?: number; // Year of certification
}

export interface AboutInfo {
  mission: LocalizedContent;
  vision: LocalizedContent;
  history: LocalizedContent;
  ceoMessage?: LocalizedContent; // CEO message for the about page
  ceo?: TeamMember; // CEO information
  values: CoreValue[]; // The values field from the mock data
  coreValues?: CoreValue[]; // Keeping for backward compatibility
  team?: TeamMember[]; // The team field from the mock data
  leadership?: TeamMember[]; // Keeping for backward compatibility
  certifications: Certification[];
}

export interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Contact {
  id: string;
  type: 'office' | 'social' | 'support' | 'email' | 'phone' | 'address';
  
  // Fields for general contact types
  value?: string; // For email, phone contacts
  label?: LocalizedContent; // For email, phone contacts
  icon?: string; // Icon name for the contact
  
  // Fields for office contacts
  name?: LocalizedContent;
  address?: LocalizedContent;
  phone?: string;
  email?: string;
  mapCoordinates?: { lat: number; lng: number };
  link?: string;
  socialMedia?: SocialMedia[];
}
