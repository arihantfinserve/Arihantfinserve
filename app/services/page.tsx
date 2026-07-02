import React from 'react';
import Link from 'next/link';
import styles from './[slug]/page.module.css';
import { categoriesData } from '@/lib/servicesData';

export const metadata = {
  title: 'Our Services | Arihant Finserve',
  description: 'Explore the complete range of financial, compliance, and advisory services offered by Arihant Finserve.',
};

export default function ServicesOverviewPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Services</h1>
        <p className={styles.heroSubtitle}>
          Comprehensive financial, advisory, and compliance solutions designed to empower your business.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '1200px' }}>
        <div className={styles.contentBlock}>
          <h2><i className="fa-solid fa-briefcase"></i> Explore Our Service Categories</h2>
          <p>Select a category below to discover how Arihant Finserve can assist you.</p>
          
          <div className={styles.featuresGrid} style={{ marginTop: '3rem', gap: '2rem' }}>
            {categoriesData.map((cat, idx) => (
              <Link href={`/services/category/${cat.categorySlug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div className={styles.featureCard} style={{ height: '100%', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                  <div className={styles.featureIcon} style={{ width: '60px', height: '60px', fontSize: '1.8rem', marginBottom: '1rem' }}>
                    <i className={`fa-solid ${cat.icon}`}></i>
                  </div>
                  <div className={styles.featureText} style={{ fontSize: '1.2rem' }}>{cat.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
