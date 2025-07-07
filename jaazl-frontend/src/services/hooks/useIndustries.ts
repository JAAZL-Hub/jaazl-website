import { useState, useEffect } from 'react';
import { industries as mockIndustries } from '../api/mockData/industries';
import { Industry } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';

export function useIndustries() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    try {
      setIsLoading(true);
      // Use mock data directly instead of API call
      setIndustries(mockIndustries);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load industries'));
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  return { industries, isLoading, error };
}

export function useIndustryBySlug(slug: string) {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    try {
      setIsLoading(true);
      // Find industry by slug directly from mock data
      const data = mockIndustries.find(i => i.slug === slug) || null;
      setIndustry(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load industry'));
    } finally {
      setIsLoading(false);
    }
  }, [slug]);
  
  return { industry, isLoading, error };
}

// Direct function to get localized content
function getLocalizedContent<T extends { [key in 'en' | 'ar']: string }>(content: T, language: 'en' | 'ar'): string {
  return content[language] || content.en;
}

// Helper hook to get localized industry content
export function useLocalizedIndustryContent(industry: Industry | null) {
  const { language } = useLanguage();
  
  if (!industry) return null;
  
  return {
    ...industry,
    localizedName: getLocalizedContent(industry.name, language),
    localizedShortDescription: getLocalizedContent(industry.shortDescription, language),
    localizedFullDescription: getLocalizedContent(industry.fullDescription, language),
    localizedImageAlt: industry.image?.altText ? getLocalizedContent(industry.image.altText, language) : '',
    caseStudies: industry.caseStudies?.map(caseStudy => ({
      ...caseStudy,
      localizedTitle: getLocalizedContent(caseStudy.title, language),
      localizedDescription: getLocalizedContent(caseStudy.description, language),
      localizedOutcome: caseStudy.outcome ? getLocalizedContent(caseStudy.outcome, language) : '',
      localizedImageAlt: caseStudy.image?.altText ? getLocalizedContent(caseStudy.image.altText, language) : '',
    })) || [],
    meta: industry.meta ? {
      ...industry.meta,
      localizedTitle: getLocalizedContent(industry.meta.title, language),
      localizedDescription: getLocalizedContent(industry.meta.description, language)
    } : undefined
  };
}
