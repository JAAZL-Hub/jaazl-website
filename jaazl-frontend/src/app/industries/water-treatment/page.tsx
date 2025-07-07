import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Water Treatment Industry Solutions | JAAZL',
  description: 'Comprehensive water treatment, purification, and wastewater management solutions for industrial and municipal applications.',
  keywords: ['water treatment', 'wastewater management', 'water purification', 'industrial water systems', 'water resource management', 'water quality control'],
};

export default function WaterTreatmentPage() {
  const industry = industries.find(i => i.slug === 'water-treatment');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map(slug => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return (
    <MainLayout>
      <IndustryPageClient industry={industry} relatedServices={relatedServices} />
    </MainLayout>
  );
}
