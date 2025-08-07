import { Metadata } from 'next';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import type { Service } from '@/services/types';
import IndustryPageClient from '@/components/industries/IndustryPageClient';

export const metadata: Metadata = {
  title: 'Food & Beverages Industry Solutions | JAAZL',
  description: 'Food-grade solutions for processing, quality control, and sanitation in food and beverage operations.',
  keywords: ['food industry', 'beverage processing', 'food safety', 'food quality control'],
};

export default function FoodBeveragesPage() {
  const industry = industries.find(i => i.slug === 'food-beverages');
  const relatedServices = industry?.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find(service => service.slug === slug))
      .filter(Boolean) as Service[] : [];

  if (!industry) {
    return null;
  }

  return <IndustryPageClient industry={industry} relatedServices={relatedServices} />;
}