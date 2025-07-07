import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'AI & Industrial Automation Services | JAAZL',
  description: 'Transform industrial operations with cutting-edge AI and automation solutions that increase efficiency, reduce costs, and drive innovation.',
  keywords: ['artificial intelligence', 'industrial automation', 'predictive maintenance', 'process control', 'data analytics'],
};

export default function AIAutomationPage() {
  const service = engineeringServices.find(s => s.slug === 'ai-automation');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find((industry: Industry) => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
