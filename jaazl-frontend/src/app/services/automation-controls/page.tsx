import { Metadata } from 'next';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';
import { industries } from '@/services/api/mockData/industries';
import type { Industry } from '@/services/types';
import ServicePageClient from '@/components/services/ServicePageClient';

export const metadata: Metadata = {
  title: 'Industrial Automation & Controls | JAAZL',
  description: 'Advanced automation and control systems for industrial processes, providing precision control, monitoring, and optimization.',
  keywords: ['industrial automation', 'PLC programming', 'SCADA systems', 'process control', 'HMI development'],
};

export default function AutomationControlsPage() {
  const service = engineeringServices.find(s => s.slug === 'automation-controls');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find(industry => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return <ServicePageClient service={service} relatedIndustries={relatedIndustries} />;
}