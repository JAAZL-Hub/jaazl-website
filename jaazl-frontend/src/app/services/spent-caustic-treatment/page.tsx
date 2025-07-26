import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServicePageClient from '@/components/services/ServicePageClient';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';

export async function generateMetadata(): Promise<Metadata> {
  const service = engineeringServices.find(s => s.slug === 'spent-caustic-treatment');
  
  if (!service || !service.meta) {
    return {
      title: 'Service Not Found | JAAZL',
    };
  }

  return {
    title: service.meta.title.en,
    description: service.meta.description.en,
    keywords: service.meta.keywords,
  };
}

export default function SpentCausticTreatmentPage() {
  const service = engineeringServices.find(s => s.slug === 'spent-caustic-treatment');
  
  if (!service) {
    notFound();
  }

  // Get related industries
  const relatedIndustries = industries.filter(industry => 
    service.relatedIndustries.includes(industry.id)
  );

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}