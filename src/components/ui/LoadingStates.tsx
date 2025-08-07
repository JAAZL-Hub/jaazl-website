'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Loading Spinner Types
export type SpinnerVariant = 'default' | 'dots' | 'pulse' | 'bars' | 'ring' | 'wave';
export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

interface LoadingSpinnerProps {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  color?: string;
  className?: string;
}

// Size configurations
const sizeConfig = {
  sm: { container: 'w-4 h-4', dot: 'w-1 h-1', bar: 'w-1 h-3' },
  md: { container: 'w-8 h-8', dot: 'w-2 h-2', bar: 'w-1.5 h-6' },
  lg: { container: 'w-12 h-12', dot: 'w-3 h-3', bar: 'w-2 h-8' },
  xl: { container: 'w-16 h-16', dot: 'w-4 h-4', bar: 'w-3 h-12' }
};

// Default Spinner
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  variant = 'default', 
  size = 'md', 
  color = 'text-blue-600',
  className = ''
}) => {
  const { container } = sizeConfig[size];

  if (variant === 'default') {
    return (
      <motion.div
        className={`${container} ${className}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className={`w-full h-full border-2 ${color.replace('text-', 'border-')} border-t-transparent rounded-full`} />
      </motion.div>
    );
  }

  if (variant === 'dots') {
    const { dot } = sizeConfig[size];
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`${dot} bg-current ${color} rounded-full`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={`${container} bg-current ${color} rounded-full ${className}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    );
  }

  if (variant === 'bars') {
    const { bar } = sizeConfig[size];
    return (
      <div className={`flex items-end space-x-1 ${className}`}>
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`${bar} bg-current ${color} rounded-sm`}
            animate={{
              scaleY: [1, 2, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'ring') {
    return (
      <div className={`${container} relative ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`absolute inset-0 border-2 ${color.replace('text-', 'border-')} border-t-transparent rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
            style={{
              scale: 1 - i * 0.2,
              opacity: 1 - i * 0.3
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`w-1 h-8 bg-current ${color} rounded-full`}
            animate={{
              scaleY: [1, 2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

// Skeleton Loader Components
interface SkeletonProps {
  className?: string;
  animated?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', animated = true }) => (
  <div 
    className={`bg-gray-200 rounded ${animated ? 'animate-pulse' : ''} ${className}`} 
  />
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i}
        className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
);

export const SkeletonCard: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`p-6 bg-white rounded-2xl shadow-soft ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
    <SkeletonText lines={3} />
    <div className="mt-4 flex space-x-2">
      <Skeleton className="h-8 w-20 rounded-lg" />
      <Skeleton className="h-8 w-16 rounded-lg" />
    </div>
  </div>
);

// Progress Indicators
interface ProgressProps {
  value?: number;
  max?: number;
  variant?: 'linear' | 'circular';
  color?: string;
  className?: string;
  label?: string;
  animated?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  variant = 'linear',
  color = 'bg-blue-600',
  className = '',
  label,
  animated = true
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  if (variant === 'circular') {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`relative w-24 h-24 ${className}`}>
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={animated ? strokeDashoffset : 0}
            className={color.replace('bg-', 'text-')}
            strokeLinecap="round"
            initial={animated ? { strokeDashoffset: circumference } : undefined}
            animate={animated ? { strokeDashoffset } : undefined}
            transition={animated ? { duration: 1, ease: "easeOut" } : undefined}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold">{Math.round(percentage)}%</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {label && <div className="text-sm font-medium text-gray-700 mb-2">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={animated ? { width: 0 } : undefined}
          animate={animated ? { width: `${percentage}%` } : { width: `${percentage}%` }}
          transition={animated ? { duration: 1, ease: "easeOut" } : undefined}
        />
      </div>
      <div className="text-right text-sm text-gray-600 mt-1">
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

// Loading States for different sections
export const PageLoadingState: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="text-center">
      <LoadingSpinner variant="ring" size="xl" color="text-blue-600" />
      <motion.p 
        className="mt-6 text-gray-600 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading JAAZL Experience...
      </motion.p>
    </div>
  </div>
);

export const SectionLoadingState: React.FC<{ rows?: number }> = ({ rows = 3 }) => (
  <div className="space-y-6">
    {Array.from({ length: rows }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export const ButtonLoadingState: React.FC<{ 
  size?: SpinnerSize;
  color?: string;
}> = ({ 
  size = 'sm', 
  color = 'text-current' 
}) => (
  <LoadingSpinner variant="default" size={size} color={color} />
);

// Custom Loading Overlay
interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
  variant?: SpinnerVariant;
  blur?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  message = 'Loading...',
  variant = 'ring',
  blur = true
}) => {
  if (!visible) return null;

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 ${blur ? 'backdrop-blur-sm' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-4 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LoadingSpinner variant={variant} size="lg" color="text-blue-600" className="mx-auto mb-4" />
        <p className="text-gray-700 font-medium">{message}</p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;