'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ValvesActuatorsPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {language === 'en' ? 'Valves & Actuators' : 'صمامات ومحركات'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Professional valve and actuator solutions for precise flow control in industrial applications.' 
              : 'حلول احترافية للصمامات والمحركات للتحكم الدقيق في التدفق في التطبيقات الصناعية.'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {language === 'en' ? 'Coming Soon' : 'قريباً'}
            </h2>
            <p className="text-lg text-gray-600 text-center">
              {language === 'en' 
                ? 'This service page is under development. Please contact us for more information about our valves and actuators.'
                : 'هذه الصفحة قيد التطوير. يرجى الاتصال بنا للحصول على مزيد من المعلومات حول الصمامات والمحركات.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}