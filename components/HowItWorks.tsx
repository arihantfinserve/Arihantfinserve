import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'We meet to understand your financial goals, requirements, and analyze your current portfolio.',
  },
  {
    id: 2,
    title: 'Document Submission',
    description: 'You provide the necessary paperwork through our secure and streamlined digital platform.',
  },
  {
    id: 3,
    title: 'Processing',
    description: 'Our team of experts carefully reviews, plans, and processes your application with precision.',
  },
  {
    id: 4,
    title: 'Completion',
    description: 'We deliver the final financial solutions, ensuring you are positioned for success.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>How It Works</h2>
      <p className={styles.subtitle}>Our simple and transparent 4-step process</p>
      
      <div className={styles.timeline}>
        {steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.iconContainer}>
              {step.id}
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
