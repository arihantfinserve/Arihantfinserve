import React from 'react';
import styles from '../services/[slug]/page.module.css';

export const metadata = {
  title: 'FAQ | Arihant Finserve',
  description: 'Frequently Asked Questions about our financial and compliance services.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "What services do you provide?",
      a: "Arihant Finserve offers a comprehensive suite of financial services including Startup Registrations, GST Compliance, Tax Planning, Audit & Assurance, Business Loans, Intellectual Property filing, and CA Certificates."
    },
    {
      q: "How long does it take to register a Private Limited Company?",
      a: "Typically, the registration of a Private Limited Company takes 10 to 15 working days, provided all documents are accurate and submitted on time."
    },
    {
      q: "Do I need to visit your office for the services?",
      a: "No, most of our services are entirely digital. You can securely upload your documents online, and our experts will handle the process remotely."
    },
    {
      q: "Are the CA Certificates valid for bank loans and tenders?",
      a: "Yes, all our CA Certificates are signed by registered Chartered Accountants and include the mandatory UDIN, ensuring full validity for banks, tenders, and visa applications."
    },
    {
      q: "What documents are required for GST Registration?",
      a: "You will typically need PAN, Aadhar, proof of business registration, identity and address proofs of promoters, and a bank account statement/cancelled cheque."
    },
    {
      q: "Do you assist with post-incorporation compliance?",
      a: "Yes, we offer end-to-end compliance services including ROC filings, regular GST returns, accounting, and annual audits to ensure your business stays 100% compliant."
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
        <p className={styles.heroSubtitle}>
          Find answers to common questions about our services and processes.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '900px' }}>
        <div className={styles.contentBlock}>
          <h2><i className="fa-solid fa-circle-question"></i> How can we help?</h2>
          
          <div className="mt-8 flex flex-col gap-6" style={{ marginTop: '2rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.featureCard} style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <h3 className={styles.featureText} style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>
                  <i className="fa-solid fa-q" style={{ color: 'var(--accent-gold)', marginRight: '10px' }}></i>
                  {faq.q}
                </h3>
                <p style={{ marginTop: '0.5rem', color: '#475569', lineHeight: '1.6' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
