'use client';

import React, { useState, useEffect } from 'react';
import { useIndustryBySlug, useServices, useLocalizedIndustryContent } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getIndustryIconById } from '@/utils/iconMapping';

interface LocalizedText {
  en: string;
  ar: string;
}

interface CaseStudy {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  image?: {
    url: string;
    altText: LocalizedText;
  };
  tags?: string[];
}

interface Solution {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

interface IndustryPageClientProps {
  slug: string;
}

export default function IndustryPageClient({ slug }: IndustryPageClientProps) {
  const { industry, isLoading: industryLoading } = useIndustryBySlug(slug);
  const { services, isLoading: servicesLoading } = useServices();
  const { language, direction } = useLanguage();
  const localizedIndustry = useLocalizedIndustryContent(industry);
  
  // Animation and interaction states
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Scroll effect for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // If we're loading or there's no data, render nothing instead of 404
  if (industryLoading || servicesLoading) {
    return null;
  }
  
  // Only show 404 if we finished loading and didn't find the industry
  if (!industry || !localizedIndustry) {
    return notFound();
  }

  const relatedServices = industry.relatedServices && industry.relatedServices.length > 0 ? 
    services.filter(s => industry.relatedServices?.includes(s.id)) : [];

  const keyStats = [
    { title: language === 'en' ? 'Clients Served' : 'العملاء المخدومين' },
    { title: language === 'en' ? 'Annual Growth' : 'النمو السنوي' },
    { title: language === 'en' ? 'Success Rate' : 'معدل النجاح' },
  ];

  return (
    <div className={`pt-20 pb-24 min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-white`}>
      {/* Hero Section with Parallax Effect */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-10 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/images/grid-pattern.png')`,
            backgroundSize: '30px 30px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        ></div>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Back button */}
            <div className="w-full md:w-auto mb-6 md:mb-0 relative z-50">
              <Link 
                href="/industries" 
                className="inline-flex items-center text-blue-700 hover:text-blue-800 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg shadow-card hover:shadow-card-hover font-bold text-lg cursor-pointer pointer-events-auto transition-all duration-300"
              >
                {direction === 'ltr' ? 
                  <><FaArrowLeft className="me-2" size={20} /> {language === 'en' ? 'All Industries' : 'جميع الصناعات'}</> : 
                  <>{language === 'en' ? 'All Industries' : 'جميع الصناعات'} <FaArrowRight className="ms-2" size={20} /></>
                }
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-manifabold mb-4">
                {language === 'en' ? localizedIndustry.name.en : localizedIndustry.name.ar}
              </h1>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl font-manifalight">
                {language === 'en' ? localizedIndustry.shortDescription.en : localizedIndustry.shortDescription.ar}
              </p>
              
              {/* Hero Stats */}
              <div className="flex flex-wrap gap-4 items-center">
                {keyStats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <span className="text-white font-manifalight">{stat.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs Navigation */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex flex-wrap -mb-px">
                <button
                  onClick={() => setActiveTab(0)}
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === 0
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent'
                  }`}
                >
                  {language === 'en' ? 'Overview' : 'نظرة عامة'}
                </button>
                <button
                  onClick={() => setActiveTab(1)}
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === 1
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent'
                  }`}
                >
                  {language === 'en' ? 'Success Stories' : 'قصص النجاح'}
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === 2
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent'
                  }`}
                >
                  {language === 'en' ? 'Solutions' : 'الحلول'}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-300 ease-in-out">
              {/* Overview Tab */}
              <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <div className="font-manifalight leading-relaxed space-y-6 text-gray-700 whitespace-pre-line">
                      {language === 'en' ? localizedIndustry.fullDescription.en : localizedIndustry.fullDescription.ar}
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories Tab */}
              <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
                {(industry as { caseStudies?: CaseStudy[] }).caseStudies && (industry as { caseStudies?: CaseStudy[] }).caseStudies.length > 0 ? (
                  <div className="space-y-8">
                    {(industry as { caseStudies: CaseStudy[] }).caseStudies.map((caseStudy: CaseStudy) => (
                      <div 
                        key={caseStudy.id}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:border-blue-200"
                        onMouseEnter={() => setHoveredCard(caseStudy.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="md:flex">
                          {caseStudy.image && (
                            <div className="md:w-1/3 relative overflow-hidden">
                              <div className="h-48 md:h-full w-full">
                                <Image 
                                  src={caseStudy.image.url} 
                                  alt={language === 'en' ? caseStudy.image.altText.en : caseStudy.image.altText.ar}
                                  className={`object-cover w-full h-full transition-transform duration-1000 ${hoveredCard === caseStudy.id ? 'scale-110' : 'scale-100'}`}
                                  width={300}
                                  height={200}
                                />
                              </div>
                              <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 transition-opacity duration-300 ${hoveredCard === caseStudy.id ? 'opacity-100' : ''}`}></div>
                            </div>
                          )}
                          <div className="md:w-2/3 p-6">
                            <h3 className="text-xl font-manifabold text-gray-900 mb-2 flex items-center">
                              <span className={`w-1 h-8 bg-blue-600 rounded-full me-3 transition-all duration-300 ${hoveredCard === caseStudy.id ? 'h-16' : 'h-8'}`}></span>
                              {language === 'en' ? caseStudy.title.en : caseStudy.title.ar}
                            </h3>
                            <p className="text-gray-700 mb-4 font-manifalight">
                              {language === 'en' ? caseStudy.description.en : caseStudy.description.ar}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {caseStudy.tags && caseStudy.tags.map((tag: string, idx: number) => (
                                <span 
                                  key={idx} 
                                  className={`text-sm font-manifalight px-3 py-1 rounded-full transition-all duration-300 ${hoveredCard === caseStudy.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500 italic font-manifalight p-4 text-center border border-dashed border-gray-300 rounded-lg">
                    {language === 'en' ? 'Success stories will be added soon.' : 'سيتم إضافة قصص النجاح قريبًا.'}
                  </div>
                )}
              </div>

              {/* Solutions Tab with Enhanced Animations */}
              <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(industry as { solutions?: Solution[] }).solutions && (industry as { solutions?: Solution[] }).solutions.map((solution: Solution) => (
                    <div 
                      key={solution.id}
                      className="p-6 border border-gray-200 rounded-lg shadow-card hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
                      onMouseEnter={() => setHoveredCard(solution.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <h3 className="text-xl font-manifabold text-gray-900 group-hover:text-blue-700 transition-colors mb-3">
                        {language === 'en' ? solution.title.en : solution.title.ar}
                      </h3>
                      <p className="text-gray-700 font-manifalight">
                        {language === 'en' ? solution.description.en : solution.description.ar}
                      </p>
                    </div>
                  ))}

                  {(!(industry as { solutions?: Solution[] }).solutions || (industry as { solutions?: Solution[] }).solutions.length === 0) && (
                    <div className="text-gray-500 italic font-manifalight p-4 text-center border border-dashed border-gray-300 rounded-lg md:col-span-2">
                      {language === 'en' ? 'Solutions will be added soon.' : 'سيتم إضافة الحلول قريبًا.'}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-manifabold text-gray-900 mb-4">
                {language === 'en' ? 'Ready to solve your industry challenges?' : 'هل أنت مستعد لحل تحديات صناعتك؟'}
              </h3>
              <p className="text-gray-700 mb-6 font-manifalight">
                {language === 'en' 
                  ? "Contact our team today to discuss how our specialized solutions for the " + localizedIndustry.name + " industry can address your specific needs."
                  : "اتصل بفريقنا اليوم لمناقشة كيف يمكن لحلولنا المتخصصة لصناعة " + localizedIndustry.name + " معالجة احتياجاتك الخاصة."}
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-manifabold py-3 px-8 rounded-lg transition-all duration-300 shadow-btn-primary hover:shadow-btn-primary-hover transform hover:-translate-y-1"
              >
                {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </Link>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Industry Insights */}
            <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200 shadow-card">
              <h3 className="text-xl font-manifabold text-gray-900 mb-4">
                {language === 'en' ? 'Industry Insights' : 'رؤى الصناعة'}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-manifalight">{language === 'en' ? 'Market Size' : 'حجم السوق'}</span>
                  <span className="text-gray-900 font-manifabold">
                    {language === 'en' ? '$54.8B' : '54.8 مليار دولار'}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-manifalight">{language === 'en' ? 'Growth Rate' : 'معدل النمو'}</span>
                  <span className="text-green-600 font-manifabold">+8.4% {language === 'en' ? 'YoY' : 'سنويًا'}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600 font-manifalight">{language === 'en' ? 'Key Challenges' : 'التحديات الرئيسية'}</span>
                  <span className="text-gray-900 font-manifabold">{language === 'en' ? '3' : '3'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-manifalight">{language === 'en' ? 'Adoption Rate' : 'معدل التبني'}</span>
                  <span className="text-gray-900 font-manifabold">73%</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200 shadow-card">
              <h3 className="text-xl font-manifabold text-gray-900 mb-4">
                {language === 'en' ? 'Need Assistance?' : 'بحاجة للمساعدة؟'}
              </h3>
              <p className="text-gray-700 mb-6 font-manifalight">
                {language === 'en' 
                  ? "Our industry experts are ready to discuss your specific challenges and requirements."
                  : "خبراء الصناعة لدينا مستعدون لمناقشة تحدياتك ومتطلباتك الخاصة."}
              </p>
              <Link 
                href="/contact" 
                className="w-full inline-block text-center bg-blue-700 hover:bg-blue-800 text-white font-manifabold py-3 px-6 rounded-lg transition-all duration-300 shadow-btn-primary hover:shadow-btn-primary-hover"
              >
                {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
              </Link>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-manifabold text-gray-900 mb-4">
                  {language === 'en' ? 'Related Services' : 'الخدمات ذات الصلة'}
                </h3>
                <ul className="space-y-3">
                  {relatedServices.map((service) => (
                    <li key={service.id} className="group">
                      <Link 
                        href={`/services/${service.slug}`}
                        className="block p-3 rounded-lg hover:bg-blue-100/50 transition-colors"
                      >
                        <div>
                          <h4 className="text-gray-900 font-manifabold group-hover:text-blue-700 transition-colors">
                            {language === 'en' ? service.name.en : service.name.ar}
                          </h4>
                          <p className="text-sm text-gray-600 font-manifalight mt-1">
                            {(language === 'en' ? service.shortDescription.en : service.shortDescription.ar)?.substring(0, 80)}...
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
