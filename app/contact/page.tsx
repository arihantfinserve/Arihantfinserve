'use client';

import React from 'react';

export default function ContactPage() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const text = `Hello Arihant Finserve,\n\nI would like to book a consultation.\n\n*Name:* ${name}\n*Email:* ${email}\n*Interested In:* ${service}\n*Message:* ${message}`;
    window.open(`https://wa.me/919157657347?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--background)] pb-24">
      
      {/* Header */}
      <div className="bg-[var(--primary)] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl font-bold tracking-tight mb-4 heading-font">
          Consultation <span className="text-[#D4AF37]">Booking Desk</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Get in touch with our experts today. We provide personalized advisory for all your taxation, compliance, and growth needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white dark:bg-[#040d1a] rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-10 lg:p-16">
              <h2 className="text-3xl font-bold text-[var(--primary)] dark:text-white mb-8">Request a Callback</h2>
              
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input type="text" name="name" className="w-full bg-gray-50 dark:bg-[#163057] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address (Optional)</label>
                    <input type="email" name="email" className="w-full bg-gray-50 dark:bg-[#163057] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service You Are Looking For</label>
                  <select name="service" className="w-full bg-gray-50 dark:bg-[#163057] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-900 dark:text-gray-100">
                    <option value="General Advisory">General Advisory</option>
                    <option value="Income Tax / GST">Income Tax / GST</option>
                    <option value="Business Registration">Business Registration (Company, LLP, NGO)</option>
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Project Finance">Project Finance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message (Optional)</label>
                  <textarea name="message" rows={4} className="w-full bg-gray-50 dark:bg-[#163057] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Briefly describe your requirements..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[var(--primary)] hover:bg-[#163057] text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3">
                  <span>Send via WhatsApp</span>
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.681h-.011c-1.636 0-3.242-.439-4.654-1.273l-5.176 1.359 1.385-5.047c-.917-1.428-1.401-3.076-1.401-4.757 0-4.936 4.015-8.951 8.954-8.951 2.392 0 4.639.932 6.329 2.624 1.69 1.692 2.622 3.938 2.622 6.332.001 4.935-4.014 8.951-8.953 8.951z"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Information Section */}
            <div className="bg-[#f8fafc] dark:bg-[#0a1526] p-10 lg:p-16 border-l border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-[var(--primary)] dark:text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="pt-2">
                  <h4 className="font-semibold text-lg text-[var(--primary)] dark:text-white mb-4">Direct Contact</h4>
                  <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300 mb-3">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>+91 91576 57347</span>
                  </p>
                  <p className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <a href="mailto:arihantfinservesurat@gmail.com" className="hover:text-[#D4AF37] transition-colors">arihantfinservesurat@gmail.com</a>
                  </p>
                </div>
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-lg text-[var(--primary)] dark:text-white mb-4">Corporate Office</h4>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden shadow-inner border border-gray-200">
                    <iframe 
                      src="https://maps.google.com/maps?q=Silicon%20Shoppers,%20Udhana,%20Surat&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <a href="https://maps.app.goo.gl/8HR6BrgeJ4YmYLye9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] hover:text-[var(--primary)] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Our Presence Section */}
      <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">Our Strong Network</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Providing seamless financial advisory across major cities with a dedicated network of offices.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Surat Headquarters */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-5 rounded-bl-full"></div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">Surat</h3>
                <p className="text-[#D4AF37] font-semibold mt-1">Headquarters & Local Branches</p>
              </div>
              <div className="bg-[var(--primary)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">9</div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Kailash Nagar', 'Sachin', 'Bhestan', 'Katargam', 'Vesu', 'Amroli', 'Bhatar', 'Varchha', 'Chowk'].map((area) => (
                <span key={area} className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Other Cities */}
          <div className="bg-[var(--primary)] rounded-3xl p-8 lg:p-10 shadow-xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-10 rounded-tl-full"></div>
            <h3 className="text-2xl font-bold mb-1">Gujarat Network</h3>
            <p className="text-gray-300 mb-8">Regional Offices</p>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {['Ahmedabad', 'Gandhinagar', 'Mehsana', 'Palanpur', 'Patan', 'Visnagar'].map((city) => (
                <span key={city} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
