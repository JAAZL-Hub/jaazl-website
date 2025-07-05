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
        {/* Preload the ManifaPro2 fonts */}
        <link rel="preload" href="/Fonts/manifa-pro-2-bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Manifa-Pro-2-Light.otf" as="font" type="font/otf" crossOrigin="anonymous" />
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