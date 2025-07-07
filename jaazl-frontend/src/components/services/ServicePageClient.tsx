'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import type { Industry, Service, LocalizedContent } from '@/services/types';

interface ServicePageClientProps {
  service: Service;
  relatedIndustries: Industry[];
}

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent, language: string = 'en'): string => {
  return language === 'en' ? content.en : content.ar;
};

const ServicePageClient: React.FC<ServicePageClientProps> = ({ service, relatedIndustries }) => {
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
                  alt={getLocalizedContent(service.name, 'en')}
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
          <h2 className="text-3xl font-bold mb-8 text-center">About Our {getLocalizedContent(service.name, 'en')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {getLocalizedContent(service.fullDescription, 'en').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature) => (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-primary text-3xl mb-4">
                    <FaCheck />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(feature.title, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(feature.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(benefit.title, 'en')}</h3>
                  <p>{getLocalizedContent(benefit.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Industries</h2>
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
                        alt={getLocalizedContent(industry.name, 'en')}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                        {getLocalizedContent(industry.name, 'en')}
                      </h3>
                      <p className="text-gray-600">{getLocalizedContent(industry.shortDescription, 'en')}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div key={index} className="mb-8 border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(faq.question, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(faq.answer, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss how we can help optimize your processes and drive innovation.
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
};

export default ServicePageClient;
