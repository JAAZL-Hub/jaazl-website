import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Process Optimization Chemicals | JAAZL',
  description: 'Advanced chemical solutions designed to optimize industrial processes, improve efficiency, and enhance product quality.',
  keywords: ['process chemicals', 'catalysts', 'specialty additives', 'process optimization', 'chemical formulations'],
};

export default function ProcessChemicalsPage() {
  const service = engineeringServices.find(s => s.slug === 'process-chemicals');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}