import { Suspense } from 'react';
import { apiService } from '@/services/api/apiService';
import IndustryPageClient from '@/components/industries/IndustryPageClient';
import { notFound } from 'next/navigation';

interface IndustryPageProps {
  params: { slug: string };
}

// Server component for initial data fetching
export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = params;
  
  // Pre-fetch industry data on the server
  try {
    const industry = await apiService.getIndustryBySlug(slug);
    if (!industry) {
      notFound();
    }
    
    return (
      <Suspense fallback={null}>
        <IndustryPageClient slug={slug} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error loading industry:', error);
    notFound();
  }
}