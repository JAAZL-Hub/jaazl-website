'use client';

import React from 'react';
import OptimizedImage from './OptimizedImage';

const clients = [
  { name: "SABIC", nameArabic: "سابك", logo: "/images/clients/sabic-logo.webp", logoAlt: "SABIC Logo" },
  { name: "Aramco", nameArabic: "أرامكو", logo: "/images/clients/aramco-logo.webp", logoAlt: "Saudi Aramco Logo" },
  { name: "Ma'aden", nameArabic: "معادن", logo: "/images/clients/maaden-logo.webp", logoAlt: "Ma'aden Logo" },
  { name: "NEOM", nameArabic: "نيوم", logo: "/images/clients/neom-logo.webp", logoAlt: "NEOM Logo" },
  { name: "SATORP", nameArabic: "ساتورب", logo: "/images/clients/satorp-logo.webp", logoAlt: "SATORP Logo" },
  { name: "Advanced", nameArabic: "المتقدمة", logo: "/images/clients/advanced-logo.webp", logoAlt: "Advanced Logo" },
  { name: "Tasnee", nameArabic: "تصنيع", logo: "/images/clients/tasnee-logo.webp", logoAlt: "Tasnee Logo" }
];

const ClientLogos: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
      {clients.map((client, index) => (
        <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <OptimizedImage
            src={client.logo}
            alt={client.logoAlt}
            width={120}
            height={80}
            className="max-w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
            loading="lazy"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 120px"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;