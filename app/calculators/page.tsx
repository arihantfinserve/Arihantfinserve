import React from 'react';
import FinancialCalculators from '@/components/FinancialCalculators';
import styles from '../services/[slug]/page.module.css';

export const metadata = {
  title: 'Financial Calculators | Arihant Finserve',
  description: 'Plan your finances with our suite of free financial calculators.',
};

export default function CalculatorsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Financial Calculators</h1>
        <p className={styles.heroSubtitle}>
          Empower your financial decisions with our easy-to-use calculation tools.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '1200px' }}>
        <div className={styles.contentBlock}>
          <FinancialCalculators />
        </div>
      </section>
    </main>
  );
}
