'use client';

import React, { forwardRef, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'gradient' 
  | 'glass'
  | 'neon'
  | 'floating'
  | 'minimal';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  ripple?: boolean;
  glow?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  ripple = true,
  glow = false,
  pulse = false,
  className = '',
  children,
  onClick,
  ...props
}, ref) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Variant styles
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 
      hover:from-blue-700 hover:to-blue-800
      text-white shadow-blue-soft hover:shadow-blue-strong
      border-0
    `,
    secondary: `
      bg-gradient-to-r from-orange-500 to-orange-600 
      hover:from-orange-600 hover:to-orange-700
      text-white shadow-orange-soft hover:shadow-orange-strong
      border-0
    `,
    outline: `
      bg-transparent border-2 border-blue-500 
      text-blue-600 hover:bg-blue-50
      hover:border-blue-600 hover:text-blue-700
      shadow-soft hover:shadow-soft-md
    `,
    ghost: `
      bg-transparent hover:bg-gray-100 
      text-gray-600 hover:text-gray-800
      border-0
    `,
    gradient: `
      bg-animated-gradient-slow bg-[length:400%_400%]
      hover:bg-animated-gradient
      text-white shadow-layered hover:shadow-layered-strong
      border-0 animate-gradient-xy
    `,
    glass: `
      glass-card text-gray-900 hover:bg-white/20
      backdrop-blur-xl border border-white/20
    `,
    neon: `
      bg-gray-900 text-blue-400 border-2 border-blue-400
      hover:text-blue-300 hover:border-blue-300
      hover:shadow-glow-blue neon-blue
    `,
    floating: `
      bg-white text-gray-800 shadow-layered-xl
      hover:shadow-layered-strong hover:bg-gray-50
      border border-gray-200 hover-lift
    `,
    minimal: `
      bg-transparent text-gray-600 hover:text-gray-800
      hover:bg-gray-50 border-0
      transition-colors duration-200
    `
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm h-8 min-w-16',
    md: 'px-4 py-2 text-base h-10 min-w-20',
    lg: 'px-6 py-3 text-lg h-12 min-w-24',
    xl: 'px-8 py-4 text-xl h-14 min-w-28'
  };

  // Additional effect classes
  const effectClasses = [
    glow && 'hover-glow',
    pulse && 'animate-pulse-gentle',
    loading && 'animate-pulse',
    fullWidth && 'w-full',
    'relative overflow-hidden',
    'font-semibold rounded-xl',
    'transition-all duration-300 ease-out',
    'transform active:scale-95',
    'focus:outline-none focus:ring-4 focus:ring-blue-200',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'inline-flex items-center justify-center',
    'select-none',
    isRTL && 'font-arabic'
  ].filter(Boolean).join(' ');

  // Handle ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple || disabled || loading) return;
    
    const button = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');
    
    const rippleContainer = button.querySelector('.ripple-container') || button;
    const existingRipple = rippleContainer.querySelector('.ripple-effect');
    
    if (existingRipple) {
      existingRipple.remove();
    }
    
    rippleContainer.appendChild(circle);
    
    // Clean up after animation
    setTimeout(() => circle.remove(), 600);
    
    // Call original onClick
    if (onClick) onClick(e);
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
    />
  );

  return (
    <motion.button
      ref={ref || buttonRef}
      disabled={disabled || loading}
      onClick={handleRipple}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${effectClasses}
        ${className}
      `}
      whileHover={{ 
        scale: disabled || loading ? 1 : 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: disabled || loading ? 1 : 0.98,
        transition: { duration: 0.1 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Ripple container */}
      {ripple && <span className="ripple-container absolute inset-0 rounded-xl" />}
      
      {/* Loading state */}
      {loading && (
        <span className={`${icon || children ? (isRTL ? 'ml-2' : 'mr-2') : ''}`}>
          <LoadingSpinner />
        </span>
      )}
      
      {/* Icon - left position */}
      {icon && iconPosition === 'left' && !loading && (
        <span className={`${children ? (isRTL ? 'ml-2' : 'mr-2') : ''} flex items-center`}>
          {icon}
        </span>
      )}
      
      {/* Button content */}
      {children && (
        <span className={loading ? 'opacity-70' : ''}>
          {children}
        </span>
      )}
      
      {/* Icon - right position */}
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${children ? (isRTL ? 'mr-2' : 'ml-2') : ''} flex items-center`}>
          {icon}
        </span>
      )}
      
      {/* Shimmer overlay for gradient buttons */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-shimmer opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      )}
    </motion.button>
  );
});

ModernButton.displayName = 'ModernButton';

export default ModernButton;

// Additional CSS to be added to globals.css
export const buttonStyles = `
/* Ripple effect styles */
.ripple-effect {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Enhanced button hover effects */
.btn-hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hover-lift:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-hover-lift:active:not(:disabled) {
  transform: translateY(-1px);
}

/* Glass morphism button styles */
.glass-btn {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Floating action button */
.fab {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

[dir="rtl"] .fab {
  right: auto;
  left: 2rem;
}
`;