/**
 * CMS Service - Abstracting the API layer for easy transition to Strapi CMS
 * 
 * This service can be configured to use either mock data or real Strapi API
 * based on environment configuration. When ready to connect to Strapi,
 * simply update the JAAZL_API_URL and set USE_MOCK_DATA to false.
 */
import { apiService as mockApiService } from './apiService';
import { 
  ServiceCategory, 
  Service, 
  Industry, 
  AboutInfo, 
  Contact,
  Language
} from '../types';

// Environment configuration - would come from .env in production
const JAAZL_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
const JAAZL_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || '';
const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';

/**
 * Create headers with authentication for Strapi API requests
 */
const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JAAZL_API_TOKEN}`
  };
};

/**
 * Convert Strapi response format to our internal data model
 * This adapts the Strapi specific response structure to our app's data model
 */
const adaptStrapiResponse = (data: Record<string, unknown>) => {
  // Extract the actual data from Strapi's response structure
  if (data && data.data) {
    if (Array.isArray(data.data)) {
      return data.data.map((item: Record<string, unknown>) => ({
        ...item.attributes,
        id: item.id
      }));
    }
    return {
      ...data.data.attributes,
      id: data.data.id
    };
  }
  return data;
};

/**
 * Fetches data from Strapi API with proper error handling
 */
const fetchFromStrapi = async (endpoint: string) => {
  try {
    const response = await fetch(`${JAAZL_API_URL}/${endpoint}`, {
      method: 'GET',
      headers: getHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from Strapi API: ${response.status}`);
    }
    
    const data = await response.json();
    return adaptStrapiResponse(data);
  } catch (error) {
    console.error('Strapi API error:', error);
    throw error;
  }
};

/**
 * Strapi API implementation - will be used when USE_MOCK_DATA is false
 */
const strapiApiService = {
  // Service Categories
  getServiceCategories: async (): Promise<ServiceCategory[]> => {
    return fetchFromStrapi('service-categories?populate=*');
  },
  
  getServiceCategoryBySlug: async (slug: string): Promise<ServiceCategory | null> => {
    const data = await fetchFromStrapi(`service-categories?filters[slug][$eq]=${slug}&populate=*`);
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  },

  // Services
  getServices: async (): Promise<Service[]> => {
    return fetchFromStrapi('services?populate=*');
  },

  getServiceBySlug: async (slug: string): Promise<Service | null> => {
    const data = await fetchFromStrapi(`services?filters[slug][$eq]=${slug}&populate=*`);
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  },

  getServicesByCategoryId: async (categoryId: string): Promise<Service[]> => {
    return fetchFromStrapi(`services?filters[category][id][$eq]=${categoryId}&populate=*`);
  },

  // Industries
  getIndustries: async (): Promise<Industry[]> => {
    return fetchFromStrapi('industries?populate=*');
  },

  getIndustryBySlug: async (slug: string): Promise<Industry | null> => {
    const data = await fetchFromStrapi(`industries?filters[slug][$eq]=${slug}&populate=*`);
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  },

  // About Information
  getAboutInfo: async (): Promise<AboutInfo> => {
    return fetchFromStrapi('about?populate=deep');
  },

  // Contact Information
  getContacts: async (): Promise<Contact[]> => {
    return fetchFromStrapi('contacts?populate=*');
  },

  getContactsByType: async (type: Contact['type']): Promise<Contact[]> => {
    return fetchFromStrapi(`contacts?filters[type][$eq]=${type}&populate=*`);
  },

  // Localized Content Helper
  getLocalizedContent: <T extends { [key in Language]: string }>(content: T, language: Language): string => {
    return content[language] || content.en;
  }
};

/**
 * Exported CMS service - Uses either mock or Strapi API based on environment config
 * All components should use this service instead of directly using mockApiService
 */
export const cmsService = USE_MOCK_DATA ? mockApiService : strapiApiService;
