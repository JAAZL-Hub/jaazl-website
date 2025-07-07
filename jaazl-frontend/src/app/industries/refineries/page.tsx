import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import { FaCheck, FaIndustry, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import type { Service } from '@/services/types';
import { industries } from '@/services/api/mockData/industries';
import { engineeringServices } from '@/services/api/mockData/engineeringServices';

export const metadata: Metadata = {
  title: 'Refinery Industry Solutions | JAAZL',
  description: 'Specialized engineering, automation, and optimization solutions for modern refineries, ensuring operational excellence and regulatory compliance.',
  keywords: ['refinery solutions', 'refinery optimization', 'petroleum refining', 'refinery safety', 'refinery maintenance'],
};

export default function RefineriesPage() {
  const industry = industries.find(ind => ind.slug === 'refineries');
  
  if (!industry) {
    return null;
  }
  
  const relatedServices = industry?.relatedServices ? 
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
                  alt={'Refineries Industry'}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Refinery Industry Solutions</h2>
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
                <FaIndustry />
              </div>
              <h3 className="text-xl font-bold mb-3">Process Optimization</h3>
              <p className="text-gray-700">Advanced solutions to enhance refining processes, maximize throughput, and improve product quality while reducing operational costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="text-gray-700">Innovative strategies and technologies to reduce energy consumption across refinery operations, lowering costs and environmental impact.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety & Compliance</h3>
              <p className="text-gray-700">Comprehensive safety systems and compliance solutions to protect personnel, assets, and the environment while meeting regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refinery Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Refinery Solutions</h2>
          
          <div className="space-y-12">
            {/* Solution 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Advanced Process Control</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced process control systems optimize complex refining operations in real-time, ensuring consistent product quality and maximizing yield.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Model Predictive Control (MPC) implementation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Real-time optimization systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Automated quality control solutions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Integrated performance monitoring</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Advanced process control for refineries"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Solution 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Refinery maintenance solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Our AI-powered predictive maintenance solutions identify equipment issues before they cause downtime, extending asset life and reducing maintenance costs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Condition monitoring systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Machine learning failure prediction</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Risk-based inspection methodologies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Integrated maintenance planning</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Solution 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Environmental Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Our environmental solutions ensure your refinery operations remain compliant with regulations while minimizing environmental impact.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Emissions monitoring and control</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Wastewater treatment optimization</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Regulatory reporting automation</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Carbon footprint reduction strategies</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Refinery environmental compliance"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
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
                        alt={'Case Study'}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-lg font-semibold mb-2">{caseStudy.title?.en || 'Case Study'}</h3>
                      <div className="mb-4 text-gray-600">
                        <p dangerouslySetInnerHTML={{ __html: caseStudy.description?.en || '' }}></p>
                      </div>
                      <div className="border-t pt-4">
                        <h4 className="font-bold mb-2">Results:</h4>
                        <p>{caseStudy.outcome?.en || 'Successful implementation'}</p>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for Refineries</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Refinery Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our refinery specialists today to discuss how we can help improve efficiency, safety, and profitability in your operations.
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
