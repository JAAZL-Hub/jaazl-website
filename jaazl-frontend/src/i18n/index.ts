'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language resources
import commonEN from './locales/en/common.json';
import commonAR from './locales/ar/common.json';

// Configure i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEN,
      },
      ar: {
        common: commonAR,
      },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
