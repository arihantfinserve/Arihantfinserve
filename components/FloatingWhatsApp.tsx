'use client';
import React from 'react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const phoneNumber = "919157657347";
  const defaultMessage = "Hello Arihant Finserve, I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatButton}
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
