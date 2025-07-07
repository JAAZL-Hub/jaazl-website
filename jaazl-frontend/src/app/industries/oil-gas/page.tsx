import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import Link from 'next/link';
import type { Service } from '@/services/types';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';


export const metadata: Metadata = {
  title: 'Oil & Gas Industry Solutions | JAAZL',
  description: 'Specialized engineering, environmental, chemical, and electromechanical solutions for the oil and gas industry.',
  keywords: ['oil and gas solutions', 'petroleum industry', 'energy sector', 'refinery services'],
};

export default function OilGasPage() {
  const industry = industries.find(ind => ind.slug === 'oil-gas');
  
  if (!industry) {
    return null;
  }
  
  const relatedServices = industry.relatedServices ? 
    industry.relatedServices
      .map((slug: string) => engineeringServices.find((service: Service) => service.slug === slug))
      .filter(Boolean) as Service[] : [];
    
  const caseStudies = industry.caseStudies || [];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {industry.name.en}
              </h1>
              <p className="text-xl mb-8">
                {industry.shortDescription.en}
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
                  alt={industry.name?.en || 'Industry'}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Oil & Gas Industry Solutions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {industry.fullDescription.en.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Services for Oil & Gas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Services for the Oil & Gas Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">Upstream Solutions</h3>
              <p className="text-gray-700">Specialized services for exploration and production operations, including reservoir engineering, drilling optimization, and production enhancement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">Midstream Operations</h3>
              <p className="text-gray-700">Comprehensive solutions for transportation, storage, and wholesale marketing of crude oil and natural gas products.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaCheck />
              </div>
              <h3 className="text-xl font-bold mb-3">Downstream Excellence</h3>
              <p className="text-gray-700">Expert services for refining crude oil, processing and purifying natural gas, and marketing products derived from crude oil and natural gas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Challenges & Our Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {/* Challenge 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-600">Challenge</h3>
              <p className="mb-4">Aging infrastructure leading to increased maintenance costs and safety concerns.</p>
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Solution</h3>
              <p>Comprehensive asset integrity management programs that extend equipment life while ensuring operational safety through advanced inspection techniques and predictive maintenance.</p>
            </div>
            
            {/* Challenge 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-600">Challenge</h3>
              <p className="mb-4">Rising environmental regulations and pressure to reduce carbon footprint.</p>
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Solution</h3>
              <p>Innovative emissions monitoring and reduction technologies, coupled with sustainable operational practices that ensure compliance while optimizing production efficiency.</p>
            </div>
            
            {/* Challenge 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-600">Challenge</h3>
              <p className="mb-4">Operational inefficiencies leading to increased costs and reduced productivity.</p>
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Solution</h3>
              <p>AI-powered process optimization and automation systems that identify and eliminate bottlenecks, minimize downtime, and maximize resource utilization.</p>
            </div>
            
            {/* Challenge 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-red-600">Challenge</h3>
              <p className="mb-4">Volatile market conditions requiring adaptable business strategies.</p>
              <h3 className="text-xl font-bold mb-4 text-green-600">Our Solution</h3>
              <p>Data-driven market analysis and flexible operational models that allow rapid adjustment to changing conditions while maintaining profitability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <Image 
                        src={caseStudy.imageSrc || '/images/team/placeholder.png'}
                        alt={caseStudy.title?.en || 'Case Study'}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold mb-3">{caseStudy.title.en}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.description.en}</p>
                      <div className="border-t pt-4">
                        <h4 className="font-bold mb-2">Results:</h4>
                        <p>{caseStudy.outcome?.en || 'Successfully delivered project outcomes.'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for Oil & Gas Industry</h2>
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
                      alt={service.name?.en || 'Service'}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                      {service.name.en}
                    </h3>
                    <p className="text-gray-600">{service.shortDescription.en}</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Oil & Gas Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our industry specialists today to discuss how we can help improve efficiency, safety, and sustainability in your oil and gas operations.
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
