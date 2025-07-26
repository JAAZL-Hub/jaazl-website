import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Manufacturing Solutions | JAAZL',
  description: 'Comprehensive engineering, automation, and optimization solutions for modern manufacturing operations.',
  keywords: ['manufacturing solutions', 'industrial automation', 'quality control', 'production optimization', 'smart factory'],
};

export default function ManufacturingPage() {
  const industry = industries.find(i => i.slug === 'manufacturing');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}