import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Technical Training & Development Services | JAAZL',
  description: 'Specialized technical training programs to enhance workforce capabilities and ensure optimal operation of industrial systems.',
  keywords: ['technical training', 'workforce development', 'industrial training', 'competency assessment', 'skills enhancement'],
};

export default function TechnicalTrainingPage() {
  const service = engineeringServices.find(s => s.slug === 'technical-training');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}