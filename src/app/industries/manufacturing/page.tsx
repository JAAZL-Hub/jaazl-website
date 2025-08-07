import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Manufacturing Industry Solutions | JAAZL',
  description: 'Advanced solutions for manufacturing operations, automation, quality control, and industrial efficiency.',
  keywords: ['manufacturing solutions', 'industrial automation', 'quality control', 'manufacturing efficiency'],
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