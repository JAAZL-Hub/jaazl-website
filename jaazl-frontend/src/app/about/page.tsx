'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAboutInfo } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaTimes, FaAward, FaHeart, FaShieldAlt, FaEye, FaBolt, FaUsers, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// Define interfaces for our data structure to avoid TypeScript errors
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

interface ImageContent {
  url: string;
  altText: LocalizedContent;
}

interface ValueItem {
  icon: string;
  title: LocalizedContent;
  description: LocalizedContent;
}

interface TeamMember {
  name: string;
  position: LocalizedContent | string;
  bio: LocalizedContent | string;
  imageAlt?: string;
  image?: ImageContent;
  id?: string;
}

interface Certificate {
  name: LocalizedContent;
  description: LocalizedContent;
  image?: ImageContent;
  issuedBy?: string;
  validUntil?: string;
  id?: string;
}

// Interface that maps AboutInfo to the structure used in this component
interface AboutData {
  history: LocalizedContent;
  mission: LocalizedContent;
  vision: LocalizedContent;
  values: ValueItem[]; // maps to coreValues in AboutInfo
  team: TeamMember[];  // maps to leadership in AboutInfo
  certificates: Certificate[]; // maps to certifications in AboutInfo
}

export default function AboutPage() {
  const { language, direction } = useLanguage();
  const { aboutInfo, isLoading } = useAboutInfo();
  
  // State for active tabs and modal
  const [activeTab, setActiveTab] = useState('mission');
  const [showModal, setShowModal] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State for animations and card flips
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    values: true,
    team: true,
    certificates: true
  });
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const targetKey = (entry.target as HTMLElement).dataset.sectionKey;
          if (targetKey && entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [targetKey]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = [historyRef, valuesRef, teamRef, certificatesRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      sections.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Map AboutInfo to AboutData structure or use empty data for initial render
  const aboutData: AboutData = aboutInfo ? {
    history: aboutInfo.history,
    mission: aboutInfo.mission,
    vision: aboutInfo.vision,
    values: aboutInfo.values?.map(value => ({
      icon: value.icon,
      title: value.title,
      description: value.description
    })) || [],
    team: aboutInfo.team?.map(member => ({
      id: member.id,
      name: typeof member.name === 'string' ? member.name : (member.name.en || ''),
      position: member.position,
      bio: member.bio,
      image: member.image ? { 
        url: member.image.url, 
        altText: member.image.altText || { en: '', ar: '' } 
      } : undefined
    })) || [],
    certificates: aboutInfo.certifications?.map(cert => ({
      id: cert.id,
      name: cert.name,
      description: cert.description,
      image: cert.image ? { 
        url: cert.image.url, 
        altText: cert.image.altText || { en: '', ar: '' } 
      } : undefined,
      issuedBy: '',  // Add default values for optional properties
      validUntil: ''
    })) || []
  } : {
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
      name: member.name,
      position: getLocalizedValue(member.position, language),
      bio: getLocalizedValue(member.bio, language),
      imageAlt: member.image ? (language === 'en' ? member.image.altText.en : member.image.altText.ar) : ''
    })),
    certificates: aboutData.certificates.map(certificate => ({
      ...certificate,
      name: language === 'en' ? certificate.name.en : certificate.name.ar,
      description: language === 'en' ? certificate.description.en : certificate.description.ar,
      imageAlt: certificate.image ? (language === 'en' ? certificate.image.altText.en : certificate.image.altText.ar) : ''
    }))
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={direction}>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/95 to-blue-900/90"></div>
          <div className="absolute top-32 sm:top-28 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 w-full">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {language === 'en' ? (
                <>
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">JAAZL</span>
                </>
              ) : (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400">جازل</span> نبذة عن
                </>
              )}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 mb-8 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Pioneering industrial solutions for a sustainable future.'
                : 'حلول صناعية رائدة لمستقبل مستدام.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50" ref={historyRef} data-section-key="history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 h-3 bg-orange-200/50"></span>
                <span className="relative">{language === 'en' ? 'Our Story' : 'قصتنا'}</span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en' ? 'Learn about our journey, mission, and vision for the future.' : 'تعرف على رحلتنا ومهمتنا ورؤيتنا للمستقبل.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* History Card */}
            <div className={`bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 hover:shadow-card-hover transition-all duration-700 ${isVisible.history ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {language === 'en' ? 'Our History' : 'تاريخنا'}
              </h3>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: localizedAbout.history }}></div>
            </div>
            
            {/* Mission Card */}
            <div className={`bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 hover:shadow-card-hover transition-all duration-700 ${isVisible.history ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600">
                <FaBolt className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {language === 'en' ? 'Our Mission' : 'مهمتنا'}
              </h3>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: localizedAbout.mission }}></div>
            </div>
            
            {/* Vision Card */}
            <div className={`bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 hover:shadow-card-hover transition-all duration-700 ${isVisible.history ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-blue-100 text-blue-600">
                <FaEye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {language === 'en' ? 'Our Vision' : 'رؤيتنا'}
              </h3>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: localizedAbout.vision }}></div>
            </div>
          </div>
        </div>
      </section>
            <div className={`transition-all duration-700 ease-in-out ${activeTab === 'vision' ? 'opacity-100' : 'opacity-0 absolute'}`}>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FaEye className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                  <div className="prose prose-xl text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: localizedAbout.vision }} />
                </div>
              </div>
            </div>

      {/* Values Section */}
      <section className="py-24" ref={valuesRef} data-section-key="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'The pillars of our culture and commitment to excellence.' : 'أركان ثقافتنا والتزامنا بالتميز.'}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedAbout.values.map((value, index) => {
              const iconMap: { [key: string]: React.ElementType } = {
                Heart: FaHeart,
                Shield: FaShieldAlt,
                Eye: FaEye,
                Zap: FaBolt,
                Users: FaUsers,
                Award: FaAward
              };
              const ValueIcon = iconMap[value.icon] || FaAward;

              return (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 hover:shadow-card-hover transition-all duration-700 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`mb-6 transform transition-all duration-500 ${isVisible.values ? 'rotate-0 scale-100' : '-rotate-45 scale-0'}`} 
                       style={{ transitionDelay: `${(index * 150) + 300}ms` }}>
                    <ValueIcon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-500 ${isVisible.values ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} 
                      style={{ transitionDelay: `${(index * 150) + 450}ms` }}>
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 text-base leading-relaxed transition-all duration-500 ${isVisible.values ? 'opacity-100' : 'opacity-0'}`}
                     style={{ transitionDelay: `${(index * 150) + 600}ms` }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50" ref={teamRef} data-section-key="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Leadership Team' : 'فريق القيادة'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'Meet the experienced professionals driving our success.' : 'تعرف على المحترفين ذوي الخبرة الذين يقودون نجاحنا.'}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {localizedAbout.team.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-card overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-card-hover hover:scale-105 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => { setActiveMember(member as TeamMember); setShowModal(true); }}
              >
                <div className="h-72 overflow-hidden relative">
                  {member.image && (
                    <Image 
                      src={member.image.url} 
                      alt={member.imageAlt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <span className="text-white text-xl font-semibold">{language === 'en' ? 'View Profile' : 'عرض الملف الشخصي'}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
                  <p className="text-blue-600 font-medium mt-1">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {showModal && activeMember && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowModal(false)}>
            <div 
              className="bg-white rounded-2xl shadow-card-hover max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-gray-200 rounded-full p-2 z-10 hover:bg-gray-300 transition-colors duration-200"
                >
                  <FaTimes className="w-6 h-6 text-gray-700" />
                </button>
                
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <Image 
                      src={activeMember.image?.url || 'https://placehold.co/400x500/0B2346/FFFFFF?text=Profile'}
                      alt={activeMember.image?.altText[language] || activeMember.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover object-center md:rounded-l-2xl"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-4xl font-bold text-gray-900">{activeMember.name}</h3>
                    <p className="text-blue-700 text-2xl font-medium mt-1">{getLocalizedValue(activeMember.position, language)}</p>
                    
                    <div className="prose prose-lg max-w-none text-gray-600 mt-6 leading-relaxed">
                      <p>{getLocalizedValue(activeMember.bio, language)}</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4 text-xl">{language === 'en' ? 'Areas of Expertise' : 'مجالات الخبرة'}</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{language === 'en' ? 'Industrial Engineering' : 'الهندسة الصناعية'}</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{language === 'en' ? 'Process Optimization' : 'تحسين العمليات'}</span>
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">{language === 'en' ? 'Project Management' : 'إدارة المشاريع'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Certificates Section */}
      <section className="py-24" ref={certificatesRef} data-section-key="certificates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Certifications & Accreditations' : 'شهاداتنا واعتماداتنا'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'A testament to our unwavering commitment to quality, safety, and excellence.' : 'شهادة على التزامنا الراسخ بالجودة والسلامة والتميز.'}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {localizedAbout.certificates.map((certificate, index) => {
              const isFlipped = flippedCards[index] || false;
              
              const handleFlip = () => {
                setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
              };
              
              return (
                <div 
                  key={index} 
                  className={`h-80 relative perspective-1000 cursor-pointer ${isVisible.certificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms`, transitionProperty: 'opacity, transform' }}
                  onClick={handleFlip}
                >
                  <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                    {/* Card Front */}
                    <div className="absolute inset-0 w-full h-full bg-white p-8 rounded-2xl shadow-card flex flex-col items-center justify-center text-center backface-hidden">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <FaAward className="h-10 w-10 text-blue-800" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{certificate.name}</h3>
                      <p className="text-gray-500 mt-2 line-clamp-2">{certificate.description}</p>
                      <div className="mt-auto pt-4">
                        <span className="text-blue-600 font-semibold text-base">{language === 'en' ? 'Click for details' : 'انقر للتفاصيل'}</span>
                      </div>
                    </div>
                    
                    {/* Card Back */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-card-hover flex flex-col backface-hidden rotate-y-180">
                      <h3 className="text-3xl font-bold mb-4">{certificate.name}</h3>
                      <div className="space-y-3 text-left">
                        <p><span className="font-semibold">{language === 'en' ? 'Issued by: ' : 'صادرة عن: '}</span> {certificate.issuedBy || 'N/A'}</p>
                        <p><span className="font-semibold">{language === 'en' ? 'Valid until: ' : 'صالحة حتى: '}</span> {certificate.validUntil || 'N/A'}</p>
                        <p><span className="font-semibold">{language === 'en' ? 'Certificate ID: ' : 'رقم الشهادة: '}</span> {certificate.id || 'N/A'}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-blue-400/50">
                        <p className="text-base text-blue-100">{language === 'en' ? 'Demonstrates our commitment to industry standards.' : 'توضح التزامنا بمعايير الصناعة.'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'
            }
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>
    </div>
  );
}
