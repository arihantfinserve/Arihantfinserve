'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from './AboutTrust.module.css';

const AnimatedNumber = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // ~60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function AboutTrust() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trust & Excellence</h2>
          <p className={styles.subtitle}>
            A decade of unwavering commitment to financial integrity, growth, and client success.
          </p>
        </div>

        <div className={styles.historySection}>
          <h3 className={styles.name}>Our Legacy</h3>
          <p className={styles.description} style={{ maxWidth: '800px', margin: '0 auto' }}>
            Established with a vision to redefine financial consultancy, Arihant Finserve has grown into a trusted partner for businesses and individuals alike. Our journey is defined by ethics, precision, and a deep understanding of the financial landscape.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}><AnimatedNumber value={10} suffix="+" /></span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}><AnimatedNumber value={7} /></span>
              <span className={styles.statLabel}>Core Professionals</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}><AnimatedNumber value={500} suffix="+" /></span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>

        <div className={styles.teamGrid}>
          <div className={`${styles.teamCard} ${styles.founderCard}`}>
            <div className={styles.founderInfo}>
              <div className={styles.role}>Founder & Managing Director</div>
              <h3 className={styles.name}>MBA Manish M Jain</h3>
              <p className={styles.description}>
                A visionary financial expert with profound expertise in business strategy, financial modeling, and growth operations. Manish has spearheaded the firm's growth by maintaining rigorous standards of professionalism and delivering bespoke financial strategies that drive tangible results for clients across various sectors.
              </p>
            </div>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.role}>Operations & Strategy</div>
            <h3 className={styles.name}>Anjali</h3>
            <div className={styles.description} style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>MBA Finance</div>
            <p className={styles.description}>
              Specializes in strategic financial planning and operational efficiency, ensuring seamless client service delivery.
            </p>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.role}>Corporate Compliance</div>
            <h3 className={styles.name}>Raj Shah</h3>
            <div className={styles.description} style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Company Secretary (CS)</div>
            <p className={styles.description}>
              Expert in corporate governance, legal compliances, and regulatory frameworks, safeguarding our clients' business interests.
            </p>
          </div>

          <div className={styles.teamCard}>
            <div className={styles.role}>Senior Associate</div>
            <h3 className={styles.name}>Mahesh Joshi</h3>
            <div className={styles.description} style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>Financial Consultant</div>
            <p className={styles.description}>
              Brings extensive experience in portfolio management and risk assessment, driving client wealth maximization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
