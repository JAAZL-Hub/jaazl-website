import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Digital Transformation | JAAZL',
  description: 'Comprehensive digital transformation strategies and solutions for modern industrial enterprises seeking operational excellence.',
  keywords: ['digital transformation', 'IIoT', 'industrial IoT', 'industry 4.0', 'digital twins', 'cloud integration'],
};

export default function DigitalTransformationPage() {
  const service = engineeringServices.find(s => s.slug === 'digital-transformation');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}
