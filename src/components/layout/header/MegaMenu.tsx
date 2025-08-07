'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

// Service categories data
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
      { name: { en: 'API Approved Materials', ar: 'مواد معتمدة من API' }, path: '/services/api-materials' },
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

// Industries data
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

interface ServicesMegaMenuProps {
  isOpen: boolean;
  scrolled: boolean;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ isOpen, scrolled }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  if (!isOpen) return null;

  return (
    <div className={`absolute top-full pt-3 w-64 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50 ${
      isRTL ? 'right-0' : 'left-0'
    }`}>
      <div className="bg-white backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-visible">
        <div className="py-2">
          {Object.entries(serviceCategories).map(([categoryKey, category]) => (
            <div key={categoryKey} className="relative group/category">
              <div className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className={`font-medium text-gray-800 text-sm flex items-center justify-between ${
                  isRTL ? 'flex-row-reverse font-arabic' : ''
                }`}>
                  {category.name[language]}
                  <span className={`text-gray-400 text-xs ${isRTL ? 'me-2' : 'ms-2'}`}>
                    {isRTL ? '←' : '→'}
                  </span>
                </h3>
              </div>

              {/* Sub-menu */}
              <div 
                className={`absolute top-0 w-72 bg-white backdrop-blur-md rounded-xl shadow-lg border border-gray-200 overflow-visible opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-200 ${
                  isRTL 
                    ? 'right-full me-2' 
                    : 'left-full ms-2'
                }`}
                style={{ zIndex: 9999 }}
              >
                <div className="py-2">
                  <div className="px-4 py-2 bg-blue-50 border-b border-blue-100">
                    <h4 className={`font-semibold text-blue-900 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                      {category.name[language]}
                    </h4>
                  </div>
                  {category.services.map((service) => (
                    <Link 
                      key={service.path} 
                      href={service.path} 
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <span className={`font-medium text-gray-700 text-sm ${isRTL ? 'font-arabic' : ''}`}>
                        {service.name[language]}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  scrolled: boolean;
}

export const IndustriesMegaMenu: React.FC<IndustriesMegaMenuProps> = ({ isOpen, scrolled }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  if (!isOpen) return null;

  return (
    <div className={`absolute top-full pt-3 w-80 max-w-[calc(100vw-2rem)] opacity-100 visible transition-all duration-200 z-50 ${
      isRTL ? 'right-0' : 'left-0'
    }`}>
      <div className="bg-white backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 gap-1 p-2">
          {industries.map((industry) => (
            <Link 
              key={industry.path} 
              href={industry.path} 
              className="flex flex-col items-center text-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <span className={`text-gray-800 text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                {industry.name[language]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};