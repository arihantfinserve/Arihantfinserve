import React from 'react';

const locations = [
  {
    city: "Surat (Head Office)",
    address: "S-44, 2nd Floor, Silicon Shoppers, Udhana Main Road, Udhana, Surat - 394210",
    phone: "+91 91576 57347",
    map: "https://maps.app.goo.gl/J9wyZgsYiGfucCMT6"
  },
  {
    city: "Palanpur",
    address: "59, Ambica Nagar, Ahinsha Marg, Palanpur, Gujarat 385001",
    phone: "+91 91576 57347",
    map: "#"
  },
  {
    city: "Ahmedabad",
    address: "Kanchanbhoomi, 100 Feet Anand Nagar Road, Near Sukriti Park, Satellite, Ahmedabad",
    phone: "+91 91576 57347",
    map: "#"
  },
  {
    city: "Patan",
    address: "39, Pragati Nagar Society, Opp. Pragati Maidan, Patan - 384265",
    phone: "+91 91576 57347",
    map: "#"
  },
  {
    city: "Mehsana",
    address: "Mehsana, Gujarat",
    phone: "+91 91576 57347",
    map: "#"
  },
  {
    city: "Visnagar",
    address: "Visnagar, Gujarat",
    phone: "+91 91576 57347",
    map: "#"
  }
];

export default function LocationsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="max-w-3xl mb-12">
        <span className="text-[#D4AF37] text-sm font-semibold tracking-widest">OUR PRESENCE</span>
        <h1 className="text-5xl font-bold tracking-tight mt-3">Locations Across Gujarat</h1>
        <p className="mt-4 text-xl text-gray-600">Visit us at any of our offices or connect with us online.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, index) => (
          <div key={index} className="border border-gray-200 rounded-3xl p-8 hover:border-[#D4AF37] transition-all">
            <h3 className="font-semibold text-2xl mb-4">{loc.city}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{loc.address}</p>
            
            <div className="space-y-3">
              <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="block text-[#D4AF37] font-medium hover:underline">
                {loc.phone}
              </a>
              {loc.map !== "#" && (
                <a href={loc.map} target="_blank" className="inline-block text-sm font-medium underline">
                  View on Google Maps →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Dynamic LocalBusiness Schema for all locations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            locations.map((loc) => ({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": `Arihant Finserve - ${loc.city}`,
              "image": "https://arihantfinserve.com/logo.png",
              "telephone": loc.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": loc.address,
                "addressLocality": loc.city,
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            }))
          )
        }}
      />
    </div>
  );
}
