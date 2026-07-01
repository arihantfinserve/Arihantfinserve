import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';
import { Button } from './ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Expert Financial Guidance <br />
          for <span className={styles.highlight}>Your Growth</span>
        </h1>
        <p className={styles.description}>
          Unlock your business potential with premium tax consulting, financial planning, and accounting services designed specifically for modern enterprises.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/919157657347?text=Hello%20Arihant%20Finserve,%20I%20would%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Book Free Consultation</Button>
          </a>
          <Link href="/services">
            <Button variant="secondary">Explore Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

