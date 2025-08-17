import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Prefabricated Tanks | JAAZL Industrial Solutions',
  description: 'Custom prefabricated tanks for industrial storage, processing & wastewater treatment in Saudi Arabia.',
  keywords: ['prefabricated tanks', 'industrial storage tanks', 'custom tank fabrication', 'storage solutions'],
};

export default function PrefabricatedTanksPage() {
  const service = engineeringServices.find(s => s.slug === 'prefabricated-tanks');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}