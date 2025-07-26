import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Healthcare Facility Solutions | JAAZL',
  description: 'Specialized engineering and technical solutions for modern healthcare facilities, ensuring safety, efficiency, and optimal patient environments.',
  keywords: ['healthcare facilities', 'hospital engineering', 'medical facilities', 'patient safety', 'healthcare infrastructure'],
};

export default function HealthcarePage() {
  const industry = industries.find(i => i.slug === 'healthcare');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}