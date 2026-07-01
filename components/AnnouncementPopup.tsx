'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per session so we don't annoy the user on every page load
    const hasSeenPopup = sessionStorage.getItem('hasSeenDeadlinePopup');
    
    if (!hasSeenPopup) {
      // Small delay so it doesn't jump instantly when the page loads
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenDeadlinePopup', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
          >
            {/* Top Banner Accent */}
            <div className="h-3 w-full bg-[var(--primary)] relative">
              <div className="absolute top-0 right-0 h-full w-1/3 bg-[#D4AF37] rounded-bl-full"></div>
            </div>

            {/* Close Button */}
            <button 
              onClick={closePopup}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 bg-gray-50 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8 sm:p-10 text-center">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 bg-[#0B1B3D]/5 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>

              <h2 className="text-xl font-bold text-[var(--primary)] mb-1">Income Tax Due Date Calendar</h2>
              <p className="text-[#D4AF37] font-bold mb-6 text-sm">(AY 2026-27, FY 25-26)</p>

              {/* Deadlines List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-6">
                
                {/* 31 July */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex items-center justify-between group hover:border-[#3b82f6] transition-colors">
                  <div className="pr-4">
                    <h4 className="font-bold text-gray-900 text-[13px]">JULY 2026</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                      <span className="font-semibold">ITR-1, ITR-2:</span> Individuals/HUF (No Business/Profession Income - Salary, House Property, Capital Gains, Other Sources)
                    </p>
                  </div>
                  <div className="bg-[#3b82f6]/10 px-3 py-1.5 rounded-lg text-center whitespace-nowrap min-w-[50px]">
                    <span className="block font-bold text-[#3b82f6] text-lg">31</span>
                  </div>
                </div>

                {/* 31 August */}
                <div className="bg-green-50/50 border border-green-100 rounded-xl p-3 flex items-center justify-between group hover:border-green-500 transition-colors">
                  <div className="pr-4">
                    <h4 className="font-bold text-gray-900 text-[13px]">AUGUST 2026</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                      <span className="font-semibold">ITR-3, ITR-4:</span> Individuals/HUF with Business/Profession Income (Non-Audit Cases)
                    </p>
                  </div>
                  <div className="bg-green-500/10 px-3 py-1.5 rounded-lg text-center whitespace-nowrap min-w-[50px]">
                    <span className="block font-bold text-green-600 text-lg">31</span>
                  </div>
                </div>

                {/* 31 October */}
                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-3 flex items-center justify-between group hover:border-orange-500 transition-colors">
                  <div className="pr-4">
                    <h4 className="font-bold text-gray-900 text-[13px]">OCTOBER 2026</h4>
                    <ul className="text-[11px] text-gray-600 mt-0.5 leading-tight list-disc pl-3">
                      <li><span className="font-semibold">ITR-6:</span> Companies</li>
                      <li><span className="font-semibold">ITR-3, ITR-5 (Audit Cases):</span> Business/Professional Income</li>
                      <li><span className="font-semibold">ITR-7:</span> Trusts, Political Parties, Institutions</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 px-3 py-1.5 rounded-lg text-center whitespace-nowrap min-w-[50px]">
                    <span className="block font-bold text-orange-600 text-lg">31</span>
                  </div>
                </div>

                {/* 30 November */}
                <div className="bg-red-50/50 border border-red-100 rounded-xl p-3 flex items-center justify-between group hover:border-red-500 transition-colors">
                  <div className="pr-4">
                    <h4 className="font-bold text-gray-900 text-[13px]">NOVEMBER 2026</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
                      <span className="font-semibold">ITR-3, ITR-5, ITR-6</span> (Transfer Pricing Cases)
                    </p>
                  </div>
                  <div className="bg-red-500/10 px-3 py-1.5 rounded-lg text-center whitespace-nowrap min-w-[50px]">
                    <span className="block font-bold text-red-600 text-lg">30</span>
                  </div>
                </div>

              </div>

              {/* Important Notes */}
              <div className="bg-gray-100 rounded-xl p-3 text-left mb-6">
                <h5 className="font-bold text-[12px] text-gray-800 flex items-center gap-1 mb-1">
                  <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                  Important Notes
                </h5>
                <ul className="text-[10px] text-gray-600 leading-tight space-y-0.5 list-disc pl-4">
                  <li>Belated/Revised Return: Dec 31, 2026</li>
                  <li>Late Fees (Sec 234F): Up to ₹5,000</li>
                  <li>Interest (Sec 234A/B/C): Applicable</li>
                </ul>
              </div>

              {/* Action Button */}
              <button 
                onClick={closePopup}
                className="mt-8 w-full bg-[var(--primary)] text-white font-bold py-4 rounded-xl hover:bg-[#08142c] hover:shadow-lg transition-all"
              >
                Continue to Website
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
