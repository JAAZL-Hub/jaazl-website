'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function ThankYouPage() {
  const { language } = useLanguage();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-teal-800 to-cyan-900">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
          <div className="absolute top-20 start-10 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
              <FaCheckCircle className="w-12 h-12 text-green-400" />
            </div>
            
            {/* Title with Gradient Text Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              {language === 'en' ? 'Thank You!' : 'شكراً لك!'}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl">
              {language === 'en' 
                ? 'Your message has been received. We will get back to you shortly.' 
                : 'تم استلام رسالتك. سنرد عليك قريباً.'}
            </p>
            
            <Link href="/" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 font-medium">
              <FaArrowLeft className="me-2" />
              {language === 'en' ? 'Back to Homepage' : 'العودة إلى الصفحة الرئيسية'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
