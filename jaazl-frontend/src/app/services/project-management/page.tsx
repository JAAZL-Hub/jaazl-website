import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCalendarAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import type { Industry, LocalizedContent } from '@/services/types';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent, language: string): string => {
  return language === 'en' ? content.en : content.ar;
};

export const metadata: Metadata = {
  title: 'Industrial Project Management Services | JAAZL',
  description: 'Expert project management services for complex industrial projects, ensuring successful delivery through meticulous planning and execution.',
  keywords: ['project management', 'industrial projects', 'risk management', 'quality control', 'schedule management'],
};

export default function ProjectManagementPage() {
  const service = engineeringServices.find(s => s.slug === 'project-management');
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find((industry: Industry) => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  if (!service) {
    return null;
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {getLocalizedContent(service.name, 'en')}
              </h1>
              <p className="text-xl mb-8">
                {getLocalizedContent(service.shortDescription, 'en')}
              </p>
              <Link 
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={service.imageSrc || '/images/team/placeholder.png'}
                  alt={'Project Management service'}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Project Management Services</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {service.fullDescription.en.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const icons = [<FaCalendarAlt key="calendar" />, <FaExclamationTriangle key="risk" />, <FaCheckCircle key="check" />];
              return (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-primary text-3xl mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(feature.title, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(feature.description, 'en')}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Management Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Project Management Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Initiation & Planning</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold mb-2">Project Charter Development</h4>
                  <p className="text-gray-700">We define clear project objectives, scope, stakeholders, and key success criteria.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold mb-2">Comprehensive Planning</h4>
                  <p className="text-gray-700">Our team creates detailed schedules, resource plans, and risk management strategies.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold mb-2">Stakeholder Alignment</h4>
                  <p className="text-gray-700">We ensure all project stakeholders share a unified vision and expectations.</p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Execution & Control</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">Rigorous Monitoring</h4>
                  <p className="text-gray-700">Continuous tracking of progress, costs, and quality metrics against established baselines.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">Proactive Issue Management</h4>
                  <p className="text-gray-700">Early identification and resolution of challenges before they impact project outcomes.</p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">Transparent Communication</h4>
                  <p className="text-gray-700">Regular, clear reporting to all stakeholders on progress, risks, and decisions.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Closing & Handover */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Project Closing & Handover</h3>
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold mb-2">Documentation</h4>
                <p className="text-gray-700">Comprehensive documentation of all project deliverables, decisions, and lessons learned.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold mb-2">Knowledge Transfer</h4>
                <p className="text-gray-700">Thorough training and knowledge transfer to operational teams.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold mb-2">Continuous Improvement</h4>
                <p className="text-gray-700">Post-project analysis to identify improvements for future initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIndustries.map((industry) => (
              <Link 
                href={`/industries/${industry.slug}`} 
                key={industry.id}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                  <div className="relative w-full h-48">
                    <Image
                      src={industry.imageSrc || '/images/team/placeholder.png'}
                      alt={industry.name.en}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                      {industry.name.en}
                    </h3>
                    <p className="text-gray-600">{industry.shortDescription.en}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Expert Project Management?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our project management team today to discuss how we can help ensure the success of your industrial projects.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
