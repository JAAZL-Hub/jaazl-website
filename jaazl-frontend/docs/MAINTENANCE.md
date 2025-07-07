# JAAZL Website Maintenance Guide

This document provides guidelines and instructions for maintaining the JAAZL website, specifically focusing on how to add, modify, or delete services and industries.

## Project Structure

The website uses Next.js with TypeScript and follows these key principles:

- **Static Pages**: All service and industry pages are static, using mock data.
- **Reusable Components**: Service and industry pages use reusable client components.
- **Mock Data**: All data is stored in mock data files, with no CMS/API integration.

## Managing Services

### Service Data Structure

Services are defined in `/src/services/api/mockData/engineeringServices.ts`. Each service has the following structure:

```typescript
{
  id: string;
  title: LocalizedContent;
  slug: string;
  description: LocalizedContent;
  image: string;
  icon?: string;
  meta: MetaData;
  content: LocalizedContent;
  categoryId: string;
  benefits?: Benefit[];
  faqs?: FAQ[];
}
```

### Adding a New Service

1. **Add service data**:
   - Open `/src/services/api/mockData/engineeringServices.ts`
   - Add a new service object to the `engineeringServices` array
   - Ensure you provide all required fields (id, title, slug, description, image, meta, content, categoryId)
   - Give the service a unique `id` and `slug`

2. **Create a page file**:
   - Create a new file at `/src/app/services/[slug]/page.tsx` where `[slug]` is your service's slug
   - Use the following template:

```typescript
import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Service Name | JAAZL',
  description: 'Service description for SEO',
};

export default function ServicePage() {
  const service = engineeringServices.find(s => s.slug === 'your-service-slug');
  
  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} />;
}
```

3. **Add SEO metadata**:
   - Update the metadata object in your page file with appropriate title and description

### Modifying a Service

1. **Update service data**:
   - Open `/src/services/api/mockData/engineeringServices.ts`
   - Find the service you want to modify and update its properties

2. **Update SEO metadata** (if necessary):
   - Open the corresponding page file at `/src/app/services/[slug]/page.tsx`
   - Update the metadata object

### Deleting a Service

1. **Remove service data**:
   - Open `/src/services/api/mockData/engineeringServices.ts`
   - Remove the service object from the `engineeringServices` array

2. **Delete the page file**:
   - Delete the file at `/src/app/services/[slug]/page.tsx`

3. **Update navigation** (if necessary):
   - If the service is linked in the navigation, update the navigation component

## Managing Industries

### Industry Data Structure

Industries are defined in `/src/services/api/mockData/industries.ts`. Each industry has the following structure:

```typescript
{
  id: string;
  title: LocalizedContent;
  slug: string;
  description: LocalizedContent;
  image: {
    src: string;
    alt: LocalizedContent;
  };
  meta: MetaData;
  content: LocalizedContent;
  challenges?: Challenge[];
  solutions?: Solution[];
  relatedServices?: string[];
  isFeatured?: boolean;
}
```

### Adding a New Industry

1. **Add industry data**:
   - Open `/src/services/api/mockData/industries.ts`
   - Add a new industry object to the `industries` array
   - Ensure you provide all required fields (id, title, slug, description, image, meta, content)
   - Give the industry a unique `id` and `slug`

2. **Create a page file**:
   - Create a new file at `/src/app/industries/[slug]/page.tsx` where `[slug]` is your industry's slug
   - Use the following template:

```typescript
import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Industry Name | JAAZL',
  description: 'Industry description for SEO',
};

export default function IndustryPage() {
  const industry = industries.find(i => i.slug === 'your-industry-slug');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];
  
  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
```

3. **Add SEO metadata**:
   - Update the metadata object in your page file with appropriate title and description

### Modifying an Industry

1. **Update industry data**:
   - Open `/src/services/api/mockData/industries.ts`
   - Find the industry you want to modify and update its properties

2. **Update SEO metadata** (if necessary):
   - Open the corresponding page file at `/src/app/industries/[slug]/page.tsx`
   - Update the metadata object

### Deleting an Industry

1. **Remove industry data**:
   - Open `/src/services/api/mockData/industries.ts`
   - Remove the industry object from the `industries` array

2. **Delete the page file**:
   - Delete the file at `/src/app/industries/[slug]/page.tsx`

3. **Update navigation** (if necessary):
   - If the industry is linked in the navigation, update the navigation component

## Tips for Maintainability

1. **Consistent Structure**: Follow the same data structure and naming conventions for all services and industries.
2. **SEO Best Practices**: Always update metadata for each page with descriptive titles and descriptions.
3. **Localization**: Provide content in both English and Arabic for all LocalizedContent fields.
4. **Image Optimization**: Store images in `/public/images/` and reference them with proper paths.
5. **Testing**: After adding or modifying content, test both English and Arabic versions of the pages.
6. **Navigation**: When adding or removing pages, ensure navigation components are updated accordingly.

## Types and Interfaces

For reference, here are the key interfaces used for services and industries:

### Service-related interfaces:

```typescript
interface LocalizedContent {
  en: string;
  ar: string;
}

interface MetaData {
  title: LocalizedContent;
  description: LocalizedContent;
  keywords?: string[];
}

interface Service {
  id: string;
  title: LocalizedContent;
  slug: string;
  description: LocalizedContent;
  image: string;
  icon?: string;
  meta: MetaData;
  content: LocalizedContent;
  categoryId: string;
  benefits?: Benefit[];
  faqs?: FAQ[];
}

interface Benefit {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon?: string;
}

interface FAQ {
  id: string;
  question: LocalizedContent;
  answer: LocalizedContent;
}
```

### Industry-related interfaces:

```typescript
interface Industry {
  id: string;
  title: LocalizedContent;
  slug: string;
  description: LocalizedContent;
  image: {
    src: string;
    alt: LocalizedContent;
  };
  meta: MetaData;
  content: LocalizedContent;
  challenges?: Challenge[];
  solutions?: Solution[];
  relatedServices?: string[];
  isFeatured?: boolean;
}

interface Challenge {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon?: string;
}

interface Solution {
  id: string;
  title: LocalizedContent;
  description: LocalizedContent;
  icon?: string;
}
```
