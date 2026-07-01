import React from 'react';
import styles from './utilities.module.css';
import DocumentChecklist from '@/components/DocumentChecklist';
import FinancialCalculators from '@/components/FinancialCalculators';

export const metadata = {
  title: 'Utilities | Arihant Finserve',
  description: 'Helpful utilities, calculators, and document checklists for financial planning.',
};

export default function UtilitiesPage() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Utility Hub</h1>
        <p className={styles.pageDescription}>
          Empower your financial decisions with our handy calculators and ensure 
          you have the right documents ready for our services.
        </p>
      </header>
      
      <main className={styles.grid}>
        <section aria-label="Financial Calculators">
          <FinancialCalculators />
        </section>
        
        <section aria-label="Document Checklists">
          <DocumentChecklist />
        </section>
      </main>
    </div>
  );
}
