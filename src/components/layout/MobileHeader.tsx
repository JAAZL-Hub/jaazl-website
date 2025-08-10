'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MobileDrawer, TouchButton } from '@/components/ui/MobileOptimizations';
import { ResponsiveNav } from '@/components/ui/ResponsiveLayout';

interface MobileHeaderProps {
  logo?: React.ReactNode;
  className?: string;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  logo,
  className = ''
}) => {
  const { language, changeLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);

  // Hide/show header on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const direction = latest > previous ? 'down' : 'up';
    const isScrollingDown = direction === 'down';
    const isScrollingUp = direction === 'up';
    
    // Hide header when scrolling down, show when scrolling up
    if (isScrollingDown && latest > 100) {
      setIsVisible(false);
    } else if (isScrollingUp) {
      setIsVisible(true);
    }
    
    // Add background when scrolled
    setIsScrolled(latest > 20);
  });

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Sample menu items (replace with actual navigation)
  const menuItems = [
    {
      label: language === 'ar' ? 'الرئيسية' : 'Home',
      href: '/',
      active: true
    },
    {
      label: language === 'ar' ? 'الخدمات' : 'Services',
      href: '/services',
      submenu: [
        { label: language === 'ar' ? 'خدمة 1' : 'Service 1', href: '/services/1' },
        { label: language === 'ar' ? 'خدمة 2' : 'Service 2', href: '/services/2' }
      ]
    },
    {
      label: language === 'ar' ? 'الصناعات' : 'Industries',
      href: '/industries',
      submenu: [
        { label: language === 'ar' ? 'صناعة 1' : 'Industry 1', href: '/industries/1' },
        { label: language === 'ar' ? 'صناعة 2' : 'Industry 2', href: '/industries/2' }
      ]
    },
    {
      label: language === 'ar' ? 'من نحن' : 'About',
      href: '/about'
    },
    {
      label: language === 'ar' ? 'اتصل بنا' : 'Contact',
      href: '/contact'
    }
  ];

  const handleLanguageToggle = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
    
    // Haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <>
      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-out
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-soft' 
            : 'bg-transparent'
          }
          safe-area-top
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ResponsiveNav
              logo={logo}
              menuItems={menuItems}
              mobileMenuOpen={mobileMenuOpen}
              onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-6 py-4"
            />
          </div>

          {/* Mobile Navigation Header */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3 safe-area-left safe-area-right">
            {/* Logo */}
            {logo && (
              <motion.div 
                className="flex-shrink-0"
                whileTap={{ scale: 0.95 }}
              >
                {logo}
              </motion.div>
            )}

            {/* Right side controls */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Language Toggle */}
              <TouchButton
                variant="ghost"
                size="sm"
                onClick={handleLanguageToggle}
                className="min-w-[44px] h-[44px] p-0 text-gray-700 hover:text-blue-600"
                hapticFeedback
                aria-label="Toggle language"
              >
                <span className="text-sm font-semibold">
                  {language === 'en' ? 'ع' : 'EN'}
                </span>
              </TouchButton>

              {/* Mobile Menu Toggle */}
              <TouchButton
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] h-[44px] p-0 text-gray-700 hover:text-blue-600"
                hapticFeedback
                aria-label="Toggle mobile menu"
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={mobileMenuOpen ? 'open' : 'closed'}
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </motion.svg>
              </TouchButton>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        position={isRTL ? 'right' : 'left'}
      >
        <div className="h-full flex flex-col safe-area-inset">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {logo && (
              <div className="flex-shrink-0">
                {logo}
              </div>
            )}
            <TouchButton
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] h-[44px] p-0 text-gray-500 hover:text-gray-700"
              hapticFeedback
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </TouchButton>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2 px-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`
                      block px-4 py-4 text-base font-medium rounded-xl transition-all duration-200
                      touch-target mobile-focus
                      ${item.active 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }
                      ${isRTL ? 'font-arabic text-right' : ''}
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.submenu && (
                        <svg 
                          className={`w-5 h-5 transition-transform ${isRTL ? 'rotate-180' : ''}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </a>

                  {/* Submenu Items */}
                  {item.submenu && (
                    <div className="mt-2 ml-4 rtl:ml-0 rtl:mr-4 space-y-1">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className={`
                            block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg
                            touch-target mobile-focus transition-all duration-200
                            ${isRTL ? 'font-arabic text-right' : ''}
                          `}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-gray-200">
            <TouchButton
              variant="primary"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                // Handle CTA action
              }}
              className="mb-4"
            >
              {language === 'ar' ? 'احصل على عرض أسعار' : 'Get Quote'}
            </TouchButton>
            
            <div className={`text-center text-sm text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'شركة جازل الصناعية' : 'JAAZL Industrial Company'}
            </div>
          </div>
        </div>
      </MobileDrawer>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;