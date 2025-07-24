'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Industry, Service, LocalizedContent } from '@/services/types';

interface ServicePageClientProps {
  service: Service;
  relatedIndustries: Industry[];
}

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent, currentLanguage: string): string => {
  return currentLanguage === 'en' ? content.en : content.ar;
};

const ServicePageClient: React.FC<ServicePageClientProps> = ({ service, relatedIndustries }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  return (
    <div className={`service-page-content ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section - Premium Design */}
      <section className="hero-section relative pt-36 pb-24 overflow-hidden">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
          <div className="absolute top-20 start-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex flex-col lg:flex-row items-center relative z-10 text-white ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className={`lg:w-1/2 w-full ${isRTL ? 'lg:pl-12' : 'lg:pr-12'} ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="mb-6">
                <Link 
                  href="/services" 
                  className={`inline-flex items-center text-white hover:text-gray-200 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isRTL ? (
                    <>
                      <span className="font-arabic">العودة إلى الخدمات</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Back to Services</span>
                    </>
                  )}
                </Link>
              </div>
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                {getLocalizedContent(service.name, language)}
              </h1>
              <p className={`text-xl lg:text-2xl mb-8 text-white leading-relaxed ${isRTL ? 'font-arabic' : ''}`}> 
                {getLocalizedContent(service.shortDescription, language)}
              </p>
            </div>
            
            {/* Image */}
            <div className={`lg:w-1/2 w-full mt-10 lg:mt-0 ${isRTL ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image?.url || '/images/services/engineering-consulting.jpg'}
                  alt={service.image?.altText ? getLocalizedContent(service.image.altText, language) : getLocalizedContent(service.name, language)}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className={`text-4xl font-bold mb-8 text-center text-[#1E1E1E] ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'About Our' : 'حول'} {getLocalizedContent(service.name, language)}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className={`prose prose-lg ${isRTL ? 'prose-rtl' : ''}`}>
              {getLocalizedContent(service.fullDescription, language).split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={`mb-4 text-gray-800 font-medium leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="section-spacing bg-gray-100">
          <div className="container-custom">
            <h2 className={`text-4xl font-bold mb-12 text-center text-[#1E1E1E] ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
            </h2>
            <div className="grid-cards">
              {service.features.map((feature) => (
                <div key={feature.id} className="card-base card-hover p-6">
                  <div className={`text-primary text-4xl mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <FaCheck className="text-gray-700"/>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 text-gray-700 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(feature.title, language)}
                  </h3>
                  <p className={`text-gray-700 text-lg leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(feature.description, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <h2 className={`text-4xl font-bold mb-12 text-center text-[#1E1E1E] ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Benefits' : 'الفوائد'}
            </h2>
            <div className="grid-cards-2">
              {service.benefits.map((benefit, index) => (
                <div key={index} className={`bg-gray-50 p-6 rounded-lg border-l-4 border-primary ${isRTL ? 'border-l-0 border-r-4' : ''}`}>
                  <h3 className={`text-2xl font-bold mb-3 text-gray-700 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(benefit.title, language)}
                  </h3>
                  <p className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(benefit.description, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <h2 className={`text-4xl font-bold mb-12 text-center text-[#1E1E1E] ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Related Industries' : 'الصناعات ذات الصلة'}
            </h2>
            <div className="grid-cards">
              {relatedIndustries.map((industry) => (
                <Link 
                  href={`/industries/${industry.slug}`} 
                  key={industry.id}
                  className="group hover-lift"
                >
                  <div className="card-base card-hover overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image
                        src={industry.image?.url || '/images/industries/oil-gas-industry.jpg'}
                        alt={industry.image?.altText ? getLocalizedContent(industry.image.altText, language) : getLocalizedContent(industry.name, language)}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-2xl font-bold mb-2 text-gray-700 transition duration-300 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                        {getLocalizedContent(industry.name, language)}
                      </h3>
                      <p className={`text-gray-600 text-lg leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                        {getLocalizedContent(industry.shortDescription, language)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <h2 className={`text-4xl font-bold mb-12 text-center text-[#1E1E1E] ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h2>
            <div className="max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div key={index} className="mb-8 border-b border-gray-200 pb-6">
                  <h3 className={`text-xl font-bold mb-1 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(faq.question, language)}
                  </h3>
                  <p className={`text-base text-gray-600 leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {getLocalizedContent(faq.answer, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/90 to-red-600/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'
            }
          </p>
          <Link href="/contact" className={`btn-spacing-lg inline-block bg-white text-orange-600 hover:bg-gray-100 shadow-lg hover:shadow-xl hover-lift ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePageClient;