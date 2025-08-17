'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes, FaChevronDown, FaChevronUp, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

// Import service categories from MegaMenu
const serviceCategories = {
  water: {
    name: { en: 'Water & Wastewater Treatment', ar: 'معالجة المياه ومياه الصرف الصحي' },
    services: [
      { name: { en: 'Zero Liquid Discharge Systems', ar: 'أنظمة التفريغ السائل الصفري' }, path: '/services/zero-liquid-discharge' },
      { name: { en: 'Industrial Waste Management', ar: 'إدارة النفايات الصناعية' }, path: '/services/waste-management' },
      { name: { en: 'Oily Water & Hydrocarbon Treatment', ar: 'معالجة المياه الزيتية والهيدروكربونية' }, path: '/services/oily-water-treatment' }
    ]
  },
  chemical: {
    name: { en: 'Specialty & Bulk Chemicals', ar: 'الكيماويات المتخصصة والسائبة' },
    services: [
      { name: { en: 'Specialized Industrial Chemicals', ar: 'المواد الكيميائية الصناعية المتخصصة' }, path: '/services/specialized-chemicals' },
      { name: { en: 'Bulk Industrial Chemicals Supply', ar: 'توريد المواد الكيميائية الصناعية بالجملة' }, path: '/services/bulk-chemicals-supply' },
      { name: { en: 'Local Chemical Manufacturing & Blending', ar: 'التصنيع والخلط الكيميائي المحلي' }, path: '/services/chemical-blending' }
    ]
  },
  consulting: {
    name: { en: 'Technical Consultancy & AI', ar: 'الاستشارات التقنية والذكاء الاصطناعي' },
    services: [
      { name: { en: 'Industrial Engineering Consulting', ar: 'استشارات الهندسة الصناعية' }, path: '/services/engineering-consulting' },
      { name: { en: 'Process Safety Management', ar: 'إدارة سلامة العمليات' }, path: '/services/process-safety' },
      { name: { en: 'Reliability Engineering', ar: 'هندسة الموثوقية' }, path: '/services/reliability-engineering' }
    ]
  },
  technologies: {
    name: { en: 'Digital Technologies & Automation', ar: 'التقنيات الرقمية والأتمتة' },
    services: [
      { name: { en: 'AI & Industrial Automation', ar: 'الذكاء الاصطناعي والأتمتة الصناعية' }, path: '/services/ai-automation' },
      { name: { en: 'Industrial Digital Transformation', ar: 'التحول الرقمي الصناعي' }, path: '/services/digital-transformation' },
      { name: { en: 'Smart Manufacturing Solutions', ar: 'حلول التصنيع الذكي' }, path: '/services/smart-manufacturing' }
    ]
  },
  material: {
    name: { en: 'Material Supplies', ar: 'إمدادات المواد' },
    services: [
      { name: { en: 'Prefabricated Tanks', ar: 'خزانات مسبقة الصنع' }, path: '/services/prefabricated-tanks' },
      { name: { en: 'Pipes & Fittings', ar: 'أنابيب وتجهيزات' }, path: '/services/pipes-fittings' },
      { name: { en: 'Valves & Actuators', ar: 'صمامات ومحركات' }, path: '/services/valves-actuators' }
    ]
  },
  electromech: {
    name: { en: 'Electromechanical Services', ar: 'الخدمات الكهروميكانيكية' },
    services: [
      { name: { en: 'Industrial Electromechanical Systems', ar: 'أنظمة كهروميكانيكية صناعية' }, path: '/services/electromechanical-systems' },
      { name: { en: 'Shutdown & Turnaround Solutions', ar: 'حلول الإغلاق والصيانة الدورية' }, path: '/services/shutdown-turnaround' },
      { name: { en: 'Industrial Fabrication Services', ar: 'خدمات التصنيع الصناعي' }, path: '/services/fabrication-services' }
    ]
  }
};

const industries = [
  { name: { en: 'Oil & Gas', ar: 'النفط والغاز' }, path: '/industries/oil-gas' },
  { name: { en: 'Petrochemicals', ar: 'البتروكيماويات' }, path: '/industries/petrochemicals' },
  { name: { en: 'Refineries', ar: 'المصافي' }, path: '/industries/refineries' },
  { name: { en: 'Mining & Minerals', ar: 'التعدين والمعادن' }, path: '/industries/mining' },
  { name: { en: 'Fertilizers', ar: 'الأسمدة' }, path: '/industries/fertilizers' },
  { name: { en: 'Power & Electricity', ar: 'الطاقة والكهرباء' }, path: '/industries/power' },
  { name: { en: 'Manufacturing', ar: 'التصنيع' }, path: '/industries/manufacturing' },
  { name: { en: 'Food & Beverages', ar: 'الأغذية والمشروبات' }, path: '/industries/food-beverages' },
  { name: { en: 'Municipal', ar: 'البلديات' }, path: '/industries/municipal' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeDropdown: string | null;
  onToggleDropdown: (menu: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  activeDropdown, 
  onToggleDropdown 
}) => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'ar';

  const navLinks = [
    { href: '/', text: { en: 'Home', ar: 'الرئيسية' } },
    { href: '/about', text: { en: 'About', ar: 'من نحن' } },
    { href: '/contact', text: { en: 'Contact', ar: 'اتصل بنا' } },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-y-0 w-full max-w-sm bg-blue-900/95 backdrop-blur-md z-40 transform transition-all duration-300 lg:hidden overflow-y-auto ${
          isOpen 
            ? 'translate-x-0' 
            : isRTL 
              ? '-translate-x-full' 
              : 'translate-x-full'
        } ${isRTL ? 'left-0' : 'right-0'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="relative">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex items-center relative overflow-hidden">
              <div className="w-24 h-8 flex items-center justify-center relative logo-container">
                <Image 
                  src="/images/JAAZL-Logo.svg" 
                  alt="JAAZL Logo" 
                  width={96} 
                  height={32} 
                  className="object-contain brightness-0 invert relative z-10"
                />
              </div>
            </Link>
            <button 
              onClick={onClose}
              className="p-2 text-white hover:text-orange-400 transition-colors rounded-lg"
              aria-label={language === 'en' ? 'Close menu' : 'إغلاق القائمة'}
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="px-6 pb-8 space-y-2 max-h-screen overflow-y-auto">
          {/* Navigation Links */}
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`block text-white text-xl font-medium py-3 px-2 border-b border-white/10 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
              onClick={onClose}
            >
              {link.text[language]}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="pt-2">
            <button 
              onClick={() => onToggleDropdown('services')} 
              className={`flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic flex-row-reverse' : ''
              }`}
            >
              <span>{language === 'en' ? 'Services' : 'الخدمات'}</span>
              {activeDropdown === 'services' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {activeDropdown === 'services' && (
              <div className={`mt-2 space-y-3 border-orange-500 ${
                isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'
              }`}>
                {Object.entries(serviceCategories).map(([categoryKey, category]) => (
                  <div key={categoryKey}>
                    <h4 className={`text-orange-300 font-medium text-sm mb-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                      {category.name[language]}
                    </h4>
                    <div className={`space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
                      {category.services.map((service) => (
                        <Link 
                          key={service.path} 
                          href={service.path} 
                          className={`block py-1 text-blue-200 hover:text-white text-sm transition-colors duration-200 ${
                            isRTL ? 'font-arabic text-right' : ''
                          }`}
                          onClick={onClose}
                        >
                          {service.name[language]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Industries Dropdown */}
          <div className="pt-2">
            <button 
              onClick={() => onToggleDropdown('industries')} 
              className={`flex justify-between items-center w-full text-white text-xl font-medium py-3 px-2 hover:text-orange-400 transition-colors duration-200 ${
                isRTL ? 'font-arabic flex-row-reverse' : ''
              }`}
            >
              <span>{language === 'en' ? 'Industries' : 'الصناعات'}</span>
              {activeDropdown === 'industries' ? (
                <FaChevronUp className="w-4 h-4 text-orange-400" />
              ) : (
                <FaChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {activeDropdown === 'industries' && (
              <div className={`mt-2 space-y-2 border-orange-500 ${
                isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'
              }`}>
                {industries.map(industry => (
                  <Link 
                    key={industry.path} 
                    href={industry.path} 
                    className={`block py-2 text-blue-200 hover:text-white transition-colors duration-200 ${
                      isRTL ? 'font-arabic text-right' : ''
                    }`}
                    onClick={onClose}
                  >
                    {industry.name[language]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-10 space-y-6">
            <button 
              onClick={() => { toggleLanguage(); onClose(); }} 
              className={`w-full text-center border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center hover:bg-white/10 ${
                isRTL ? 'flex-row-reverse font-arabic' : ''
              }`}
            >
              <FaGlobe className={`w-5 h-5 ${isRTL ? 'ms-2' : 'me-2'}`} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <a 
              href="tel:+966555109268" 
              className={`w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {language === 'en' ? 'Call Us' : 'اتصل بنا'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};