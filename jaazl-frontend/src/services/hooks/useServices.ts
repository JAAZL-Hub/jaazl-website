import { useState, useEffect } from 'react';
import { Service, ServiceCategory, LocalizedContent } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { engineeringServices as servicesData } from '../api/mockData/engineeringServices';
import { serviceCategories as categoriesData } from '../api/mockData/serviceCategories';

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent | undefined, language: string): string => {
  if (!content) return '';
  return language === 'en' ? content.en : content.ar;
};

export function useServiceCategories() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Use mock data directly
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch service categories'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { categories, isLoading, error };
}

export function useServiceCategoryBySlug(slug: string) {
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Find category with matching slug from mock data
        const foundCategory = categoriesData.find(cat => cat.slug === slug) || null;
        setCategory(foundCategory);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch service category'));
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchData();
    }
  }, [slug]);
  
  return { category, isLoading, error };
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Use mock data directly
        setServices(servicesData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch services'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { services, isLoading, error };
}

export function useServiceBySlug(slug: string) {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Find service with matching slug from mock data
        const foundService = servicesData.find(srv => srv.slug === slug) || null;
        setService(foundService);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch service'));
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchData();
    }
  }, [slug]);
  
  return { service, isLoading, error };
}

export function useServicesByCategoryId(categoryId: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Filter services by categoryId from mock data
        const filteredServices = servicesData.filter(srv => srv.categoryId === categoryId);
        setServices(filteredServices);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch services by category'));
      } finally {
        setIsLoading(false);
      }
    };
    
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);
  
  return { services, isLoading, error };
}

// Helper hook to get localized service content
export function useLocalizedServiceContent(service: Service | null) {
  const { language } = useLanguage();
  
  if (!service) return null;
  
  return {
    ...service,
    localizedName: getLocalizedContent(service.name, language),
    localizedShortDescription: getLocalizedContent(service.shortDescription, language),
    localizedFullDescription: getLocalizedContent(service.fullDescription, language),
    localizedImageAlt: service.image?.altText ? getLocalizedContent(service.image.altText, language) : '',
    features: service.features.map(feature => ({
      ...feature,
      localizedTitle: getLocalizedContent(feature.title, language),
      localizedDescription: getLocalizedContent(feature.description, language)
    })),
    meta: {
      ...service.meta,
      localizedTitle: getLocalizedContent(service.meta?.title, language),
      localizedDescription: getLocalizedContent(service.meta?.description, language)
    }
  };
}
