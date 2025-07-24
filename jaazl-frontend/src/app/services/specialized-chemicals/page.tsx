import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Specialized Industrial Chemicals | JAAZL',
  description: 'Custom-formulated chemical solutions for specific industrial applications and challenges.',
  keywords: ['industrial chemicals', 'custom formulations', 'process chemicals', 'chemical optimization', 'technical support'],
};

export default function SpecializedChemicalsPage() {
  const service = engineeringServices.find(s => s.slug === 'specialized-chemicals');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}