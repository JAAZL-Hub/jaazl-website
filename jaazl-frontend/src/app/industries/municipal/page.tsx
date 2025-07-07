import { Metadata } from 'next';
import MainLayout from '@/components/layouts/MainLayout';
import { getIndustry } from '@/services/api/cmsService';
import Image from 'next/image';
import { FaCheck, FaCity, FaWater, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { getRelatedServices } from '@/services/api/cmsService';

export const metadata: Metadata = {
  title: 'Municipal Infrastructure Solutions | JAAZL',
  description: 'Advanced engineering and technology solutions for municipal infrastructure, water management, waste management, and smart city initiatives.',
  keywords: ['municipal infrastructure', 'water treatment', 'waste management', 'smart cities', 'urban planning'],
};

export default async function MunicipalPage() {
  const industry = await getIndustry('municipal');
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
          <h2 className="text-3xl font-bold mb-8 text-center">Municipal Infrastructure Solutions</h2>
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
                <FaCity />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart City Infrastructure</h3>
              <p className="text-gray-700">Integrated digital solutions for urban management, including IoT networks, data analytics, and intelligent infrastructure systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaWater />
              </div>
              <h3 className="text-xl font-bold mb-3">Water Management</h3>
              <p className="text-gray-700">Comprehensive solutions for water supply, treatment, distribution, and conservation to ensure sustainable water resources.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="text-primary text-3xl mb-4">
                <FaTrash />
              </div>
              <h3 className="text-xl font-bold mb-3">Waste Management</h3>
              <p className="text-gray-700">Advanced systems for waste collection, processing, recycling, and disposal that enhance efficiency and environmental sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Municipal Solutions</h2>
          
          <div className="space-y-16">
            {/* Solution Category 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Water & Wastewater Management</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive water management solutions help municipalities ensure clean, reliable water supply and efficient wastewater treatment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Advanced water treatment systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Distribution network optimization</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Leak detection and management</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Water quality monitoring systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Energy-efficient wastewater treatment</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Water management solutions"
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
                  alt="Waste management solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Integrated Waste Management</h3>
                <p className="text-gray-600 mb-4">
                  Our waste management solutions help municipalities reduce landfill use, increase recycling rates, and generate value from waste.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Smart collection systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Material recovery facilities design</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Waste-to-energy technologies</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Hazardous waste management</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Landfill optimization and remediation</p>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Solution Category 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Smart City Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Our smart city solutions integrate digital technologies to enhance municipal services, improve quality of life, and create sustainable urban environments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>IoT sensor networks and platforms</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Intelligent transportation systems</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Energy-efficient public lighting</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Environmental monitoring networks</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1"><FaCheck /></span>
                    <p>Integrated urban data platforms</p>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/images/team/placeholder.png"
                  alt="Smart city infrastructure"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits for Municipalities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">Optimize resource utilization and reduce operational costs through improved infrastructure and system efficiency.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
              <p className="text-gray-600">Reduce environmental impact through energy-efficient systems, reduced emissions, and improved resource management.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Enhanced Public Services</h3>
              <p className="text-gray-600">Improve service delivery and citizen satisfaction through more reliable, efficient, and responsive municipal systems.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-3">Future-Ready Infrastructure</h3>
              <p className="text-gray-600">Build resilient, adaptable infrastructure that can accommodate population growth and changing urban needs.</p>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services for Municipalities</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Municipal Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our municipal specialists today to discuss how we can help improve efficiency, sustainability, and service delivery in your community.
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
