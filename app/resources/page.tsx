export default function ResourcesPage() {
  const resources = [
    { title: "Income Tax Checklist 2026", type: "PDF Download" },
    { title: "GST Compliance Guide", type: "PDF Download" },
    { title: "Company Registration Documents List", type: "PDF Download" },
    { title: "Loan Documentation Checklist", type: "PDF Download" },
    { title: "Startup Compliance Calendar", type: "PDF Download" },
    { title: "Tax Saving Investment Options", type: "Guide" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-16">
      <div className="max-w-3xl mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Resources &amp; Downloads</h1>
        <p className="mt-4 text-xl text-gray-600">Free practical guides and checklists to help you stay compliant and organized.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((res, index) => (
          <div key={index} className="border border-gray-200 rounded-3xl p-8 flex justify-between items-center hover:border-[#D4AF37] transition-all">
            <div>
              <h3 className="font-semibold text-xl">{res.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{res.type}</p>
            </div>
            <a 
              href="/sample-resource.pdf" 
              download 
              className="px-6 py-2 text-sm font-medium border border-gray-300 rounded-2xl hover:bg-gray-50"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
