'use client';
import Link from 'next/link';

const subServices = [
  { slug: 'trademark', title: 'Trademark Registration', desc: 'Brand & logo protection' },
  { slug: 'fssai', title: 'FSSAI Registration', desc: 'Food business license' },
  { slug: 'iso', title: 'ISO Certification', desc: 'ISO 9001 & other standards' },
  { slug: 'iec', title: 'IEC Registration', desc: 'Import Export Code' },
];

export default function LicensingComplianceCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">Licensing &amp; Compliance</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">All necessary licenses and regulatory compliances.</p>
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
