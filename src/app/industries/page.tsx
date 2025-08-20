'use client';

import React from 'react';
import { useIndustries } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';

import Link from 'next/link';
import Image from 'next/image';

// Helper function to get localized content directly from data
function getLocalizedContent<T extends { [key in 'en' | 'ar']?: string }>(content: T | undefined, language: 'en' | 'ar'): string {
  if (!content) return '';
  return content[language] || content.en || '';
}

export default function IndustriesPage() {
  const { industries = [], isLoading } = useIndustries();
  const { language } = useLanguage();

  const scrollToIndustries = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('industry-cards');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for sticky header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white overflow-hidden bg-gradient-to-br from-blue-600 via-slate-600 to-indigo-600">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className={`absolute top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse ${language === 'ar' ? 'right-10' : 'left-10'}`}></div>
        <div className={`absolute bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700 ${language === 'ar' ? 'left-10' : 'right-10'}`}></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Industries We Empower' : 'الصناعات التي نمكنها'}
          </h1>
          <p className={`text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en' 
              ? 'Delivering precision-engineered solutions tailored to the unique demands of each industrial sector.' 
              : 'نقدم حلولاً هندسية دقيقة مصممة خصيصًا لتلبية المتطلبات الفريدة لكل قطاع صناعي.'}
          </p>
          <a 
            href="#industry-cards" 
            onClick={scrollToIndustries}
            className={`inline-block bg-white text-blue-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-gray-100 shadow-2xl hover:shadow-blue-300/20 transform hover:-translate-y-1 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'en' ? 'Explore Our Sectors' : 'استكشف قطاعاتنا'}
          </a>
        </div>
      </section>
      
      {/* Industry Cards Grid - This is now the main content */}
      <section id="industry-cards" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {isLoading && (
            <div className="text-center text-gray-500">{language === 'en' ? 'Loading Industries...' : 'جاري تحميل الصناعات...'}</div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map(industry => (
              <Link 
                href={`/industries/${industry.slug}`} 
                key={industry.id} 
                className="block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 group hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <Image 
                    src={industry.image?.url || "/images/industries/oil-gas-industry.webp"} 
                    alt={industry.image?.altText ? getLocalizedContent(industry.image.altText, language) : 'Industry Image'}
                    className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <h3 className={`absolute bottom-4 ${language === 'ar' ? 'right-4 font-arabic' : 'left-4'} text-2xl font-bold text-white`}>
                    {getLocalizedContent(industry.name, language)}
                  </h3>
                </div>
                <div className="p-6">
                  <p className={`text-gray-600 mb-4 leading-relaxed h-20 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {getLocalizedContent(industry.shortDescription, language)}
                  </p>
                  <div className={`inline-block text-blue-700 font-semibold group-hover:text-orange-600 transition-colors duration-300 ${language === 'ar' ? 'font-arabic w-full' : ''}`}>
                    {language === 'en' ? 'Explore Solutions' : 'استكشاف الحلول'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}