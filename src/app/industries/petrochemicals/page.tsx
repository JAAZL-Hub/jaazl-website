import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Petrochemical Industry Solutions | JAAZL',
  description: 'Advanced engineering and technical solutions for the petrochemical industry, optimizing production processes and ensuring safety and efficiency.',
  keywords: ['petrochemicals', 'chemical engineering', 'process optimization', 'petrochemical safety'],
};

export default function PetrochemicalsPage() {
  const industry = industries.find(i => i.slug === 'petrochemicals');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
