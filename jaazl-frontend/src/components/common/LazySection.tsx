'use client';

import React, { useRef, useEffect, useState } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  placeholder,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          // Once loaded, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  const defaultPlaceholder = (
    <div className="animate-pulse bg-gray-200 rounded-lg min-h-[200px] flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  );

  return (
    <section ref={sectionRef} className={className}>
      {isVisible ? children : (placeholder || defaultPlaceholder)}
    </section>
  );
};

export default LazySection;