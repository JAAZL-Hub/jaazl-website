'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAboutInfo } from '@/services/hooks';
import { useLanguage } from '@/contexts/LanguageContext';
import { AboutInfo } from '@/services/types';
import { FaTimes, FaAward, FaHeart, FaShieldAlt, FaEye, FaBolt, FaUsers } from 'react-icons/fa';
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
  issuedBy?: string;
  validUntil?: string;
  id?: string;
  image?: ImageContent;
}

interface AboutData {
  history: LocalizedContent;
  mission: LocalizedContent;
  vision: LocalizedContent;
  values: ValueItem[];
  team: TeamMember[];
  certificates: Certificate[];
}

export default function AboutPage() {
  const { aboutInfo } = useAboutInfo();
  const { language, direction } = useLanguage();
  
  // State for active tabs and modal
  const [activeTab, setActiveTab] = useState('mission');
  const [showModal, setShowModal] = useState(false);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
  
  // State for animations and card flips
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  
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
    
    const sections = [valuesRef, teamRef, certificatesRef];
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
    values: aboutInfo.coreValues?.map(value => ({
      icon: value.icon,
      title: value.title,
      description: value.description
    })) || [],
    team: aboutInfo.leadership?.map(member => ({
      id: member.id,
      name: typeof member.name === 'string' ? member.name : (member.name.en || ''),
      position: member.position,
      bio: member.bio,
      image: member.imageSrc ? { url: member.imageSrc, altText: typeof member.name === 'object' ? member.name : { en: member.name, ar: member.name } } : undefined
    })) || [],
    certificates: aboutInfo.certifications?.map(cert => ({
      id: cert.id,
      name: cert.name,
      description: cert.description,
      image: cert.imageSrc ? { url: cert.imageSrc, altText: cert.name } : undefined,
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
    <div className="bg-white" dir={direction}>
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {language === 'en' ? 'About JAAZL' : 'نبذة عن جازل'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Pioneering industrial solutions for a sustainable future in Saudi Arabia.'
                : 'حلول صناعية رائدة لمستقبل مستدام في المملكة العربية السعودية.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Our History' : 'تاريخنا'}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p>{localizedAbout.history}</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image 
                src="https://placehold.co/600x450/0B2346/FFFFFF?text=JAAZL+HQ"
                alt={language === 'en' ? 'JAAZL headquarters' : 'مقر جازل'}
                width={600}
                height={450}
                className="rounded-2xl shadow-card hover:shadow-card-hover w-full h-auto transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Foundation' : 'أساسنا'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'The principles that guide our every action and decision.' : 'المبادئ التي توجه كل عمل وقرار نتخذه.'}</p>
          </div>
          
          <div className="flex justify-center mb-8 gap-4">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === 'mission' 
                ? 'bg-blue-600 text-white shadow-btn-primary' 
                : 'bg-white text-gray-700 hover:bg-blue-100'}`}
            >
              {language === 'en' ? 'Mission' : 'المهمة'}
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === 'vision' 
                ? 'bg-blue-600 text-white shadow-btn-primary' 
                : 'bg-white text-gray-700 hover:bg-blue-100'}`}
            >
              {language === 'en' ? 'Vision' : 'الرؤية'}
            </button>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-card relative overflow-hidden min-h-[320px]">
            <div className={`transition-all duration-700 ease-in-out ${activeTab === 'mission' ? 'opacity-100' : 'opacity-0 absolute'}`}>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FaBolt className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{language === 'en' ? 'Our Mission' : 'مهمتنا'}</h3>
                  <div className="prose prose-xl text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: localizedAbout.mission }} />
                </div>
              </div>
            </div>
            <div className={`transition-all duration-700 ease-in-out ${activeTab === 'vision' ? 'opacity-100' : 'opacity-0 absolute'}`}>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FaEye className="h-8 w-8 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{language === 'en' ? 'Our Vision' : 'رؤيتنا'}</h3>
                  <div className="prose prose-xl text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: localizedAbout.vision }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24" ref={valuesRef} data-section-key="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'The pillars of our culture and commitment to excellence.' : 'أركان ثقافتنا والتزامنا بالتميز.'}</p>
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
                  className={`bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 hover:shadow-card-hover transition-all duration-500 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    <ValueIcon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Leadership Team' : 'فريق القيادة'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'Meet the experienced professionals driving our success.' : 'تعرف على المحترفين ذوي الخبرة الذين يقودون نجاحنا.'}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {localizedAbout.team.map((member, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-card overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-card-hover ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                    <span className="text-white text-lg font-semibold">{language === 'en' ? 'View Profile' : 'عرض الملف الشخصي'}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{member.name}</h3>
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
                    <h3 className="text-3xl font-bold text-gray-900">{activeMember.name}</h3>
                    <p className="text-blue-700 text-xl font-medium mt-1">{getLocalizedValue(activeMember.position, language)}</p>
                    
                    <div className="prose prose-lg max-w-none text-gray-600 mt-6 leading-relaxed">
                      <p>{getLocalizedValue(activeMember.bio, language)}</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">{language === 'en' ? 'Areas of Expertise' : 'مجالات الخبرة'}</h4>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Our Certifications & Accreditations' : 'شهاداتنا واعتماداتنا'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{language === 'en' ? 'A testament to our unwavering commitment to quality, safety, and excellence.' : 'شهادة على التزامنا الراسخ بالجودة والسلامة والتميز.'}</p>
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
                      <h3 className="text-xl font-bold text-gray-900">{certificate.name}</h3>
                      <p className="text-gray-500 mt-2 line-clamp-2">{certificate.description}</p>
                      <div className="mt-auto pt-4">
                        <span className="text-blue-600 font-semibold text-sm">{language === 'en' ? 'Click for details' : 'انقر للتفاصيل'}</span>
                      </div>
                    </div>
                    
                    {/* Card Back */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-card-hover flex flex-col backface-hidden rotate-y-180">
                      <h3 className="text-2xl font-bold mb-4">{certificate.name}</h3>
                      <div className="space-y-3 text-left">
                        <p><span className="font-semibold">{language === 'en' ? 'Issued by: ' : 'صادرة عن: '}</span> {certificate.issuedBy || 'N/A'}</p>
                        <p><span className="font-semibold">{language === 'en' ? 'Valid until: ' : 'صالحة حتى: '}</span> {certificate.validUntil || 'N/A'}</p>
                        <p><span className="font-semibold">{language === 'en' ? 'Certificate ID: ' : 'رقم الشهادة: '}</span> {certificate.id || 'N/A'}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-blue-400/50">
                        <p className="text-sm text-blue-100">{language === 'en' ? 'Demonstrates our commitment to industry standards.' : 'توضح التزامنا بمعايير الصناعة.'}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Let us help you achieve your industrial goals. Contact us today for a consultation and discover how JAAZL can elevate your business.'
              : 'دعنا نساعدك في تحقيق أهدافك الصناعية. اتصل بنا اليوم للحصول على استشارة واكتشف كيف يمكن لـ جازل الارتقاء بأعمالك.'
            }
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </div>
      </section>
    </div>
  );
}
