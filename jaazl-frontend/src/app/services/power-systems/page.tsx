import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Power Systems | JAAZL',
  description: 'Comprehensive design, installation, and maintenance of industrial power distribution systems for reliable electrical infrastructure.',
  keywords: ['power systems', 'electrical distribution', 'load management', 'power quality', 'industrial electrical'],
};

export default function PowerSystemsPage() {
  const service = engineeringServices.find(s => s.slug === 'power-systems');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}