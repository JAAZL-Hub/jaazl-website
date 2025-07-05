'use client';

import React, { useEffect } from 'react';
import { useServiceCategories, useServices } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { cmsService } from '@/services/api/cmsService';
import { ArrowRight, ChevronRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const { categories = [], isLoading: categoriesLoading } = useServiceCategories();
  const { services = [], isLoading: servicesLoading } = useServices();
  const { language, direction } = useLanguage();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, []);
  
  const scrollToCategories = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('service-categories');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for sticky header
        behavior: 'smooth'
      });
    }
  };
  
  const isLoading = categoriesLoading || servicesLoading;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
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
          <a 
            href="#service-categories" 
            onClick={scrollToCategories}
            className="inline-flex items-center bg-white text-blue-800 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-gray-100 shadow-2xl hover:shadow-orange-300/20 transform hover:-translate-y-1 group"
          >
            {language === 'en' ? 'Explore Our Services' : 'استكشف خدماتنا'}
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1`} />
          </a>
        </div>
      </section>
      
      {/* Services List by Category */}
      <section id="service-categories" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {isLoading && (
            <div className="text-center text-gray-500">{language === 'en' ? 'Loading Services...' : 'جاري تحميل الخدمات...'}</div>
          )}

          {categories.map(category => {
            const categoryServices = services.filter(service => service.categoryId === category.id);
            if (categoryServices.length === 0) return null;

            return (
              <div id={category.slug} key={category.id} className="mb-20 last:mb-0 scroll-mt-24">
                {/* Category Header */}
                <div className="mb-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {cmsService.getLocalizedContent(category.name, language)}
                  </h2>
                  <p className="max-w-2xl mx-auto text-gray-600">
                    {cmsService.getLocalizedContent(category.description, language)}
                  </p>
                </div>
                
                {/* Services Grid for this Category */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map(service => (
                    <Link 
                      href={`/services/${service.slug}`} 
                      key={service.id}
                      className="block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-300"
                    >
                      <div className="p-8">
                        <div className="bg-blue-100 text-blue-700 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:bg-orange-100 group-hover:text-orange-700 transition-colors duration-300">
                           <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                          {cmsService.getLocalizedContent(service.name, language)}
                        </h3>
                        <p className="text-gray-600 h-24 mb-5">
                          {cmsService.getLocalizedContent(service.shortDescription, language)}
                        </p>
                        <div className="inline-flex items-center text-blue-700 font-semibold group-hover:text-orange-600 transition-colors duration-300">
                          {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1`} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}