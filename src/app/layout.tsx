import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import MainLayout from '@/components/layout/MainLayout'
import '@/i18n' // Import i18n configuration to ensure it's loaded
import Script from 'next/script'

// ManifaPro2 font is loaded via @font-face in globals.css

export const metadata: Metadata = {
  title: {
    default: 'JAAZL Industrial Company - Your Ideal Industrial Solutions Partner',
    template: '%s | JAAZL Industrial Company'
  },
  description: 'Leading industrial solutions provider in Saudi Arabia. Comprehensive chemicals, water treatment, technical consultancy & AI, electromechanical services, and material supplies. Located in Jubail Industrial Area 1.',
  keywords: [
    'JAAZL Industrial Company',
    'Industrial Solutions Saudi Arabia',
    'Jubail Industrial',
    'Specialty Chemicals',
    'Water Treatment',
    'Technical Consultancy',
    'AI Solutions',
    'Electromechanical Services',
    'Material Supplies',
    'Oil & Gas',
    'Petrochemicals',
    'Refineries',
    'Vision 2030',
    'API Approved',
    'Aramco Approved',
    'Prefabricated Tanks',
    'Pipes & Fittings',
    'Valves & Actuators',
    'Industrial Automation',
    'Digital Transformation',
    'Smart Manufacturing',
    'Industrial Engineering',
    'Process Safety Management',
  ],
  authors: [{ name: 'JAAZL Industrial Company' }],
  creator: 'JAAZL Industrial Company',
  publisher: 'JAAZL Industrial Company',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA'],
    url: 'https://jaazl.com',
    siteName: 'JAAZL Industrial Company',
    title: 'JAAZL Industrial Company - Your Ideal Industrial Solutions Partner',
    description: 'Leading industrial solutions provider in Saudi Arabia. Comprehensive chemicals, water treatment, technical consultancy & AI, electromechanical services, and material supplies.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JAAZL Industrial Company - Industrial Solutions Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAAZL Industrial Company - Your Ideal Industrial Solutions Partner',
    description: 'Leading industrial solutions provider in Saudi Arabia. Comprehensive industrial solutions across 6 main service categories.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://jaazl.com',
    languages: {
      'en-US': 'https://jaazl.com',
      'ar-SA': 'https://jaazl.com',
    },
  },
  category: 'Industrial Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set default language - will be updated by the LanguageContext
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical Resource Hints for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Preload Critical Fonts */}
        <link rel="preload" href="/Fonts/manifa-pro-2-bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Manifa-Pro-2-Light.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        
        {/* Preload Critical Images */}
        <link rel="preload" href="/images/JAAZL-Logo 2.webp" as="image" />
        <link rel="preload" href="/images/industries/refineries-industry.webp" as="image" />
        
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="color-scheme" content="light" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="JAAZL Industrial Company" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JAAZL" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="canonical" href="https://jaazl.com" />
      </head>
      <body>
        <LanguageProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </LanguageProvider>
        
        {/* Netlify Identity Widget */}
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
        <Script id="netlify-identity-redirect">
          {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
          `}
        </Script>
      </body>
    </html>
  )
}