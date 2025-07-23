'use client';

import React, { useState, useEffect } from 'react';
import { useAboutInfo } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaTimes, FaAward, FaHeart, FaShieldAlt, FaEye, FaBolt, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import type { TeamMember as ImportedTeamMember } from '@/services/types';

// Define interfaces for our data structure
interface LocalizedContent {
  en: string;
  ar: string;
}

// Helper function to safely get localized content
function getLocalizedValue(value: string | LocalizedContent, lang: string): string {
  if (typeof value === 'string') {
    return value;
  }
  return lang === 'en' ? value.en : value.ar;
}



export default function AboutPage() {
  const { language } = useLanguage();
  const { aboutInfo } = useAboutInfo();
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [activeMember, setActiveMember] = useState<ImportedTeamMember | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Default icons for values (consistent with homepage design)
  const getValueIcon = (index: number) => {
    const icons = [FaAward, FaHeart, FaShieldAlt, FaEye, FaBolt, FaUsers];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-8 h-8 text-orange-500 mb-4 mx-auto" />;
  };

  // Handle modal
  const openModal = (member: ImportedTeamMember) => {
    setActiveMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveMember(null);
  };

  if (!aboutInfo || !isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="text-xl text-gray-600">
          {language === 'en' ? 'Loading...' : 'جاري التحميل...'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative pt-36 pb-24 overflow-hidden text-white bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
        <div className="absolute top-20 start-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {language === 'en' ? 'About JAAZL' : 'حول جازل'}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province with over 25 years of expertise.'
              : 'مقدم رائد للحلول الصناعية في المنطقة الشرقية بالمملكة العربية السعودية مع أكثر من 25 عامًا من الخبرة.'}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-6">
                <FaEye className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Our Mission' : 'رسالتنا'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {getLocalizedValue(aboutInfo.mission, language)}
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="text-orange-600 mb-6">
                <FaBolt className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {getLocalizedValue(aboutInfo.vision, language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {language === 'en' ? 'Our Journey' : 'رحلتنا'}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {getLocalizedValue(aboutInfo.history, language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Matching Homepage Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'The principles that guide our work and define our commitment to excellence.'
                : 'المبادئ التي توجه عملنا وتحدد التزامنا بالتميز.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(aboutInfo.coreValues || aboutInfo.values)?.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center hover:border-blue-300">
                <div className="mb-6 flex justify-center">
                  {getValueIcon(index)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {getLocalizedValue(value.title, language)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getLocalizedValue(value.description, language)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      {(aboutInfo.leadership || aboutInfo.team) && (aboutInfo.leadership || aboutInfo.team).length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Leadership Team' : 'فريق القيادة'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Meet the experienced professionals leading JAAZL towards continued success.'
                  : 'تعرف على المهنيين ذوي الخبرة الذين يقودون جازل نحو النجاح المستمر.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(aboutInfo.leadership || aboutInfo.team).map((member, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-gray-100">
                    <Image
                      src={member.image?.url || '/images/team/placeholder.png'}
                      alt={member.image?.altText ? getLocalizedValue(member.image.altText, language) : getLocalizedValue(member.name, language)}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {getLocalizedValue(member.name, language)}
                    </h3>
                    <p className="text-blue-600 font-medium mb-4">
                      {getLocalizedValue(member.position, language)}
                    </p>
                    <button
                      onClick={() => openModal(member)}
                      className="inline-block text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                    >
                      {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {aboutInfo.certifications && aboutInfo.certifications.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Certifications & Awards' : 'الشهادات والجوائز'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Recognition of our commitment to quality, safety, and excellence.'
                  : 'اعتراف بالتزامنا بالجودة والسلامة والتميز.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutInfo.certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 text-center hover:border-blue-300">
                  <div className="relative h-32 mb-6 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image?.url || '/images/certificates/placeholder.png'}
                      alt={cert.image?.altText ? getLocalizedValue(cert.image.altText, language) : getLocalizedValue(cert.name, language)}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {getLocalizedValue(cert.name, language)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getLocalizedValue(cert.description, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Matching Homepage Style */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
        <div className="absolute top-10 start-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 end-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-full text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>

      {/* Team Member Modal */}
      {showModal && activeMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 end-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-gray-100 flex-shrink-0">
                  <Image
                    src={activeMember.image?.url || '/images/team/placeholder.png'}
                    alt={activeMember.image?.altText ? getLocalizedValue(activeMember.image.altText, language) : getLocalizedValue(activeMember.name, language)}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="flex-1 text-center md:text-start">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {getLocalizedValue(activeMember.name, language)}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {getLocalizedValue(activeMember.position, language)}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {getLocalizedValue(activeMember.bio, language)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}