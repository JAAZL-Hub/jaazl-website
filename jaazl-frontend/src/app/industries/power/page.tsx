import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCheck, FaBolt, FaSolarPanel, FaWind } from 'react-icons/fa';
import Link from 'next/link';
import type { Service } from '@/services/types';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';

export const metadata: Metadata = {
  title: 'Power Industry Solutions | JAAZL',
  description: 'Comprehensive engineering, automation, and optimization solutions for the power generation, transmission, and distribution industry.',
  keywords: ['power industry', 'energy solutions', 'renewable energy', 'power generation', 'grid optimization'],
};

export default function PowerPage() {
  const industry = industries.find(ind => ind.slug === 'power');
  
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
          <h2 className="text-3xl font-bold mb-8 text-center">Power Industry Solutions</h2>
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

      {/* Key Focus Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaBolt />
              </div>
              <h3 className="text-xl font-bold mb-3">Power Generation</h3>
              <p className="text-gray-700">Advanced solutions for conventional and renewable power generation that maximize efficiency, reliability, and sustainability.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaSolarPanel />
              </div>
              <h3 className="text-xl font-bold mb-3">Renewable Integration</h3>
              <p className="text-gray-700">Specialized services for integrating renewable energy sources into existing power systems and grid infrastructure.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaWind />
              </div>
              <h3 className="text-xl font-bold mb-3">Grid Optimization</h3>
              <p className="text-gray-700">Smart grid technologies and solutions that enhance transmission and distribution efficiency, reliability, and resilience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Power Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Power Industry Solutions</h2>
          
          <div className="space-y-16">
            {/* Solution Category 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Power Plant Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive solutions help power plants maximize efficiency, reliability, and operational performance while reducing environmental impact.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Advanced control systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Performance monitoring and analytics</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Emissions reduction technologies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Fuel efficiency improvements</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Predictive maintenance strategies</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Power plant optimization"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Solution Category 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Renewable energy integration"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Renewable Energy Integration</h3>
                <p className="text-gray-600 mb-4">
                  Our specialized services help power providers seamlessly integrate renewable energy sources into their generation mix and grid infrastructure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Renewable resource assessment</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Grid connection studies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Energy storage solutions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Hybrid power systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Microgrid implementation</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Solution Category 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Smart Grid Technologies</h3>
                <p className="text-gray-600 mb-4">
                  Our smart grid solutions enhance the reliability, efficiency, and security of power transmission and distribution networks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Advanced distribution management systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>SCADA system integration</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Outage management solutions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Demand response technologies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Grid cybersecurity implementation</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Smart grid technologies"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Trends Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Power Industry Trends</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Decarbonization</h3>
              <p className="text-gray-600 mb-3">
                The global push toward carbon neutrality is transforming the power industry. We help companies navigate this transition with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Clean energy technology implementation</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Carbon capture and storage solutions</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Emissions reduction strategies</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Digitalization</h3>
              <p className="text-gray-600 mb-3">
                Digital technologies are revolutionizing power systems management. Our solutions include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>AI-powered predictive maintenance</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Digital twin implementation</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Big data analytics platforms</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Decentralization</h3>
              <p className="text-gray-600 mb-3">
                Power systems are evolving from centralized to distributed models. We support this transition with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Microgrid design and implementation</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Distributed energy resource management</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Virtual power plant solutions</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">Energy Storage</h3>
              <p className="text-gray-600 mb-3">
                Storage technologies are enabling greater grid flexibility and renewable integration. Our expertise includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Battery storage system design</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Pumped hydro storage solutions</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <p>Thermal energy storage implementation</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Case Studies</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for the Power Industry</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Power Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our power industry specialists today to discuss how we can help improve efficiency, reliability, and sustainability in your operations.
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
