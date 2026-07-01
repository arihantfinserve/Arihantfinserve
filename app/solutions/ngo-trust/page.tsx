'use client';
import Link from 'next/link';

const subServices = [
  { slug: 'trust-registration', title: 'Trust Registration', desc: 'Public Charitable Trust' },
  { slug: '12aa-80g', title: '12AA & 80G Registration', desc: 'Tax exemption for NGOs' },
  { slug: 'section-8', title: 'Section 8 Company', desc: 'Non-profit company registration' },
];

export default function NgoTrustCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">NGO &amp; Trust</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">Complete support for NGOs, Trusts and Section 8 companies.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subServices.map((service, index) => (
          <Link href={`/solutions/${service.slug}`} key={index} className="group border border-gray-200 rounded-3xl p-7 hover:border-[#D4AF37] transition-all block">
            <h3 className="font-semibold text-xl mb-3 group-hover:text-[#D4AF37]">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10"><Link href="/solutions" className="text-sm underline">← Back to Solutions</Link></div>
    </div>
  );
}
