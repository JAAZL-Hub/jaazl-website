import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'AI & Industrial Automation | JAAZL',
  description: 'Advanced AI-driven automation solutions for industrial processes to enhance efficiency, productivity, and quality control.',
  keywords: ['industrial automation', 'AI solutions', 'process automation', 'robotics', 'smart manufacturing'],
};

export default function AIAutomationPage() {
  const service = engineeringServices.find(s => s.slug === 'ai-automation');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
