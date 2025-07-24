import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import MainLayout from '@/components/layout/MainLayout'
import '@/i18n' // Import i18n configuration to ensure it's loaded

// ManifaPro2 font is loaded via @font-face in globals.css

export const metadata: Metadata = {
  title: 'JAAZL Industrial Company - Industrial Solutions Excellence',
  description: 'Leading industrial solutions provider in Saudi Arabia\'s Eastern Province',
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
        <link rel="preload" href="/images/JAAZL-Logo 2.png" as="image" />
        
        {/* Performance and SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="color-scheme" content="light" />
      </head>
      <body>
        <LanguageProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}