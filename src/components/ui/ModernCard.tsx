'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export type CardVariant = 
  | 'default' 
  | 'elevated' 
  | 'outlined' 
  | 'glass' 
  | 'gradient'
  | 'interactive'
  | 'minimal'
  | 'hero';

export type CardSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  hover?: boolean;
  blur?: boolean;
  glow?: boolean;
  tilt?: boolean;
  animated?: boolean;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
}

const ModernCard = forwardRef<HTMLDivElement, ModernCardProps>(({
  variant = 'default',
  size = 'md',
  hover = false,
  blur = false,
  glow = false,
  tilt = false,
  animated = true,
  className = '',
  children,
  header,
  footer,
  image,
  imageAlt,
  aspectRatio = 'video',
  ...props
}, ref) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Variant styles
  const variantStyles = {
    default: `
      bg-white border border-gray-200 shadow-soft
      hover:shadow-soft-md transition-all duration-300
    `,
    elevated: `
      bg-white shadow-layered hover:shadow-layered-hover
      border-0 transition-all duration-300
    `,
    outlined: `
      bg-transparent border-2 border-gray-300
      hover:border-gray-400 hover:bg-gray-50
      transition-all duration-300
    `,
    glass: `
      glass-card backdrop-blur-xl border border-white/20
      hover:bg-white/10 transition-all duration-300
    `,
    gradient: `
      bg-gradient-to-br from-blue-50 to-indigo-100
      border border-blue-200 hover:from-blue-100 hover:to-indigo-200
      transition-all duration-300
    `,
    interactive: `
      bg-white border border-gray-200 shadow-soft
      hover:shadow-layered-strong hover:-translate-y-2
      cursor-pointer transition-all duration-300
      interactive-card
    `,
    minimal: `
      bg-white border-0
      hover:bg-gray-50 transition-all duration-300
    `,
    hero: `
      bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800
      text-white border-0 shadow-layered-xl
      hover:shadow-layered-strong transition-all duration-300
    `
  };

  // Size styles
  const sizeStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[2/1]',
    portrait: 'aspect-[3/4]'
  };

  // Additional effect classes
  const effectClasses = [
    hover && 'hover-lift',
    glow && 'hover-glow',
    tilt && 'hover-tilt',
    blur && 'backdrop-blur-sm',
    'rounded-2xl overflow-hidden',
    isRTL && 'font-arabic'
  ].filter(Boolean).join(' ');

  // Animation variants for framer-motion
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${effectClasses}
        ${className}
      `}
      variants={animated ? cardVariants : undefined}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      whileHover={hover ? "hover" : undefined}
      {...props}
    >
      {/* Image section */}
      {image && (
        <div className={`mb-4 -mx-6 -mt-6 ${aspectRatioClasses[aspectRatio]}`}>
          <img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-full object-cover rounded-t-2xl"
            loading="lazy"
          />
        </div>
      )}

      {/* Header section */}
      {header && (
        <div className="mb-4 pb-4 border-b border-gray-200/50">
          {header}
        </div>
      )}

      {/* Main content */}
      <div className="relative">
        {children}
      </div>

      {/* Footer section */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200/50">
          {footer}
        </div>
      )}

      {/* Decorative elements for gradient variant */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Glow effect overlay */}
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm -z-10" />
      )}
    </motion.div>
  );
});

ModernCard.displayName = 'ModernCard';

// Specialized card components
export const ServiceCard = forwardRef<HTMLDivElement, ModernCardProps & {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}>(({ 
  icon, 
  title, 
  description, 
  children, 
  ...props 
}, ref) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <ModernCard
      ref={ref}
      variant="interactive"
      hover
      {...props}
    >
      {icon && (
        <div className="mb-4 p-3 bg-blue-100 text-blue-600 rounded-xl w-fit">
          {icon}
        </div>
      )}
      {title && (
        <h3 className={`text-xl font-bold mb-3 text-gray-900 ${isRTL ? 'font-arabic' : ''}`}>
          {title}
        </h3>
      )}
      {description && (
        <p className={`text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
          {description}
        </p>
      )}
      {children}
    </ModernCard>
  );
});

ServiceCard.displayName = 'ServiceCard';

export const StatsCard = forwardRef<HTMLDivElement, ModernCardProps & {
  value?: string | number;
  label?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}>(({ 
  value, 
  label, 
  trend, 
  trendValue, 
  children, 
  ...props 
}, ref) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-500'
  };

  return (
    <ModernCard
      ref={ref}
      variant="elevated"
      size="md"
      {...props}
    >
      <div className="text-center">
        {value && (
          <div className={`text-3xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
            {value}
          </div>
        )}
        {label && (
          <div className={`text-gray-600 text-sm uppercase tracking-wide ${isRTL ? 'font-arabic' : ''}`}>
            {label}
          </div>
        )}
        {trend && trendValue && (
          <div className={`text-sm mt-2 ${trendColors[trend]}`}>
            {trend === 'up' && '↗'} {trend === 'down' && '↘'} {trendValue}
          </div>
        )}
      </div>
      {children}
    </ModernCard>
  );
});

StatsCard.displayName = 'StatsCard';

export const TestimonialCard = forwardRef<HTMLDivElement, ModernCardProps & {
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
}>(({ 
  quote, 
  author, 
  role, 
  avatar, 
  children, 
  ...props 
}, ref) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <ModernCard
      ref={ref}
      variant="glass"
      hover
      {...props}
    >
      {quote && (
        <blockquote className={`text-lg text-gray-800 mb-6 italic leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
          "{quote}"
        </blockquote>
      )}
      <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
        {avatar && (
          <img
            src={avatar}
            alt={author || ''}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          {author && (
            <div className={`font-semibold text-gray-900 ${isRTL ? 'font-arabic' : ''}`}>
              {author}
            </div>
          )}
          {role && (
            <div className={`text-gray-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>
              {role}
            </div>
          )}
        </div>
      </div>
      {children}
    </ModernCard>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default ModernCard;