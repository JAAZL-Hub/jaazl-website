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
}

export interface Service {
  id: string;
  name: LocalizedContent;
  slug: string;
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  imageSrc: string;
  benefits: Benefit[];
  features: Feature[];
  faqs: FAQ[];
  relatedIndustries: string[]; // Array of industry IDs
}

export interface CaseStudy {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  imageSrc: string;
  tags: string[];
  date?: string;
}

export interface Industry {
  id: string;
  name: LocalizedContent;
  slug: string;
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  imageSrc: string;
  challenges: Challenge[];
  solutions: Solution[];
  caseStudies?: CaseStudy[];
  relatedServices: string[]; // Array of service IDs
  isFeatured: boolean;
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
  name: LocalizedContent;
  position: LocalizedContent;
  bio: LocalizedContent;
  imageSrc: string;
}

export interface Certification {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  imageSrc: string;
}

export interface AboutInfo {
  mission: LocalizedContent;
  vision: LocalizedContent;
  history: LocalizedContent;
  coreValues: CoreValue[];
  leadership: TeamMember[];
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
  type: 'office' | 'social' | 'support';
  name: LocalizedContent;
  address: LocalizedContent;
  phone?: string;
  email?: string;
  mapCoordinates?: { lat: number; lng: number };
  link?: string;
  socialMedia?: SocialMedia[];
}
