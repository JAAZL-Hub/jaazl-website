'use client';

import { useEffect, useRef } from 'react';

// Enhanced performance monitoring types
interface PerformanceMetrics {
  // Core Web Vitals
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
  inp?: number; // Interaction to Next Paint

  // Custom metrics
  loadTime?: number;
  domContentLoaded?: number;
  navigationStart?: number;
  
  // Resource metrics
  totalResources?: number;
  totalResourceSize?: number;
  imageResources?: number;
  scriptResources?: number;
  stylesheetResources?: number;
  
  // Network information
  connectionType?: string;
  effectiveType?: string;
  downlink?: number;
  
  // Device information
  deviceMemory?: number;
  hardwareConcurrency?: number;
  
  // User experience metrics
  interactionLatency?: number[];
  scrollLatency?: number[];
}

interface NetworkInformation {
  type?: string;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
}


class AdvancedPerformanceTracker {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];
  private isTracking = false;

  constructor() {
    this.initializeTracking();
  }

  private initializeTracking() {
    if (typeof window === 'undefined') return;
    
    this.isTracking = true;
    this.setupPerformanceObservers();
    this.trackNavigationTiming();
    this.trackResourceTiming();
    this.trackNetworkInformation();
    this.trackDeviceInformation();
    this.trackUserInteractions();
  }

  private setupPerformanceObservers() {
    try {
      // Observe Core Web Vitals
      const vitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handleVitalMetric(entry);
        }
      });

      vitalsObserver.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
      this.observers.push(vitalsObserver);

      // Observe paint timing
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handlePaintMetric(entry);
        }
      });

      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);

      // Observe navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handleNavigationMetric(entry as PerformanceNavigationTiming);
        }
      });

      navigationObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navigationObserver);

    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }

  private handleVitalMetric(entry: PerformanceEntry) {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.metrics.lcp = entry.startTime;
        break;
      case 'first-input':
        const fidEntry = entry as PerformanceEntry & { processingStart: number };
        this.metrics.fid = fidEntry.processingStart - entry.startTime;
        break;
      case 'layout-shift':
        const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
        if (!clsEntry.hadRecentInput) {
          this.metrics.cls = (this.metrics.cls || 0) + clsEntry.value;
        }
        break;
    }
    this.reportMetrics();
  }

  private handlePaintMetric(entry: PerformanceEntry) {
    if (entry.name === 'first-contentful-paint') {
      this.metrics.fcp = entry.startTime;
    }
    this.reportMetrics();
  }

  private handleNavigationMetric(entry: PerformanceNavigationTiming) {
    this.metrics.ttfb = entry.responseStart - entry.requestStart;
    this.metrics.loadTime = entry.loadEventEnd - entry.loadEventStart;
    this.metrics.domContentLoaded = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    this.reportMetrics();
  }

  private trackNavigationTiming() {
    if (typeof window === 'undefined' || !window.performance?.timing) return;

    const timing = window.performance.timing;
    this.metrics.navigationStart = timing.navigationStart;
    
    // Calculate load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = timing.loadEventEnd - timing.navigationStart;
      this.reportMetrics();
    });
  }

  private trackResourceTiming() {
    if (typeof window === 'undefined' || !window.performance?.getEntriesByType) return;

    const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    
    this.metrics.totalResources = resources.length;
    this.metrics.totalResourceSize = resources.reduce((total, resource) => {
      return total + (resource.transferSize || 0);
    }, 0);
    
    this.metrics.imageResources = resources.filter(r => r.initiatorType === 'img').length;
    this.metrics.scriptResources = resources.filter(r => r.initiatorType === 'script').length;
    this.metrics.stylesheetResources = resources.filter(r => r.initiatorType === 'link').length;
  }

  private trackNetworkInformation() {
    if (typeof window === 'undefined') return;

    const connection = (navigator as Navigator & { 
      connection?: NetworkInformation; 
      mozConnection?: NetworkInformation; 
      webkitConnection?: NetworkInformation; 
    }).connection || 
    (navigator as Navigator & { mozConnection?: NetworkInformation }).mozConnection || 
    (navigator as Navigator & { webkitConnection?: NetworkInformation }).webkitConnection;

    if (connection) {
      this.metrics.connectionType = connection.type;
      this.metrics.effectiveType = connection.effectiveType;
      this.metrics.downlink = connection.downlink;
    }
  }

  private trackDeviceInformation() {
    if (typeof window === 'undefined') return;

    this.metrics.deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    this.metrics.hardwareConcurrency = navigator.hardwareConcurrency;
  }

  private trackUserInteractions() {
    if (typeof window === 'undefined') return;

    const interactionLatencies: number[] = [];
    const scrollLatencies: number[] = [];

    // Track click interactions
    document.addEventListener('click', () => {
      const startTime = performance.now();
      requestAnimationFrame(() => {
        const latency = performance.now() - startTime;
        interactionLatencies.push(latency);
        this.metrics.interactionLatency = interactionLatencies.slice(-10); // Keep last 10
      });
    });

    // Track scroll interactions
    let scrollStartTime: number;
    document.addEventListener('scroll', () => {
      if (!scrollStartTime) {
        scrollStartTime = performance.now();
      }
    });

    document.addEventListener('scrollend', () => {
      if (scrollStartTime) {
        const latency = performance.now() - scrollStartTime;
        scrollLatencies.push(latency);
        this.metrics.scrollLatency = scrollLatencies.slice(-10); // Keep last 10
        scrollStartTime = 0;
      }
    });
  }

  private reportMetrics() {
    if (!this.isTracking) return;

    // Report to analytics service (Google Analytics, custom analytics, etc.)
    this.reportToAnalytics();
    
    // Report to performance monitoring service
    this.reportToPerformanceService();
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics);
    }
  }

  private reportToAnalytics() {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    const windowWithGtag = window as any;
    if (windowWithGtag.gtag) {
      Object.entries(this.metrics).forEach(([key, value]) => {
        if (typeof value === 'number' && !isNaN(value)) {
          windowWithGtag.gtag('event', 'performance_metric', {
            metric_name: key,
            metric_value: Math.round(value),
            page_path: window.location.pathname,
          });
        }
      });
    }
  }

  private reportToPerformanceService() {
    // Report to external performance monitoring service
    // This could be Sentry, LogRocket, DataDog, etc.
    
    const windowWithService = window as any;
    if (typeof window !== 'undefined' && windowWithService.performanceMonitoringService) {
      windowWithService.performanceMonitoringService.track('performance_metrics', {
        ...this.metrics,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public generateReport(): string {
    const report = {
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
      metrics: this.metrics,
      recommendations: this.generateRecommendations(),
    };

    return JSON.stringify(report, null, 2);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.lcp && this.metrics.lcp > 2500) {
      recommendations.push('LCP is above 2.5s. Consider optimizing images and reducing server response times.');
    }

    if (this.metrics.fid && this.metrics.fid > 100) {
      recommendations.push('FID is above 100ms. Consider reducing JavaScript execution time.');
    }

    if (this.metrics.cls && this.metrics.cls > 0.1) {
      recommendations.push('CLS is above 0.1. Consider adding size attributes to images and avoiding dynamic content insertion.');
    }

    if (this.metrics.fcp && this.metrics.fcp > 1800) {
      recommendations.push('FCP is above 1.8s. Consider optimizing critical rendering path.');
    }

    if (this.metrics.totalResourceSize && this.metrics.totalResourceSize > 5000000) {
      recommendations.push('Total resource size is above 5MB. Consider code splitting and resource optimization.');
    }

    return recommendations;
  }

  public destroy() {
    this.isTracking = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React component for advanced performance monitoring
export const AdvancedPerformanceMonitor: React.FC = () => {
  const trackerRef = useRef<AdvancedPerformanceTracker | null>(null);

  useEffect(() => {
    // Initialize tracker
    trackerRef.current = new AdvancedPerformanceTracker();

    // Cleanup on unmount
    return () => {
      if (trackerRef.current) {
        trackerRef.current.destroy();
      }
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

// Hook for accessing performance metrics
export const usePerformanceMetrics = () => {
  const trackerRef = useRef<AdvancedPerformanceTracker | null>(null);

  useEffect(() => {
    if (!trackerRef.current) {
      trackerRef.current = new AdvancedPerformanceTracker();
    }

    return () => {
      if (trackerRef.current) {
        trackerRef.current.destroy();
      }
    };
  }, []);

  return {
    getMetrics: () => trackerRef.current?.getMetrics() || {},
    generateReport: () => trackerRef.current?.generateReport() || '{}',
  };
};

// Utility function for manual performance tracking
export const trackCustomMetric = (name: string, value: number, unit: string = 'ms') => {
  if (typeof window === 'undefined') return;

  // Report to analytics
  const windowWithGtag = window as any;
  if (windowWithGtag.gtag) {
    windowWithGtag.gtag('event', 'custom_performance_metric', {
      metric_name: name,
      metric_value: Math.round(value),
      metric_unit: unit,
      page_path: window.location.pathname,
    });
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Custom Performance Metric: ${name} = ${value}${unit}`);
  }
};

export default AdvancedPerformanceMonitor;