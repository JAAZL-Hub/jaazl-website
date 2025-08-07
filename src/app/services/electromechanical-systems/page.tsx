import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Electromechanical Systems | JAAZL',
  description: 'Comprehensive design, installation, and maintenance of integrated electromechanical systems for industrial applications.',
  keywords: ['electromechanical systems', 'power distribution', 'control systems', 'industrial automation', 'preventive maintenance'],
};

export default function ElectromechanicalSystemsPage() {
  const service = engineeringServices.find(s => s.slug === 'electromechanical-systems');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}