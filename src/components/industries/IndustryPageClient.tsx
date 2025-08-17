'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Industry, Service, LocalizedContent } from '@/services/types';
import { useLanguage } from '@/contexts/LanguageContext';


interface IndustryPageClientProps {
  industry: Industry;
  relatedServices: Service[];
}

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent, currentLanguage: string): string => {
  return currentLanguage === 'en' ? content.en : content.ar;
};

const IndustryPageClient: React.FC<IndustryPageClientProps> = ({ industry, relatedServices }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  return (
    <div className={`industry-page-content ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section - Premium Design */}
      <section className="hero-section relative pt-36 pb-24 overflow-hidden">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
          <div className={`absolute top-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse ${isRTL ? 'right-10' : 'left-10'}`}></div>
          <div className={`absolute bottom-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 ${isRTL ? 'left-10' : 'right-10'}`}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className={`flex flex-col lg:flex-row items-center relative z-10 text-white ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className={`lg:w-1/2 w-full ${isRTL ? 'lg:pl-12' : 'lg:pr-12'} ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="mb-6">
                <Link 
                  href="/industries" 
                  className={`inline-flex items-center text-white hover:text-gray-200 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isRTL ? (
                    <>
                      <span className="font-arabic">العودة إلى الصناعات</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ms-2 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 me-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      <span>Back to Industries</span>
                    </>
                  )}
                </Link>
              </div>
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                {getLocalizedContent(industry.name, language)}
              </h1>
              <p className={`text-xl lg:text-2xl mb-8 text-white leading-relaxed ${isRTL ? 'font-arabic' : ''}`}> 
                {getLocalizedContent(industry.shortDescription, language)}
              </p>
            </div>
            
            {/* Image */}
            <div className={`lg:w-1/2 w-full mt-10 lg:mt-0 ${isRTL ? 'lg:pr-12' : 'lg:pl-12'}`}>
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={industry.image?.url || '/images/industries/oil-gas-industry.webp'}
                  alt={industry.image?.altText ? getLocalizedContent(industry.image.altText, language) : getLocalizedContent(industry.name, language)}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#1E1E1E]">{language === 'en' ? 'About' : 'حول'} {getLocalizedContent(industry.name, language)}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {getLocalizedContent(industry.fullDescription, language).split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={`mb-4 text-gray-800 font-medium ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {industry.challenges && industry.challenges.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#1E1E1E]">{language === 'en' ? 'Industry Challenges' : 'تحديات الصناعة'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <h3 className={`text-3xl font-bold mb-3 text-[#1E1E1E] ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(challenge.title, language)}</h3>
                  <p className={`text-gray-600 text-lg ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(challenge.description, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {industry.solutions && industry.solutions.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#1E1E1E]">{language === 'en' ? 'Our Solutions' : 'حلولنا'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-s-4 border-primary">
                  <h3 className={`text-3xl font-bold mb-3 text-[#1E1E1E] ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(solution.title, language)}</h3>
                  <p className={`text-gray-600 text-lg ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(solution.description, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#1E1E1E]">{language === 'en' ? 'Case Studies' : 'دراسات الحالة'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {caseStudy.imageSrc && (
                    <div className="relative w-full h-48">
                      <Image
                        src={caseStudy.imageSrc}
                        alt={getLocalizedContent(caseStudy.title, language)}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className={`text-3xl font-bold mb-3 text-[#1E1E1E] ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(caseStudy.title, language)}</h3>
                    <p className={`text-gray-600 text-lg ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(caseStudy.description, language)}</p>
                    {caseStudy.results && (
                      <div className="mt-4">
                        <h4 className={`font-bold text-lg mb-2 text-[#1E1E1E] ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{language === 'en' ? 'Results:' : 'النتائج:'}</h4>
                        <ul className={`list-disc ${isRTL ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                          {Array.isArray(caseStudy.results) ? 
                            caseStudy.results.map((result: LocalizedContent, idx: number) => (
                              <li key={idx} className={`mb-1 text-gray-800 ${isRTL ? 'font-arabic' : ''}`}>{getLocalizedContent(result, language)}</li>
                            )) : 
                            <li className={`text-gray-800 ${isRTL ? 'font-arabic' : ''}`}>{getLocalizedContent(caseStudy.results, language)}</li>
                          }
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-5xl font-bold mb-12 text-center text-[#1E1E1E]">{language === 'en' ? 'Related Services' : 'الخدمات ذات الصلة'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link 
                  href={`/services/${service.slug}`} 
                  key={service.id}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={service.image?.url || '/images/services/engineering-consulting.webp'}
                        alt={service.image?.altText ? getLocalizedContent(service.image.altText, language) : getLocalizedContent(service.name, language)}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`text-3xl font-bold mb-2 group-hover:text-primary transition duration-300 text-gray-800 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                        {getLocalizedContent(service.name, language)}
                      </h3>
                      <p className={`text-gray-800 text-lg ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{getLocalizedContent(service.shortDescription, language)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/90 to-red-600/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-5xl lg:text-6xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className={`text-lg text-white/90 mb-8 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'
            }
          </p>
          <Link href="/contact" className={`inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isRTL ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageClient;
