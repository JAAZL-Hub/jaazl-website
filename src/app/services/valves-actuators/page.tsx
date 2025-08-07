import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Valves & Actuators | JAAZL',
  description: 'Professional valve and actuator solutions for precise flow control in industrial applications.',
  keywords: ['industrial valves', 'actuators', 'flow control', 'valve systems'],
};

export default function ValvesActuatorsPage() {
  const service = engineeringServices.find(s => s.slug === 'valves-actuators');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}