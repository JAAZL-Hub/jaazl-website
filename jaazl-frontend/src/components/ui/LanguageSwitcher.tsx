'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

interface LanguageSwitcherProps {
  variant?: 'icon' | 'full' | 'minimal';
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'full',
  className = ''
}) => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  // Different display modes for the language switcher
  if (variant === 'icon') {
    return (
      <button 
        onClick={toggleLanguage} 
        aria-label={t('nav.language')}
        className={`flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors ${className}`}
      >
        <FaGlobe className="w-5 h-5 text-gray-600" />
      </button>
    );
  }

  if (variant === 'minimal') {
    return (
      <button 
        onClick={toggleLanguage} 
        aria-label={t('nav.language')}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors ${className}`}
      >
        {language === 'en' ? 'العربية' : 'English'}
      </button>
    );
  }

  // Default 'full' variant
  return (
    <div className={`relative ${className}`}>
      <button 
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
      >
        <FaGlobe className="w-5 h-5 text-primary-600" />
        <span className="text-sm font-medium">
          {language === 'en' ? 'English' : 'العربية'}
        </span>
        <span className="text-xs text-gray-500">
          {language === 'en' ? '(Change to Arabic)' : '(تغيير إلى الإنجليزية)'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
