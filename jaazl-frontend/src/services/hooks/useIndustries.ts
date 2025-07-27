import { useState, useEffect } from 'react';
import { Industry } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { getContent, getContentBySlug } from '../../utils/content';

export function useIndustries() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Use content utility to fetch from markdown files
        const fetchedIndustries = await getContent<Industry>('industries', language);
        setIndustries(fetchedIndustries);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load industries'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [language]); // Re-fetch when language changes
  
  return { industries, isLoading, error };
}

export function useIndustryBySlug(slug: string) {
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Use content utility to fetch industry by slug
        const foundIndustry = await getContentBySlug<Industry>('industries', slug, language);
        setIndustry(foundIndustry);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load industry'));
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchData();
    }
  }, [slug, language]); // Re-fetch when slug or language changes
  
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
