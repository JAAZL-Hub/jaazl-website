import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Power Industry Solutions | JAAZL',
  description: 'Comprehensive engineering, automation, and optimization solutions for the power generation, transmission, and distribution industry.',
  keywords: ['power industry', 'energy solutions', 'renewable energy', 'power generation', 'grid optimization'],
};

export default function PowerPage() {
  const industry = industries.find(i => i.slug === 'power');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
