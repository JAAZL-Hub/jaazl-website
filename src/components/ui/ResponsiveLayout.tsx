'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Hook to detect mobile device and screen size
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    orientation: 'portrait' as 'portrait' | 'landscape'
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        isTouchDevice,
        orientation: width < height ? 'portrait' : 'landscape'
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

// Responsive container component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  maxWidth = 'xl',
  padding = 'md',
  className = ''
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-none',
    full: 'max-w-full'
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 mobile:px-3',
    md: 'px-6 mobile:px-4',
    lg: 'px-8 mobile:px-5'
  };

  return (
    <div className={`
      mx-auto w-full
      ${maxWidthClasses[maxWidth]}
      ${paddingClasses[padding]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Responsive grid component
interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className = ''
}) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4 mobile:gap-3',
    lg: 'gap-6 mobile:gap-4',
    xl: 'gap-8 mobile:gap-5'
  };

  return (
    <div className={`
      grid
      grid-cols-${columns.mobile || 1}
      tablet:grid-cols-${columns.tablet || 2}
      lg:grid-cols-${columns.desktop || 3}
      ${gapClasses[gap]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Responsive navigation component
interface ResponsiveNavProps {
  logo?: React.ReactNode;
  menuItems: Array<{
    label: string;
    href: string;
    active?: boolean;
    submenu?: Array<{ label: string; href: string }>;
  }>;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  className?: string;
}

export const ResponsiveNav: React.FC<ResponsiveNavProps> = ({
  logo,
  menuItems,
  mobileMenuOpen,
  onMobileMenuToggle,
  className = ''
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { isMobile } = useResponsive();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:flex items-center justify-between ${className}`}>
        {logo && <div className="flex-shrink-0">{logo}</div>}
        
        <div className="flex items-center space-x-8 rtl:space-x-reverse">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className={`
                  px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${item.active 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }
                  ${isRTL ? 'font-arabic' : ''}
                `}
              >
                {item.label}
              </a>
              
              {/* Submenu */}
              {item.submenu && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.submenu.map((subitem, subindex) => (
                      <a
                        key={subindex}
                        href={subitem.href}
                        className={`
                          block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                          ${isRTL ? 'font-arabic text-right' : ''}
                        `}
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <div className="lg:hidden flex items-center justify-between p-4">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        
        <button
          onClick={onMobileMenuToggle}
          className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg touch-target"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2 px-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className={`
                      block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 touch-target
                      ${item.active 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }
                      ${isRTL ? 'font-arabic text-right' : ''}
                    `}
                    onClick={onMobileMenuToggle}
                  >
                    {item.label}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="mt-2 ml-4 space-y-1">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className={`
                            block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg touch-target
                            ${isRTL ? 'font-arabic text-right' : ''}
                          `}
                          onClick={onMobileMenuToggle}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Responsive image component with mobile optimizations
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
  priority?: boolean;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes = {
    mobile: '(max-width: 767px) 100vw',
    tablet: '(max-width: 1023px) 50vw',
    desktop: '33vw'
  },
  aspectRatio = 'video',
  priority = false,
  className = ''
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[2/1]',
    portrait: 'aspect-[3/4]'
  };

  const sizesString = Object.values(sizes).join(', ');

  return (
    <div className={`${aspectRatioClasses[aspectRatio]} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        sizes={sizesString}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

// Responsive typography component
interface ResponsiveTextProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'subtitle';
  className?: string;
  mobileSize?: 'sm' | 'md' | 'lg';
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  variant,
  className = '',
  mobileSize = 'md'
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const variantClasses = {
    h1: `text-4xl lg:text-6xl xl:text-7xl font-bold ${mobileSize === 'sm' ? 'mobile:text-2xl' : mobileSize === 'md' ? 'mobile:text-3xl' : 'mobile:text-4xl'}`,
    h2: `text-3xl lg:text-5xl xl:text-6xl font-bold ${mobileSize === 'sm' ? 'mobile:text-xl' : mobileSize === 'md' ? 'mobile:text-2xl' : 'mobile:text-3xl'}`,
    h3: `text-2xl lg:text-4xl font-bold ${mobileSize === 'sm' ? 'mobile:text-lg' : mobileSize === 'md' ? 'mobile:text-xl' : 'mobile:text-2xl'}`,
    h4: `text-xl lg:text-3xl font-semibold ${mobileSize === 'sm' ? 'mobile:text-base' : mobileSize === 'md' ? 'mobile:text-lg' : 'mobile:text-xl'}`,
    h5: `text-lg lg:text-2xl font-semibold ${mobileSize === 'sm' ? 'mobile:text-sm' : mobileSize === 'md' ? 'mobile:text-base' : 'mobile:text-lg'}`,
    h6: `text-base lg:text-xl font-medium ${mobileSize === 'sm' ? 'mobile:text-xs' : mobileSize === 'md' ? 'mobile:text-sm' : 'mobile:text-base'}`,
    body: `text-base lg:text-lg leading-relaxed ${mobileSize === 'sm' ? 'mobile:text-sm' : mobileSize === 'md' ? 'mobile:text-base' : 'mobile:text-lg'}`,
    caption: `text-sm lg:text-base text-gray-600 ${mobileSize === 'sm' ? 'mobile:text-xs' : mobileSize === 'md' ? 'mobile:text-sm' : 'mobile:text-base'}`,
    subtitle: `text-lg lg:text-xl text-gray-700 ${mobileSize === 'sm' ? 'mobile:text-base' : mobileSize === 'md' ? 'mobile:text-lg' : 'mobile:text-xl'}`
  };

  const Element = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  return React.createElement(
    Element,
    {
      className: `
        ${variantClasses[variant]}
        ${isRTL ? 'font-arabic' : ''}
        ${className}
      `
    },
    children
  );
};

export default {
  useResponsive,
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveNav,
  ResponsiveImage,
  ResponsiveText
};