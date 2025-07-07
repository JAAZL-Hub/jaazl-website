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
const getLocalizedContent = (content: LocalizedContent, language: string = 'en'): string => {
  return language === 'en' ? content.en : content.ar;
};

const ServicePageClient: React.FC<ServicePageClientProps> = ({ service, relatedIndustries }) => {
  const { language } = useLanguage();
  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
          <div className="absolute top-20 start-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center relative z-10 text-white">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {getLocalizedContent(service.name, 'en')}
              </h1>
              <p className="text-xl mb-8 text-white"> 
                {getLocalizedContent(service.shortDescription, 'en')}
              </p>
              <Link 
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={service.imageSrc || '/images/team/placeholder.png'}
                  alt={getLocalizedContent(service.name, 'en')}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#1E1E1E]">About Our {getLocalizedContent(service.name, 'en')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {getLocalizedContent(service.fullDescription, 'en').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-800 font-medium ">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E1E1E]">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature) => (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-primary text-3xl mb-4">
                    <FaCheck />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(feature.title, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(feature.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E1E1E]">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(benefit.title, 'en')}</h3>
                  <p>{getLocalizedContent(benefit.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E1E1E]">Related Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedIndustries.map((industry) => (
                <Link 
                  href={`/industries/${industry.slug}`} 
                  key={industry.id}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={industry.imageSrc || '/images/team/placeholder.png'}
                        alt={getLocalizedContent(industry.name, 'en')}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                        {getLocalizedContent(industry.name, 'en')}
                      </h3>
                      <p className="text-gray-600">{getLocalizedContent(industry.shortDescription, 'en')}</p>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#1E1E1E]">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div key={index} className="mb-8 border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{getLocalizedContent(faq.question, 'en')}</h3>
                  <p className="text-gray-700 text-gray-800">{getLocalizedContent(faq.answer, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/90 to-red-600/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'
            }
          </p>
          <Link href="/contact" className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicePageClient;
