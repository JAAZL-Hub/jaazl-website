import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import { getEngineeringService } from '@/services/api/cmsService';
import Image from 'next/image';
import { FaCheck, FaLeaf, FaWater, FaRecycle } from 'react-icons/fa';
import Link from 'next/link';
import { getRelatedIndustries } from '@/services/api/cmsService';

export const metadata: Metadata = {
  title: 'Environmental Compliance & Sustainability Services | JAAZL',
  description: 'Comprehensive environmental compliance and sustainability solutions for industrial operations, helping businesses reduce environmental impact while meeting regulatory requirements.',
  keywords: ['environmental compliance', 'sustainability', 'emissions monitoring', 'waste management', 'resource optimization'],
};

export default async function EnvironmentalCompliancePage() {
  const service = await getEngineeringService('environmental-compliance');
  const relatedIndustries = await getRelatedIndustries(service.relatedIndustries || []);

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
                {service.name.en}
              </h1>
              <p className="text-xl mb-8">
                {service.shortDescription.en}
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
                  src={service.image.url || '/images/team/placeholder.png'}
                  alt={service.image.altText.en}
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
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Environmental Services</h2>
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
              const icons = [<FaLeaf key="leaf" />, <FaWater key="water" />, <FaRecycle key="recycle" />];
              return (
                <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-primary text-3xl mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title.en}</h3>
                  <p className="text-gray-700">{feature.description.en}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Sustainability Approach</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6">Comprehensive Environmental Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Environmental Impact Assessment</h4>
                    <p className="text-gray-600">Thorough analysis of your operations' environmental impact, identifying opportunities for improvement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Regulatory Compliance Programs</h4>
                    <p className="text-gray-600">Tailored compliance programs that ensure adherence to local, national, and international environmental regulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Waste Management Optimization</h4>
                    <p className="text-gray-600">Strategies to reduce waste generation, improve recycling rates, and implement circular economy principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <FaCheck />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Sustainable Resource Management</h4>
                    <p className="text-gray-600">Solutions for optimizing water, energy, and raw material usage across your operations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Environmental sustainability"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Environmental Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensure operations meet all environmental regulations, avoiding costly penalties and production disruptions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
              <p className="text-gray-600">Optimize resource usage and waste management to significantly reduce operational costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Enhanced Reputation</h3>
              <p className="text-gray-600">Build a positive brand image with stakeholders, customers, and communities as an environmentally responsible organization.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Long-term Sustainability</h3>
              <p className="text-gray-600">Develop operations that are environmentally sustainable for long-term business success and resilience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 bg-white">
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
                        src={industry.image.url || '/images/team/placeholder.png'}
                        alt={industry.image.altText.en}
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
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Environmental Performance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our environmental specialists today to discuss how we can help your organization achieve sustainable operations while ensuring regulatory compliance.
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
