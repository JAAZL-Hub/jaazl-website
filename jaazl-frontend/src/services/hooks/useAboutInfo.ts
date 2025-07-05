import { useState, useEffect } from 'react';
import { cmsService } from '../api/cmsService';
import { AboutInfo } from '../types';
import { useLanguage } from '../../contexts/LanguageContext';

export function useAboutInfo() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.getAboutInfo();
        setAboutInfo(data);
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
    localizedHistory: cmsService.getLocalizedContent(aboutInfo.history, language),
    localizedMission: cmsService.getLocalizedContent(aboutInfo.mission, language),
    localizedVision: cmsService.getLocalizedContent(aboutInfo.vision, language),
    values: aboutInfo.values.map(value => ({
      ...value,
      localizedTitle: cmsService.getLocalizedContent(value.title, language),
      localizedDescription: cmsService.getLocalizedContent(value.description, language)
    })),
    team: aboutInfo.team.map(member => ({
      ...member,
      localizedPosition: cmsService.getLocalizedContent(member.position, language),
      localizedBio: cmsService.getLocalizedContent(member.bio, language),
      localizedImageAlt: member.image ? cmsService.getLocalizedContent(member.image.altText, language) : ''
    })),
    certificates: aboutInfo.certificates.map(certificate => ({
      ...certificate,
      localizedName: cmsService.getLocalizedContent(certificate.name, language),
      localizedDescription: cmsService.getLocalizedContent(certificate.description, language),
      localizedImageAlt: cmsService.getLocalizedContent(certificate.image.altText, language)
    }))
  };
}
