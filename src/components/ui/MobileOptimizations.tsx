'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useAnimation, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Touch-optimized button with larger tap targets
interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  hapticFeedback?: boolean;
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  hapticFeedback = true,
  onClick,
  ...props
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
  };

  const sizeStyles = {
    sm: 'px-4 py-3 text-sm min-h-[44px]', // iOS minimum touch target
    md: 'px-6 py-4 text-base min-h-[48px]',
    lg: 'px-8 py-5 text-lg min-h-[52px]'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Haptic feedback for mobile devices
    if (hapticFeedback && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
    
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        rounded-xl font-semibold
        transition-all duration-200 ease-out
        touch-manipulation select-none
        flex items-center justify-center
        active:scale-95
        ${isRTL ? 'font-arabic' : ''}
        ${className}
      `}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Swipeable card component for mobile
interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  threshold?: number;
  className?: string;
}

export const SwipeableCard: React.FC<SwipeableCardProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onTap,
  threshold = 100,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-threshold, 0, threshold], [0.8, 1, 0.8]);
  const rotate = useTransform(x, [-threshold, 0, threshold], [-5, 0, 5]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && onSwipeRight) {
        onSwipeRight();
      } else if (info.offset.x < 0 && onSwipeLeft) {
        onSwipeLeft();
      }
    }
    
    // Snap back to center
    x.set(0);
  };

  const handleTap = () => {
    if (!isDragging && onTap) {
      onTap();
    }
  };

  return (
    <motion.div
      className={`
        cursor-grab active:cursor-grabbing
        touch-pan-x select-none
        ${className}
      `}
      style={{ x, opacity, rotate }}
      drag="x"
      dragConstraints={{ left: -threshold, right: threshold }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      onTap={handleTap}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Pull-to-refresh component
interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  disabled?: boolean;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({
  children,
  onRefresh,
  threshold = 100,
  disabled = false
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const controls = useAnimation();
  
  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled || window.scrollY > 0) return;
    
    const distance = Math.max(0, info.offset.y);
    setPullDistance(distance);
    
    if (distance > threshold) {
      controls.start({ rotate: 180 });
    } else {
      controls.start({ rotate: 0 });
    }
  };

  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled || window.scrollY > 0) return;
    
    if (info.offset.y > threshold) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setPullDistance(0);
    controls.start({ rotate: 0 });
  };

  const pullProgress = Math.min(pullDistance / threshold, 1);
  const refreshOpacity = pullProgress;

  return (
    <div className="relative overflow-hidden">
      {/* Pull indicator */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full z-10"
        style={{ opacity: refreshOpacity }}
      >
        <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
          <motion.div
            animate={controls}
            className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`}
          >
            {isRefreshing ? (
              <div className="w-full h-full border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </motion.div>
          <span className="text-sm text-gray-600">
            {isRefreshing ? 'Refreshing...' : pullProgress >= 1 ? 'Release to refresh' : 'Pull to refresh'}
          </span>
        </div>
      </div>

      {/* Content */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ y: pullDistance * 0.5 }}
        className="touch-pan-y"
      >
        {children}
      </motion.div>
    </div>
  );
};

// Mobile-optimized navigation drawer
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'bottom';
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = 'left'
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const drawerRef = useRef<HTMLDivElement>(null);

  // Adjust position based on RTL
  const actualPosition = position === 'left' ? (isRTL ? 'right' : 'left') : 
                        position === 'right' ? (isRTL ? 'left' : 'right') : position;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getSlideAnimation = () => {
    switch (actualPosition) {
      case 'left':
        return { x: isOpen ? 0 : '-100%' };
      case 'right':
        return { x: isOpen ? 0 : '100%' };
      case 'bottom':
        return { y: isOpen ? 0 : '100%' };
      default:
        return { x: isOpen ? 0 : '-100%' };
    }
  };

  const getPositionClasses = () => {
    switch (actualPosition) {
      case 'left':
        return 'left-0 top-0 h-full w-80 max-w-[80vw]';
      case 'right':
        return 'right-0 top-0 h-full w-80 max-w-[80vw]';
      case 'bottom':
        return 'bottom-0 left-0 w-full h-auto max-h-[80vh] rounded-t-2xl';
      default:
        return 'left-0 top-0 h-full w-80 max-w-[80vw]';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <motion.div
        ref={drawerRef}
        initial={getSlideAnimation()}
        animate={getSlideAnimation()}
        exit={getSlideAnimation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
          absolute bg-white shadow-2xl
          ${getPositionClasses()}
          ${actualPosition === 'bottom' ? '' : 'border-r border-gray-200'}
        `}
        drag={actualPosition === 'bottom' ? 'y' : 'x'}
        dragConstraints={{ 
          [actualPosition === 'bottom' ? 'top' : actualPosition === 'right' ? 'left' : 'right']: 0 
        }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          const shouldClose = actualPosition === 'bottom' 
            ? info.offset.y > 100 
            : Math.abs(info.offset.x) > 100;
          
          if (shouldClose) {
            onClose();
          }
        }}
      >
        {/* Drag handle for bottom drawer */}
        {actualPosition === 'bottom' && (
          <div className="flex justify-center py-3">
            <div className="w-12 h-1 bg-gray-300 rounded-full" />
          </div>
        )}

        {children}
      </motion.div>
    </div>
  );
};

// Touch-optimized tabs
interface TouchTabsProps {
  tabs: Array<{ id: string; label: string; content: React.ReactNode }>;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export const TouchTabs: React.FC<TouchTabsProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  onChange,
  className = ''
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
  const activeTab = controlledActiveTab || internalActiveTab;
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const handleTabChange = (tabId: string) => {
    if (onChange) {
      onChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }

    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab headers */}
      <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-200">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            className={`
              flex-shrink-0 px-6 py-4 text-sm font-medium whitespace-nowrap
              min-h-[48px] touch-manipulation
              transition-all duration-200
              ${activeTab === tab.id 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
              }
              ${isRTL ? 'font-arabic' : ''}
            `}
            onClick={() => handleTabChange(tab.id)}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 20
            }}
            transition={{ duration: 0.2 }}
            style={{ display: activeTab === tab.id ? 'block' : 'none' }}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Mobile-optimized form input
interface TouchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const TouchInput: React.FC<TouchInputProps> = ({
  label,
  error,
  icon,
  className = '',
  ...props
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`}>
            {icon}
          </div>
        )}
        
        <input
          className={`
            w-full min-h-[48px] px-4 py-3
            ${icon ? (isRTL ? 'pr-12' : 'pl-12') : ''}
            border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            text-base leading-6
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
            ${isRTL ? 'font-arabic text-right' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-2 text-sm text-red-600 ${isRTL ? 'font-arabic text-right' : ''}`}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default {
  TouchButton,
  SwipeableCard,
  PullToRefresh,
  MobileDrawer,
  TouchTabs,
  TouchInput
};