export type SubService = {
  title: string;
  slug: string;
};

export type Category = {
  title: string;
  categorySlug: string;
  icon: string;
  subServices: SubService[];
};

export const categoriesData: Category[] = [
  {
    title: 'Startup & Registrations',
    categorySlug: 'startup-registrations',
    icon: 'fa-rocket',
    subServices: [
      { title: 'Pvt Ltd / LLP / OPC', slug: 'pvt-ltd' },
      { title: 'Section 8 / Nidhi Company', slug: 'section-8' },
      { title: 'DSC / DIN / PAN / TAN', slug: 'dsc-din' },
      { title: 'MSME / Udyam Registration', slug: 'msme' },
      { title: 'FSSAI License', slug: 'fssai' },
      { title: 'Import Export Code (IEC)', slug: 'iec' },
      { title: 'ISO Certification', slug: 'iso' },
    ]
  },
  {
    title: 'Company, LLP & ROC Services',
    categorySlug: 'company-llp-roc',
    icon: 'fa-building',
    subServices: [
      { title: 'Partnership Firm Documentation', slug: 'partnership-firm' },
      { title: 'Private Limited Company Registration', slug: 'pvt-ltd-registration' },
      { title: 'LLP Registration', slug: 'llp-registration' },
      { title: 'OPC Registration', slug: 'opc-registration' },
      { title: 'ROC Compliance', slug: 'roc-compliance' },
      { title: 'Company Compliance', slug: 'company-compliance' },
      { title: 'LLP Compliance', slug: 'llp-compliance' },
    ]
  },
  {
    title: 'Taxation, Accounting & Compliance',
    categorySlug: 'taxation-accounting-compliance',
    icon: 'fa-file-invoice-dollar',
    subServices: [
      { title: 'Income Tax Return Filing', slug: 'income-tax-return' },
      { title: 'Income Tax Notice Handling', slug: 'income-tax-notice' },
      { title: 'GST Registration & Return Filing', slug: 'gst-registration' },
      { title: 'GST Notice Handling', slug: 'gst-notice' },
      { title: 'E-Way Bill Assistance', slug: 'eway-bill' },
      { title: 'TDS Return Filing & Correction', slug: 'tds-return' },
      { title: 'Book Keeping and Accounting', slug: 'bookkeeping' },
      { title: 'Balance Sheet Preparation', slug: 'balance-sheet' },
    ]
  },
  {
    title: 'Audit & Assurance',
    categorySlug: 'audit-assurance',
    icon: 'fa-clipboard-check',
    subServices: [
      { title: 'Tax Audit', slug: 'tax-audit' },
      { title: 'Statutory Audit', slug: 'statutory-audit' },
      { title: 'School Audit', slug: 'school-audit' },
      { title: 'College Audit', slug: 'college-audit' },
      { title: 'Trust Audit', slug: 'trust-audit' },
      { title: 'Other Audit Services', slug: 'other-audit' },
    ]
  },
  {
    title: 'Business Loan & Finance Services',
    categorySlug: 'business-loan-finance',
    icon: 'fa-building-columns',
    subServices: [
      { title: 'Project Reports', slug: 'project-reports' },
      { title: 'CMA Data', slug: 'cma-data' },
      { title: 'Bank Loan Documentation', slug: 'bank-loan-docs' },
      { title: 'DPR (Detailed Project Report)', slug: 'dpr' },
      { title: 'Financial Projections', slug: 'financial-projections' },
      { title: 'CIBIL Dispute & Correction Assistance', slug: 'cibil-dispute' },
      { title: 'LEI Registration Assistance', slug: 'lei-registration' },
    ]
  },
  {
    title: 'CA Certificates',
    categorySlug: 'ca-certificates',
    icon: 'fa-certificate',
    subServices: [
      { title: 'Net Worth Certificate', slug: 'net-worth-cert' },
      { title: 'Turnover Certificate', slug: 'turnover-cert' },
      { title: 'Fund Utilization Certificate', slug: 'fund-utilization-cert' },
      { title: 'CA Certificates', slug: 'ca-certs' },
      { title: 'UDIN Certified Certificates', slug: 'udin-certs' },
      { title: 'Certificates for Banks, Tenders & Other Purposes', slug: 'bank-tender-certs' },
    ]
  },
  {
    title: 'Insurance Services',
    categorySlug: 'insurance-services',
    icon: 'fa-shield-halved',
    subServices: [
      { title: 'Life & Health Insurance Advising', slug: 'life-health-insurance' },
      { title: 'Corporate & Business Insurance', slug: 'corporate-business-insurance' },
      { title: 'Commercial Vehicle Insurance', slug: 'commercial-vehicle-insurance' },
      { title: 'Car Insurance', slug: 'car-insurance' },
      { title: 'Claim Support & Consulting', slug: 'claim-support' },
    ]
  },
  {
    title: 'NGO, Trust & FPO Services',
    categorySlug: 'ngo-trust-fpo',
    icon: 'fa-hands-holding',
    subServices: [
      { title: 'Trust Deed Drafting', slug: 'trust-deed' },
      { title: 'Trust Registration', slug: 'trust-registration' },
      { title: 'Section 8 Company Registration', slug: 'section-8-company' },
      { title: 'Section 8 Compliance', slug: 'section-8-compliance' },
      { title: 'NGO Darpan Registration', slug: 'ngo-darpan' },
      { title: 'School Trust Documentation', slug: 'school-trust-docs' },
      { title: 'FPO / Producer Company Advisory', slug: 'fpo-advisory' },
    ]
  },
  {
    title: 'Business Registration & Licence Services',
    categorySlug: 'business-registration-licence',
    icon: 'fa-id-card',
    subServices: [
      { title: 'PAN & TAN Services', slug: 'pan-tan' },
      { title: 'DSC (Digital Signature)', slug: 'dsc' },
      { title: 'IEC (Import Export Code)', slug: 'iec-registration' },
      { title: 'TRADEMARK Registration', slug: 'trademark-registration' },
      { title: 'ISO Certification', slug: 'iso-certification' },
      { title: 'FSSAI Registration', slug: 'fssai-registration' },
      { title: 'Shop & Establishment Registration', slug: 'shop-establishment' },
      { title: 'PF & ESI Assistance', slug: 'pf-esi-assistance' },
    ]
  }
];
