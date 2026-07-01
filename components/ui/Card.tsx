import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'glass';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'standard', 
  children, 
  className,
  ...props 
}) => {
  const cardClass = `${styles.card} ${styles[variant]} ${className || ''}`.trim();
  
  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};
