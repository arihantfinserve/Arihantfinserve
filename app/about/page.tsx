'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[var(--primary)] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 heading-font">
              A Decade of <span className="text-[#D4AF37]">Trust</span> & <br />Financial Excellence.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 10 years, Arihant Finserve has been Gujarat&apos;s most trusted partner in financial growth, delivering clarity, compliance, and strategy to businesses and individuals alike.
            </p>
          </div>
        </div>
      </section>

      {/* Legacy & Vision (Timeline style concept) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[var(--primary)] dark:text-white mb-6">Our 10+ Year Legacy</h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Founded on the principles of integrity and deep professional expertise, Arihant Finserve started with a singular vision: to demystify taxation and finance for entrepreneurs.
              </p>
              <p>
                Over the last decade, we have grown from a boutique advisory firm to a comprehensive financial hub, managing the compliance, funding, and growth strategies for hundreds of businesses across Gujarat and India.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <p className="text-4xl font-bold text-[var(--primary)] dark:text-white">10+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-4">
                <p className="text-4xl font-bold text-[var(--primary)] dark:text-white">1500+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mt-1">Clients Served</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-[#081b33] to-[#163057] shadow-2xl p-12 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37] opacity-20 rounded-full blur-2xl"></div>
              <h3 className="text-3xl font-bold mb-4 text-[#D4AF37]">Our Vision</h3>
              <p className="text-xl leading-relaxed">
                "To become Gujarat&apos;s most trusted financial advisory platform delivering complete financial solutions with zero friction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Core Team */}
      <section className="py-24 bg-white dark:bg-[#040d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[var(--primary)] dark:text-white mb-4">Meet the Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Guided by expertise, driven by innovation.
            </p>
          </div>

          <div className="bg-[#f8fafc] dark:bg-[#163057] rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center mb-20 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#081b33] to-[#D4AF37] flex-shrink-0 flex items-center justify-center text-white text-6xl font-bold shadow-xl border-4 border-white dark:border-[#081b33]">
              MJ
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[var(--primary)] dark:text-white">MBA Manish M Jain</h3>
              <p className="text-[#D4AF37] font-semibold text-lg mb-6 tracking-wide">Founder & Chief Consultant</p>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                <p>
                  An MBA professional with over a decade of rich experience in the financial sector.
                </p>
                <p>
                  As an active financial consultant, MBA Manish M Jain brings unparalleled technical knowledge in Project Financing, Investment Strategies, and Corporate Advisory.
                </p>
                <p>
                  With extensive business acumen and experience, he leads Arihant Finserve with academic rigor and practical brilliance.
                </p>
              </div>
            </div>
          </div>

          {/* Team of 7 */}
          <div className="text-center mt-32 mb-16">
            <h2 className="text-3xl font-bold text-[var(--primary)] dark:text-white mb-4">The Core Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our firm is powered by a dedicated team of 7 core professionals, including experienced MBAs and Company Secretaries (CS), ensuring multidisciplinary excellence for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-[#081b33] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 dark:bg-[#163057] mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <h4 className="font-bold text-[var(--primary)] dark:text-white text-lg">Expert Professional</h4>
                <p className="text-sm text-[#D4AF37] font-medium">{idx % 2 === 0 ? 'CA / CS Affiliate' : 'MBA Finance'}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#081b33] text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to grow with a trusted partner?</h2>
        <Link href="/contact" className="inline-block bg-[#D4AF37] hover:bg-[#c5a02f] text-[#081b33] px-10 py-4 rounded-full font-bold transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
          Contact Our Experts
        </Link>
      </section>

    </div>
  );
}
