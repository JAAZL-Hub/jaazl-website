'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '@/contexts/LanguageContext';
import { getFeatureIcon, getIndustryIcon, getNavigationIcon, getMiscIcon, getContactIcon } from '@/utils/iconMapping';

// Splide imports
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

const clients = [
  { name: "SABIC", nameArabic: "سابك", logo: "/images/clients/sabic-logo.webp", logoAlt: "SABIC Logo" },
  { name: "Aramco", nameArabic: "أرامكو", logo: "/images/clients/aramco-logo.webp", logoAlt: "Saudi Aramco Logo" },
  { name: "Ma'aden", nameArabic: "معادن", logo: "/images/clients/maaden-logo.webp", logoAlt: "Ma'aden Logo" },
  { name: "NEOM", nameArabic: "نيوم", logo: "/images/clients/neom-logo.webp", logoAlt: "NEOM Logo" },
  { name: "SATORP", nameArabic: "ساتورب", logo: "/images/clients/satorp-logo.webp", logoAlt: "SATORP Logo" },
  { name: "Advanced", nameArabic: "المتقدمة", logo: "/images/clients/advanced-logo.webp", logoAlt: "Advanced Logo" },
  { name: "Tasnee", nameArabic: "تصنيع", logo: "/images/clients/tasnee-logo.webp", logoAlt: "Tasnee Logo" }
];

const JAAZLHomepage: React.FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);
  
  const [activeService, setActiveService] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Services data - Updated sequence: Water, Chemical, Consulting, Technologies, Material, Electromech
  const services = [
    {
      icon: React.createElement(getIndustryIcon('droplets'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Water & Wastewater Treatment" : "معالجة المياه ومياه الصرف الصحي",
      description: language === 'en' ? "Complete water solutions including cooling/boiler water treatment, reverse osmosis systems, ion exchange systems, and waste water treatment with MBR, MBBR, CGI, MLD & ZLD technologies." : "حلول مياه شاملة تشمل معالجة مياه التبريد/الغلايات وأنظمة التناضح العكسي وأنظمة تبادل الأيونات ومعالجة مياه الصرف بتقنيات MBR وMBBR وCGI وMLD وZLD.",
      features: language === 'en' ? ["Zero Liquid Discharge", "Industrial Waste Management", "Oily Water Treatment"] : ["التفريغ السائل الصفري", "إدارة النفايات الصناعية", "معالجة المياه الزيتية"],
      color: "from-blue-600 to-cyan-700",
      slug: 'zero-liquid-discharge'
    },
    {
      icon: React.createElement(getIndustryIcon('flask-conical'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Specialty & Bulk Chemicals" : "الكيماويات المتخصصة والسائبة",
      description: language === 'en' ? "Comprehensive chemical solutions for industrial excellence, including drilling & production chemicals, water treatment systems, mining & fertilizer chemicals, and bulk commodity chemicals." : "حلول كيميائية شاملة للتميز الصناعي، تشمل كيماويات الحفر والإنتاج وأنظمة معالجة المياه وكيماويات التعدين والأسمدة والكيماويات السائبة.",
      features: language === 'en' ? ["Specialized Chemicals", "Bulk Chemical Supply", "Chemical Blending"] : ["المواد الكيميائية المتخصصة", "توريد الكيماويات بالجملة", "الخلط الكيميائي"],
      color: "from-violet-600 to-purple-700",
      slug: 'specialized-chemicals'
    },
    {
      icon: React.createElement(getMiscIcon('robot'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Technical Consultancy & AI" : "الاستشارات التقنية والذكاء الاصطناعي",
      description: language === 'en' ? "Advanced engineering solutions including process safety, reliability engineering, sustainability & energy management, applied AI & digital solutions, and process engineering." : "حلول هندسية متقدمة تشمل سلامة العمليات وهندسة الموثوقية وإدارة الاستدامة والطاقة والذكاء الاصطناعي التطبيقي والحلول الرقمية وهندسة العمليات.",
      features: language === 'en' ? ["Engineering Consulting", "Process Safety Management", "Reliability Engineering"] : ["الاستشارات الهندسية", "إدارة سلامة العمليات", "هندسة الموثوقية"],
      color: "from-indigo-600 to-blue-700",
      slug: 'engineering-consulting'
    },
    {
      icon: React.createElement(getMiscIcon('microchip'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Digital Technologies & Automation" : "التقنيات الرقمية والأتمتة",
      description: language === 'en' ? "Cutting-edge digital transformation solutions including AI & industrial automation, digital transformation strategies, and advanced technology integration for industrial operations." : "حلول تحول رقمي متطورة تشمل الذكاء الاصطناعي والأتمتة الصناعية واستراتيجيات التحول الرقمي وتكامل التقنيات المتقدمة للعمليات الصناعية.",
      features: language === 'en' ? ["AI & Automation", "Digital Transformation", "Smart Manufacturing"] : ["الذكاء الاصطناعي والأتمتة", "التحول الرقمي", "التصنيع الذكي"],
      color: "from-green-600 to-emerald-700",
      slug: 'ai-automation'
    },
    {
      icon: React.createElement(getMiscIcon('cubes'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Material Supplies" : "إمدادات المواد",
      description: language === 'en' ? "API & Aramco approved materials including prefabricated tanks, pipes & fittings, valves & actuators, raw materials & metals, and storage & infrastructure solutions." : "مواد معتمدة من API وأرامكو تشمل الأنابيب والتجهيزات والصمامات والمحركات والمواد الخام والمعادن وحلول التخزين والبنية التحتية.",
      features: language === 'en' ? ["Prefabricated Tanks - FM & NFPA", "Pipes & Fittings", "Valves & Actuators"] : ["مواد معتمدة من API", "أنابيب وتجهيزات", "صمامات ومحركات"],
      color: "from-slate-600 to-gray-700",
      slug: 'api-materials'
    },
    {
      icon: React.createElement(getFeatureIcon('zap'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Electromechanical Services" : "الخدمات الكهروميكانيكية",
      description: language === 'en' ? "Complete engineering solutions for industrial infrastructure including mechanical engineering services, electrical & instrumentation, and turnaround & construction services." : "حلول هندسية شاملة للبنية التحتية الصناعية تشمل خدمات الهندسة الميكانيكية والكهربائية والأجهزة وخدمات الصيانة والإنشاءات.",
      features: language === 'en' ? ["Electromechanical Systems", "Shutdown & Turnaround", "Fabrication Services"] : ["الأنظمة الكهروميكانيكية", "الإغلاق والصيانة الدورية", "خدمات التصنيع"],
      color: "from-orange-600 to-red-700",
      slug: 'electromechanical-systems'
    }
  ];

  // Industries data - Updated with consistent project numbers  
  const industries = [
    { 
      icon: React.createElement(getIndustryIcon('droplet'), { className: "w-8 h-8" }), 
      name: {en: "Oil & Gas", ar: "النفط والغاز"}, 
      projects: {en: "30+ Projects", ar: "30+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('factory'), { className: "w-8 h-8" }), 
      name: {en: "Petrochemicals", ar: "البتروكيماويات"}, 
      projects: {en: "30+ Projects", ar: "30+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('filter'), { className: "w-8 h-8" }), 
      name: {en: "Refineries", ar: "المصافي"}, 
      projects: {en: "30+ Projects", ar: "30+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('hammer'), { className: "w-8 h-8" }), 
      name: {en: "Mining & Minerals", ar: "التعدين والمعادن"}, 
      projects: {en: "20+ Projects", ar: "20+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('seedling'), { className: "w-8 h-8" }), 
      name: {en: "Fertilizers", ar: "الأسمدة"}, 
      projects: {en: "15+ Projects", ar: "15+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('power'), { className: "w-8 h-8" }), 
      name: {en: "Power & Electricity", ar: "الطاقة والكهرباء"}, 
      projects: {en: "15+ Projects", ar: "15+ مشروع"} 
    },
    { 
      icon: React.createElement(getMiscIcon('cog'), { className: "w-8 h-8" }), 
      name: {en: "Manufacturing", ar: "التصنيع"}, 
      projects: {en: "20+ Projects", ar: "20+ مشروع"} 
    },
    { 
      icon: React.createElement(getMiscIcon('utensils'), { className: "w-8 h-8" }), 
      name: {en: "Food & Beverages", ar: "الأغذية والمشروبات"}, 
      projects: {en: "10+ Projects", ar: "10+ مشروع"} 
    },
    { 
      icon: React.createElement(getIndustryIcon('building'), { className: "w-8 h-8" }), 
      name: {en: "Municipal", ar: "البلديات"}, 
      projects: {en: "5+ Projects", ar: "5+ مشروع"} 
    }
  ];

  const features = [
    {
      icon: React.createElement(getFeatureIcon('award'), { className: "w-8 h-8" }),
      title: { en: "World-Class Partnerships", ar: "شراكات عالمية" },
      description: language === 'en' ? "Strategic alliances with global technology leaders for cutting-edge solutions." : "تحالفات استراتيجية مع قادة التكنولوجيا العالمية للحلول المتطورة.",
      highlight: language === 'en' ? "Global Partners" : "شركاء عالميون"
    },
    {
      icon: React.createElement(getMiscIcon('map-pin'), { className: "w-8 h-8" }),
      title: { en: "Local Expertise", ar: "خبرة محلية" },
      description: language === 'en' ? "Deep understanding of Eastern Province industrial requirements and Saudi regulatory compliance." : "فهم عميق لمتطلبات المنطقة الشرقية الصناعية والامتثال للوائح السعودية.",
      highlight: language === 'en' ? "Jubail HQ" : "المقر الجبيل"
    },
    {
      icon: React.createElement(getMiscIcon('users'), { className: "w-8 h-8" }),
      title: { en: "Expert Team", ar: "فريق من الخبراء" },
      description: language === 'en' ? "Highly qualified engineers and technical specialists with international and local experience." : "مهندسون مؤهلون تأهيلاً عالياً ومتخصصون تقنيون ذوو خبرة دولية ومحلية.",
      highlight: language === 'en' ? "25+ Years Experience" : "خبرة 25+ عام"
    },
    {
      icon: React.createElement(getFeatureIcon('shield'), { className: "w-8 h-8" }),
      title: { en: "Proven Results", ar: "نتائج مثبتة" },
      description: language === 'en' ? "ISO certified operations with comprehensive warranties and industry-leading safety standards." : "عمليات معتمدة من ISO مع ضمانات شاملة ومعايير أمان رائدة في الصناعة.",
      highlight: language === 'en' ? "API Approved" : "معتمد من API"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Enhanced Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen text-white overflow-hidden flex items-center"
        aria-label={language === 'en' ? 'Hero section' : 'القسم الرئيسي'}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          style={{
            backgroundImage: `url('/images/industries/refineries-industry.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gradient Overlay with 60% transparency */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/60 via-slate-900/60 to-blue-900/60"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-20">
          <div className={`absolute top-32 sm:top-28 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse ${isRTL ? 'right-10' : 'left-10'}`}></div>
          <div className={`absolute bottom-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000 ${isRTL ? 'left-10' : 'right-10'}`}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full hero-container">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isRTL ? 'lg:col-start-2 text-right' : 'text-left'}`}>
              <h1 className={`hero-heading font-bold leading-tight mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'en' ? (
                  <>
                    Industrial Solutions
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">
                      Excellence
                    </span>
                    <span className="block hero-subtitle text-blue-200 font-normal mt-2">
                      in Saudi Arabia
                    </span>
                  </>
                ) : (
                  <>
                    حلول صناعية
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">
                      متميزة
                    </span>
                    <span className="block hero-subtitle text-blue-200 font-normal mt-2">
                      في السعودية
                    </span>
                  </>
                )}
              </h1>
              
              <p className={`hero-description text-blue-100 mb-8 leading-relaxed max-w-2xl ${isRTL ? 'font-arabic' : ''}`}>
                {language === 'en' 
                  ? "Comprehensive engineering, environmental, and industrial solutions serving Jubail & Dammam with world-class technology and local expertise."
                  : "حلول هندسية وبيئية وصناعية شاملة في الجبيل والدمام مع شراكات تقنية عالمية وخبرة محلية."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link 
                  href="/contact" 
                  className={`group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                  aria-label={language === 'en' ? 'Request consultation' : 'اطلب استشارة'}
                >
                  {language === 'en' ? 'Request Consultation' : 'اطلب استشارة'}
                </Link>
                <Link 
                  href="#services" 
                  className={`group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                  aria-label={language === 'en' ? 'Learn more about services' : 'اعرف المزيد عن الخدمات'}
                >
                  {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                </Link>
              </div>
            </div>
            
            {/* Enhanced Hero Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isRTL ? 'lg:col-start-1' : ''} lg:mt-0 mt-8 max-w-lg mx-auto lg:max-w-none`}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className={`group text-center p-3 rounded-xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-white/30 ${
                          activeService === index 
                            ? 'bg-white/20 scale-105 border-white/50' 
                            : 'bg-white/5 hover:bg-white/15'
                        }`} 
                        onClick={() => setActiveService(index)}
                        aria-label={`Select ${service.title} service`}
                      >
                        <p className={`text-[10px] lg:text-xs font-semibold text-white leading-tight ${isRTL ? 'font-arabic' : ''}`}>
                          {service.title}
                        </p>
                        <div className={`mt-2 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                          isRTL 
                            ? 'bg-gradient-to-l from-blue-500 to-orange-500' 
                            : 'bg-gradient-to-r from-blue-500 to-orange-500'
                        }`}></div>
                      </button>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 lg:p-6 border border-white/20">
                    <h3 className={`text-base lg:text-lg font-bold text-white mb-2 lg:mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                      {services[activeService].title}
                    </h3>
                    <p className={`text-blue-100 text-xs lg:text-sm mb-3 lg:mb-4 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                      {services[activeService].description}
                    </p>
                  </div>
                </div>
                <div 
                  className={`absolute -top-3 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl rotate-12 opacity-80 animate-bounce ${
                    isRTL ? 'left-0' : 'right-0'
                  }`}
                  aria-hidden="true"
                ></div>
                <div 
                  className={`absolute -bottom-3 w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl -rotate-12 opacity-80 animate-pulse ${
                    isRTL ? 'right-0' : 'left-0'
                  }`}
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Comprehensive Industrial Solutions' : 'حلول صناعية شاملة'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "From advanced engineering to environmental solutions, we provide end-to-end services for Saudi Arabia's industrial sector." 
                : "من الهندسة المتقدمة إلى الحلول البيئية، نقدم خدمات متكاملة للقطاع الصناعي في المملكة."}
            </p>
          </div>
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`group p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'border-blue-900 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 hover:shadow-md bg-white hover:border-blue-300'
                  }`} 
                  onClick={() => setActiveService(index)}
                >
                  <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* services-sticky-widget */}
            <div className=" mt-10">
              <div className={`bg-gradient-to-br ${services[activeService].color} rounded-3xl p-8 lg:p-10 text-white shadow-xl transform transition-all duration-300`}>
                <div className="mb-8">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                    {services[activeService].title}
                  </h3>
                  <p className={`text-blue-100 mb-8 text-xl leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {services[activeService].description}
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className={`flex items-center group ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                      <span className={`text-xl font-medium ${isRTL ? 'font-arabic' : ''}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Link 
                    href={`/services/${services[activeService].slug}`} 
                    className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center group ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                  >
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                  </Link>
                  <a 
                    href="/Docs/JAAZL Profile.pdf" 
                    download="JAAZL Profile.pdf"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                  >
                    {language === 'en' ? 'Profile' : 'ملف الشركة'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industries Section */}
      <section id="industries" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Specialized Solutions for Key Sectors' : 'حلول متخصصة للقطاعات الرئيسية'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Delivering excellence across Saudi Arabia's most critical industrial sectors" 
                : "تقديم التميز في أهم القطاعات الصناعية بالمملكة"}
            </p>
          </div>
          
          {/* Industries Carousel */}
          <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
            <Splide
            options={{
              type: 'loop',
              drag: 'free',
              focus: 'center',
              perPage: 3,
              perMove: 1,
              gap: '1rem',
              direction: isRTL ? 'rtl' : 'ltr',
              autoScroll: {
                speed: isRTL ? -1 : 1,
              },
              breakpoints: {
                768: {
                  perPage: 1,
                  gap: '1rem',
                },
                1024: {
                  perPage: 2,
                  gap: '1.5rem',
                },
              },
              arrows: false,
              pagination: false,
            }}
            extensions={{ AutoScroll }}
          >
            {industries.map((industry, index) => (
              <SplideSlide key={index}>
                <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center cursor-pointer hover:border-blue-300 mx-2">
                  <div className="text-gray-600 group-hover:text-blue-900 mb-6 flex justify-center transition-all duration-300 group-hover:scale-110">
                    {industry.icon}
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                    {industry.name[language]}
                  </h3>
                  <p className={`text-sm text-gray-500 group-hover:text-blue-600 transition-colors font-medium ${isRTL ? 'font-arabic' : ''}`}>
                    {industry.projects[language]}
                  </p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </SplideSlide>
            ))}
            </Splide>
          </div>
        </div>
      </section>

      {/* Enhanced Our Clients Section */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Trusted by Industry Leaders' : 'موثوق به من قادة الصناعة'}
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Serving Saudi Arabia's most prestigious industrial companies with world-class solutions" 
                : "خدمة أرقى الشركات الصناعية في المملكة بحلول عالمية المستوى"}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-12 items-center justify-center">
            {clients.map((client, index) => (
              <div key={index} className="group text-center transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="relative w-full h-24 mx-auto flex items-center justify-center">
                  <Image 
                    src={client.logo} 
                    alt={client.logoAlt} 
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-300 group-hover:grayscale-0 grayscale"
                  />
                </div>
                <p className={`mt-4 font-semibold text-gray-700 group-hover:text-blue-900 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'en' ? client.name : client.nameArabic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose JAAZL Section */}
      <section id="why-choose-us" className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className={`absolute top-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl ${isRTL ? 'right-20' : 'left-20'}`}></div>
          <div className={`absolute bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl ${isRTL ? 'left-20' : 'right-20'}`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' ? "Your Trusted Partner for Industrial Excellence" : "شريكك الموثوق للتميز الصناعي"}
            </h2>
            <p className={`text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Combining global expertise with local knowledge to deliver unmatched industrial solutions." 
                : "نجمع بين الخبرة العالمية والمعرفة المحلية لتقديم حلول صناعية لا مثيل لها."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:shadow-xl">
                <div className="text-yellow-300 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold mb-4">
                  {feature.highlight}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-300 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                  {feature.title[language]}
                </h3>
                <p className={`text-blue-100 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {feature.description}
                </p>
                <div className="mt-6 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/90 to-red-600/90"></div>
          <div className={`absolute top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse ${isRTL ? 'right-20' : 'left-20'}`}></div>
          <div className={`absolute bottom-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000 ${isRTL ? 'left-20' : 'right-20'}`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-5xl lg:text-7xl font-bold mb-8 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Ready to Transform Your Industrial Operations?" 
                : "هل أنت مستعد لتحويل عملياتك الصناعية؟"}
            </h2>
            <p className={`text-3xl text-orange-100 mb-12 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Get expert consultation and tailored solutions for your industrial challenges. Our team is ready to help you achieve operational excellence." 
                : "احصل على استشارة الخبراء وحلول مصممة خصيصًا لتحدياتك الصناعية. فريقنا جاهز لمساعدتك في تحقيق التميز التشغيلي."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/contact" 
                className={`group bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center text-xl ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
              >
                {React.createElement(getMiscIcon('calendar'), { 
                  className: `w-6 h-6 group-hover:scale-110 transition-transform ${isRTL ? 'ms-3' : 'me-3'}` 
                })}
                {language === 'en' ? "Schedule Free Consultation" : "احجز استشارة مجانية"}
                {React.createElement(getNavigationIcon(isRTL ? 'arrow-left' : 'arrow-right'), { 
                  className: `w-6 h-6 transition-transform ${isRTL ? 'me-3 group-hover:-translate-x-1' : 'ms-3 group-hover:translate-x-1'}` 
                })}
              </Link>
              <a 
                href="/Docs/JAAZL Profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center text-xl ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
              >
                {language === 'en' ? "Download Company Profile" : "تحميل ملف الشركة"}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`flex items-center justify-center ${isRTL ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
                  {React.createElement(getContactIcon('phone'), { 
                    className: `w-6 h-6 text-green-300 ${isRTL ? 'ms-3' : 'me-3'}` 
                  })}
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <div className={`font-semibold ${isRTL ? 'font-arabic' : ''}`}>
                      {language === 'en' ? "Call Us Now" : "اتصل بنا الآن"}
                    </div>
                    <a href="tel:+966555109268" className="text-orange-100 hover:text-white transition-colors">
                      +966 55 510 9268
                    </a>
                  </div>
                </div>
                <div className={`flex items-center justify-center ${isRTL ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
                  {React.createElement(getContactIcon('mail'), { 
                    className: `w-6 h-6 text-blue-300 ${isRTL ? 'ms-3' : 'me-3'}` 
                  })}
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <div className={`font-semibold ${isRTL ? 'font-arabic' : ''}`}>
                      {language === 'en' ? "Email Us" : "راسلنا"}
                    </div>
                    <a href="mailto:sales@jaazl.com" className="text-orange-100 hover:text-white transition-colors">
                      sales@jaazl.com
                    </a>
                  </div>
                </div>
                <div className={`flex items-center justify-center ${isRTL ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
                  {React.createElement(getMiscIcon('map-pin'), { 
                    className: `w-6 h-6 text-yellow-300 ${isRTL ? 'ms-3' : 'me-3'}` 
                  })}
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <div className={`font-semibold ${isRTL ? 'font-arabic' : ''}`}>
                      {language === 'en' ? "Visit Our Office" : "زر مكتبنا"}
                    </div>
                    <p className={`text-orange-100 ${isRTL ? 'font-arabic' : ''}`}>
                      Jubail Industrial Area 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        .hero-container {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        
        .hero-heading {
          font-size: 2.5rem;
          line-height: 1.1;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
        }
        
        .hero-description {
          font-size: 1.125rem;
        }
        
        @media (min-width: 640px) {
          .hero-heading {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
          .hero-description {
            font-size: 1.25rem;
          }
        }
        .mt-22 {
          margin-top: calc(var(--spacing) * 22);
        }
        @media (min-width: 1024px) {
          .hero-heading {
            font-size: 4.5rem;
          }
          .hero-subtitle {
            font-size: 2rem;
          }
          .hero-description {
            font-size: 1.5rem;
          }
        }
        
        @media (min-width: 1280px) {
          .hero-heading {
            font-size: 5rem;
          }
          .hero-subtitle {
            font-size: 2.25rem;
          }
          .hero-description {
            font-size: 1.75rem;
          }
        }
        
        /* Height-based responsive adjustments */
        @media (max-height: 840px) {
          #hero {
            min-height: auto !important;
            padding-top: 5rem !important;
            padding-bottom: 2rem !important;
          }
          .hero-container {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .hero-heading {
            font-size: 2.5rem !important;
            margin-bottom: 1rem !important;
          }
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
          .hero-description {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
        }
        
        @media (max-height: 700px) {
          #hero {
            padding-top: 4rem !important;
            padding-bottom: 1rem !important;
          }
          .hero-heading {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
          }
          .hero-description {
            font-size: 0.875rem !important;
            margin-bottom: 1.25rem !important;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Enhanced sticky widget for services section */
        .services-sticky-widget {
          position: -webkit-sticky;
          position: sticky;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          height: fit-content;
          will-change: transform;
        }
        
        /* Ensure no parent breaks sticky */
        #services .max-w-7xl,
        #services .grid {
          overflow: visible;
        }
        
        @media (max-width: 1024px) {
          .services-sticky-widget {
            position: relative;
            top: auto;
            max-height: none;
            overflow-y: visible;
          }
        }
        
        /* Hide sticky widget on phone viewport */
        @media (max-width: 767px) {
          .services-sticky-widget {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default JAAZLHomepage;