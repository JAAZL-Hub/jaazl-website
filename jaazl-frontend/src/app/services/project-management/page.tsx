import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Project Management | JAAZL',
  description: 'Professional project management services for industrial, energy, and infrastructure projects of all scales.',
  keywords: ['project management', 'industrial project planning', 'project execution', 'technical project oversight'],
};

export default function ProjectManagementPage() {
  const service = engineeringServices.find(s => s.slug === 'project-management');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
