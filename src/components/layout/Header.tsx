'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { ServicesMegaMenu, IndustriesMegaMenu } from './header/MegaMenu';
import { MobileMenu } from './header/MobileMenu';
import { NavigationLink, DropdownLink } from './header/NavigationLink';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const pathname = usePathname();
  
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState<boolean>(false);
  const [isIndustriesDropdownOpen, setIndustriesDropdownOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Handle click outside for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-toggle')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

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
            <Link href="/" className="flex items-center group flex-shrink-0 relative">
              <div className="w-28 h-12 sm:w-40 sm:h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative logo-container">
                <Image 
                  src="/images/JAAZL-Logo.svg" 
                  alt="JAAZL Logo" 
                  width={160} 
                  height={64} 
                  className={`object-contain w-full h-full transition-all duration-300 relative z-10 ${
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
              
              <NavigationLink href="/" scrolled={scrolled} isActive={pathname === '/'}>
                {language === 'en' ? 'Home' : 'الرئيسية'}
              </NavigationLink>
              
              {/* Services Mega Menu */}
              <div
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="relative group"
              >
                <DropdownLink href="/services" scrolled={scrolled} pathname={pathname}>
                  {language === 'en' ? 'Services' : 'الخدمات'}
                </DropdownLink>
                
                <ServicesMegaMenu isOpen={isServicesDropdownOpen} scrolled={scrolled} />
              </div>

              {/* Industries Mega Menu */}
              <div
                onMouseEnter={() => setIndustriesDropdownOpen(true)}
                onMouseLeave={() => setIndustriesDropdownOpen(false)}
                className="relative group"
              >
                <DropdownLink href="/industries" scrolled={scrolled} pathname={pathname}>
                  {language === 'en' ? 'Industries' : 'الصناعات'}
                </DropdownLink>
                
                <IndustriesMegaMenu isOpen={isIndustriesDropdownOpen} scrolled={scrolled} />
              </div>
              
              <NavigationLink href="/about" scrolled={scrolled} isActive={pathname === '/about'}>
                {language === 'en' ? 'About' : 'من نحن'}
              </NavigationLink>
              
              <NavigationLink href="/contact" scrolled={scrolled} isActive={pathname === '/contact'}>
                {language === 'en' ? 'Contact' : 'اتصل بنا'}
              </NavigationLink>
              
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

      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeDropdown={activeDropdown}
        onToggleDropdown={toggleMobileDropdown}
      />
    </>
  );
};

export default Header;