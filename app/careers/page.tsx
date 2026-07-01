import React from 'react';

export const metadata = {
  title: 'Careers | Arihant Finserve',
  description: 'Join our team of financial experts.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 mb-6">
          Careers
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-12">
          Build your future with a leader in wealth management and financial advisory.
        </p>
        
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 max-w-2xl w-full">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Open Positions Coming Soon</h2>
          <p className="text-slate-600 text-lg">
            We are growing rapidly and will be posting new roles shortly. Send your resume to hr@arihantfinserve.com to stay in touch.
          </p>
        </div>
      </div>
    </div>
  );
}
