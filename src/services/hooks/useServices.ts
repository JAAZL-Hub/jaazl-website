'use client';

import { useState, useEffect } from 'react';
import { Service, ServiceCategory, LocalizedContent } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { serviceCategories as mockServiceCategories } from '../api/mockData/serviceCategories';
import { engineeringServices as mockServices } from '../api/mockData/engineeringServices';

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent | undefined, language: string): string => {
  if (!content) return '';
  return language === 'en' ? content.en : content.ar;
};

export function useServiceCategories() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Use mock data
        setCategories(mockServiceCategories);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch service categories'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [language]); // Re-fetch when language changes
  
  return { categories, isLoading, error };
}

export function useServiceCategoryBySlug(slug: string) {
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Find category by slug from mock data
        const foundCategory = mockServiceCategories.find(cat => cat.slug === slug) || null;
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
  }, [slug, language]); // Re-fetch when slug or language changes
  
  return { category, isLoading, error };
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Use mock data
        setServices(mockServices);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch services'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [language]); // Re-fetch when language changes
  
  return { services, isLoading, error };
}

export function useServiceBySlug(slug: string) {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Find service by slug from mock data
        const foundService = mockServices.find(svc => svc.slug === slug) || null;
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
  }, [slug, language]); // Re-fetch when slug or language changes
  
  return { service, isLoading, error };
}

export function useServicesByCategoryId(categoryId: string) {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Filter services by categoryId from mock data
        const filteredServices = mockServices.filter(service => service.categoryId === categoryId);
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
  }, [categoryId, language]); // Re-fetch when categoryId or language changes
  
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
