import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Chemical Laboratory Services | JAAZL',
  description: 'Comprehensive analytical and testing services for chemical analysis, quality control, and product development.',
  keywords: ['laboratory services', 'chemical analysis', 'quality control', 'analytical testing', 'method development'],
};

export default function LaboratoryServicesPage() {
  const service = engineeringServices.find(s => s.slug === 'laboratory-services');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}