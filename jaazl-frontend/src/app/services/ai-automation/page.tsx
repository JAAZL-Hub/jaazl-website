import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import { getEngineeringService } from '@/services/api/cmsService';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import { getRelatedIndustries } from '@/services/api/cmsService';

export const metadata: Metadata = {
  title: 'AI & Industrial Automation Services | JAAZL',
  description: 'Transform industrial operations with cutting-edge AI and automation solutions that increase efficiency, reduce costs, and drive innovation.',
  keywords: ['artificial intelligence', 'industrial automation', 'predictive maintenance', 'process control', 'data analytics'],
};

export default async function AIAutomationPage() {
  const service = await getEngineeringService('ai-automation');
  const relatedIndustries = await getRelatedIndustries(service.relatedIndustries);

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
          <h2 className="text-3xl font-bold mb-8 text-center">About Our AI & Automation Solutions</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature) => (
              <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <div className="text-primary text-3xl mb-4">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title.en}</h3>
                <p className="text-gray-700">{feature.description.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of AI & Automation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Increased Operational Efficiency</h3>
              <p>Automate repetitive tasks and optimize complex processes with AI-driven solutions that continuously improve over time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Reduced Downtime</h3>
              <p>Predictive maintenance systems identify potential failures before they occur, minimizing unplanned downtime and extending equipment life.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Data-Driven Decision Making</h3>
              <p>Transform operational data into actionable insights that enable better, faster decision making across your organization.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
              <p>Our AI systems grow with your business, adapting to changing conditions and expanding to new processes as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Industrial Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our AI and automation experts today to discuss how we can help optimize your processes and drive innovation.
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
