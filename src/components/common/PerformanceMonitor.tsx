'use client';

import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in development or when specifically needed
    if (process.env.NODE_ENV === 'development') {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

      // Log key performance metrics
      if ('web-vital' in window) {
        // TypeScript might complain, but this is for monitoring
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webVitals?.getCLS?.((cls: unknown) => {
          console.log('CLS (Cumulative Layout Shift):', cls);
        });
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webVitals?.getFCP?.((fcp: unknown) => {
          console.log('FCP (First Contentful Paint):', fcp);
        });
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webVitals?.getLCP?.((lcp: unknown) => {
          console.log('LCP (Largest Contentful Paint):', lcp);
        });
      }

      // Report loading time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart, 'ms');
        console.log('First Paint:', performance.getEntriesByName('first-paint')[0]?.startTime, 'ms');
        console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]?.startTime, 'ms');
      });

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;