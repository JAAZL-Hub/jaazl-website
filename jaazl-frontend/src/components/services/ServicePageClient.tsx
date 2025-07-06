'use client';

import React, { useState, useEffect } from 'react';
import { useServiceBySlug, useIndustries, useLocalizedServiceContent } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getIndustryIconById } from '@/utils/iconMapping';

interface ServicePageClientProps {
  slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
  const { service, isLoading: serviceLoading } = useServiceBySlug(slug);
  const { industries, isLoading: industriesLoading } = useIndustries();
  const { language, direction } = useLanguage();
  // This hook likely just validates/memoizes the service object.
  // We still need to select the language for each property.
  const localizedService = useLocalizedServiceContent(service);
  
  // Animation and interaction states
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
  if (serviceLoading || industriesLoading) {
    return null;
  }
  
  // Only show 404 if we finished loading and didn't find the service
  if (!service || !localizedService) {
    return notFound();
  }

  // Note: relatedIndustry is used in the UI but ESLint doesn't detect it
  // Keeping the calculation but commenting it out to fix ESLint error
  // const relatedIndustry = service.relatedIndustries && service.relatedIndustries.length > 0 ? 
  //  industries.find(i => i.id === service.relatedIndustries[0]) : null;

  const features = [
    { title: language === 'en' ? 'Quality Assurance' : 'ضمان الجودة' },
    { title: language === 'en' ? 'Safety Standards' : 'معايير السلامة' },
    { title: language === 'en' ? 'Industrial Grade' : 'مستوى صناعي' },
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
                href="/services" 
                className="inline-flex items-center text-blue-700 hover:text-blue-800 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg shadow-card hover:shadow-card-hover font-bold text-lg cursor-pointer pointer-events-auto transition-all duration-300"
              >
                {direction === 'ltr' ? 
                  <><FaArrowLeft className="mr-2" size={20} /> {language === 'en' ? 'All Services' : 'جميع الخدمات'}</> : 
                  <>{language === 'en' ? 'All Services' : 'جميع الخدمات'} <FaArrowRight className="ml-2" size={20} /></>
                }
              </Link>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-manifabold mb-4">
                {/* FIX: Select language from the name object */}
                {language === 'en' ? localizedService.name.en : localizedService.name.ar}
              </h1>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl font-manifalight">
                {/* FIX: Select language from the shortDescription object */}
                {language === 'en' ? localizedService.shortDescription.en : localizedService.shortDescription.ar}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    <span className="text-white font-manifalight">{feature.title}</span>
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
                  {language === 'en' ? 'Features' : 'المميزات'}
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`inline-block p-4 rounded-t-lg ${
                    activeTab === 2
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent'
                  }`}
                >
                  {language === 'en' ? 'Methodology' : 'المنهجية'}
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
                      {/* FIX: Select language from the fullDescription object */}
                      {language === 'en' ? localizedService.fullDescription.en : localizedService.fullDescription.ar}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Tab */}
              <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features && service.features.map((feature) => (
                    <div 
                      key={feature.id}
                      className="p-6 border border-gray-200 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
                    >
                      <h3 className="text-xl font-manifabold text-gray-900 mb-2">
                        {language === 'en' ? feature.title.en : feature.title.ar}
                      </h3>
                      <p className="text-gray-700 font-manifalight">
                        {language === 'en' ? feature.description.en : feature.description.ar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology Tab */}
              <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <div className="font-manifalight leading-relaxed space-y-6 text-gray-700">
                      <p>
                        {language === 'en' 
                          ? "Our methodology focuses on delivering high-quality results through a structured approach tailored to each client's unique needs."
                          : "تركز منهجيتنا على تقديم نتائج عالية الجودة من خلال نهج منظم مصمم خصيصًا لتلبية احتياجات كل عميل."}
                      </p>
                      <div className="space-y-8 mt-8">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                          <div>
                            <h4 className="text-xl font-manifabold text-gray-900 mb-2">
                              {language === 'en' ? 'Assessment & Analysis' : 'التقييم والتحليل'}
                            </h4>
                            <p className="text-gray-700 font-manifalight">
                              {language === 'en' 
                                ? "We begin with a thorough assessment of your requirements, challenges, and objectives to establish a clear understanding of the desired outcomes."
                                : "نبدأ بإجراء تقييم شامل لمتطلباتك وتحدياتك وأهدافك لتكوين فهم واضح للنتائج المرجوة."}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                          <div>
                            <h4 className="text-xl font-manifabold text-gray-900 mb-2">
                              {language === 'en' ? 'Solution Design' : 'تصميم الحلول'}
                            </h4>
                            <p className="text-gray-700 font-manifalight">
                              {language === 'en' 
                                ? "Our experts develop a tailored solution design that addresses your specific needs, incorporating industry best practices and innovative approaches."
                                : "يقوم خبراؤنا بتطوير تصميم حلول مخصص يلبي احتياجاتك المحددة، مع دمج أفضل الممارسات والأساليب المبتكرة في الصناعة."}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                          <div>
                            <h4 className="text-xl font-manifabold text-gray-900 mb-2">
                              {language === 'en' ? 'Implementation' : 'التنفيذ'}
                            </h4>
                            <p className="text-gray-700 font-manifalight">
                              {language === 'en' 
                                ? "We execute the solution with precision and attention to detail, ensuring all specifications are met and quality standards are maintained throughout."
                                : "نقوم بتنفيذ الحل بدقة واهتمام بالتفاصيل، مما يضمن تلبية جميع المواصفات والحفاظ على معايير الجودة طوال فترة العمل."}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
                          <div>
                            <h4 className="text-xl font-manifabold text-gray-900 mb-2">
                              {language === 'en' ? 'Evaluation & Optimization' : 'التقييم والتحسين'}
                            </h4>
                            <p className="text-gray-700 font-manifalight">
                              {language === 'en' 
                                ? "After implementation, we conduct thorough testing and evaluation, followed by continuous optimization to enhance performance and results."
                                : "بعد التنفيذ، نجري اختبارًا وتقييمًا شاملاً، يليه تحسين مستمر لتعزيز الأداء والنتائج."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-manifabold text-gray-900 mb-4">
                {language === 'en' ? 'Ready to transform your operations?' : 'هل أنت مستعد لتحويل عملياتك؟'}
              </h3>
              <p className="text-gray-700 mb-6 font-manifalight">
                {language === 'en' 
                  ? "Contact our team today to discuss how we can help you achieve your business objectives with our tailored engineering solutions."
                  : "اتصل بفريقنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهداف عملك من خلال حلولنا الهندسية المخصصة."}
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
            {/* Contact Card */}
            <div className="mb-8 p-6 bg-white rounded-xl border border-gray-200 shadow-card">
              <h3 className="text-xl font-manifabold text-gray-900 mb-4">
                {language === 'en' ? 'Need Assistance?' : 'بحاجة للمساعدة؟'}
              </h3>
              <p className="text-gray-700 mb-6 font-manifalight">
                {language === 'en' 
                  ? "Our experts are ready to help you with your service needs."
                  : "خبراؤنا جاهزون لمساعدتك في احتياجات الخدمة الخاصة بك."}
              </p>
              <Link 
                href="/contact" 
                className="w-full inline-block text-center bg-blue-700 hover:bg-blue-800 text-white font-manifabold py-3 px-6 rounded-lg transition-all duration-300 shadow-btn-primary hover:shadow-btn-primary-hover"
              >
                {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
              </Link>
            </div>

            {/* Related Industries Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-manifabold text-gray-900 mb-6 relative">
                <span className="relative z-10">{language === 'en' ? 'Related Industries' : 'الصناعات ذات الصلة'}</span>
                <span className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries
                  .filter(ind => (service.relatedIndustries || []).includes(ind.id))
                  .map(industry => {
                    const Icon = getIndustryIconById(industry.id);
                    return (
                      <Link 
                        key={industry.id}
                        href={`/industries/${industry.slug}`}
                        className="group flex flex-col p-8 rounded-2xl border border-gray-200 bg-white shadow-card hover:shadow-card-hover hover:border-blue-200 transition-all duration-300 text-center min-h-[200px]"
                      >
                        {Icon && (
                          <div className="text-blue-600 group-hover:text-blue-700 mb-4 flex justify-center transition-all duration-300 group-hover:scale-110">
                            <Icon size={40} />
                          </div>
                        )}
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="font-manifabold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">
                            {language === 'en' ? industry.name.en : industry.name.ar}
                          </h3>
                        </div>
                        <div className="mt-auto pt-4">
                          <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>

            {/* Service Benefits with Animation */}
            <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-blue-100 shadow-inner hover:shadow-card-hover transition-all duration-300 mt-8">
              <h3 className="text-2xl font-manifabold text-gray-900 mb-6">
                {language === 'en' ? 'Service Benefits' : 'فوائد الخدمة'}
              </h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li 
                    key={`benefit-${i}`}
                    className="flex items-start p-3 hover:bg-white rounded-lg transition-colors duration-200"
                  >
                    <span className="text-gray-700 font-manifalight">
                      {language === 'en' ? 
                        i === 1 ? 'Enhanced operational efficiency and productivity' :
                        i === 2 ? 'Reduced operational costs and resource usage' :
                        i === 3 ? 'Improved safety standards and compliance' :
                        'Access to industry-leading expertise and technology'
                      : 
                        i === 1 ? 'تحسين كفاءة العمليات والإنتاجية' :
                        i === 2 ? 'خفض تكاليف التشغيل واستخدام الموارد' :
                        i === 3 ? 'تحسين معايير السلامة والامتثال' :
                        'الوصول إلى خبرة وتكنولوجيا رائدة في الصناعة'
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}