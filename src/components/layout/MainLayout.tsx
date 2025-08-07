'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DirectionManager from './DirectionManager';
import { HeaderErrorBoundary, PageErrorBoundary, ComponentErrorBoundary } from '@/components/common/ErrorBoundary';
import { AdvancedPerformanceMonitor } from '@/components/common/AdvancedPerformanceMonitor';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Performance Monitoring */}
      <AdvancedPerformanceMonitor />
      
      <ComponentErrorBoundary componentName="DirectionManager">
        <DirectionManager />
      </ComponentErrorBoundary>
      
      <HeaderErrorBoundary>
        <Header />
      </HeaderErrorBoundary>
      
      <main className="flex-grow">
        <PageErrorBoundary>
          {children}
        </PageErrorBoundary>
      </main>
      
      <ComponentErrorBoundary componentName="Footer">
        <Footer />
      </ComponentErrorBoundary>
    </div>
  );
};

export default MainLayout;
