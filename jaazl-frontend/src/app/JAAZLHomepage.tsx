'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
// Import the icon mapping utility instead of individual icons
import { getIcon, getFeatureIcon, getIndustryIcon, getNavigationIcon, getMiscIcon, getContactIcon } from '@/utils/iconMapping';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

const JAAZLHomepage: React.FC = () => {
  const searchParams = useSearchParams();
  const { language } = useLanguage();

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
  const [currentClient, setCurrentClient] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev + 1) % clients.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Initialize services with icon mapping utility
  const services = [
    {
      icon: React.createElement(getMiscIcon('cog'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Engineering Consulting & AI" : "الاستشارات الهندسية والذكاء الاصطناعي",
      description: "Advanced engineering solutions including digitalization, decarbonization, process optimization, and applied AI technologies.",
      features: ["Digital Twin Technology", "Process Optimization", "Safety & Risk Analysis", "Automation Solutions", "Applied AI", "Decarbonization"],
      color: "from-blue-600 to-blue-800",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: React.createElement(getIndustryIcon('droplets'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Water & Wastewater Treatment" : "معالجة المياه والصرف الصحي",
      description: "Comprehensive water and wastewater treatment solutions including RO systems, ZLD, and industrial water management.",
      features: ["Water Treatment", "Zero Liquid Discharge", "Brine Treatment", "SmartOps AI Platform", "Desalination", "Specialty Chemicals"],
      color: "from-cyan-600 to-blue-700",
      gradient: "bg-gradient-to-br from-cyan-50 to-blue-100"
    },
    {
      icon: React.createElement(getIndustryIcon('flask-conical'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Chemical Solutions" : "الحلول الكيميائية",
      description: "800+ specialty chemicals portfolio for water treatment, bulk chemicals, local manufacturing, and waste management.",
      features: ["Specialty Chemicals", "Bulk Chemicals", "Local Manufacturing", "Waste Management", "Process Chemicals", "API & Aramco Approved"],
      color: "from-purple-600 to-indigo-700",
      gradient: "bg-gradient-to-br from-purple-50 to-indigo-100"
    },
    {
      icon: React.createElement(getFeatureIcon('zap'), { className: "w-8 h-8" }),
      title: language === 'en' ? "Electromechanical Services" : "الخدمات الكهروميكانيكية",
      description: "Complete MEI services, fabrication, EPC projects, and shutdown & turnaround solutions for industrial facilities.",
      features: ["MEI Services", "Fabrication", "EPC Projects", "Turnaround Solutions", "Instrumentation", "Equipment Rentals"],
      color: "from-orange-600 to-red-700",
      gradient: "bg-gradient-to-br from-orange-50 to-red-100"
    }
  ];

  const industries = [
    { icon: React.createElement(getIndustryIcon('droplet'), { className: "w-8 h-8" }), name: {en: "Oil & Gas", ar: "النفط والغاز"}, projects: "150+ Projects" },
    { icon: React.createElement(getIndustryIcon('factory'), { className: "w-8 h-8" }), name: {en: "Petrochemicals", ar: "البتروكيماويات"}, projects: "200+ Projects" },
    { icon: React.createElement(getIndustryIcon('filter'), { className: "w-8 h-8" }), name: {en: "Refineries", ar: "المصافي"}, projects: "80+ Projects" },
    { icon: React.createElement(getIndustryIcon('hammer'), { className: "w-8 h-8" }), name: {en: "Mining", ar: "التعدين"}, projects: "60+ Projects" },
    { icon: React.createElement(getIndustryIcon('building'), { className: "w-8 h-8" }), name: {en: "Municipal", ar: "البلديات"}, projects: "120+ Projects" },
    { icon: React.createElement(getIndustryIcon('power'), { className: "w-8 h-8" }), name: {en: "Power & Electricity", ar: "الطاقة"}, projects: "95+ Projects" }
  ];

  const stats = [
    { number: "2021", label: {en: "Established", ar: "سنة التأسيس"}, icon: React.createElement(getMiscIcon('calendar'), { className: "w-6 h-6" }) },
    { number: "600+", label: {en: "Projects Completed", ar: "مشروع مكتمل"}, icon: React.createElement(getFeatureIcon('trending-up'), { className: "w-6 h-6" }) },
    { number: "6", label: {en: "Industries Served", ar: "صناعة نخدمها"}, icon: React.createElement(getIndustryIcon('factory'), { className: "w-6 h-6" }) },
    { number: "24/7", label: {en: "Support Available", ar: "دعم على مدار الساعة"}, icon: React.createElement(getMiscIcon('clock'), { className: "w-6 h-6" }) }
  ];

  const features = [
    {
      icon: React.createElement(getFeatureIcon('award'), { className: "w-8 h-8" }),
      title: { en: "World-Class Partnerships", ar: "شراكات عالمية" },
      description: "Strategic alliances with global technology leaders for cutting-edge solutions.",
      highlight: "Global Partners"
    },
    {
      icon: React.createElement(getMiscIcon('map-pin'), { className: "w-8 h-8" }),
      title: { en: "Local Expertise", ar: "خبرة محلية" },
      description: "Deep understanding of Eastern Province industrial requirements and Saudi regulatory compliance.",
      highlight: "Jubail HQ"
    },
    {
      icon: React.createElement(getMiscIcon('users'), { className: "w-8 h-8" }),
      title: { en: "Expert Team", ar: "فريق من الخبراء" },
      description: "Highly qualified engineers and technical specialists with international and local experience.",
      highlight: "23+ Years Experience"
    },
    {
      icon: React.createElement(getFeatureIcon('shield'), { className: "w-8 h-8" }),
      title: { en: "Proven Results", ar: "نتائج مثبتة" },
      description: "ISO certified operations with comprehensive warranties and industry-leading safety standards.",
      highlight: "API & Aramco Approved"
    }
  ];

  const clients = [
    { name: "SABIC", nameArabic: "سابك", logo: "/images/clients/sabic-logo.png", logoAlt: "SABIC Logo" },
    { name: "Aramco", nameArabic: "أرامكو", logo: "/images/clients/aramco-logo.png", logoAlt: "Saudi Aramco Logo" },
    { name: "Ma'aden", nameArabic: "معادن", logo: "/images/clients/maaden-logo.png", logoAlt: "Ma'aden Logo" },
    { name: "NEOM", nameArabic: "نيوم", logo: "/images/clients/neom-logo.png", logoAlt: "NEOM Logo" },
    { name: "SATORP", nameArabic: "ساتورب", logo: "/images/clients/satorp-logo.png", logoAlt: "SATORP Logo" },
    { name: "Advanced", nameArabic: "المتقدمة", logo: "/images/clients/advanced-logo.png", logoAlt: "Advanced Logo" },
    { name: "Tasnee", nameArabic: "تصنيع", logo: "/images/clients/tasnee-logo.png", logoAlt: "Tasnee Logo" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/95 to-blue-900/90"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                {language === 'en' ? (
                  <>
                    Industrial Solutions
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">
                      Excellence
                    </span>
                    <span className="block text-3xl lg:text-4xl text-blue-200 font-normal mt-4">
                      in Saudi Arabia's East
                    </span>
                  </>
                ) : (
                  <>
                    حلول صناعية
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">
                      متميزة
                    </span>
                    <span className="block text-3xl lg:text-4xl text-blue-200 font-normal mt-4">
                      في المنطقة الشرقية
                    </span>
                  </>
                )}
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                {language === 'en' 
                  ? "Comprehensive engineering, environmental, and industrial solutions serving Jubail & Dammam with world-class technology and local expertise."
                  : "حلول هندسية وبيئية وصناعية شاملة في الجبيل والدمام مع شراكات تقنية عالمية وخبرة محلية."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact" className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  {React.createElement(getContactIcon('message-circle'), { className: "mx-3 w-5 h-5 group-hover:scale-110 transition-transform" })}
                  {language === 'en' ? 'Request Consultation' : 'اطلب استشارة'}
                  {React.createElement(getNavigationIcon('arrow-right'), { className: "mx-3 w-5 h-5 group-hover:translate-x-1 transition-transform" })}
                </Link>
                <Link href="/#why-choose-us" className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  {React.createElement(getMiscIcon('circle-ellipsis'), { className: "mx-3 w-5 h-5 group-hover:scale-110 transition-transform" })}
                  {language === 'en' ? 'Know More' : 'اعرف المزيد'}
                </Link>
              </div>
            </div>
            
            {/* Enhanced Hero Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {services.map((service, index) => (
                      <div key={index} className={`group text-center p-6 rounded-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-white/30 ${activeService === index ? 'bg-white/20 scale-105' : 'bg-white/5 hover:bg-white/15'}`} onClick={() => setActiveService(index)}>
                        <div className="text-orange-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                        <p className="text-sm font-semibold text-white">{service.title.split(' ').slice(0, 2).join(' ')}</p>
                        <div className="mt-2 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h3 className="text-lg font-bold text-white mb-3">{services[activeService].title}</h3>
                    <p className="text-blue-100 text-sm mb-4">{services[activeService].description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {services[activeService].features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-blue-200">
                          {React.createElement(getFeatureIcon('check-circle'), { className: "w-3 h-3 mx-1 text-green-400" })}{feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl rotate-12 opacity-80 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl -rotate-12 opacity-80 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-900 rounded-full font-medium mb-4">
              {React.createElement(getMiscIcon('cog'), { className: "w-4 h-4 mx-2" })}{language === 'en' ? 'Our Services' : 'خدماتنا'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{language === 'en' ? 'Comprehensive Industrial Solutions' : 'حلول صناعية شاملة'}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{language === 'en' ? "From advanced engineering to environmental solutions, we provide end-to-end services for Saudi Arabia's industrial sector." : "من الهندسة المتقدمة إلى الحلول البيئية، نقدم خدمات متكاملة للقطاع الصناعي في المملكة."}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className={`group p-8 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${activeService === index ? 'border-blue-900 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg bg-white'}`} onClick={() => setActiveService(index)}>
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-xl transition-all duration-300 ${activeService === index ? 'bg-blue-900 text-white scale-110' : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-900'}`}>{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      {activeService === index && (<div className="grid grid-cols-2 gap-3 animate-fadeIn">{service.features.map((feature, idx) => (<div key={idx} className="flex items-center text-sm text-blue-900">{React.createElement(getFeatureIcon('check-circle'), { className: "w-4 h-4 mx-2 text-green-500" })}<span className="font-medium">{feature}</span></div>))}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sticky top-24">
              <div className={`bg-gradient-to-br ${services[activeService].color} rounded-3xl p-10 text-white shadow-2xl transform transition-all duration-500 hover:scale-105`}>
                <div className="mb-8">
                  <div className="text-orange-400 mb-6 p-4 bg-white/10 rounded-2xl w-fit">{services[activeService].icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{services[activeService].title}</h3>
                  <p className="text-blue-100 mb-8 text-lg leading-relaxed">{services[activeService].description}</p>
                </div>
                <div className="space-y-4 mb-8">{services[activeService].features.map((feature, index) => (<div key={index} className="flex items-center group">{React.createElement(getFeatureIcon('check-circle'), { className: "w-6 h-6 text-orange-400 mx-4 group-hover:scale-110 transition-transform" })}<span className="text-lg font-medium">{feature}</span></div>))}</div>
                <div className="flex space-x-4">
                  <Link href={`/services/${activeService === 0 ? 'engineering-consulting' : activeService === 1 ? 'ai-automation' : 'chemical-solutions'}`} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center group">{language === 'en' ? 'Learn More' : 'اعرف المزيد'}{React.createElement(getNavigationIcon('arrow-right'), { className: "mx-2 w-5 h-5 group-hover:translate-x-1 transition-transform" })}</Link>
                  <a href="/docs/JAAZL-Profile.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center">{React.createElement(getMiscIcon('download'), { className: "mx-2 w-5 h-5" })}{language === 'en' ? 'Brochure' : 'الكتيب'}</a>
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
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-900 rounded-full font-medium mb-4">{React.createElement(getIndustryIcon('factory'), { className: "w-4 h-4 mx-2" })}{language === 'en' ? 'Industries We Serve' : 'الصناعات التي نخدمها'}</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{language === 'en' ? 'Specialized Solutions for Key Sectors' : 'حلول متخصصة للقطاعات الرئيسية'}</h2>
            <p className="text-lg text-gray-600">{language === 'en' ? "Delivering excellence across Saudi Arabia's most critical industrial sectors" : "تقديم التميز في أهم القطاعات الصناعية بالمملكة"}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (<div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 text-center cursor-pointer transform hover:-translate-y-4"><div className="text-gray-600 group-hover:text-blue-900 mb-6 flex justify-center transition-all duration-300 group-hover:scale-110">{industry.icon}</div><h3 className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors text-lg mb-2">{industry.name[language]}</h3><p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors font-medium">{industry.projects}</p><div className="mt-4 h-1 bg-gradient-to-r from-blue-900 to-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div></div>))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Clients Section */}
      <section id="clients" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-900 rounded-full font-medium mb-4">{React.createElement(getMiscIcon('building-2'), { className: "w-4 h-4 mx-2" })}{language === 'en' ? 'Our Clients' : 'عملاؤنا'}</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{language === 'en' ? 'Trusted by Industry Leaders' : 'موثوق به من قادة الصناعة'}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{language === 'en' ? "Serving Saudi Arabia's most prestigious industrial companies with world-class solutions" : "خدمة أرقى الشركات الصناعية في المملكة بحلول عالمية المستوى"}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-12 border border-blue-200 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
                <img src={clients[currentClient].logo} alt={clients[currentClient].logoAlt} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{language === 'en' ? clients[currentClient].name : clients[currentClient].nameArabic}</h3>
            </div>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-6 mb-12">
            {clients.map((client, index) => (<div key={index} className={`group cursor-pointer p-4 rounded-2xl border-2 transition-all duration-500 text-center ${currentClient === index ? 'border-blue-900 bg-blue-50 shadow-xl scale-105' : 'border-gray-200 hover:border-blue-300 hover:shadow-lg bg-white hover:bg-blue-50'}`} onClick={() => setCurrentClient(index)}><div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-md flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"><img src={client.logo} alt={client.logoAlt} className="max-w-full max-h-full object-contain" /></div></div>))}
          </div>
          <div className="flex justify-center space-x-3">{clients.map((_, index) => (<button key={index} className={`transition-all duration-300 ${currentClient === index ? 'w-8 h-3 bg-blue-900 rounded-full' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'}`} onClick={() => setCurrentClient(index)}/>))}</div>
        </div>
      </section>

      {/* Enhanced Why Choose JAAZL Section */}
      <section id="why-choose-us" className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div><div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium mb-4">{React.createElement(getFeatureIcon('award'), { className: "w-4 h-4 mx-2 text-orange-400" })}{language === 'en' ? "Why Choose JAAZL" : "لماذا تختار جزيل"}</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">{language === 'en' ? "Your Trusted Partner for Industrial Excellence" : "شريكك الموثوق للتميز الصناعي"}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">{language === 'en' ? "Combining global expertise with local knowledge to deliver unmatched industrial solutions." : "نجمع بين الخبرة العالمية والمعرفة المحلية لتقديم حلول صناعية لا مثيل لها."}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (<div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 transform hover:-translate-y-2"><div className="text-orange-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{feature.icon}</div><div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold mb-4">{feature.highlight}</div><h3 className="text-xl font-bold mb-4 group-hover:text-orange-300 transition-colors">{feature.title[language]}</h3><p className="text-blue-100 leading-relaxed">{feature.description}</p><div className="mt-6 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div></div>))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/90 to-red-600/90"></div><div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div><div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">{language === 'en' ? "Ready to Transform Your Industrial Operations?" : "هل أنت مستعد لتحويل عملياتك الصناعية؟"}</h2>
            <p className="text-xl text-orange-100 mb-12 leading-relaxed">{language === 'en' ? "Get expert consultation and tailored solutions for your industrial challenges. Our team is ready to help you achieve operational excellence." : "احصل على استشارة الخبراء وحلول مصممة خصيصًا لتحدياتك الصناعية. فريقنا جاهز لمساعدتك."}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:bg-gray-50 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center text-lg">{React.createElement(getMiscIcon('calendar'), { className: "mx-3 w-6 h-6 group-hover:scale-110 transition-transform" })}{language === 'en' ? "Schedule Free Consultation" : "احجز استشارة مجانية"}{React.createElement(getNavigationIcon('arrow-right'), { className: "mx-3 w-6 h-6 group-hover:translate-x-1 transition-transform" })}</Link>
              <a href="/docs/JAAZL-Profile.pdf" target="_blank" rel="noopener noreferrer" className="group border-2 border-white/30 hover:border-white text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex items-center justify-center text-lg">{React.createElement(getMiscIcon('download'), { className: "mx-3 w-6 h-6 group-hover:scale-110 transition-transform" })}{language === 'en' ? "Download Company Profile" : "تحميل ملف الشركة"}</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center md:justify-start">{React.createElement(getContactIcon('phone'), { className: "w-6 h-6 mx-3 text-green-300" })}<div className="text-left"><div className="font-semibold">{language === 'en' ? "Call Us Now" : "اتصل بنا الآن"}</div><a href="tel:+966555109268" className="text-orange-100 hover:text-white transition-colors">+966 55 510 9268</a></div></div>
                <div className="flex items-center justify-center md:justify-start">{React.createElement(getContactIcon('mail'), { className: "w-6 h-6 mx-3 text-blue-300" })}<div className="text-left"><div className="font-semibold">{language === 'en' ? "Email Us" : "راسلنا"}</div><a href="mailto:info@jaazl.com" className="text-orange-100 hover:text-white transition-colors">info@jaazl.com</a></div></div>
                <div className="flex items-center justify-center md:justify-start">{React.createElement(getContactIcon('map-pin'), { className: "w-6 h-6 mx-3 text-yellow-300" })}<div className="text-left"><div className="font-semibold">{language === 'en' ? "Visit Our Office" : "زر مكتبنا"}</div><p className="text-orange-100">Jubail Industrial Area 1</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JAAZLHomepage;