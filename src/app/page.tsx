import type { Metadata } from 'next';
import JAAZLHomepage from '@/app/JAAZLHomepage';
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from '@/components/common/StructuredData';

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


export default function HomePage() {
  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      
      {/* Homepage Component */}
      <JAAZLHomepage />
    </>
  );
}