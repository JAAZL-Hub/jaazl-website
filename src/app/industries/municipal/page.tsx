import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Municipal Infrastructure Solutions | JAAZL',
  description: 'Advanced engineering and technology solutions for municipal infrastructure, water management, waste management, and smart city initiatives.',
  keywords: ['municipal infrastructure', 'water treatment', 'waste management', 'smart cities', 'urban planning'],
};

export default function MunicipalPage() {
  const industry = industries.find(i => i.slug === 'municipal');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
