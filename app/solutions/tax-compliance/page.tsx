'use client';

import React from 'react';
import Link from 'next/link';

const subServices = [
  { slug: 'income-tax-return', title: 'Income Tax Return Filing', desc: 'ITR-1 to ITR-7 filing with tax planning' },
  { slug: 'gst-registration', title: 'GST Registration', desc: 'New GST registration & amendments' },
  { slug: 'gst-return', title: 'GST Return Filing', desc: 'GSTR-1, GSTR-3B, GSTR-9 & annual returns' },
  { slug: 'gst-notice', title: 'GST Notice Handling', desc: 'Reply to GST notices & assessments' },
  { slug: 'tds-compliance', title: 'TDS Compliance', desc: 'TDS return filing, reconciliation & certificates' },
  { slug: 'accounting', title: 'Accounting & Bookkeeping', desc: 'Complete accounting & finalization' },
];

export default function TaxComplianceCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS / TAX &amp; COMPLIANCE</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">Tax &amp; Compliance</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">
          Complete taxation and statutory compliance services for individuals and businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subServices.map((service, index) => (
          <Link 
            href={`/solutions/${service.slug}`} 
            key={index}
            className="group border border-gray-200 rounded-3xl p-7 hover:border-[#D4AF37] transition-all block"
          >
            <h3 className="font-semibold text-xl mb-3 group-hover:text-[#D4AF37]">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
            <div className="mt-5 text-sm font-medium text-[#D4AF37]">
              View Details →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/solutions" className="text-sm underline">← Back to all Solutions</Link>
      </div>
    </div>
  );
}
