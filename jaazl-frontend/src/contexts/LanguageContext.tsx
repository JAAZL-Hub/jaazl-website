'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'; // Import directly for fallback
import i18n from '@/i18n';

export type Direction = 'ltr' | 'rtl';
export type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const defaultContext: LanguageContextProps = {
  language: 'en',
  direction: 'ltr',
  setLanguage: () => {},
  toggleLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextProps>(defaultContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  // Initialize language from localStorage or default to browser language
  useEffect(() => {
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'ar')) {
      setLanguageState(storedLanguage as Language);
    }
  }, []);

  // Update language and direction based on the selected language
  useEffect(() => {
    const newDirection: Direction = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = language;
    
    // Update RTL-specific styles
    if (newDirection === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
    
    // Change the lang attribute on the html element
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    try {
      // Update state first (this will always work)
      setLanguageState(lang);
      
      // Store language preference
      localStorage.setItem('i18nextLng', lang);
      
      // Set direction based on language
      const newDirection: Direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = newDirection;
      document.documentElement.setAttribute('lang', lang);
      
      // Update RTL-specific styles
      if (newDirection === 'rtl') {
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.classList.remove('rtl');
      }
      
      // Try to change language in i18n (with fallback to direct i18next)
      try {
        if (i18n && typeof i18n.changeLanguage === 'function') {
          // Use the useTranslation hook's i18n instance
          i18n.changeLanguage(lang);
        } else if (i18next && typeof i18next.changeLanguage === 'function') {
          // Fallback to direct i18next import
          i18next.changeLanguage(lang);
        } else {
          console.warn('i18n.changeLanguage not available, language text will not update until page refresh');
        }
      } catch (innerError) {
        console.error('Error when changing language via i18next:', innerError);
        // Continue execution - we've already updated the state and local storage
      }
      
      console.log(`Language changed to ${lang}, direction: ${newDirection}`);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
