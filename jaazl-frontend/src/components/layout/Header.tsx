'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaBars, FaTimes, FaGlobe, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

// Data for mega menus
const serviceCategories = {
  engineering: {
    name: { en: 'Engineering & AI Solutions', ar: 'حلول الهندسة والذكاء الاصطناعي' },
    services: [
      { name: { en: 'Industrial Engineering Consulting', ar: 'استشارات الهندسة الصناعية' }, path: '/services/engineering-consulting' },
      { name: { en: 'AI & Industrial Automation', ar: 'الذكاء الاصطناعي والأتمتة الصناعية' }, path: '/services/ai-automation' },
      { name: { en: 'Industrial Digital Transformation', ar: 'التحول الرقمي الصناعي' }, path: '/services/digital-transformation' },
      { name: { en: 'Industrial Project Management', ar: 'إدارة المشاريع الصناعية' }, path: '/services/project-management' },
      { name: { en: 'Industrial System Integration', ar: 'تكامل الأنظمة الصناعية' }, path: '/services/system-integration' },
      { name: { en: 'Technical Training & Development', ar: 'التدريب والتطوير التقني' }, path: '/services/technical-training' }
    ]
  },
  environmental: {
    name: { en: 'Environmental Solutions', ar: 'الحلول البيئية' },
    services: [
      { name: { en: 'Environmental Compliance & Sustainability', ar: 'الامتثال البيئي والاستدامة' }, path: '/services/environmental-compliance' },
      { name: { en: 'Environmental Monitoring & Assessment', ar: 'المراقبة والتقييم البيئي' }, path: '/services/environmental-monitoring' },
      { name: { en: 'Industrial Waste Management', ar: 'إدارة النفايات الصناعية' }, path: '/services/waste-management' },
      { name: { en: 'Zero Liquid Discharge Systems', ar: 'أنظمة التفريغ السائل الصفري' }, path: '/services/zero-liquid-discharge' },
      { name: { en: 'Spent Caustic Treatment', ar: 'معالجة الصودا الكاوية المستهلكة' }, path: '/services/spent-caustic-treatment' },
      { name: { en: 'Oily Water & Hydrocarbon Treatment', ar: 'معالجة المياه الزيتية والهيدروكربونية' }, path: '/services/oily-water-treatment' }
    ]
  },
  chemicals: {
    name: { en: 'Chemical Solutions', ar: 'الحلول الكيميائية' },
    services: [
      { name: { en: 'Specialized Industrial Chemicals', ar: 'المواد الكيميائية الصناعية المتخصصة' }, path: '/services/specialized-chemicals' },
      { name: { en: 'Process Optimization Chemicals', ar: 'كيماويات تحسين العمليات' }, path: '/services/process-chemicals' },
      { name: { en: 'Chemical Laboratory Services', ar: 'خدمات المختبرات الكيميائية' }, path: '/services/laboratory-services' },
      { name: { en: 'Bulk Industrial Chemicals Supply', ar: 'توريد المواد الكيميائية الصناعية بالجملة' }, path: '/services/bulk-chemicals-supply' },
      { name: { en: 'Local Chemical Manufacturing & Blending', ar: 'التصنيع والخلط الكيميائي المحلي' }, path: '/services/chemical-blending' },
      { name: { en: 'Off-Spec & By-Products Management', ar: 'إدارة المنتجات غير المطابقة والمنتجات الثانوية' }, path: '/services/offspec-management' }
    ]
  },
  electromechanical: {
    name: { en: 'Electromechanical Services', ar: 'الخدمات الكهروميكانيكية' },
    services: [
      { name: { en: 'Industrial Electromechanical Systems', ar: 'أنظمة كهروميكانيكية صناعية' }, path: '/services/electromechanical-systems' },
      { name: { en: 'Industrial Power Systems', ar: 'أنظمة الطاقة الصناعية' }, path: '/services/power-systems' },
      { name: { en: 'Industrial Automation & Controls', ar: 'أتمتة وضوابط صناعية' }, path: '/services/automation-controls' },
      { name: { en: 'Shutdown & Turnaround Solutions', ar: 'حلول الإغلاق والصيانة الدورية' }, path: '/services/shutdown-turnaround' },
      { name: { en: 'Industrial Fabrication Services', ar: 'خدمات التصنيع الصناعي' }, path: '/services/fabrication-services' },
      { name: { en: 'Prefabricated Tanks & Storage Solutions', ar: 'حلول الخزانات والتخزين مسبقة التصنيع' }, path: '/services/prefabricated-tanks' }
    ]
  }
};



const industries = [
  { name: { en: 'Oil & Gas', ar: 'النفط والغاز' }, path: '/industries/oil-gas' },
  { name: { en: 'Petrochemicals', ar: 'البتروكيماويات' }, path: '/industries/petrochemicals' },
  { name: { en: 'Refineries', ar: 'المصافي' }, path: '/industries/refineries' },
  { name: { en: 'Mining', ar: 'التعدين' }, path: '/industries/mining' },
  { name: { en: 'Municipal', ar: 'البلديات' }, path: '/industries/municipal' },
  { name: { en: 'Power & Electricity', ar: 'الطاقة والكهرباء' }, path: '/industries/power' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
  const [isIndustriesDropdownOpen, setIndustriesDropdownOpen] = useState<boolean>(false);
  const [, setHoveredCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };
    
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initialize scroll state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);



  const toggleMobileDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-toggle')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  const navLinks = [
    { href: '/', text: { en: 'Home', ar: 'الرئيسية' } },
    { href: '/about', text: { en: 'About', ar: 'من نحن' } },
    { href: '/contact', text: { en: 'Contact', ar: 'اتصل بنا' } },
  ];
  
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link href={href} className={`relative ${scrolled ? 'text-gray-800' : 'text-white'} font-medium transition-colors duration-300 group py-2 px-4 rounded-lg ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-1/2 transition-all duration-300"></span>
    </Link>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-gray-200' : 'bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm'
      }`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="w-24 h-8 sm:w-32 sm:h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <Image 
                  src="/images/JAAZL-Logo.svg" 
                  alt="JAAZL Logo" 
                  width={128} 
                  height={48} 
                  className={`object-contain transition-all duration-300 ${
                    scrolled 
                      ? 'brightness-100 contrast-100' 
                      : 'brightness-0 invert'
                  }`}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-4 ${scrolled ? 'bg-gray-100/50' : 'bg-white/5'} border ${scrolled ? 'border-gray-200' : 'border-white/10'} rounded-full p-1 shadow-card backdrop-blur-sm`}>
              <NavLink href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</NavLink>
              
              {/* Services Two-Level Mega Menu */}
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => {
                  setServicesDropdownOpen(false);
                  setHoveredCategory(null);
                }}
                className="relative group"
              >
                <Link 
                  href="/services"
                  className={`flex items-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${!scrolled ? 'text-white hover:bg-white/10' : pathname.startsWith('/services') ? 'text-blue-900 bg-blue-50' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  {language === 'en' ? 'Services' : 'الخدمات'}
                </Link>
                {isServicesDropdownOpen && (
                  <div className={`absolute top-full ${language === 'ar' ? 'right-0' : 'left-0'} pt-3 w-64 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-card-hover border border-gray-200 overflow-visible">
                      <div className="py-2">
                        {Object.entries(serviceCategories).map(([categoryKey, category]) => (
                          <div 
                            key={categoryKey} 
                            className="relative group/category"
                          >
                            <div
                              className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                              dir={language === 'ar' ? 'rtl' : 'ltr'}
                            >
                              <h3
                                className={`font-medium text-gray-800 text-sm flex items-center justify-between`}
                              >
                                {language === 'ar' && (
                                  <span className="text-gray-400 text-xs ml-2">←</span>
                                )}
                                {category.name[language]}
                                {language === 'en' && (
                                  <span className="text-gray-400 text-xs ml-2">→</span>
                                )}
                              </h3>
                            </div>

                            <div 
                              className={`absolute top-0 w-72 bg-white backdrop-blur-md rounded-xl shadow-lg border border-gray-200 overflow-visible opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-200`}
                              style={{ 
                                zIndex: 9999,
                                left: language === 'ar' ? 'auto' : '100%',
                                right: language === 'ar' ? '100%' : 'auto',
                                marginLeft: language === 'ar' ? '0' : '8px',
                                marginRight: language === 'ar' ? '8px' : '0'
                              }}
                            >
                              <div className="py-2">
                                <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
                                  <h4 className="font-semibold text-blue-900 text-sm">{category.name[language]}</h4>
                                </div>
                                {category.services.map((service) => (
                                  <Link 
                                    key={service.path} 
                                    href={service.path} 
                                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                                  >
                                    <span className="font-medium text-gray-700 text-sm">{service.name[language]}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Mega Menu (FIXED HOVER) */}
              <div
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
                className="relative group"
              >
                <Link 
                  href="/industries"
                  className={`flex items-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${!scrolled ? 'text-white hover:bg-white/10' : pathname.startsWith('/industries') ? 'text-blue-900 bg-blue-50' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  {language === 'en' ? 'Industries' : 'الصناعات'}
                </Link>
                {isIndustriesDropdownOpen && (
                  <div className={`absolute top-full ${language === 'ar' ? 'right-0' : 'left-0'} pt-3 w-80 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-card-hover border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {industries.map((industry) => (
                          <Link 
                            key={industry.path} 
                            href={industry.path} 
                            className="flex flex-col items-center text-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <span className="text-gray-800 text-sm font-medium">{industry.name[language]}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <NavLink href="/about">{language === 'en' ? 'About' : 'من نحن'}</NavLink>
              <NavLink href="/contact">{language === 'en' ? 'Contact' : 'اتصل بنا'}</NavLink>
              
              <button onClick={toggleLanguage} className={`flex items-center justify-center w-9 h-9 mx-2 rounded-full ${scrolled ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200' : 'bg-black/20 hover:bg-white/10 text-white border border-white/10'} transition-colors`} aria-label="Switch Language">
                <FaGlobe className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button type="button" className={`lg:hidden p-2 flex-shrink-0 ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-full bg-blue-900/95 backdrop-blur-md z-40 transform transition-all duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : language === 'ar' ? '-translate-x-full' : 'translate-x-full'} overflow-y-auto`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="relative">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <div className="w-24 h-8 flex items-center justify-center">
                <Image 
                  src="/images/JAAZL-Logo.svg" 
                  alt="JAAZL Logo" 
                  width={96} 
                  height={32} 
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-orange-400 transition-colors"
              aria-label={language === 'en' ? 'Close menu' : 'إغلاق القائمة'}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="px-6 pb-8 space-y-2 max-h-screen overflow-y-auto">
          {/* Navigation Links */}
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block text-white text-xl font-medium py-3 px-2 border-b border-white/10 hover:text-orange-400 transition-colors duration-200" 
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text[language]}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="pt-2">
            <button 
              onClick={() => toggleMobileDropdown('services')} 
              className="flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200"
            >
              <span>{language === 'en' ? 'Services' : 'الخدمات'}</span>
              {activeDropdown === 'services' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === 'services' && (
              <div className={`mt-2 space-y-3 ${language === 'ar' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-orange-500`}>
                {Object.entries(serviceCategories).map(([categoryKey, category]) => (
                  <div key={categoryKey}>
                    <h4 className="text-orange-300 font-medium text-sm mb-2">{category.name[language]}</h4>
                    <div className={`space-y-1 ${language === 'ar' ? 'pr-2' : 'pl-2'}`}>
                      {category.services.map((service) => (
                        <Link 
                          key={service.path} 
                          href={service.path} 
                          className="block py-1 text-blue-200 hover:text-white text-sm transition-colors duration-200" 
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name[language]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Industries Dropdown */}
          <div className="pt-2">
            <button 
              onClick={() => toggleMobileDropdown('industries')} 
              className="flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200"
            >
              <span>{language === 'en' ? 'Industries' : 'الصناعات'}</span>
              {activeDropdown === 'industries' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            {activeDropdown === 'industries' && (
              <div className={`mt-2 space-y-2 ${language === 'ar' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-orange-500`}>
                {industries.map(industry => (
                  <Link 
                    key={industry.path} 
                    href={industry.path} 
                    className="block py-2 text-blue-200 hover:text-white transition-colors duration-200" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.name[language]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-10 space-y-6">
            <button 
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} 
              className="w-full text-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-white/10"
            >
              <FaGlobe className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <a 
              href="tel:+966555109268" 
              className="w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-btn-cta hover:shadow-btn-cta-hover"
            >
              {language === 'en' ? 'Call Us' : 'اتصل بنا'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;