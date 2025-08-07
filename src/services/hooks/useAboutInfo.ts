import { useState, useEffect } from 'react';
import { AboutInfo, LocalizedContent } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { aboutInfo as aboutInfoData } from '../api/mockData/aboutInfo';

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent | undefined, language: string): string => {
  if (!content) return '';
  return language === 'en' ? content.en : content.ar;
};

export function useAboutInfo() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Simulate async behavior but use mock data directly
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Use mock data directly
        setAboutInfo(aboutInfoData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch about information'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { aboutInfo, isLoading, error };
}

// Helper hook to get localized about content
export function useLocalizedAboutContent(aboutInfo: AboutInfo | null) {
  const { language } = useLanguage();
  
  if (!aboutInfo) return null;
  
  return {
    ...aboutInfo,
    localizedHistory: getLocalizedContent(aboutInfo.history, language),
    localizedMission: getLocalizedContent(aboutInfo.mission, language),
    localizedVision: getLocalizedContent(aboutInfo.vision, language),
    values: aboutInfo.values.map(value => ({
      ...value,
      localizedTitle: getLocalizedContent(value.title, language),
      localizedDescription: getLocalizedContent(value.description, language)
    })),
    team: aboutInfo.team?.map(member => ({
      ...member,
      localizedPosition: getLocalizedContent(member.position, language),
      localizedBio: getLocalizedContent(member.bio, language),
      localizedImageAlt: member.image?.altText ? getLocalizedContent(member.image.altText, language) : ''
    })) || [],
    certifications: aboutInfo.certifications.map(certificate => ({
      ...certificate,
      localizedName: getLocalizedContent(certificate.name, language),
      localizedDescription: getLocalizedContent(certificate.description, language),
      localizedImageAlt: certificate.image?.altText ? getLocalizedContent(certificate.image.altText, language) : ''
    }))
  };
}
