import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import { getIndustry } from '@/services/api/cmsService';
import Image from 'next/image';
import { FaCheck, FaMountain, FaCog, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import { getRelatedServices } from '@/services/api/cmsService';

export const metadata: Metadata = {
  title: 'Mining Industry Solutions | JAAZL',
  description: 'Advanced engineering, automation, and environmental solutions for the mining industry to improve efficiency, safety, and sustainability.',
  keywords: ['mining solutions', 'mining automation', 'mineral processing', 'mining safety', 'sustainable mining'],
};

export default async function MiningPage() {
  const industry = await getIndustry('mining');
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
          <h2 className="text-3xl font-bold mb-8 text-center">Mining Industry Solutions</h2>
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
                <FaMountain />
              </div>
              <h3 className="text-xl font-bold mb-3">Extraction Efficiency</h3>
              <p className="text-gray-700">Advanced solutions to optimize extraction processes, maximize resource recovery, and reduce operational costs across all mining activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaCog />
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Safety</h3>
              <p className="text-gray-700">Comprehensive safety systems and automation technologies that protect workers, minimize risks, and ensure regulatory compliance.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Stewardship</h3>
              <p className="text-gray-700">Innovative solutions for responsible resource management, minimizing environmental impact, and promoting sustainable mining practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mining Industry Solutions</h2>
          
          <div className="space-y-16">
            {/* Solution Category 1 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Automation & Digital Transformation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Remote Operations Centers</h4>
                  <p className="text-gray-700 mb-4">Centralized control systems that enable remote monitoring and operation of mining equipment, enhancing safety and efficiency.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Real-time monitoring of equipment performance</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Reduced on-site personnel requirements</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Enhanced emergency response capabilities</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Autonomous Mining Systems</h4>
                  <p className="text-gray-700 mb-4">Self-operating equipment and vehicles that increase productivity while reducing safety risks and operational costs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Autonomous haulage systems</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Robotic drilling and sampling</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>24/7 operation capabilities</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Solution Category 2 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Process Optimization & Asset Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Mineral Processing Optimization</h4>
                  <p className="text-gray-700 mb-4">Advanced control systems and technologies that maximize recovery rates and product quality in mineral processing.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Grinding and flotation optimization</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Energy consumption reduction</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Reagent usage optimization</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Predictive Maintenance</h4>
                  <p className="text-gray-700 mb-4">AI-driven monitoring systems that identify equipment issues before failure, minimizing downtime and maintenance costs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Condition-based monitoring</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Failure prediction algorithms</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Optimized maintenance scheduling</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Solution Category 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Sustainability & Environmental Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Water Management</h4>
                  <p className="text-gray-700 mb-4">Comprehensive solutions for water conservation, treatment, and reuse in mining operations.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Closed-loop water recycling systems</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Tailings management optimization</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Contamination prevention strategies</p>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">Site Rehabilitation</h4>
                  <p className="text-gray-700 mb-4">Innovative approaches to mine closure and land reclamation that restore ecosystems and create sustainable post-mining land use.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Progressive rehabilitation planning</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Native vegetation restoration</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                      <p>Long-term environmental monitoring</p>
                    </li>
                  </ul>
                </div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for the Mining Industry</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Mining Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our mining specialists today to discuss how we can help improve efficiency, safety, and sustainability in your operations.
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
