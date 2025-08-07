import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Process Safety Management Services | JAAZL',
  description: 'Comprehensive process safety management for industrial operations, risk assessment, and safety system implementation.',
  keywords: ['process safety', 'risk assessment', 'safety management', 'hazard analysis', 'industrial safety'],
};

export default function ProcessSafetyPage() {
  const service = engineeringServices.find(s => s.slug === 'process-safety');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}