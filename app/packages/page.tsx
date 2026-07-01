'use client';

import React from 'react';
import Link from 'next/link';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PackagesPage() {
  const packages = [
    {
      name: "Startup Aarambh",
      description: "Everything you need to legally start and structure your new business.",
      price: "Custom Quote",
      popular: true,
      features: [
        "Company / LLP Incorporation",
        "GST Registration & Advisory",
        "MSME / Udyam Registration",
        "PAN & TAN Application",
        "Initial Compliance Setup",
        "Opening Bank Account Assistance",
      ]
    },
    {
      name: "Complete NGO Solution",
      description: "End-to-end registration and compliance for Trusts, Societies, and Sec-8 companies.",
      price: "Custom Quote",
      popular: false,
      features: [
        "Trust / Society / Sec-8 Registration",
        "12A & 80G Registration",
        "CSR-1 Registration",
        "FCRA Advisory",
        "NITI Aayog Darpan Registration",
        "Annual Compliance Management",
      ]
    },
    {
      name: "Corporate Shield",
      description: "Comprehensive tax, audit, and ROC compliance for growing enterprises.",
      price: "Custom Quote",
      popular: false,
      features: [
        "Monthly GST Return Filing",
        "Annual Statutory Audit",
        "ROC Annual Filings",
        "Income Tax Return Filing",
        "Tax Planning & Advisory",
        "Dedicated Account Manager",
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold tracking-tight text-[var(--primary)] mb-6 heading-font">
            Specialized <span className="text-[#D4AF37]">Packages</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tailored financial and compliance solutions designed to meet the specific needs of your business lifecycle.
          </p>
        </div>

        {/* Pricing/Package Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular 
                ? 'bg-[var(--primary)] text-white shadow-xl border border-[#163057]' 
                : 'bg-white dark:bg-[#163057] border border-gray-100 dark:border-gray-800 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-[#D4AF37] text-[var(--primary)] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[var(--primary)] dark:text-white'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'} min-h-[60px]`}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-3xl font-bold ${pkg.popular ? 'text-white' : 'text-[var(--primary)] dark:text-white'}`}>
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckIcon />
                    <span className={pkg.popular ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/919157657347?text=I%20am%20interested%20in%20the%20packages"
                target="_blank" rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-2xl font-bold transition-colors ${
                  pkg.popular
                  ? 'bg-[#D4AF37] hover:bg-[#c5a02f] text-[var(--primary)]'
                  : 'bg-[var(--primary)] hover:bg-[#163057] text-white dark:bg-[#D4AF37] dark:hover:bg-[#c5a02f] dark:text-[var(--primary)]'
                }`}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>

        {/* Custom Requirements */}
        <div className="mt-24 text-center bg-gradient-to-r from-[#081b33] to-[#163057] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-3xl font-bold mb-4 relative z-10">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">
            We understand that every business is unique. Contact our experts to design a package perfectly suited to your specific requirements.
          </p>
          <Link href="/contact" className="inline-block bg-white text-[var(--primary)] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors relative z-10">
            Schedule a Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}
