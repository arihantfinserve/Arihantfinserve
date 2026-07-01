'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "Why choose Arihant Finserve?",
    answer: "We provide premium financial and tax consulting services tailored to your specific business needs, ensuring full compliance and optimized growth."
  },
  {
    question: "How long does company registration take?",
    answer: "Typically, company registration takes between 10-15 business days, depending on document readiness and government processing times."
  },
  {
    question: "Do you provide online consultations?",
    answer: "Yes, we offer fully remote consultations via video conferencing for your convenience, no matter where you are located."
  },
  {
    question: "What types of businesses do you help?",
    answer: "We assist startups, SMEs, and large enterprises across various industries with their taxation, registration, and financial planning needs."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-500">Everything you need to know about our services.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 py-4 border-t border-gray-100' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
