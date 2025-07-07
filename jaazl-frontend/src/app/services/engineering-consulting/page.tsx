import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Engineering Consulting Services | JAAZL',
  description: 'Expert industrial engineering consulting to optimize operations, improve efficiency, and solve complex technical challenges.',
  keywords: ['industrial engineering', 'consulting', 'process optimization', 'facility design', 'technical specifications'],
};

export default function EngineeringConsultingPage() {
  const service = engineeringServices.find(s => s.slug === 'engineering-consulting');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
