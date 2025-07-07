'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaBars, FaTimes, FaGlobe
} from 'react-icons/fa';

// Data for mega menus
const services = [
  { 
    name: { en: 'Engineering & AI', ar: 'الهندسة والذكاء الاصطناعي' },
    // FIX: Changed the path to match the service's actual slug
    path: '/services/engineering-consulting', 
    id: 'engineering-consulting', 
    description: { en: 'Digitalization and AI-powered solutions.', ar: 'حلول الرقمنة والذكاء الاصطناعي.' },
  },
  { 
    name: { en: 'AI & Automation', ar: 'الذكاء الاصطناعي والأتمتة' },
    path: '/services/ai-automation', 
    id: 'ai-automation', 
    description: { en: 'AI-powered industrial automation.', ar: 'الأتمتة الصناعية المدعومة بالذكاء الاصطناعي.' },
  },
  { 
    name: { en: 'Chemical Solutions', ar: 'الحلول الكيميائية' },
    path: '/services/chemical-solutions',
    id: 'chemical-solutions', 
    description: { en: 'Specialty chemicals and waste management.', ar: 'كيماويات متخصصة وإدارة النفايات.' },
  },
  { 
    name: { en: 'Electromechanical', ar: 'الكهروميكانيكية' },
    path: '/services/electromechanical',
    id: 'electromechanical-services', 
    description: { en: 'MEI services and turnkey EPC projects.', ar: 'خدمات MEI ومشاريع EPC متكاملة.' },
  },
];



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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const { language, toggleLanguage, direction } = useLanguage();

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
    { href: '/services', text: { en: 'Services', ar: 'الخدمات' } },
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
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${language === 'ar' ? 'rtl' : 'ltr'} ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-gray-200' : 'bg-gradient-to-r from-blue-900/80 to-indigo-900/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <Image 
                      src="/images/JAAZL-Logo 2.png" 
                      alt="JAAZL Logo" 
                      width={48} 
                      height={48} 
                      className="object-contain" 
                    />
                  </div>
                </div>
                <div>
                  <h1 className={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'} ${scrolled ? 'group-hover:text-blue-700' : 'group-hover:text-blue-100'} transition-colors`}>{language === 'en' ? 'JAAZL' : 'جازل'}</h1>
                  <p className={`text-xs ${scrolled ? 'text-blue-700' : 'text-blue-200'} font-medium`}>{language === 'en' ? 'Industrial Solutions' : 'الحلول الصناعية'}</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-4 ${scrolled ? 'bg-gray-100/50' : 'bg-white/5'} border ${scrolled ? 'border-gray-200' : 'border-white/10'} rounded-full p-1 shadow-card backdrop-blur-sm`}>
              <NavLink href="/">{language === 'en' ? 'Home' : 'الرئيسية'}</NavLink>
              
              {/* Services Mega Menu (FIXED HOVER) */}
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="relative group"
              >
                <Link 
                  href="/services"
                  onClick={() => setServicesDropdownOpen(prev => !prev)}
                  className={`flex items-center text-lg font-medium ${!scrolled ? 'text-white hover:text-white/80' : pathname.startsWith('/services') ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'} transition-colors`}
                >
                  {language === 'en' ? 'Services' : 'خدماتنا'}
                </Link>
                {isServicesDropdownOpen && (
                  <div className={`absolute top-full ${direction === 'rtl' ? 'right-0' : 'left-0'} pt-3 w-80 opacity-100 visible transition-all duration-200`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-card-hover border border-gray-200 overflow-hidden">
                      <div className="py-2">
                        {services.map((service) => (
                          <Link key={service.id} href={service.path} className="block p-3 hover:bg-gray-100 transition-colors">
                            <div>
                              <h4 className="font-medium text-gray-800 text-sm">{service.name[language]}</h4>
                              <p className="text-xs text-gray-600">{service.description[language]}</p>
                            </div>
                          </Link>
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
                  onClick={() => setIndustriesDropdownOpen(prev => !prev)}
                  className={`flex items-center text-lg font-medium ${!scrolled ? 'text-white hover:text-white/80' : pathname.startsWith('/industries') ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'} transition-colors`}
                >
                  {language === 'en' ? 'Industries' : 'الصناعات'}
                </Link>
                {isIndustriesDropdownOpen && (
                  <div className={`absolute top-full ${direction === 'rtl' ? 'right-0' : 'left-0'} pt-3 w-80 opacity-100 visible transition-all duration-200`}>
                    <div className="bg-white backdrop-blur-md rounded-xl shadow-card-hover border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {industries.map((industry) => (
                          <Link key={industry.path} href={industry.path} className="flex flex-col items-center text-center p-3 hover:bg-gray-100 rounded-lg transition-colors">
                            <span className="text-gray-800 text-sm">{industry.name[language]}</span>
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
            <button type="button" className={`lg:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed inset-y-0 ${direction === 'rtl' ? 'start-0' : 'end-0'} w-full bg-blue-900/95 backdrop-blur-md z-50 transform transition-all duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : direction === 'rtl' ? 'translate-x-full' : '-translate-x-full'} overflow-y-auto`}>
        <div className="pt-24 px-6 pb-8 space-y-2 max-h-screen overflow-y-auto">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="block text-xl font-medium py-3 border-b border-white/10" onClick={() => setIsMenuOpen(false)}>{link.text[language]}</Link>
          ))}
          
          <div className="pt-2">
            <button onClick={() => toggleMobileDropdown('services')} className="flex justify-between items-center w-full text-xl font-medium py-3">
              <span>{language === 'en' ? 'Services' : 'الخدمات'}</span>
            </button>
            {activeDropdown === 'services' && (
              <div className="ps-4 mt-2 space-y-2 border-s-2 border-orange-500">
                {services.map(s => <Link key={s.id} href={s.path} className="block py-2 text-blue-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>{s.name[language]}</Link>)}
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <button onClick={() => toggleMobileDropdown('industries')} className="flex justify-between items-center w-full text-xl font-medium py-3">
              <span>{language === 'en' ? 'Industries' : 'الصناعات'}</span>
            </button>
            {activeDropdown === 'industries' && (
              <div className="ps-4 mt-2 space-y-2 border-s-2 border-orange-500">
                {industries.map(i => <Link key={i.path} href={i.path} className="block py-2 text-blue-200 hover:text-white" onClick={() => setIsMenuOpen(false)}>{i.name[language]}</Link>)}
              </div>
            )}
          </div>

          <div className="pt-10 space-y-6">
            <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="w-full text-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-white/10">
               {language === 'en' ? 'Switch to العربية' : 'التحويل إلى الإنجليزية'}
             </button>
            <a href="tel:+966555109268" className="w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-btn-cta hover:shadow-btn-cta-hover">
               {language === 'en' ? 'Call Us' : 'اتصل بنا'}
             </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;