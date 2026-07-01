import React from 'react';
import styles from './IndustryExpertise.module.css';

const industries = [
  {
    name: 'Startups',
    icon: <i className="fa-solid fa-rocket"></i>,
    description: 'Tailored financial modeling, valuation, and fundraising advisory to fuel your growth.',
  },
  {
    name: 'Manufacturing',
    icon: <i className="fa-solid fa-industry"></i>,
    description: 'Optimizing working capital, project finance, and operational cost management strategies.',
  },
  {
    name: 'Healthcare',
    icon: <i className="fa-solid fa-house-medical"></i>,
    description: 'Navigating complex regulatory environments with robust financial compliance and planning.',
  },
  {
    name: 'E-commerce',
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    description: 'Scaling solutions including payment gateway reconciliation, taxation, and cash flow management.',
  },
  {
    name: 'Real Estate & Infra',
    icon: <i className="fa-solid fa-city"></i>,
    description: 'Specialized project funding, RERA compliance, and joint venture financial structuring.',
  },
  {
    name: 'IT & Tech Services',
    icon: <i className="fa-solid fa-laptop-code"></i>,
    description: 'Navigating global taxation, software export compliance, and intellectual property valuation.',
  },
];

export default function IndustryExpertise() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Industry Expertise</h2>
      <p className={styles.subtitle}>We deliver specialized financial solutions across diverse sectors, understanding the unique challenges of each industry.</p>
      
      <div className={styles.grid}>
        {industries.map((industry) => (
          <div key={industry.name} className={styles.card}>
            <div className={styles.icon}>{industry.icon}</div>
            <h3 className={styles.industryName}>{industry.name}</h3>
            <p className={styles.description}>{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
