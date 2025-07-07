import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Oil & Gas Industry Solutions | JAAZL',
  description: 'Specialized engineering, environmental, chemical, and electromechanical solutions for the oil and gas industry.',
  keywords: ['oil and gas solutions', 'petroleum industry', 'energy sector', 'refinery services'],
};

export default function OilGasPage() {
  const industry = industries.find(i => i.slug === 'oil-gas');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
