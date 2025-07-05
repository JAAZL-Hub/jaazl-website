import { useState, useEffect } from 'react';
import { cmsService } from '../api/cmsService';
import { Service, ServiceCategory } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';

export function useServiceCategories() {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getServiceCategories();
        setCategories(data);
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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getServiceCategoryBySlug(slug);
        setCategory(data);
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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getServices();
        setServices(data);
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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getServiceBySlug(slug);
        setService(data);
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
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getServicesByCategoryId(categoryId);
        setServices(data);
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
    localizedName: cmsService.getLocalizedContent(service.name, language),
    localizedShortDescription: cmsService.getLocalizedContent(service.shortDescription, language),
    localizedFullDescription: cmsService.getLocalizedContent(service.fullDescription, language),
    localizedImageAlt: cmsService.getLocalizedContent(service.image.altText, language),
    features: service.features.map(feature => ({
      ...feature,
      localizedTitle: cmsService.getLocalizedContent(feature.title, language),
      localizedDescription: cmsService.getLocalizedContent(feature.description, language)
    })),
    meta: {
      ...service.meta,
      localizedTitle: cmsService.getLocalizedContent(service.meta.title, language),
      localizedDescription: cmsService.getLocalizedContent(service.meta.description, language)
    }
  };
}
