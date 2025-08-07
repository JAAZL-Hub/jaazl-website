# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JAAZL Industrial Company is a Next.js 15 application built as a bilingual (English/Arabic) corporate website for an industrial solutions provider in Saudi Arabia. The application features RTL support, modern design, and optimized performance.

## Common Development Commands

```bash
# Development
npm run dev           # Start development server with Turbopack
npm run dev --turbopack # Explicitly use Turbopack for faster builds

# Building
npm run build         # Create production build
npm run build:analyze # Build with bundle analysis (if ANALYZE=true is set)
npm run start         # Start production server

# Code Quality
npm run lint          # Run ESLint checks

# Performance Analysis
npm run lighthouse    # Run Lighthouse CI audits
npm run bundle-analyzer # Analyze bundle size
```

## Architecture Overview

### Core Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design system
- **Internationalization**: i18next with React integration
- **Language Detection**: Browser-based with localStorage persistence
- **Performance**: Turbopack for development, standalone output for production

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and custom fonts
│   ├── layout.tsx         # Root layout with SEO and PWA config
│   ├── industries/        # Industry-specific pages
│   └── services/          # Service-specific pages
├── components/            # Reusable UI components
│   ├── common/           # Shared components (OptimizedImage, ClientLogos)
│   ├── layout/           # Layout components (Header, Footer, Breadcrumbs)
│   ├── industries/       # Industry page components
│   ├── services/         # Service page components
│   └── ui/               # Basic UI components
├── contexts/             # React contexts
│   └── LanguageContext.tsx # Language/RTL direction management
├── i18n/                 # Internationalization setup
│   ├── index.ts          # i18next configuration
│   └── locales/          # Translation files (en/ar)
├── services/             # Data layer
│   ├── api/              # API service with mock data
│   ├── hooks/            # Custom React hooks for data fetching
│   └── types/            # TypeScript type definitions
└── utils/                # Utility functions
    ├── content.ts        # Content management utilities
    └── iconMapping.tsx   # Icon component mappings
```

### Content Management

- **Static Content**: Markdown files in `/content/` directory organized by language (en/ar)
- **Dynamic Data**: Mock API service in `src/services/api/` that simulates backend calls
- **Images**: Organized in `/public/images/` by category (industries, services, clients, etc.)
- **Fonts**: Custom Arabic/English fonts in `/public/Fonts/`

### Key Features

#### Bilingual Support (English/Arabic)
- **Language Context**: Centralized language state management
- **RTL/LTR**: Automatic direction switching with CSS class updates
- **Font Loading**: Custom Manifa Pro font for Arabic text
- **URL Structure**: Shared URLs with language switching

#### Performance Optimizations
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Optimization**: Package imports optimization for react-icons and framer-motion
- **Caching Headers**: Aggressive caching for static assets
- **Turbopack**: Enabled for faster development builds

#### SEO & Accessibility
- **Metadata**: Comprehensive meta tags and Open Graph data
- **PWA Support**: Service worker and manifest configuration
- **Security Headers**: CSP, CSRF, and other security configurations

### Styling System

The project uses a comprehensive Tailwind CSS configuration with:

- **Custom Colors**: Primary blues, secondary oranges, and accent colors
- **Gradients**: Pre-defined gradient combinations for consistency
- **Shadows**: Component-specific shadow utilities
- **RTL Support**: Direction-aware spacing and positioning
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Data Flow

1. **API Service** (`src/services/api/apiService.ts`): Mock data layer with simulated delays
2. **Custom Hooks** (`src/services/hooks/`): React hooks for data fetching with proper typing
3. **Components**: Consume data through hooks, handle loading and error states
4. **Context**: Language preference and direction management

## Development Notes

### Language Implementation
- Language switching updates HTML `dir` and `lang` attributes
- RTL styles are applied via CSS classes
- Translation keys follow namespace pattern: `common:key.subkey`
- Fallback hierarchy: Selected language → English → First available → Empty string

### Content Management
- Industry and service content stored as markdown in `/content/`
- Images should be optimized and stored in appropriate `/public/images/` subdirectories
- New services/industries require updates to both content files and data structures

### Performance Considerations
- All images should use the `OptimizedImage` component
- Large components should implement lazy loading
- Consider bundle impact when adding new dependencies
- Use `next/dynamic` for components not needed on initial load

### Deployment
- Configured for Netlify deployment with `netlify.toml`
- Supports Netlify CMS for content management
- Uses standalone output for optimized container deployment
- Environment-specific build optimizations (console removal in production)