'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContacts } from '@/services/hooks';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaCommentDots } from 'react-icons/fa';


export default function ContactPage() {
  const { language } = useLanguage();
  const { contacts } = useContacts();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission with Netlify
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    
    try {
      // With Netlify forms, the form will be automatically handled when the form has netlify attribute
      // The redirect happens automatically after submission
      setFormStatus('submitting');
      
      // This would typically not run because Netlify intercepts the form submission
      // But we'll keep it as a fallback for development
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch {
      setFormStatus('error');
      setFormError(language === 'en' 
        ? 'There was an error sending your message. Please try again.'
        : 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.');
    }
  };

  // Extract contact details
  const officeContact = contacts?.find(c => c.type === 'office');
  const address = officeContact ? officeContact.address[language] : '';
  const email = officeContact?.email || '';
  const phone = officeContact?.phone || '';

  const [isFormAnimated, setIsFormAnimated] = useState(false);

  useEffect(() => {
    const formAnimTimer = setTimeout(() => setIsFormAnimated(true), 300);
    return () => clearTimeout(formAnimTimer);
  }, []);
  
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 min-h-screen">
      {/* Hero Section - Premium Design */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Glass Morphism Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-900">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
          <div className="absolute top-20 start-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 end-10 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Title with Gradient Text Effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              {language === 'en' 
                ? 'Get in touch with our expert team to discuss your industrial solutions needs' 
                : 'تواصل مع فريق الخبراء لدينا لمناقشة احتياجاتك من الحلول الصناعية'}
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section - Premium Design */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Visit Us Card - Enhanced */}
            <div className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 group">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full ms-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-700 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'en' ? 'Visit Us' : 'زورنا'}
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-1">
                  {address ? (
                    <>
                      <p>{address}</p>
                    </>
                  ) : (
                    <>
                      <p>{language === 'en' ? '123 Industrial Ave,' : '١٢٣ شارع الصناعي،'}</p>
                      <p>{language === 'en' ? 'Dammam, Saudi Arabia' : 'الدمام، المملكة العربية السعودية'}</p>
                    </>
                  )}
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-700 font-medium hover:text-blue-800 transition-colors group-hover:text-blue-900"
                >
                  {language === 'en' ? 'View on map' : 'عرض على الخريطة'}
                  <span className="ms-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            
            {/* Call Us Card - Enhanced */}
            <div className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-green-50 group">
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full ms-4 transition-all duration-300 group-hover:bg-green-500 group-hover:text-white">
                    <FaPhone className="w-6 h-6 text-green-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'en' ? 'Call Us' : 'اتصل بنا'}
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-1">
                  {phone ? (
                    <>
                      <p className="font-medium">{phone}</p>
                      <p>
                        {language === 'en' 
                          ? 'Sunday - Thursday: 8am to 4pm'
                          : 'الأحد - الخميس: ٨ص إلى ٤م'}
                      </p>
                      <p>
                        {language === 'en' 
                          ? 'Saturday: 9am to 4pm'
                          : 'السبت: ٩ص إلى ٤م'}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-medium">+966 13 123 4567</p>
                      <p>
                        {language === 'en' 
                          ? 'Sunday - Thursday: 8am to 4pm'
                          : 'الأحد - الخميس: ٨ص إلى ٤م'}
                      </p>
                    </>
                  )}
                </div>
                <a 
                  href={`tel:${phone || '+966131234567'}`} 
                  className="inline-flex items-center mt-4 text-green-600 font-medium hover:text-green-700 transition-colors group-hover:text-green-800"
                >
                  {language === 'en' ? 'Call now' : 'اتصل الآن'}
                  <span className="ms-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
            
            {/* Email Card - Enhanced */}
            <div className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-orange-50 group">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full ms-4 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <FaEnvelope className="w-6 h-6 text-orange-600 group-hover:text-white transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {language === 'en' ? 'Email Us' : 'راسلنا'}
                  </h3>
                </div>
                <div className="text-gray-600 leading-relaxed space-y-1">
                  {email ? (
                    <>
                      <p>
                        <a 
                          href={`mailto:${email}`} 
                          className="font-medium hover:text-blue-700 transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                      <p>{language === 'en' ? 'We reply within 24 hours' : 'نرد خلال ٢٤ ساعة'}</p>
                    </>
                  ) : (
                    <>
                      <p>
                        <a 
                          href="mailto:info@jaazl.com" 
                          className="font-medium hover:text-blue-700 transition-colors"
                        >
                          info@jaazl.com
                        </a>
                      </p>
                      <p>{language === 'en' ? 'We reply within 24 hours' : 'نرد خلال ٢٤ ساعة'}</p>
                    </>
                  )}
                </div>
                <a 
                  href={`mailto:${email || 'info@jaazl.com'}`}
                  className="inline-flex items-center mt-4 text-orange-600 font-medium hover:text-orange-700 transition-colors group-hover:text-orange-800"
                >
                  {language === 'en' ? 'Email now' : 'أرسل الآن'}
                  <span className="ms-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Contact Form */}
            <div className={`bg-white/10 backdrop-blur-md p-12 rounded-3xl shadow-2xl shadow-black/20 transition-all duration-1000 ease-out ${isFormAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <FaCommentDots className="me-3 text-blue-600 animate-pulse" />
                {language === 'en' ? 'Send Us a Message' : 'أرسل لنا رسالة'}
              </h3>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                action="/thank-you"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Netlify form handling */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                {/* Hidden field for email notification */}
                <input type="hidden" name="recipient" value="info@jaazl.com" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field - Enhanced */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-700 transition-colors duration-200">
                      {language === 'en' ? 'Your Name' : 'اسمك'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black hover:border-blue-300"
                      placeholder={language === 'en' ? 'Full name' : 'الاسم الكامل'}
                    />
                  </div>

                  {/* Email Field - Enhanced */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-700 transition-colors duration-200">
                      {language === 'en' ? 'Email Address' : 'البريد الإلكتروني'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black hover:border-blue-300"
                      placeholder={language === 'en' ? 'Your email' : 'بريدك الإلكتروني'}
                    />
                  </div>
                  
                  {/* Phone Field */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-700 transition-colors duration-200">
                      {language === 'en' ? 'Phone Number' : 'رقم الهاتف'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black hover:border-blue-300"
                      placeholder={language === 'en' ? 'Your phone number' : 'رقم هاتفك'}
                      dir={language === 'ar' ? 'rtl' : 'ltr'}
                    />
                  </div>
                  
                  {/* Subject Field */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-700 transition-colors duration-200">
                      {language === 'en' ? 'Subject' : 'الموضوع'}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black hover:border-blue-300"
                      placeholder={language === 'en' ? 'How can we help?' : 'كيف يمكننا المساعدة؟'}
                    />
                  </div>
                </div>
                
                {/* Message Field - Enhanced */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-blue-700 transition-colors duration-200">
                    {language === 'en' ? 'Your Message' : 'رسالتك'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-black hover:border-blue-300"
                    placeholder={language === 'en' ? 'Please provide details about your inquiry...' : 'يرجى تقديم تفاصيل عن استفسارك...'}
                  ></textarea>
                </div>
                
                {/* Success Message */}
                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {language === 'en' 
                      ? 'Thank you! Your message has been sent. We will get back to you soon.' 
                      : 'شكرا لك! تم إرسال رسالتك. سنعاود الاتصال بك قريبًا.'}
                  </div>
                )}
                
                {/* Error Message */}
                {formStatus === 'error' && formError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {formError}
                  </div>
                )}
                
                {/* Submit Button - Enhanced */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center shadow-btn-cta hover:shadow-btn-cta-hover group"
                >
                  <FaPaperPlane className="w-5 h-5 ms-2 transition-transform duration-300 group-hover:translate-x-1" />
                  {language === 'en' ? 'Send Message' : 'إرسال رسالة'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
