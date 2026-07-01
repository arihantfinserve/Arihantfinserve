import React from 'react';
import styles from './RegistrationTicker.module.css';

const TICKER_ITEMS = [
  "Startup & Registrations",
  "Company, LLP & ROC Services",
  "Taxation, Accounting & Compliance",
  "Audit & Assurance",
  "Business Loan & Finance Services",
  "CA Certificates",
  "Insurance Services",
  "NGO, Trust & FPO Services",
  "Business Registration & Licence Services",
];

export const RegistrationTicker: React.FC = () => {
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {TICKER_ITEMS.map((item, index) => (
          <div key={`item-1-${index}`} className={styles.tickerItem}>
            <span className={styles.icon}>✦</span>
            {item}
          </div>
        ))}
        {/* Duplicate items for infinite seamless scrolling */}
        {TICKER_ITEMS.map((item, index) => (
          <div key={`item-2-${index}`} className={styles.tickerItem}>
            <span className={styles.icon}>✦</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationTicker;
