import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = { 
  title: 'Mining Industry Solutions | JAAZL',
  description: 'Advanced engineering, automation, and environmental solutions for the mining industry to improve efficiency, safety, and sustainability.',
  keywords: ['mining solutions', 'mining automation', 'mineral processing', 'mining safety', 'sustainable mining'],
};

export default function MiningPage() {
  const industry = industries.find(i => i.slug === 'mining');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
