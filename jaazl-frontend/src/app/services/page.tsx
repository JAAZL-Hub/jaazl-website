'use client';

import React, { useState, useEffect } from 'react';
import { useServiceCategories, useServices } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { LocalizedContent } from '@/services/types';
import Link from 'next/link';
// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent | undefined, language: string): string => {
  if (!content) return '';
  return language === 'en' ? content.en : content.ar;
};

export default function ServicesPage() {
  const { categories = [], isLoading: categoriesLoading } = useServiceCategories();
  const { services = [], isLoading: servicesLoading } = useServices();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      const hash = window.location.hash.substring(1);
      const categoryFromHash = categories.find(c => c.slug === hash);
      if (categoryFromHash) {
        setActiveCategory(categoryFromHash.id);
      } else {
        setActiveCategory(categories[0].id);
      }
    }
  }, [categories, activeCategory]);

  const handleTabClick = (categoryId: string, categorySlug: string) => {
    setActiveCategory(categoryId);
    // Update URL hash without page reload for better UX
    history.pushState(null, '', `#${categorySlug}`);
  };

  const isLoading = categoriesLoading || servicesLoading;
  const filteredServices = services.filter(service => service.categoryId === activeCategory);
  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <div className="bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white bg-gradient-to-br from-blue-600 via-slate-600 to-indigo-600">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {language === 'en' ? 'Our Industrial Services' : 'خدماتنا الصناعية'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Providing end-to-end solutions to enhance efficiency, safety, and sustainability in your operations.' 
              : 'نقدم حلولاً شاملة لتعزيز الكفاءة والسلامة والاستدامة في عملياتكم.'}
          </p>
        </div>
      </section>
      
      {/* Tabbed Services Section */}
      <section id="service-categories" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {isLoading && (
            <div className="text-center text-gray-500 py-10">{language === 'en' ? 'Loading Services...' : 'جاري تحميل الخدمات...'}</div>
          )}

          {!isLoading && categories.length > 0 && (
            <>
              {/* Tab Navigation */}
              <div className="mb-12 flex justify-center flex-wrap gap-x-4 gap-y-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleTabClick(category.id, category.slug)}
                    className={`px-5 py-3 font-semibold rounded-full transition-all duration-300 text-base md:text-lg shadow-sm ${ 
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-800 to-indigo-800 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                  >
                    {getLocalizedContent(category.name, language)}
                  </button>
                ))}
              </div>

              {/* Active Category Content */}
              {activeCategoryData && (
                <div id={activeCategoryData.slug} className="scroll-mt-24 animate-fade-in">
                  {/* Category Header */}
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {getLocalizedContent(activeCategoryData.name, language)}
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                      {getLocalizedContent(activeCategoryData.description, language)}
                    </p>
                  </div>
                  
                  {/* Services Grid for this Category */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map(service => (
                      <Link 
                        href={`/services/${service.slug}`} 
                        key={service.id}
                        className="block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300"
                      >
                        <div className="p-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                            {getLocalizedContent(service.name, language)}
                          </h3>
                          <p className="text-gray-600 min-h-[6rem] mb-5">
                            {getLocalizedContent(service.shortDescription, language)}
                          </p>
                          <div className="inline-block text-blue-700 font-semibold group-hover:text-orange-600 transition-colors duration-300">
                            {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}