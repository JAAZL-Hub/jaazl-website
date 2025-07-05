export type Language = 'en' | 'ar';

export interface LocalizedContent {
  en: string;
  ar: string;
}

export interface Image {
  id: string;
  url: string;
  altText: LocalizedContent;
  width: number;
  height: number;
}

export interface MetaData {
  title: LocalizedContent;
  description: LocalizedContent;
  keywords: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: LocalizedContent;
  description: LocalizedContent;
  icon: string;
  color: string;
  gradient: string;
}

export interface Service {
  id: string;
  slug: string;
  categoryId: string;
  name: LocalizedContent;
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  features: ServiceFeature[];
  icon: string;
  image: Image;
  meta: MetaData;
  relatedIndustries: string[]; // Array of industry IDs
}

export interface ServiceFeature {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: LocalizedContent;
  sector: LocalizedContent;
  shortDescription: LocalizedContent;
  fullDescription: LocalizedContent;
  overview?: LocalizedContent; // Add the overview property as optional
  icon: string;
  image: Image;
  meta: MetaData;
  relatedServices: string[]; // Array of service IDs
  caseStudies: CaseStudy[];
}

export interface CaseStudy {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  image: Image;
  results: LocalizedContent;
  serviceId: string;
  industryId: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: LocalizedContent;
  bio: LocalizedContent;
  image?: Image;
}

export interface Certificate {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  image: Image;
  year: number;
}

export interface Contact {
  id: string;
  type: 'email' | 'phone' | 'address' | 'social';
  value: string;
  label: LocalizedContent;
  icon?: string;
  link?: string; // Add the link property as optional
}

export interface Statistic {
  id: string;
  value: number;
  label: LocalizedContent;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  logo: Image;
}

export interface AboutInfo {
  history: LocalizedContent;
  mission: LocalizedContent;
  vision: LocalizedContent;
  values: {
    id: string;
    title: LocalizedContent;
    description: LocalizedContent;
    icon: string;
  }[];
  team: TeamMember[];
  certificates: Certificate[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
