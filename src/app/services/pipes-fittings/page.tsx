import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Pipes & Fittings | JAAZL',
  description: 'High-quality industrial pipes and fittings for various applications and industry standards.',
  keywords: ['industrial pipes', 'fittings', 'pipe systems', 'industrial materials'],
};

export default function PipesFittingsPage() {
  const service = engineeringServices.find(s => s.slug === 'pipes-fittings');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}