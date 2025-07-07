import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaLaptopCode, FaNetworkWired, FaCloudUploadAlt } from 'react-icons/fa';
import Link from 'next/link';
import type { Industry, Feature } from '@/services/types';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';

export const metadata: Metadata = {
  title: 'Industrial Digital Transformation | JAAZL',
  description: 'Comprehensive digital transformation strategies and solutions for modern industrial enterprises seeking operational excellence.',
  keywords: ['digital transformation', 'IIoT', 'industrial IoT', 'industry 4.0', 'digital twins', 'cloud integration'],
};

export default function DigitalTransformationPage() {
  const service = engineeringServices.find(s => s.slug === 'digital-transformation');
  
  if (!service) {
    return null;
  }
  const relatedIndustries = service?.relatedIndustries ? 
    service.relatedIndustries
      .map((slug: string) => industries.find((industry: Industry) => industry.slug === slug))
      .filter(Boolean) as Industry[] : [];

  // Service is now guaranteed to be non-null

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.name?.en || 'Digital Transformation'}
              </h1>
              <p className="text-xl mb-8">
                {service.shortDescription?.en || ''}
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
                  src={service?.imageSrc || '/images/team/placeholder.png'}
                  alt={'Digital transformation service'}
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
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Digital Transformation Services</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {(service.fullDescription?.en || '').split('\n\n').map((paragraph: string, idx: number) => (
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
          <h2 className="text-3xl font-bold mb-12 text-center">Key Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(service.features || []).map((feature: Feature, index: number) => {
              const icons = [<FaLaptopCode key="laptop" />, <FaNetworkWired key="network" />, <FaCloudUploadAlt key="cloud" />];
              return (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-primary text-3xl mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title?.en || ''}</h3>
                  <p className="text-gray-700">{feature.description?.en || ''}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Transformation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Digital Transformation Process</h2>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Assessment</h3>
                  <p className="text-gray-600">We evaluate your current systems, processes, and technical capabilities to identify key opportunities for digital enhancement.</p>
                </div>
                <div className="md:w-8 md:h-8 bg-primary rounded-full z-10 flex items-center justify-center text-white font-bold">1</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Infrastructure assessment</li>
                      <li>Process mapping</li>
                      <li>Technology stack evaluation</li>
                      <li>Digital maturity benchmarking</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Multi-phase roadmap creation</li>
                      <li>Technology selection</li>
                      <li>ROI modeling</li>
                      <li>Implementation timelines</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-8 md:h-8 bg-primary rounded-full z-10 flex items-center justify-center text-white font-bold">2</div>
                <div className="md:w-1/2 md:pl-12 md:order-3">
                  <h3 className="text-2xl font-bold mb-3">Strategy Development</h3>
                  <p className="text-gray-600">We create a customized digital transformation strategy aligned with your business goals and operational realities.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Implementation</h3>
                  <p className="text-gray-600">We deploy solutions using agile methodology, ensuring minimal disruption to your ongoing operations.</p>
                </div>
                <div className="md:w-8 md:h-8 bg-primary rounded-full z-10 flex items-center justify-center text-white font-bold">3</div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Phased deployment</li>
                      <li>System integration</li>
                      <li>User training</li>
                      <li>Change management</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Performance monitoring</li>
                      <li>Continuous improvement</li>
                      <li>Technology updates</li>
                      <li>Scaling digital capabilities</li>
                    </ul>
                  </div>
                </div>
                <div className="md:w-8 md:h-8 bg-primary rounded-full z-10 flex items-center justify-center text-white font-bold">4</div>
                <div className="md:w-1/2 md:pl-12 md:order-3">
                  <h3 className="text-2xl font-bold mb-3">Optimization & Support</h3>
                  <p className="text-gray-600">We provide ongoing support, monitoring, and optimization to ensure your digital transformation continues to deliver value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIndustries.map((industry: Industry) => (
              <Link 
                href={`/industries/${industry.slug}`} 
                key={industry.id}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                  <div className="relative w-full h-48">
                    <Image 
                      src={industry?.imageSrc || '/images/team/placeholder.png'}
                      alt={`${industry.name?.en || 'Industry'} image`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                      {industry.name?.en || 'Industry'}
                    </h3>
                    <p className="text-gray-600">{industry.shortDescription?.en || ''}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Digital Transformation Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our digital transformation specialists today to discuss how we can help modernize your industrial operations.
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
