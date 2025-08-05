import type { Metadata } from 'next';
import JAAZLHomepage from '@/app/JAAZLHomepage';

// SEO Metadata for the homepage
export const metadata: Metadata = {
  title: 'JAAZL Industrial Company - Industrial Solutions Excellence in Saudi Arabia',
  description: 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province. Comprehensive engineering, environmental, and chemical solutions serving Jubail, Dammam, Khobar, and Dhahran with world-class technology partnerships.',
  keywords: [
    'industrial solutions Saudi Arabia',
    'water treatment Jubail',
    'process engineering Eastern Province',
    'petrochemical consulting Dammam',
    'RO systems KSA',
    'environmental solutions Dhahran',
    'chemical solutions Dhahran',
    'electromechanical services Saudi',
    'shutdown turnaround solutions',
    'digitalization consulting KSA',
    'JAAZL Industrial',
    'Ingenero solutions',
    'Gradiant water treatment'
  ],
  authors: [{ name: 'JAAZL Industrial Company' }],
  creator: 'JAAZL Industrial Company',
  publisher: 'JAAZL Industrial Company',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jaazl.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
    },
  },
  openGraph: {
    title: 'JAAZL Industrial Company - Industrial Solutions Excellence',
    description: 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province serving Jubail, Dammam, Khobar, and Dhahran with comprehensive engineering and environmental solutions.',
    url: 'https://jaazl.com',
    siteName: 'JAAZL Industrial Company',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JAAZL Industrial Company - Industrial Solutions Excellence in Eastern Province',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAAZL Industrial Company - Industrial Solutions Excellence',
    description: 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province with comprehensive engineering and environmental solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@jaazlindustrial',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Industrial Services',
  classification: 'Industrial Solutions Provider',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'SA-04', // Eastern Province
    'geo.placename': 'Jubail',
    'geo.position': '27.0174;49.6253',
    'ICBM': '27.0174, 49.6253',
    'DC.title': 'JAAZL Industrial Company',
    'DC.subject': 'Industrial Solutions, Water Treatment, Process Engineering, Environmental Solutions',
    'DC.creator': 'JAAZL Industrial Company',
    'DC.publisher': 'JAAZL Industrial Company',
    'DC.language': 'en',
    'DC.coverage': 'Saudi Arabia, Eastern Province, Jubail, Dammam, Khobar, Dhahran',
    'DC.type': 'Service',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JAAZL Industrial Company',
  alternateName: ['JAAZL', 'JAAZL Industrial'],
  url: 'https://jaazl.com',
  logo: 'https://jaazl.com/images/logo.png',
  image: 'https://jaazl.com/images/company-hero.jpg',
  description: 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province, specializing in engineering consulting, environmental solutions, chemical solutions, and electromechanical services with world-class technology partnerships.',
  foundingDate: '2021',
  industry: 'Industrial Solutions',
  numberOfEmployees: '50-100',
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
      areaServed: ['Jubail', 'Dammam', 'Khobar', 'Dhahran', 'Eastern Province'],
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
    name: 'Industrial Solutions Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Consultancy & AI',
          description: 'Advanced engineering solutions including process safety, reliability engineering, sustainability & energy management, applied AI & digital solutions, and process engineering.',
          provider: {
            '@type': 'Organization',
            name: 'JAAZL Industrial Company',
          },
          areaServed: 'Eastern Province, Saudi Arabia',
          category: 'Engineering Consulting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Water & Wastewater Treatment',
          description: 'Complete water solutions including cooling/boiler water treatment, reverse osmosis systems, ion exchange systems, and waste water treatment with MBR, MBBR, CGI, MLD & ZLD technologies.',
          provider: {
            '@type': 'Organization',
            name: 'JAAZL Industrial Company',
          },
          areaServed: 'Eastern Province, Saudi Arabia',
          category: 'Environmental Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Specialty & Bulk Chemicals',
          description: 'Comprehensive chemical solutions for industrial excellence, including drilling & production chemicals, water treatment systems, mining & fertilizer chemicals, and bulk commodity chemicals.',
          provider: {
            '@type': 'Organization',
            name: 'JAAZL Industrial Company',
          },
          areaServed: 'Eastern Province, Saudi Arabia',
          category: 'Chemical Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electromechanical Services',
          description: 'Complete engineering solutions for industrial infrastructure including mechanical engineering services, electrical & instrumentation, and turnaround & construction services.',
          provider: {
            '@type': 'Organization',
            name: 'JAAZL Industrial Company',
          },
          areaServed: 'Eastern Province, Saudi Arabia',
          category: 'Electromechanical Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Material Supplies',
          description: 'API & Aramco approved materials including pipes & fittings, valves & actuators, raw materials & metals, and storage & infrastructure solutions.',
          provider: {
            '@type': 'Organization',
            name: 'JAAZL Industrial Company',
          },
          areaServed: 'Eastern Province, Saudi Arabia',
          category: 'Material Supplies',
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

// Local Business JSON-LD
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'JAAZL Industrial Company',
  image: 'https://jaazl.com/images/office-building.jpg',
  '@id': 'https://jaazl.com',
  url: 'https://jaazl.com',
  telephone: '+966-55-510-9268',
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
};

export default function HomePage() {
  return (
    <>
      {/* Organization JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      
      {/* Local Business JSON-LD for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      
      {/* Homepage Component */}
      <JAAZLHomepage />
    </>
  );
}