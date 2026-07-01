export default function IndustriesPage() {
  const industries = [
    { name: "Doctors & Healthcare", services: "ITR, GST, Professional Tax, Insurance" },
    { name: "Manufacturers", services: "GST, Audit, Working Capital Loans, ISO, IEC" },
    { name: "Startups", services: "Company Registration, Funding Docs, Compliance Setup" },
    { name: "Retail & Traders", services: "GST, Accounting, Inventory Audit, Shop Act" },
    { name: "NGOs & Trusts", services: "Trust Registration, 12AA, 80G, FCRA" },
    { name: "Exporters", services: "IEC, GST Refunds, Export Documentation" },
    { name: "Builders & Developers", services: "Project Reports, RERA, Tax Planning" },
    { name: "Professionals (CA/CS/Lawyers)", services: "ITR, Professional Tax, Compliance" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-16">
      <div className="max-w-3xl mb-12">
        <span className="text-[#D4AF37] text-sm font-semibold tracking-widest">INDUSTRIES</span>
        <h1 className="text-5xl font-bold tracking-tight mt-3">Industries We Serve</h1>
        <p className="mt-4 text-xl text-gray-600">Deep expertise across sectors with tailored financial solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, index) => (
          <div key={index} className="border border-gray-200 rounded-3xl p-8 hover:border-[#D4AF37] transition-all">
            <h3 className="font-semibold text-2xl mb-3">{ind.name}</h3>
            <p className="text-gray-600">{ind.services}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
