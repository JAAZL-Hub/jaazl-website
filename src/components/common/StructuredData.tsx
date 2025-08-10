'use client';

import { useLanguage } from '@/contexts/LanguageContext';

// Organization Schema
export const OrganizationSchema = () => {
  const { language } = useLanguage();
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://jaazl.com/#organization',
    name: 'JAAZL Industrial Company',
    alternateName: ['JAAZL', 'JAAZL Industrial', 'جعازل للشركة الصناعية'],
    url: 'https://jaazl.com',
    logo: 'https://jaazl.com/images/JAAZL-Logo.svg',
    image: 'https://jaazl.com/images/company-hero.jpg',
    description: language === 'ar' 
      ? 'شركة رائدة في الحلول الصناعية في المنطقة الشرقية بالمملكة العربية السعودية، متخصصة في استشارات الهندسة والحلول البيئية والحلول الكيميائية والخدمات الكهروميكانيكية مع شراكات تقنية عالمية المستوى.'
      : 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province, specializing in engineering consulting, environmental solutions, chemical solutions, and electromechanical services with world-class technology partnerships.',
    foundingDate: '2021',
    industry: language === 'ar' ? 'الحلول الصناعية' : 'Industrial Solutions',
    numberOfEmployees: '50-100',
    knowsLanguage: ['en', 'ar'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jubail Industrial Area 1',
      addressLocality: 'Jubail',
      addressRegion: 'Eastern Province',
      postalCode: '35717',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.0174,
      longitude: 49.6253,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+966-55-510-9268',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic'],
        areaServed: ['Jubail', 'Dammam', 'Khobar', 'Dhahran', 'Eastern Province', 'Saudi Arabia'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          opens: '08:00',
          closes: '17:00',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        },
      },
    ],
    sameAs: [
      'https://linkedin.com/company/jaazl-industrial',
      'https://twitter.com/jaazlindustrial',
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 27.0174,
        longitude: 49.6253,
      },
      geoRadius: '200000', // 200km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'ar' ? 'خدمات الحلول الصناعية' : 'Industrial Solutions Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://jaazl.com/services/engineering-consulting',
            name: language === 'ar' ? 'الاستشارات التقنية والذكاء الاصطناعي' : 'Technical Consultancy & AI',
            description: language === 'ar' 
              ? 'حلول هندسية متقدمة تشمل سلامة العمليات وهندسة الموثوقية وإدارة الاستدامة والطاقة والحلول الرقمية المدعومة بالذكاء الاصطناعي وهندسة العمليات.'
              : 'Advanced engineering solutions including process safety, reliability engineering, sustainability & energy management, applied AI & digital solutions, and process engineering.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://jaazl.com/#organization',
            },
            areaServed: 'Eastern Province, Saudi Arabia',
            category: language === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://jaazl.com/services/waste-management',
            name: language === 'ar' ? 'معالجة المياه ومياه الصرف الصحي' : 'Water & Wastewater Treatment',
            description: language === 'ar'
              ? 'حلول مياه شاملة تشمل معالجة مياه التبريد/الغلايات وأنظمة التناضح العكسي وأنظمة تبادل الأيونات ومعالجة مياه الصرف الصحي بتقنيات MBR و MBBR و CGI و MLD و ZLD.'
              : 'Complete water solutions including cooling/boiler water treatment, reverse osmosis systems, ion exchange systems, and waste water treatment with MBR, MBBR, CGI, MLD & ZLD technologies.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://jaazl.com/#organization',
            },
            areaServed: 'Eastern Province, Saudi Arabia',
            category: language === 'ar' ? 'الخدمات البيئية' : 'Environmental Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://jaazl.com/services/specialized-chemicals',
            name: language === 'ar' ? 'الكيماويات المتخصصة والسائبة' : 'Specialty & Bulk Chemicals',
            description: language === 'ar'
              ? 'حلول كيميائية شاملة للتميز الصناعي، تشمل مواد كيميائية للحفر والإنتاج وأنظمة معالجة المياه ومواد كيميائية للتعدين والأسمدة ومواد كيميائية سلعية بالجملة.'
              : 'Comprehensive chemical solutions for industrial excellence, including drilling & production chemicals, water treatment systems, mining & fertilizer chemicals, and bulk commodity chemicals.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://jaazl.com/#organization',
            },
            areaServed: 'Eastern Province, Saudi Arabia',
            category: language === 'ar' ? 'الخدمات الكيميائية' : 'Chemical Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://jaazl.com/services/electromechanical-systems',
            name: language === 'ar' ? 'الخدمات الكهروميكانيكية' : 'Electromechanical Services',
            description: language === 'ar'
              ? 'حلول هندسية متكاملة للبنية التحتية الصناعية تشمل خدمات الهندسة الميكانيكية والكهربائية والأجهزة وخدمات الصيانة والإنشاء.'
              : 'Complete engineering solutions for industrial infrastructure including mechanical engineering services, electrical & instrumentation, and turnaround & construction services.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://jaazl.com/#organization',
            },
            areaServed: 'Eastern Province, Saudi Arabia',
            category: language === 'ar' ? 'الخدمات الكهروميكانيكية' : 'Electromechanical Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://jaazl.com/services/api-materials',
            name: language === 'ar' ? 'إمدادات المواد' : 'Material Supplies',
            description: language === 'ar'
              ? 'مواد معتمدة من API وأرامكو تشمل أنابيب وتجهيزات وصمامات ومحركات ومواد خام ومعادن وحلول تخزين وبنية تحتية.'
              : 'API & Aramco approved materials including pipes & fittings, valves & actuators, raw materials & metals, and storage & infrastructure solutions.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://jaazl.com/#organization',
            },
            areaServed: 'Eastern Province, Saudi Arabia',
            category: language === 'ar' ? 'إمدادات المواد' : 'Material Supplies',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
};

// Local Business Schema
export const LocalBusinessSchema = () => {

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jaazl.com/#localbusiness',
    name: 'JAAZL Industrial Company',
    image: 'https://jaazl.com/images/office-building.jpg',
    url: 'https://jaazl.com',
    telephone: '+966-55-510-9268',
    email: 'info@jaazl.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jubail Industrial Area 1',
      addressLocality: 'Jubail',
      addressRegion: 'Eastern Province',
      postalCode: '35717',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.0174,
      longitude: 49.6253,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: [
      'https://linkedin.com/company/jaazl-industrial',
      'https://twitter.com/jaazlindustrial',
    ],
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
    currenciesAccepted: 'SAR',
    hasMap: `https://www.google.com/maps/search/?api=1&query=27.0174,49.6253`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
};

// Website Schema
export const WebsiteSchema = () => {
  const { language } = useLanguage();

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://jaazl.com/#website',
    name: 'JAAZL Industrial Company',
    alternateName: language === 'ar' ? 'جعازل للشركة الصناعية' : 'JAAZL Industrial',
    url: 'https://jaazl.com',
    description: language === 'ar' 
      ? 'موقع شركة جعازل الصناعية - شركة رائدة في الحلول الصناعية في المملكة العربية السعودية'
      : 'JAAZL Industrial Company website - Leading industrial solutions provider in Saudi Arabia',
    inLanguage: [language, language === 'en' ? 'ar' : 'en'],
    publisher: {
      '@type': 'Organization',
      '@id': 'https://jaazl.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jaazl.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  );
};

// Industry-specific Schema
export const IndustrySchema = ({ industry }: { industry: string }) => {

  const industryData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': `https://jaazl.com/industries/${industry}`,
    name: `${industry} Industry Solutions`,
    description: `Specialized industrial solutions for ${industry} sector`,
    mainEntity: {
      '@type': 'Service',
      name: `${industry} Solutions`,
      provider: {
        '@type': 'Organization',
        '@id': 'https://jaazl.com/#organization',
      },
      areaServed: 'Eastern Province, Saudi Arabia',
      serviceType: 'Industrial Solutions',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(industryData),
      }}
    />
  );
};

// Service-specific Schema
export const ServiceSchema = ({ service }: { service: string }) => {

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://jaazl.com/services/${service}`,
    name: `${service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`,
    description: `Professional ${service.replace(/-/g, ' ')} services for industrial applications`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://jaazl.com/#organization',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Eastern Province, Saudi Arabia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service} Service Catalog`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '45',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
};