'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  getSocialIcon,
  getNavigationIcon,
  getContactIcon,

} from '@/utils/iconMapping';

const Footer: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const servicesLinks = [
    { text: { en: 'Engineering & AI', ar: 'الهندسة والذكاء الاصطناعي' }, path: '/#services' },
    { text: { en: 'Equipment Supply', ar: 'توريد المعدات' }, path: '/#services' },
    { text: { en: 'Chemical Solutions', ar: 'الحلول الكيميائية' }, path: '/#services' },
    { text: { en: 'Electromechanical', ar: 'الكهروميكانيكية' }, path: '/#services' },
  ];

  const industriesLinks = [
    { text: { en: 'Oil & Gas', ar: 'النفط والغاز' }, path: '/#industries' },
    { text: { en: 'Petrochemicals', ar: 'البتروكيماويات' }, path: '/#industries' },
    { text: { en: 'Refineries', ar: 'المصافي' }, path: '/#industries' },
    { text: { en: 'Mining', ar: 'التعدين' }, path: '/#industries' },
  ];
  
  const quickLinks = [
    { text: { en: 'About Us', ar: 'من نحن' }, path: '/#why-choose-us' },
    { text: { en: 'Our Clients', ar: 'عملاؤنا' }, path: '/#clients' },
    { text: { en: 'Contact Us', ar: 'اتصل بنا' }, path: '/#cta' },
    { text: { en: 'Careers', ar: 'الوظائف' }, path: '/careers' }, // Assuming a future careers page
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-slate-900 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image 
                  src="/images/JAAZL-Logo 2.png" 
                  alt="JAAZL Logo" 
                  width={56} 
                  height={56} 
                  className="object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{language === 'en' ? 'JAAZL' : 'جازل'}</h3>
                <p className="text-gray-400">{language === 'en' ? 'Industrial Solutions Excellence' : 'التميز في الحلول الصناعية'}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              {language === 'en' 
                ? "Leading industrial solutions provider in Saudi Arabia's Eastern Province, delivering excellence through innovation, expertise, and world-class partnerships."
                : "شركة رائدة في تقديم الحلول الصناعية في المنطقة الشرقية بالمملكة العربية السعودية، نقدم التميز من خلال الابتكار والخبرة والشراكات العالمية."}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/jaazl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('linkedin'), { className: "w-5 h-5" })}</a>
              <a href="https://twitter.com/jaazl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('twitter'), { className: "w-5 h-5" })}</a>
              <a href="https://facebook.com/jaazl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-secondary-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-card hover:shadow-btn-secondary">{React.createElement(getSocialIcon('facebook'), { className: "w-5 h-5" })}</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">{language === 'en' ? 'Services' : 'الخدمات'}</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                    {React.createElement(getNavigationIcon('arrow-right'), { className: "w-4 h-4 mx-2 group-hover:translate-x-1 transition-transform" })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">{language === 'en' ? 'Industries' : 'الصناعات'}</h4>
            <ul className="space-y-3">
              {industriesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                    {React.createElement(getNavigationIcon('arrow-right'), { className: "w-4 h-4 mx-2 group-hover:translate-x-1 transition-transform" })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                    {React.createElement(getNavigationIcon('arrow-right'), { className: "w-4 h-4 mx-2 group-hover:translate-x-1 transition-transform" })}
                    {link.text[language]}
                  </Link>
                </li>
              ))}
               <li className="pt-4">
                <button onClick={toggleLanguage} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group w-full border border-gray-700 hover:border-secondary-400 rounded-full px-4 py-2">
                  {React.createElement(getNavigationIcon('globe'), { className: "w-4 h-4 mx-2" })}
                  {language === 'en' ? 'تغيير إلى العربية' : 'Switch to English'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section in Footer */}
        <div className="mt-16 pt-10 border-t border-gray-800 grid md:grid-cols-3 gap-8 text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start">
              {React.createElement(getContactIcon('phone'), { className: "w-6 h-6 mx-3 text-green-400" })}
              <div>
                <div className="font-semibold">{language === 'en' ? 'Call Us' : 'اتصل بنا'}</div>
                <a href="tel:+966555109268" className="text-gray-400 hover:text-white transition-colors">+966 55 510 9268</a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              {React.createElement(getContactIcon('mail'), { className: "w-6 h-6 mx-3 text-blue-400" })}
              <div>
                <div className="font-semibold">{language === 'en' ? 'Email Us' : 'راسلنا عبر الإيميل'}</div>
                <a href="mailto:info@jaazl.com" className="text-gray-400 hover:text-white transition-colors">info@jaazl.com</a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              {React.createElement(getContactIcon('map-pin'), { className: "w-6 h-6 mx-3 text-orange-400" })}
              <div>
                <div className="font-semibold">{language === 'en' ? 'Our Office' : 'مكتبنا'}</div>
                <p className="text-gray-400">Jubail Industrial Area 1</p>
              </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} JAAZL Industrial Company. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </p>
            <div className="flex space-x-6 text-gray-400">
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