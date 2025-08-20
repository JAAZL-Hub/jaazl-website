'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  getSocialIcon,
  getNavigationIcon,
  getContactIcon,
  getMiscIcon,
} from '@/utils/iconMapping';

const Footer: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const productsServicesLinks = [
    { text: { en: 'Water & Wastewater Treatment', ar: 'معالجة المياه ومياه الصرف' }, path: '/services#water' },
    { text: { en: 'Specialty & Bulk Chemicals', ar: 'المواد الكيميائية المتخصصة والسائبة' }, path: '/services#chemical' },
    { text: { en: 'Technical Consultancy & AI', ar: 'الاستشارات التقنية والذكاء الاصطناعي' }, path: '/services#consulting' },
    { text: { en: 'Digital Technologies & Automation', ar: 'التقنيات الرقمية والأتمتة' }, path: '/services#technologies' },
    { text: { en: 'Prefabricated Tanks', ar: 'الخزانات الجاهزة' }, path: '/services#material' },
    { text: { en: 'Electromechanical Services', ar: 'الخدمات الكهروميكانيكية' }, path: '/services#electromech' },
  ];

  const specializedInLinks = [
    { text: { en: 'Water & Wastewater Treatment', ar: 'معالجة المياه ومياه الصرف' }, path: '/services/#water' },
    { text: { en: 'Specialty & Bulk Chemicals', ar: 'المواد الكيميائية المتخصصة والسائبة' }, path: '/services/#chemical' },
    { text: { en: 'Technical Consultancy & AI', ar: 'الاستشارات التقنية والذكاء الاصطناعي' }, path: '/services/#consulting' },
  ];

  const industriesLinks = [
    { text: { en: 'Oil & Gas', ar: 'النفط والغاز' }, path: '/industries/oil-gas' },
    { text: { en: 'Petrochemicals', ar: 'البتروكيماويات' }, path: '/industries/petrochemicals' },
    { text: { en: 'Refineries', ar: 'المصافي' }, path: '/industries/refineries' },
    { text: { en: 'Mining & Minerals', ar: 'التعدين والمعادن' }, path: '/industries/mining' },
    { text: { en: 'Fertilizers', ar: 'الأسمدة' }, path: '/industries/fertilizers' },
    { text: { en: 'Power & Electricity', ar: 'الطاقة والكهرباء' }, path: '/industries/power' },
    { text: { en: 'Manufacturing', ar: 'التصنيع' }, path: '/industries/manufacturing' },
    { text: { en: 'Food & Beverages', ar: 'الأغذية والمشروبات' }, path: '/industries/food-beverages' },
    { text: { en: 'Municipal', ar: 'البلديات' }, path: '/industries/municipal' },
  ];
  
  const quickLinks = [
    { text: { en: 'About Us', ar: 'من نحن' }, path: '/about' },
    { text: { en: 'All Services', ar: 'جميع الخدمات' }, path: '/services' },
    { text: { en: 'All Industries', ar: 'جميع الصناعات' }, path: '/industries' },
    { text: { en: 'Contact Us', ar: 'اتصل بنا' }, path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-slate-900 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className={`flex items-center justify-center mb-8 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              <div className="w-40 h-16 flex items-center justify-center">
                <Image 
                  src="/images/JAAZL-Logo.svg" 
                  alt="JAAZL Logo" 
                  width={160} 
                  height={64} 
                  className="object-contain" 
                  style={{
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
            </div>
            <p className={`text-gray-400 mb-8 leading-relaxed max-w-md ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'en' 
                ? "Leading industrial solutions provider in Saudi Arabia's Eastern Province, delivering excellence through innovation, expertise, and world-class partnerships."
                : "شركة رائدة في تقديم الحلول الصناعية في المنطقة الشرقية بالمملكة العربية السعودية، نقدم التميز من خلال الابتكار والخبرة والشراكات العالمية."}
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/jaazl-industrial-company" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('linkedin'), { className: "w-5 h-5" })}</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('twitter'), { className: "w-5 h-5" })}</a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('facebook'), { className: "w-5 h-5" })}</a>
            </div>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className={`text-lg font-bold mb-6 text-orange-400 ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Products & Services' : 'المنتجات والخدمات'}</h4>
            <ul className="space-y-3 mb-6">
              {productsServicesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    {React.createElement(getNavigationIcon(language === 'ar' ? 'arrow-left' : 'arrow-right'), { 
                      className: `w-4 h-4 mx-2 transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}` 
                    })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h5 className={`text-sm font-semibold mb-3 text-blue-300 uppercase tracking-wider ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Specialized In' : 'متخصصون في'}</h5>
            <ul className="space-y-2">
              {specializedInLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className={`text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 flex items-center group ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    {React.createElement(getNavigationIcon(language === 'ar' ? 'arrow-left' : 'arrow-right'), { 
                      className: `w-3 h-3 mx-2 transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}` 
                    })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className={`text-lg font-bold mb-6 text-orange-400 ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Industries' : 'الصناعات'}</h4>
            <ul className="space-y-3">
              {industriesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    {React.createElement(getNavigationIcon(language === 'ar' ? 'arrow-left' : 'arrow-right'), { 
                      className: `w-4 h-4 mx-2 transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}` 
                    })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 text-orange-400 ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                    {React.createElement(getNavigationIcon(language === 'ar' ? 'arrow-left' : 'arrow-right'), { 
                      className: `w-4 h-4 mx-2 transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}` 
                    })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
               <li className="pt-4">
                <button onClick={toggleLanguage} className={`text-gray-400 hover:text-white transition-colors duration-300 flex items-center group w-full border border-gray-700 hover:border-secondary-400 rounded-full px-4 py-2 ${language === 'ar' ? 'flex-row-reverse font-arabic' : ''}`}>
                  {React.createElement(getNavigationIcon('globe'), { className: "w-4 h-4 mx-2" })}
                  {language === 'en' ? 'تغيير إلى العربية' : 'Switch to English'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section in Footer */}
        <div className={`mt-16 pt-10 border-t border-gray-800 grid md:grid-cols-3 gap-8 text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
            <div className={`flex items-center justify-center ${language === 'ar' ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
              {React.createElement(getContactIcon('phone'), { className: "w-6 h-6 mx-3 text-green-400" })}
              <div className={language === 'ar' ? 'font-arabic' : ''}>
                <div className={`font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Call Us' : 'اتصل بنا'}</div>
                <a href="tel:+966555109268" className={`text-gray-400 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>+966 55 510 9268</a>
              </div>
            </div>
            <div className={`flex items-center justify-center ${language === 'ar' ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
              {React.createElement(getContactIcon('mail'), { className: "w-6 h-6 mx-3 text-blue-400" })}
              <div className={language === 'ar' ? 'font-arabic' : ''}>
                <div className={`font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Email Us' : 'راسلنا عبر الإيميل'}</div>
                <a href="mailto:sales@jaazl.com" className={`text-gray-400 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>sales@jaazl.com</a>
              </div>
            </div>
            <div className={`flex items-center justify-center ${language === 'ar' ? 'md:justify-end md:flex-row-reverse' : 'md:justify-start'}`}>
              {React.createElement(getMiscIcon('map-pin'), { className: "w-6 h-6 mx-3 text-orange-400" })}
              <div className={language === 'ar' ? 'font-arabic' : ''}>
                <div className={`font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Our Office' : 'مكتبنا'}</div>
                <p className={`text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>{language === 'en' ? 'Jubail Industrial Area 1' : 'الجبيل الصناعية ١'}</p>
              </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-gray-400 text-sm mb-4 md:mb-0 ${language === 'ar' ? 'text-center font-arabic' : 'text-center'}`}>
              © {new Date().getFullYear()} JAAZL Industrial Company. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </p>
            <div className={`flex gap-6 text-gray-400 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Link href="/privacy" className="hover:text-white transition-colors text-sm">{language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>
              <Link href="/terms" className="hover:text-white transition-colors text-sm">{language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;