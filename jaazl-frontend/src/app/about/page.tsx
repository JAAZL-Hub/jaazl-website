'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAboutInfo } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, X, ChevronDown, ChevronUp, Award, Heart, Shield, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const { aboutInfo, error } = useAboutInfo();
  const { language, direction } = useLanguage();
  
  // State for active tabs and modal
  const [activeTab, setActiveTab] = useState('mission'); // Default to mission tab
  const [showModal, setShowModal] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  
  // State for animations and card flips
  const [isVisible, setIsVisible] = useState({});
  const [flippedCards, setFlippedCards] = useState({});
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const certificatesRef = useRef(null);
  
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === valuesRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, values: true }));
          } else if (entry.target === teamRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, team: true }));
          } else if (entry.target === certificatesRef.current && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, certificates: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (certificatesRef.current) observer.observe(certificatesRef.current);
    
    return () => {
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (certificatesRef.current) observer.unobserve(certificatesRef.current);
    };
  }, []);

  // Use empty data for initial render instead of showing loading state
  const aboutData = aboutInfo || {
    history: { en: '', ar: '' },
    mission: { en: '', ar: '' },
    vision: { en: '', ar: '' },
    values: [],
    team: [],
    certificates: []
  };

  const localizedAbout = {
    history: language === 'en' ? aboutData.history.en : aboutData.history.ar,
    mission: language === 'en' ? aboutData.mission.en : aboutData.mission.ar,
    vision: language === 'en' ? aboutData.vision.en : aboutData.vision.ar,
    values: aboutData.values.map(value => ({
      ...value,
      title: language === 'en' ? value.title.en : value.title.ar,
      description: language === 'en' ? value.description.en : value.description.ar
    })),
    team: aboutData.team.map(member => ({
      ...member,
      position: language === 'en' ? member.position.en : member.position.ar,
      bio: language === 'en' ? member.bio.en : member.bio.ar,
      imageAlt: member.image ? (language === 'en' ? member.image.altText.en : member.image.altText.ar) : ''
    })),
    certificates: aboutData.certificates.map(certificate => ({
      ...certificate,
      name: language === 'en' ? certificate.name.en : certificate.name.ar,
      description: language === 'en' ? certificate.description.en : certificate.description.ar,
      imageAlt: language === 'en' ? certificate.image.altText.en : certificate.image.altText.ar
    }))
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/95 to-blue-900/90"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {language === 'en' ? 'About JAAZL' : 'نبذة عن جازل'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl">
              {language === 'en' 
                ? 'Pioneering industrial solutions for a sustainable future'
                : 'حلول صناعية رائدة لمستقبل مستدام'
              }
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Our History' : 'تاريخنا'}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
                <p>Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                // src="/images/about-history.jpg"
                src="https://placehold.co/600x400.png" 
                alt={language === 'en' ? 'JAAZL history' : 'تاريخ جازل'}
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & History Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            {language === 'en' ? 'Our Foundation' : 'أساسنا'}
          </h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'mission' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-blue-50'}`}
            >
              {language === 'en' ? 'Mission' : 'المهمة'}
            </button>
            
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'vision' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-blue-50'}`}
            >
              {language === 'en' ? 'Vision' : 'الرؤية'}
            </button>
          </div>
          
          {/* Tab Content with Animation */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden min-h-[300px]">
            {/* Mission Tab */}
            <div 
              className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out transform ${activeTab === 'mission' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full hidden'}`}
            >
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Our Mission' : 'مهمتنا'}
                </h3>
              </div>
              <div className="prose prose-lg text-gray-700 max-w-none" dangerouslySetInnerHTML={{ __html: localizedAbout.mission }} />
            </div>
            
            {/* Vision Tab */}
            <div 
              className={`absolute inset-0 p-8 transition-all duration-500 ease-in-out transform ${activeTab === 'vision' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full hidden'}`}
            >
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
                </h3>
              </div>
              <div className="prose prose-lg text-gray-700 max-w-none" dangerouslySetInnerHTML={{ __html: localizedAbout.vision }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Animated */}
      <section className="py-16" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedAbout.values.map((value, index) => {
              // Map icon string to actual Lucide icon components
              const IconMap = {
                'award': <Award className="w-8 h-8 text-blue-600" />,
                'shield': <Shield className="w-8 h-8 text-blue-600" />,
                'lightbulb': <Zap className="w-8 h-8 text-blue-600" />,
                'alert-circle': <CheckCircle className="w-8 h-8 text-blue-600" />,
                'leaf': <Heart className="w-8 h-8 text-blue-600" />,
                'handshake': <Award className="w-8 h-8 text-blue-600" />
              };
              
              const ValueIcon = IconMap[value.icon] || <CheckCircle className="w-8 h-8 text-blue-600" />;
              
              return (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-all duration-500 transform ${isVisible.values 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                    {ValueIcon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Interactive */}
      <section className="py-16 bg-gray-50" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {language === 'en' ? 'Our Leadership Team' : 'فريق القيادة'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {localizedAbout.team.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isVisible.team 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => { setActiveMember(member); setShowModal(true); }}
              >
                <div className="h-64 overflow-hidden relative">
                  {member.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <span className="text-white font-medium">{language === 'en' ? 'View Profile' : 'عرض الملف الشخصي'}</span>
                    </div>
                  )}
                  {member.image && (
                    <img 
                      src={member.image.url} 
                      alt={member.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
                  <p className="text-blue-700 mb-4">{member.position}</p>
                  <p className="text-gray-600 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Member Modal */}
        {showModal && activeMember && (
          <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                
                <div className="md:flex">
                  <div className="md:w-2/5 h-80 md:h-auto relative">
                    <img 
                      src={activeMember.image?.url || '/images/team/placeholder.png'} 
                      alt={activeMember.image?.altText?.[language] || activeMember.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 md:hidden">
                      <h3 className="text-2xl font-bold text-white">{activeMember.name}</h3>
                      <p className="text-blue-200">{activeMember.position?.[language]}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="hidden md:block mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{activeMember.name}</h3>
                      <p className="text-blue-700 text-lg">{activeMember.position?.[language]}</p>
                    </div>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 mt-4">
                      <p>{activeMember.bio?.[language]}</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-4">{language === 'en' ? 'Areas of Expertise' : 'مجالات الخبرة'}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{language === 'en' ? 'Industrial Engineering' : 'الهندسة الصناعية'}</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{language === 'en' ? 'Process Optimization' : 'تحسين العمليات'}</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{language === 'en' ? 'Project Management' : 'إدارة المشاريع'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Certificates Section - Interactive with Flip Effect */}
      <section className="py-16" ref={certificatesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {language === 'en' ? 'Our Certifications' : 'شهاداتنا'}
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedAbout.certificates.map((certificate, index) => {
              // Get flip state from the flippedCards state object
              const isFlipped = flippedCards[index] || false;
              
              // Functions to handle card flipping
              const handleMouseEnter = () => {
                setFlippedCards(prev => ({ ...prev, [index]: true }));
              };
              
              const handleMouseLeave = () => {
                setFlippedCards(prev => ({ ...prev, [index]: false }));
              };
              
              return (
                <div 
                  key={index} 
                  className={`h-64 relative perspective-1000 cursor-pointer ${isVisible.certificates 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`, 
                    transitionDuration: '500ms',
                    transformStyle: 'preserve-3d' 
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Card Front */}
                  <div 
                    className={`absolute inset-0 bg-white p-6 rounded-xl shadow-md transition-all duration-500 flex flex-col ${
                      isFlipped ? 'opacity-0' : 'opacity-100'}`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-blue-800" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{certificate.name}</h3>
                    </div>
                    <p className="text-gray-600 line-clamp-3">{certificate.description}</p>
                    <div className="mt-auto pt-4 text-center">
                      <span className="text-blue-700 text-sm">{language === 'en' ? 'Hover for details' : 'حوم للتفاصيل'}</span>
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 text-white p-6 rounded-xl shadow-md transition-all duration-500 ${
                      isFlipped ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)'
                    }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-white">{certificate.name}</h3>
                    <div className="space-y-3">
                      <p className="text-blue-100 text-sm">
                        <span className="font-medium">{language === 'en' ? 'Issued by: ' : 'صادرة عن: '}</span>
                        {certificate.issuedBy || 'International Organization for Standardization'}
                      </p>
                      <p className="text-blue-100 text-sm">
                        <span className="font-medium">{language === 'en' ? 'Valid until: ' : 'صالحة حتى: '}</span>
                        {certificate.validUntil || '2025-12-31'}
                      </p>
                      <p className="text-blue-100 text-sm">
                        <span className="font-medium">{language === 'en' ? 'Certificate ID: ' : 'رقم الشهادة: '}</span>
                        {certificate.id || `JAAZL-CERT-${index+1}`}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-400">
                      <p className="text-blue-100 text-sm">{language === 'en' ? 'This certification demonstrates our commitment to industry standards and excellence in our field.' : 'توضح هذه الشهادة التزامنا بمعايير الصناعة والتميز في مجالنا.'}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Work with Us?' : 'هل أنت مستعد للعمل معنا؟'}
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get in touch to discuss how JAAZL can help transform your industrial operations.'
              : 'تواصل معنا لمناقشة كيف يمكن لشركة جازل المساعدة في تحويل عملياتك الصناعية.'
            }
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            {language === 'en' ? 'Contact Us Today' : 'اتصل بنا اليوم'} 
          </Link>
        </div>
      </section>
    </div>
  );
}
