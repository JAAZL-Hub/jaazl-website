import { useState, useEffect } from 'react';
import { cmsService } from '../api/cmsService';
import { Industry } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';

export function useIndustries() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getIndustries();
        setIndustries(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch industries'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { industries, isLoading, error };
}

export function useIndustryBySlug(slug: string) {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getIndustryBySlug(slug);
        setIndustry(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch industry'));
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchData();
    }
  }, [slug]);
  
  return { industry, isLoading, error };
}

// Helper hook to get localized industry content
export function useLocalizedIndustryContent(industry: Industry | null) {
  const { language } = useLanguage();
  
  if (!industry) return null;
  
  return {
    ...industry,
    localizedName: cmsService.getLocalizedContent(industry.name, language),
    localizedShortDescription: cmsService.getLocalizedContent(industry.shortDescription, language),
    localizedFullDescription: cmsService.getLocalizedContent(industry.fullDescription, language),
    localizedImageAlt: cmsService.getLocalizedContent(industry.image.altText, language),
    caseStudies: industry.caseStudies.map(caseStudy => ({
      ...caseStudy,
      localizedTitle: cmsService.getLocalizedContent(caseStudy.title, language),
      localizedDescription: cmsService.getLocalizedContent(caseStudy.description, language),
      localizedResults: cmsService.getLocalizedContent(caseStudy.results, language),
      localizedImageAlt: cmsService.getLocalizedContent(caseStudy.image.altText, language),
    })),
    meta: {
      ...industry.meta,
      localizedTitle: cmsService.getLocalizedContent(industry.meta.title, language),
      localizedDescription: cmsService.getLocalizedContent(industry.meta.description, language)
    }
  };
}
