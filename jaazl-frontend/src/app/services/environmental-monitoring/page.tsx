import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Environmental Monitoring & Assessment Services | JAAZL',
  description: 'Comprehensive environmental monitoring systems and assessment services to ensure regulatory compliance and environmental protection.',
  keywords: ['environmental monitoring', 'compliance reporting', 'risk assessment', 'environmental protection', 'sustainability'],
};

export default function EnvironmentalMonitoringPage() {
  const service = engineeringServices.find(s => s.slug === 'environmental-monitoring');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}