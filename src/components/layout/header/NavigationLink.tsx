'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  scrolled?: boolean;
  className?: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  href, 
  children, 
  isActive, 
  scrolled = false,
  className = ''
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const pathname = usePathname();
  const active = isActive !== undefined ? isActive : pathname === href;

  return (
    <Link 
      href={href} 
      className={`relative font-medium transition-colors duration-300 group py-2 px-4 rounded-lg ${
        scrolled 
          ? active 
            ? 'text-blue-900 bg-blue-50' 
            : 'text-gray-800 hover:bg-gray-100' 
          : 'text-white hover:bg-white/10'
      } ${isRTL ? 'font-arabic' : ''} ${className}`}
    >
      {children}
      <span className={`absolute bottom-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-1/2 transition-all duration-300 ${
        isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'
      }`}></span>
    </Link>
  );
};

interface DropdownLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled?: boolean;
  pathname: string;
  className?: string;
}

export const DropdownLink: React.FC<DropdownLinkProps> = ({ 
  href, 
  children, 
  scrolled = false,
  pathname,
  className = ''
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const isActive = pathname.startsWith(href);

  return (
    <Link 
      href={href}
      className={`flex items-center py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
        scrolled
          ? isActive 
            ? 'text-blue-900 bg-blue-50' 
            : 'text-gray-800 hover:bg-gray-100'
          : 'text-white hover:bg-white/10'
      } ${isRTL ? 'font-arabic' : ''} ${className}`}
    >
      {children}
    </Link>
  );
};