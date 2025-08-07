import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Refinery Industry Solutions | JAAZL',
  description: 'Specialized engineering, automation, and optimization solutions for modern refineries, ensuring operational excellence and regulatory compliance.',
  keywords: ['refinery solutions', 'refinery optimization', 'petroleum refining', 'refinery safety', 'refinery maintenance'],
};

export default function RefineriesPage() {
  const industry = industries.find(i => i.slug === 'refineries');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}
