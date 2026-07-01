'use client';
import Link from 'next/link';

const subServices = [
  { slug: 'pvt-ltd-registration', title: 'Private Limited Company', desc: 'Pvt Ltd company registration' },
  { slug: 'llp-registration', title: 'LLP Registration', desc: 'Limited Liability Partnership' },
  { slug: 'opc-registration', title: 'OPC Registration', desc: 'One Person Company registration' },
];

export default function BusinessRegistrationCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">Business Registration</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">Start your business with proper legal structure.</p>
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
