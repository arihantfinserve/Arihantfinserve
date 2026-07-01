'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const serviceDatabase: Record<string, any> = {
  'tax-compliance': {
    title: "Tax & Compliance",
    description: "Comprehensive taxation and compliance services including Income Tax, GST, TDS, Accounting, and Balance Sheet preparation. We handle notices and assessments to keep you fully compliant.",
    benefits: [
      "End-to-end Income Tax & GST Filing",
      "Notice & Assessment Handling",
      "Accurate Accounting & Bookkeeping",
      "Proactive Tax Planning"
    ],
    documents: [
      "PAN & Aadhaar Card",
      "Bank Statements & Invoices",
      "Previous Year Returns (if any)",
      "Investment Proofs"
    ],
    process: ["Data Collection", "Computation & Analysis", "Client Approval", "Filing & Acknowledgment"]
  },
  'audit-assurance': {
    title: "Audit & Assurance",
    description: "Thorough auditing services to ensure financial accuracy and regulatory compliance. We cover Tax Audit, Internal Audit, Statutory Audit, and Trust Audit.",
    benefits: [
      "Detailed Financial Analysis",
      "Risk Mitigation & Internal Controls",
      "Statutory Compliance",
      "Stakeholder Confidence"
    ],
    documents: [
      "Complete Books of Accounts",
      "Bank Statements & Reconciliations",
      "Previous Audit Reports",
      "Statutory Registers"
    ],
    process: ["Audit Planning", "Fieldwork & Verification", "Draft Report & Discussion", "Final Audit Report Issuance"]
  },
  'loans-finance': {
    title: "Loans & Finance",
    description: "Expert assistance in securing Business Loans, Home Loans, and Working Capital. We prepare Project Reports and CMA Data to ensure quick bank approvals.",
    benefits: [
      "Customized Project Reports",
      "Accurate CMA Data Preparation",
      "End-to-end Bank Liaisoning",
      "Faster Loan Processing"
    ],
    documents: [
      "Business KYC & Financials (3 Yrs)",
      "Promoter KYC",
      "Bank Statements (12 Months)",
      "Property/Collateral Documents"
    ],
    process: ["Requirement Analysis", "Report Preparation", "Bank Submission", "Sanction & Disbursement"]
  },
  'investment-wealth': {
    title: "Investment & Wealth",
    description: "Strategic wealth management and financial planning. We offer advisory on Mutual Funds, Demat accounts, and goal-based investing for long-term growth.",
    benefits: [
      "Personalized Financial Planning",
      "Diversified Portfolio Creation",
      "Tax-saving Investments",
      "Regular Portfolio Review"
    ],
    documents: [
      "PAN Card & Aadhaar",
      "Cancelled Cheque",
      "Current Portfolio Details",
      "Risk Profiling Questionnaire"
    ],
    process: ["Financial Goal Setting", "Risk Assessment", "Portfolio Construction", "Execution & Monitoring"]
  },
  'business-registration': {
    title: "Business Registration",
    description: "Seamless incorporation services for Private Limited Companies, LLPs, OPCs, and Partnership Firms. We handle the entire legal setup for your new venture.",
    benefits: [
      "Name Approval & Reservation",
      "Drafting of MOA, AOA & Deeds",
      "DSC & DIN Issuance",
      "Post-incorporation Compliance"
    ],
    documents: [
      "PAN & Aadhaar of Promoters",
      "Photographs",
      "Registered Office Address Proof",
      "NOC from Owner"
    ],
    process: ["Name Application", "Digital Signatures", "Filing Incorporation Forms", "Certificate Issuance"]
  },
  'licensing-compliance': {
    title: "Licensing & Compliance",
    description: "Complete support for obtaining essential business licenses including Trademark, FSSAI, ISO, IEC, DSC, PAN, TAN, and PF/ESI registrations.",
    benefits: [
      "Hassle-free Registration",
      "Brand Protection (Trademark)",
      "Global Trade Readiness (IEC)",
      "Statutory Registrations (PF/ESI)"
    ],
    documents: [
      "Business Incorporation Certificate",
      "Promoter KYC",
      "Business Address Proof",
      "Specific License Prerequisites"
    ],
    process: ["Eligibility Check", "Application Drafting", "Department Liaisoning", "License Issuance"]
  },
  'ngo-trust': {
    title: "NGO & Trust",
    description: "Dedicated services for non-profits including Trust Registration, 12AA, 80G, Section 8 Company formation, and NGO Darpan registration.",
    benefits: [
      "Legal Structuring of NGO",
      "Tax Exemption Certificates (12AA/80G)",
      "CSR Funding Eligibility",
      "FCRA Compliance Support"
    ],
    documents: [
      "Trust Deed / MOA",
      "Trustee/Director KYC",
      "Office Address Proof",
      "Activity Report (for 80G/12AA)"
    ],
    process: ["Deed Drafting", "Registration with Sub-Registrar/ROC", "12AA/80G Application", "Approval & Certification"]
  },
  'ca-certificates': {
    title: "CA Certificates",
    description: "Issuance of mandatory CA Certificates for various statutory and financial requirements, including Net Worth, Turnover, UDIN, and Fund Utilization.",
    benefits: [
      "UDIN Generated Certificates",
      "Quick Turnaround Time",
      "Visa & Tender Purposes",
      "Bank & Subsidy Requirements"
    ],
    documents: [
      "Audited Financials",
      "Bank Statements",
      "Property Valuation (for Net Worth)",
      "Specific Formats required by Authority"
    ],
    process: ["Document Verification", "Drafting Certificate", "UDIN Generation", "Final Signed Issuance"]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const formatTitle = (s: string) => {
    return s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const service = serviceDatabase[slug] || {
    title: formatTitle(slug),
    description: "We provide expert support and end-to-end processing for this service. Our team ensures complete compliance, accuracy, and timely completion.",
    benefits: [
      "Expert Guidance & Advisory",
      "End-to-End Processing",
      "Timely Delivery & Execution",
      "100% Compliance Assured"
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Business Registration Proof (if applicable)",
      "Bank Statements & Financials (if applicable)"
    ],
    process: ["Requirement Analysis", "Document Collection & Verification", "Processing & Filing", "Completion & Handover"]
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/solutions" className="text-sm text-[#D4AF37] hover:underline">← Back to Solutions</Link>
          <h1 className="text-5xl font-bold tracking-tight mt-4">{service.title}</h1>
          <p className="mt-4 text-xl text-gray-600">{service.description}</p>
        </div>

        {/* Benefits */}
        {service.benefits.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-[#F8FAFC] p-5 rounded-2xl">
                  <span className="text-[#D4AF37] mt-1">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Required Documents */}
        {service.documents.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Required Documents Checklist</h2>
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {service.documents.map((doc: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-[#D4AF37]">☐</span> {doc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500">* Additional documents may be required based on your specific case.</p>
            </div>
          </div>
        )}

        {/* Process */}
        {service.process.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
            <div className="flex flex-col md:flex-row gap-4">
              {service.process.map((step: string, index: number) => (
                <div key={index} className="flex-1 border border-gray-200 rounded-3xl p-6">
                  <div className="text-[#D4AF37] font-semibold mb-2">Step {index + 1}</div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => window.location.href = '/'}
            className="px-10 py-4 bg-[#D4AF37] text-[#081B33] font-semibold rounded-3xl text-lg"
          >
            Book Consultation for this Service
          </button>
          <p className="mt-4 text-sm text-gray-500">Free 15-minute consultation • Quick response</p>
        </div>
      </div>
    </div>
  );
}
