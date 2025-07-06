'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DirectionManager = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language]);

  return null; // This component does not render anything
};

export default DirectionManager;
