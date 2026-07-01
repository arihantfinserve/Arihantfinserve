import React from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
