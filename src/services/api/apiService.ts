import { 
  ServiceCategory, 
  Service, 
  Industry, 
  AboutInfo, 
  Contact, 
  Language 
} from '../types';

import { 
  serviceCategories,
  engineeringServices,
  industries,
  aboutInfo,
  contacts
} from './mockData';

/**
 * API service to fetch data from mock data (simulating API calls)
 * Can be easily replaced with real API endpoints in the future
 */
export const apiService = {
  // Service Categories
  getServiceCategories: async (): Promise<ServiceCategory[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return serviceCategories;
  },
  
  getServiceCategoryBySlug: async (slug: string): Promise<ServiceCategory | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return serviceCategories.find(category => category.slug === slug) || null;
  },

  // Services
  getServices: async (): Promise<Service[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return engineeringServices;
  },

  getServiceBySlug: async (slug: string): Promise<Service | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return engineeringServices.find(service => service.slug === slug) || null;
  },

  getServicesByCategoryId: async (categoryId: string): Promise<Service[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return engineeringServices.filter(service => service.categoryId === categoryId);
  },

  // Industries
  getIndustries: async (): Promise<Industry[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return industries;
  },

  getIndustryBySlug: async (slug: string): Promise<Industry | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return industries.find(industry => industry.slug === slug) || null;
  },

  // About Information
  getAboutInfo: async (): Promise<AboutInfo> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return aboutInfo;
  },

  // Contact Information
  getContacts: async (): Promise<Contact[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return contacts;
  },

  getContactsByType: async (type: Contact['type']): Promise<Contact[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return contacts.filter(contact => contact.type === type);
  },

  // Localized Content Helper
  getLocalizedContent: <T extends { [key in Language]?: string }>(content: T | undefined | null, language: Language): string => {
    if (!content) return '';
    return (content[language] || content.en || Object.values(content)[0] || '') as string; // Fallback to English or first available translation or empty string
  }
};
