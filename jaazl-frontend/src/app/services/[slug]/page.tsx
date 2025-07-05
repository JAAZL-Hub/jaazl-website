import { Suspense } from 'react';
import { apiService } from '@/services/api/apiService';
import ServicePageClient from '@/components/services/ServicePageClient';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: { slug: string };
}

// Server component for initial data fetching
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  
  // Pre-fetch service data on the server
  try {
    const service = await apiService.getServiceBySlug(slug);
    if (!service) {
      notFound();
    }
    
    return (
      <Suspense fallback={null}>
        <ServicePageClient slug={slug} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading service:', error);
    notFound();
  }
}
