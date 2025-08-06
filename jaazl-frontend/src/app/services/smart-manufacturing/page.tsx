import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Smart Manufacturing Solutions | JAAZL',
  description: 'Intelligent manufacturing systems with IoT, AI, and advanced analytics for Industry 4.0 transformation.',
  keywords: ['smart manufacturing', 'industry 4.0', 'IoT manufacturing', 'digital transformation', 'manufacturing automation'],
};

export default function SmartManufacturingPage() {
  const service = engineeringServices.find(s => s.slug === 'smart-manufacturing');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}