import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Fertilizers Industry Solutions | JAAZL',
  description: 'Specialized industrial solutions for fertilizer manufacturing, including process optimization, chemical handling, and environmental compliance systems.',
  keywords: ['fertilizer industry', 'chemical processing', 'agricultural solutions', 'fertilizer manufacturing'],
};

export default function FertilizersIndustryPage() {
  const industry = industries.find(i => i.slug === 'fertilizers');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}