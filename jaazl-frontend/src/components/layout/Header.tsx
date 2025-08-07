'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaBars, FaTimes, FaGlobe, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

// Data for mega menus - Updated to 6 categories: Water, Chemical, Consulting, Technologies, Material, Electromech
const serviceCategories = {
  water: {
    name: { en: 'Water & Wastewater Treatment', ar: 'معالجة المياه ومياه الصرف الصحي' },
    services: [
      { name: { en: 'Zero Liquid Discharge Systems', ar: 'أنظمة التفريغ السائل الصفري' }, path: '/services/zero-liquid-discharge' },
      { name: { en: 'Industrial Waste Management', ar: 'إدارة النفايات الصناعية' }, path: '/services/waste-management' },
      { name: { en: 'Oily Water & Hydrocarbon Treatment', ar: 'معالجة المياه الزيتية والهيدروكربونية' }, path: '/services/oily-water-treatment' }
    ]
  },
  chemical: {
    name: { en: 'Specialty & Bulk Chemicals', ar: 'الكيماويات المتخصصة والسائبة' },
    services: [
      { name: { en: 'Specialized Industrial Chemicals', ar: 'المواد الكيميائية الصناعية المتخصصة' }, path: '/services/specialized-chemicals' },
      { name: { en: 'Bulk Industrial Chemicals Supply', ar: 'توريد المواد الكيميائية الصناعية بالجملة' }, path: '/services/bulk-chemicals-supply' },
      { name: { en: 'Local Chemical Manufacturing & Blending', ar: 'التصنيع والخلط الكيميائي المحلي' }, path: '/services/chemical-blending' }
    ]
  },
  consulting: {
    name: { en: 'Technical Consultancy & AI', ar: 'الاستشارات التقنية والذكاء الاصطناعي' },
    services: [
      { name: { en: 'Industrial Engineering Consulting', ar: 'استشارات الهندسة الصناعية' }, path: '/services/engineering-consulting' },
      { name: { en: 'Process Safety Management', ar: 'إدارة سلامة العمليات' }, path: '/services/process-safety' },
      { name: { en: 'Reliability Engineering', ar: 'هندسة الموثوقية' }, path: '/services/reliability-engineering' }
    ]
  },
  technologies: {
    name: { en: 'Digital Technologies & Automation', ar: 'التقنيات الرقمية والأتمتة' },
    services: [
      { name: { en: 'AI & Industrial Automation', ar: 'الذكاء الاصطناعي والأتمتة الصناعية' }, path: '/services/ai-automation' },
      { name: { en: 'Industrial Digital Transformation', ar: 'التحول الرقمي الصناعي' }, path: '/services/digital-transformation' },
      { name: { en: 'Smart Manufacturing Solutions', ar: 'حلول التصنيع الذكي' }, path: '/services/smart-manufacturing' }
    ]
  },
  material: {
    name: { en: 'Material Supplies', ar: 'إمدادات المواد' },
    services: [
      { name: { en: 'API Approved Materials', ar: 'مواد معتمدة من API' }, path: '/services/api-materials' },
      { name: { en: 'Pipes & Fittings', ar: 'أنابيب وتجهيزات' }, path: '/services/pipes-fittings' },
      { name: { en: 'Valves & Actuators', ar: 'صمامات ومحركات' }, path: '/services/valves-actuators' }
    ]
  },
  electromech: {
    name: { en: 'Electromechanical Services', ar: 'الخدمات الكهروميكانيكية' },
    services: [
      { name: { en: 'Industrial Electromechanical Systems', ar: 'أنظمة كهروميكانيكية صناعية' }, path: '/services/electromechanical-systems' },
      { name: { en: 'Shutdown & Turnaround Solutions', ar: 'حلول الإغلاق والصيانة الدورية' }, path: '/services/shutdown-turnaround' },
      { name: { en: 'Industrial Fabrication Services', ar: 'خدمات التصنيع الصناعي' }, path: '/services/fabrication-services' }
    ]
  }
};

// Industries - Updated to 9 industries
const industries = [
  { name: { en: 'Oil & Gas', ar: 'النفط والغاز' }, path: '/industries/oil-gas' },
  { name: { en: 'Petrochemicals', ar: 'البتروكيماويات' }, path: '/industries/petrochemicals' },
  { name: { en: 'Refineries', ar: 'المصافي' }, path: '/industries/refineries' },
  { name: { en: 'Mining & Minerals', ar: 'التعدين والمعادن' }, path: '/industries/mining' },
  { name: { en: 'Fertilizers', ar: 'الأسمدة' }, path: '/industries/fertilizers' },
  { name: { en: 'Power & Electricity', ar: 'الطاقة والكهرباء' }, path: '/industries/power' },
  { name: { en: 'Manufacturing', ar: 'التصنيع' }, path: '/industries/manufacturing' },
  { name: { en: 'Food & Beverages', ar: 'الأغذية والمشروبات' }, path: '/industries/food-beverages' },
  { name: { en: 'Municipal', ar: 'البلديات' }, path: '/industries/municipal' },
];

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const pathname = usePathname();
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
  const [isIndustriesDropdownOpen, setIndustriesDropdownOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
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
  
  const NavLink = ({ href, children, isActive }: { href: string, children: React.ReactNode, isActive?: boolean }) => (
    <Link 
      href={href} 
      className={`relative font-medium transition-colors duration-300 group py-2 px-4 rounded-lg ${
        scrolled 
          ? isActive 
            ? 'text-blue-900 bg-blue-50' 
            : 'text-gray-800 hover:bg-gray-100' 
          : 'text-white hover:bg-white/10'
      } ${isRTL ? 'font-arabic' : ''}`}
    >
      {children}
      <span className={`absolute bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-1/2 transition-all duration-300 ${
        isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
      }`}></span>
    </Link>
  );

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm'
        }`} 
        dir={isRTL ? 'rtl' : 'ltr'}
      >
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
            <nav className={`hidden lg:flex items-center gap-4 ${
              scrolled ? 'bg-gray-100/50 border-gray-200' : 'bg-white/5 border-white/10'
            } border rounded-full p-1 shadow-lg backdrop-blur-sm`}>
              
              <NavLink href="/" isActive={pathname === '/'}>
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </NavLink>
              
              {/* Services Mega Menu */}
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="relative group"
              >
                <Link 
                  href="/services"
                  className={`flex items-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    scrolled
                      ? pathname.startsWith('/services') 
                        ? 'text-blue-900 bg-blue-50' 
                        : 'text-gray-800 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {language === 'en' ? 'Services' : 'الخدمات'}
                </Link>
                
                {isServicesDropdownOpen && (
                  <div className={`absolute top-full pt-3 w-64 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50 ${
                    isRTL ? 'right-0' : 'left-0'
                  }`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-visible">
                      <div className="py-2">
                        {Object.entries(serviceCategories).map(([categoryKey, category]) => (
                          <div key={categoryKey} className="relative group/category">
                            <div className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                              <h3 className={`font-medium text-gray-800 text-sm flex items-center justify-between ${
                                isRTL ? 'flex-row-reverse font-arabic' : ''
                              }`}>
                                {category.name[language]}
                                <span className={`text-gray-400 text-xs ${isRTL ? 'me-2' : 'ms-2'}`}>
                                  {isRTL ? '←' : '→'}
                                </span>
                              </h3>
                            </div>

                            {/* Sub-menu */}
                            <div 
                              className={`absolute top-0 w-72 bg-white backdrop-blur-md rounded-xl shadow-lg border border-gray-200 overflow-visible opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-200 ${
                                isRTL 
                                  ? 'right-full me-2' 
                                  : 'left-full ms-2'
                              }`}
                              style={{ zIndex: 9999 }}
                            >
                              <div className="py-2">
                                <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
                                  <h4 className={`font-semibold text-blue-900 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                                    {category.name[language]}
                                  </h4>
                                </div>
                                {category.services.map((service) => (
                                  <Link 
                                    key={service.path} 
                                    href={service.path} 
                                    className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                                  >
                                    <span className={`font-medium text-gray-700 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                                      {service.name[language]}
                                    </span>
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

              {/* Industries Mega Menu */}
              <div
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
                className="relative group"
              >
                <Link 
                  href="/industries"
                  className={`flex items-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    scrolled
                      ? pathname.startsWith('/industries') 
                        ? 'text-blue-900 bg-blue-50' 
                        : 'text-gray-800 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {language === 'en' ? 'Industries' : 'الصناعات'}
                </Link>
                
                {isIndustriesDropdownOpen && (
                  <div className={`absolute top-full pt-3 w-80 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50 ${
                    isRTL ? 'right-0' : 'left-0'
                  }`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {industries.map((industry) => (
                          <Link 
                            key={industry.path} 
                            href={industry.path} 
                            className="flex flex-col items-center text-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <span className={`text-gray-800 text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                              {industry.name[language]}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <NavLink href="/about" isActive={pathname === '/about'}>
                {language === 'en' ? 'About' : 'من نحن'}
              </NavLink>
              
              <NavLink href="/contact" isActive={pathname === '/contact'}>
                {language === 'en' ? 'Contact' : 'اتصل بنا'}
              </NavLink>
              
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage} 
                className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                  scrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200' 
                    : 'bg-black/20 hover:bg-white/10 text-white border border-white/10'
                } ${isRTL ? 'ms-2' : 'me-2'}`}
                aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <FaGlobe className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              className={`lg:hidden p-2 flex-shrink-0 transition-colors ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              } rounded-lg`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-expanded={isMenuOpen}
              aria-label={language === 'en' ? 'Toggle menu' : 'فتح/إغلاق القائمة'}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden" 
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 w-full max-w-sm bg-blue-900/95 backdrop-blur-md z-40 transform transition-all duration-300 lg:hidden overflow-y-auto ${
          isMenuOpen 
            ? 'translate-x-0' 
            : isRTL 
              ? '-translate-x-full' 
              : 'translate-x-full'
        } ${isRTL ? 'left-0' : 'right-0'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
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
              className="p-2 text-white hover:text-orange-400 transition-colors rounded-lg"
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
              className={`block text-white text-xl font-medium py-3 px-2 border-b border-white/10 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text[language]}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="pt-2">
            <button 
              onClick={() => toggleMobileDropdown('services')} 
              className={`flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic flex-row-reverse' : ''
              }`}
            >
              <span>{language === 'en' ? 'Services' : 'الخدمات'}</span>
              {activeDropdown === 'services' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {activeDropdown === 'services' && (
              <div className={`mt-2 space-y-3 border-orange-500 ${
                isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'
              }`}>
                {Object.entries(serviceCategories).map(([categoryKey, category]) => (
                  <div key={categoryKey}>
                    <h4 className={`text-orange-300 font-medium text-sm mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {category.name[language]}
                    </h4>
                    <div className={`space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
                      {category.services.map((service) => (
                        <Link 
                          key={service.path} 
                          href={service.path} 
                          className={`block py-1 text-blue-200 hover:text-white text-sm transition-colors duration-200 ${
                            isRTL ? 'font-arabic text-right' : ''
                          }`}
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
              className={`flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic flex-row-reverse' : ''
              }`}
            >
              <span>{language === 'en' ? 'Industries' : 'الصناعات'}</span>
              {activeDropdown === 'industries' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {activeDropdown === 'industries' && (
              <div className={`mt-2 space-y-2 border-orange-500 ${
                isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'
              }`}>
                {industries.map(industry => (
                  <Link 
                    key={industry.path} 
                    href={industry.path} 
                    className={`block py-2 text-blue-200 hover:text-white transition-colors duration-200 ${
                      isRTL ? 'font-arabic text-right' : ''
                    }`}
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
              className={`w-full text-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-white/10 ${
                isRTL ? 'flex-row-reverse font-arabic' : ''
              }`}
            >
              <FaGlobe className={`w-5 h-5 ${isRTL ? 'ms-2' : 'me-2'}`} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <a 
              href="tel:+966555109268" 
              className={`w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                isRTL ? 'font-arabic' : ''
              }`}
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