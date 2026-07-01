import React from 'react';
import Link from 'next/link';
import styles from './ServiceBentoGrid.module.css';

// Removed SVG Icons and using FontAwesome classes directly

const services = [
  {
    id: 'business-registration',
    title: 'Business Registration',
    icon: <i className={`fa-solid fa-building ${styles.icon}`}></i>,
    link: '/services/pvt-ltd-registration',
    size: 'span1',
    subServices: ['Private Limited Company', 'LLP Registration', 'OPC Registration', 'Partnership Firm'],
  },
  {
    id: 'gst-services',
    title: 'GST Services',
    icon: <i className={`fa-solid fa-file-invoice-dollar ${styles.icon}`}></i>,
    link: '/services/gst-registration',
    size: 'span1',
    subServices: ['GST Registration', 'GST Return Filing', 'GST Notice Handling', 'E-Way Bill Assistance'],
  },
  {
    id: 'income-tax',
    title: 'Income Tax',
    icon: <i className={`fa-solid fa-calculator ${styles.icon}`}></i>,
    link: '/services/income-tax-return',
    size: 'span1',
    subServices: ['ITR Filing', 'Tax Planning', 'Notice Handling', 'TDS Returns'],
  },
  {
    id: 'business-loans',
    title: 'Business Loans',
    icon: <i className={`fa-solid fa-landmark ${styles.icon}`}></i>,
    link: '/services/business-loans',
    size: 'span1',
    subServices: ['Working Capital', 'Term Loans', 'Machinery Loans', 'Unsecured Loans'],
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    icon: <i className={`fa-solid fa-clipboard-check ${styles.icon}`}></i>,
    link: '/services/tax-audit',
    size: 'span1',
    subServices: ['Tax Audit', 'Statutory Audit', 'School/Trust Audit', 'Internal Audit'],
  },
  {
    id: 'project-reports',
    title: 'Project Reports',
    icon: <i className={`fa-solid fa-chart-pie ${styles.icon}`}></i>,
    link: '/services/project-reports',
    size: 'span1',
    subServices: ['Detailed Project Reports', 'CMA Data', 'Financial Projections', 'Bank Loan Docs'],
  },
  {
    id: 'business-licenses',
    title: 'Business Licenses',
    icon: <i className={`fa-solid fa-certificate ${styles.icon}`}></i>,
    link: '/services/iso-certification',
    size: 'span1',
    subServices: ['ISO Certification', 'FSSAI License', 'Import Export Code', 'MSME/Udyam'],
  },
  {
    id: 'insurance-services',
    title: 'Insurance Services',
    icon: <i className={`fa-solid fa-shield-halved ${styles.icon}`}></i>,
    link: '/services/life-health-insurance',
    size: 'span1',
    subServices: ['Life & Health Insurance', 'Corporate Insurance', 'Commercial Vehicle', 'Claim Support'],
  },
];

export default function ServiceBentoGrid() {
  return (
    <div className={styles.bentoGrid}>
      {services.map((service) => (
        <Link 
          href={service.link} 
          key={service.id} 
          className={`${styles.cardContainer} ${styles[service.size]}`}
        >
          <div className={styles.cardInner}>
            {/* Front side of the card */}
            <div className={styles.cardFront}>
              {service.icon}
              <h3 className={styles.title}>{service.title}</h3>
            </div>
            
            {/* Back side of the card */}
            <div className={styles.cardBack}>
              <h4 className={styles.backTitle}>{service.title}</h4>
              <ul className={styles.serviceList}>
                {service.subServices.map((sub, idx) => (
                  <li key={idx} className={styles.serviceItem}>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
