import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Reliability Engineering Services | JAAZL',
  description: 'Advanced reliability engineering for equipment optimization, maintenance strategy, and operational performance improvement.',
  keywords: ['reliability engineering', 'maintenance strategy', 'equipment optimization', 'RCM analysis', 'asset management'],
};

export default function ReliabilityEngineeringPage() {
  const service = engineeringServices.find(s => s.slug === 'reliability-engineering');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}