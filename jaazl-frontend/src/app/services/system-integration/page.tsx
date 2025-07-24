import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial System Integration Services | JAAZL',
  description: 'Comprehensive integration of industrial systems and technologies for seamless operation and enhanced efficiency.',
  keywords: ['system integration', 'industrial systems', 'technology integration', 'legacy modernization', 'data harmonization'],
};

export default function SystemIntegrationPage() {
  const service = engineeringServices.find(s => s.slug === 'system-integration');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}