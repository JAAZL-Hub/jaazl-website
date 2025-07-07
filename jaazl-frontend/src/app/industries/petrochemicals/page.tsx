import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import { getIndustry } from '@/services/api/cmsService';
import Image from 'next/image';
import { FaCheck, FaFlask, FaIndustry, FaRecycle } from 'react-icons/fa';
import Link from 'next/link';
import { getRelatedServices } from '@/services/api/cmsService';

export const metadata: Metadata = {
  title: 'Petrochemical Industry Solutions | JAAZL',
  description: 'Advanced engineering and technical solutions for the petrochemical industry, optimizing production processes and ensuring safety and efficiency.',
  keywords: ['petrochemicals', 'chemical engineering', 'process optimization', 'petrochemical safety'],
};

export default async function PetrochemicalsPage() {
  const industry = await getIndustry('petrochemicals');
  const relatedServices = await getRelatedServices(industry.relatedServices);
  const caseStudies = industry.caseStudies || [];

  if (!industry) {
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
                  src={industry.image.url || '/images/team/placeholder.png'}
                  alt={industry.image.altText.en}
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
          <h2 className="text-3xl font-bold mb-8 text-center">Petrochemical Industry Solutions</h2>
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

      {/* Areas of Expertise */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Petrochemical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaFlask />
              </div>
              <h3 className="text-xl font-bold mb-3">Process Engineering</h3>
              <p className="text-gray-700">Comprehensive design and optimization of chemical processes to maximize efficiency, safety, and product quality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaIndustry />
              </div>
              <h3 className="text-xl font-bold mb-3">Plant Operations</h3>
              <p className="text-gray-700">Operational excellence strategies and technologies that enhance productivity while reducing downtime and maintenance costs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaRecycle />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability Solutions</h3>
              <p className="text-gray-700">Innovative approaches to minimize environmental impact while meeting production targets and regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Advanced Technology Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Digital Transformation for Petrochemicals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <div>
                    <p className="font-bold">Advanced Process Control</p>
                    <p className="text-gray-600">Implement sophisticated control systems that optimize complex chemical processes in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <div>
                    <p className="font-bold">Predictive Maintenance</p>
                    <p className="text-gray-600">AI-driven monitoring systems that identify equipment issues before they cause downtime.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <div>
                    <p className="font-bold">Digital Twin Technology</p>
                    <p className="text-gray-600">Virtual models of physical assets that enable scenario testing and optimization without plant disruption.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                  <div>
                    <p className="font-bold">Integrated Data Analytics</p>
                    <p className="text-gray-600">Comprehensive data collection and analysis systems that provide actionable insights across all operations.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/team/placeholder.png"
                alt="Advanced petrochemical technology"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Petrochemical Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Enhanced Safety</h3>
              <p className="text-gray-600">Advanced monitoring and control systems that minimize risk in hazardous operations and chemical handling.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Improved Efficiency</h3>
              <p className="text-gray-600">Optimized processes that maximize yield and quality while minimizing energy consumption and waste.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Comprehensive solutions that ensure operations meet or exceed all industry and environmental regulations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Cost Reduction</h3>
              <p className="text-gray-600">Streamlined operations and maintenance practices that significantly reduce operational expenses.</p>
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
                        src={caseStudy.image.url || '/images/team/placeholder.png'}
                        alt={caseStudy.image.altText.en}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold mb-3">{caseStudy.title.en}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.description.en}</p>
                      <div className="border-t pt-4">
                        <h4 className="font-bold mb-2">Results:</h4>
                        <p>{caseStudy.results.en}</p>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for Petrochemical Industry</h2>
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
                      src={service.image.url || '/images/team/placeholder.png'}
                      alt={service.image.altText.en}
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Petrochemical Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our petrochemical specialists today to discuss how we can help improve efficiency, safety, and sustainability in your operations.
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
