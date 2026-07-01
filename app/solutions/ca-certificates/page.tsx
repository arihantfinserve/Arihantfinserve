'use client';
import Link from 'next/link';

const subServices = [
  { slug: 'net-worth-certificate', title: 'Net Worth Certificate', desc: 'For loans, tenders & visas' },
  { slug: 'turnover-certificate', title: 'Turnover Certificate', desc: 'Business turnover certification' },
  { slug: 'udin-certificate', title: 'UDIN Certified Certificates', desc: 'All UDIN based certificates' },
];

export default function CaCertificatesCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">CA Certificates</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">Professional certificates issued by Chartered Accountants.</p>
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
