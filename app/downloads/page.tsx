import React from 'react';
import styles from '../services/[slug]/page.module.css';

export const metadata = {
  title: 'Downloads | Arihant Finserve',
  description: 'Download essential financial forms, guides, and checklists.',
};

export default function DownloadsPage() {
  const downloads = [
    { title: 'New Client Onboarding Form', type: 'PDF', size: '245 KB', icon: 'fa-file-pdf' },
    { title: 'Private Limited Incorporation Checklist', type: 'PDF', size: '156 KB', icon: 'fa-file-pdf' },
    { title: 'GST Registration Document List', type: 'PDF', size: '120 KB', icon: 'fa-file-pdf' },
    { title: 'Annual Compliance Calendar 2026', type: 'XLSX', size: '45 KB', icon: 'fa-file-excel' },
    { title: 'Income Tax Declaration Format', type: 'DOCX', size: '32 KB', icon: 'fa-file-word' },
    { title: 'Project Report Template', type: 'DOCX', size: '89 KB', icon: 'fa-file-word' }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Downloads Center</h1>
        <p className={styles.heroSubtitle}>
          Access essential financial forms, guides, checklists, and templates to streamline your documentation.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '1000px' }}>
        <div className={styles.contentBlock}>
          <h2><i className="fa-solid fa-download"></i> Available Resources</h2>
          
          <div className={styles.featuresGrid} style={{ marginTop: '2rem' }}>
            {downloads.map((item, index) => (
              <div key={index} className={styles.featureCard} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className={styles.featureIcon} style={{ background: 'transparent', color: 'var(--primary)', fontSize: '2rem' }}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className={styles.featureText} style={{ marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>{item.type} • {item.size}</p>
                  </div>
                </div>
                <button 
                  className={styles.submitBtn} 
                  style={{ width: 'auto', padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '8px' }}
                >
                  <i className="fa-solid fa-cloud-arrow-down"></i> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
