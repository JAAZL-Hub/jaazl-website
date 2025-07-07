'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import type { Industry, Service, LocalizedContent } from '@/services/types';

interface IndustryPageClientProps {
  industry: Industry;
  relatedServices: Service[];
}

// Helper function to get localized content
const getLocalizedContent = (content: LocalizedContent, language: string = 'en'): string => {
  return language === 'en' ? content.en : content.ar;
};

const IndustryPageClient: React.FC<IndustryPageClientProps> = ({ industry, relatedServices }) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {getLocalizedContent(industry.name, 'en')}
              </h1>
              <p className="text-xl mb-8">
                {getLocalizedContent(industry.shortDescription, 'en')}
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
                  src={industry.imageSrc || '/images/team/placeholder.png'}
                  alt={getLocalizedContent(industry.name, 'en')}
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
          <h2 className="text-3xl font-bold mb-8 text-center">About {getLocalizedContent(industry.name, 'en')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {getLocalizedContent(industry.fullDescription, 'en').split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {industry.challenges && industry.challenges.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Industry Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(challenge.title, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(challenge.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      {industry.solutions && industry.solutions.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-3">{getLocalizedContent(solution.title, 'en')}</h3>
                  <p className="text-gray-700">{getLocalizedContent(solution.description, 'en')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {caseStudy.imageSrc && (
                    <div className="relative w-full h-48">
                      <Image
                        src={caseStudy.imageSrc}
                        alt={getLocalizedContent(caseStudy.title, 'en')}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{getLocalizedContent(caseStudy.title, 'en')}</h3>
                    <p className="text-gray-700 mb-4">{getLocalizedContent(caseStudy.description, 'en')}</p>
                    {caseStudy.results && (
                      <div className="mt-4">
                        <h4 className="font-bold text-lg mb-2">Results:</h4>
                        <ul className="list-disc pl-6">
                          {Array.isArray(caseStudy.results) ? 
                            caseStudy.results.map((result: LocalizedContent, idx: number) => (
                              <li key={idx} className="mb-1">{getLocalizedContent(result, 'en')}</li>
                            )) : 
                            <li>{getLocalizedContent(caseStudy.results, 'en')}</li>
                          }
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link 
                  href={`/services/${service.slug}`} 
                  key={service.id}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={service.imageSrc || '/images/team/placeholder.png'}
                        alt={getLocalizedContent(service.name, 'en')}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                        {getLocalizedContent(service.name, 'en')}
                      </h3>
                      <p className="text-gray-600">{getLocalizedContent(service.shortDescription, 'en')}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your {getLocalizedContent(industry.name, 'en')} Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our industry experts today to discuss how JAAZL can help enhance your operational efficiency and drive innovation.
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

export default IndustryPageClient;
