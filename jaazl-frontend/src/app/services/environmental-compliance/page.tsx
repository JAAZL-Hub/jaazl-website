import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Environmental Compliance & Sustainability Services | JAAZL',
  description: 'Comprehensive environmental compliance, sustainability, and green engineering solutions for industrial operations.',
  keywords: ['environmental compliance', 'sustainability', 'green engineering', 'emission control', 'environmental management'],
};

export default function EnvironmentalCompliancePage() {
  const service = engineeringServices.find(s => s.slug === 'environmental-compliance');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
