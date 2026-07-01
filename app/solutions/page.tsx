'use client';

import React from 'react';

const solutions = [
  { slug: 'tax-compliance', title: 'Tax & Compliance', desc: 'Income Tax, GST, TDS, Accounting, Balance Sheet, Notice Handling' },
  { slug: 'audit-assurance', title: 'Audit & Assurance', desc: 'Tax Audit, Internal Audit, Statutory Audit, Trust Audit' },
  { slug: 'loans-finance', title: 'Loans & Finance', desc: 'Business Loans, Home Loans, Mortgage, Project Reports, CMA Data' },
  { slug: 'investment-wealth', title: 'Investment & Wealth', desc: 'Mutual Funds, Demat, Financial Planning, Goal-based Investing' },
  { slug: 'business-registration', title: 'Business Registration', desc: 'Pvt Ltd, LLP, OPC, Partnership Firm Registration' },
  { slug: 'licensing-compliance', title: 'Licensing & Compliance', desc: 'Trademark, FSSAI, ISO, IEC, DSC, PAN, TAN, PF/ESI' },
  { slug: 'ngo-trust', title: 'NGO & Trust', desc: 'Trust Registration, 12AA, 80G, Section 8, NGO Darpan' },
  { slug: 'ca-certificates', title: 'CA Certificates', desc: 'Net Worth, Turnover, UDIN Certified, Fund Utilization Certificates' },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-16">
      <div className="max-w-3xl mb-12">
        <span className="text-[#D4AF37] text-sm font-semibold tracking-widest">SOLUTIONS</span>
        <h1 className="text-5xl font-bold tracking-tight mt-3">Financial Solutions</h1>
        <p className="mt-4 text-xl text-gray-600">Choose the area where you need support. We handle everything end-to-end.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol, index) => (
          <a 
            key={index} 
            href={`/solutions/${sol.slug}`}
            className="block border border-gray-200 rounded-3xl p-8 hover:border-[#D4AF37] transition-all group"
          >
            <h3 className="font-semibold text-2xl mb-3 group-hover:text-[#D4AF37] transition-colors">{sol.title}</h3>
            <p className="text-gray-600">{sol.desc}</p>
            <div className="mt-6 text-sm font-medium text-[#D4AF37] flex items-center gap-x-2">
              Explore <span>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
