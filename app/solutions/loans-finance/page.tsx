'use client';
import Link from 'next/link';

const subServices = [
  { slug: 'business-loan', title: 'Business Loan', desc: 'Working capital, term loan & CC/OD' },
  { slug: 'home-loan', title: 'Home Loan', desc: 'Home loan assistance & documentation' },
  { slug: 'project-report', title: 'Project Report', desc: 'Detailed project report for funding' },
  { slug: 'cma-data', title: 'CMA Data', desc: 'CMA data preparation for banks' },
];

export default function LoansFinanceCategory() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-10">
        <span className="text-sm text-[#D4AF37]">SOLUTIONS</span>
        <h1 className="text-4xl font-bold tracking-tight mt-2">Loans &amp; Finance</h1>
        <p className="mt-3 text-xl text-gray-600 max-w-2xl">End-to-end support for raising finance and loan documentation.</p>
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
