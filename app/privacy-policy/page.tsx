import React from 'react';
import styles from '../services/[slug]/page.module.css';

export const metadata = {
  title: 'Privacy Policy | Arihant Finserve',
  description: 'Privacy Policy and data protection guidelines of Arihant Finserve.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className={styles.hero} style={{ padding: '6rem 2rem 4rem' }}>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
        <p className={styles.heroSubtitle}>
          How we collect, use, and protect your personal and financial information.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '900px', paddingTop: '3rem' }}>
        <div className={styles.contentBlock}>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-gold)' }}></i> 
                1. Introduction
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8' }}>
                At Arihant Finserve, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services. Your trust is our top priority, and we ensure stringent security measures are in place.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-database" style={{ color: 'var(--accent-gold)' }}></i> 
                2. Information We Collect
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8' }}>
                We collect information that you provide directly to us, such as when you fill out a consultation form, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, PAN card details, financial statements, and any other details you securely provide for service fulfillment.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-user-check" style={{ color: 'var(--accent-gold)' }}></i> 
                3. How We Use Your Information
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8' }}>
                We use the information we collect strictly to provide, maintain, and improve our services. This includes communicating with you, filing compliances on your behalf, responding to your inquiries, and sending you important regulatory updates. We do not sell your data to third parties.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-lock" style={{ color: 'var(--accent-gold)' }}></i> 
                4. Data Security
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8' }}>
                We implement robust technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We utilize end-to-end encryption for document transfers and restrict data access only to authorized personnel.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-gold)' }}></i> 
                5. Contact Us
              </h2>
              <p style={{ color: '#475569', lineHeight: '1.8' }}>
                If you have any questions or concerns about our Privacy Policy or data practices, please contact our Data Protection Officer at <strong>info@arihantfinserve.com</strong> or call us at <strong>+91 9157657347</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
