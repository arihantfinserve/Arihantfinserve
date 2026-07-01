"use client";

import React, { useState } from 'react';
import styles from './DocumentChecklist.module.css';

const checklists = {
  pvt_ltd: {
    title: 'Private Limited Company Registration',
    documents: [
      'PAN Card (Directors & Shareholders)',
      'Aadhar Card / Voter ID / Passport / Driving License',
      'Latest Bank Statement / Telephone Bill / Electricity Bill',
      'Passport size photographs',
      'Specimen Signature',
      'Utility Bill for Registered Office',
      'NOC from the owner of the premises',
    ],
  },
  gst: {
    title: 'GST Registration',
    documents: [
      'PAN Card of the Business / Applicant',
      'Aadhar Card',
      'Proof of Business Registration or Incorporation Certificate',
      'Identity and Address proof of Promoters/Director',
      'Address proof of the place of business',
      'Bank Account Statement / Cancelled Cheque',
      'Digital Signature',
      'Letter of Authorization / Board Resolution',
    ],
  },
  itr: {
    title: 'Income Tax Return (ITR)',
    documents: [
      'Form 16 / Form 16A',
      'Form 26AS & AIS/TIS',
      'Bank Statements for the financial year',
      'Investment Proofs (80C, 80D, etc.)',
      'Home Loan Statement (if applicable)',
      'Rent Receipts for HRA (if applicable)',
      'Capital Gains Statement (Mutual Funds/Stocks)',
    ],
  },
  startup: {
    title: 'Startup India Registration',
    documents: [
      'Certificate of Incorporation / Registration',
      'Details of Directors / Partners',
      'Brief Pitch Deck or Business Plan',
      'Proof of Concept / Website link',
      'Patent / Trademark details (if any)',
      'Letter of Recommendation / Support (if applicable)',
    ],
  },
};

type ChecklistKey = keyof typeof checklists;

export default function DocumentChecklist() {
  const [selectedService, setSelectedService] = useState<ChecklistKey>('pvt_ltd');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value as ChecklistKey);
    setCheckedItems({}); // Reset checkboxes when service changes
  };

  const toggleCheck = (doc: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [doc]: !prev[doc],
    }));
  };

  const currentDocs = checklists[selectedService].documents;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Document Checklist Builder</h2>
        <p className={styles.subtitle}>
          Select a service to view and track required documents.
        </p>
      </div>

      <div className={styles.selectWrapper}>
        <select 
          className={styles.select} 
          value={selectedService} 
          onChange={handleServiceChange}
          aria-label="Select a service"
        >
          {Object.entries(checklists).map(([key, data]) => (
            <option key={key} value={key}>
              {data.title}
            </option>
          ))}
        </select>
      </div>

      <ul className={styles.checklist}>
        {currentDocs.map((doc, index) => {
          const isChecked = checkedItems[doc] || false;
          return (
            <li key={index} className={styles.checklistItem}>
              <input
                type="checkbox"
                id={`doc-${index}`}
                className={styles.checkbox}
                checked={isChecked}
                onChange={() => toggleCheck(doc)}
              />
              <label
                htmlFor={`doc-${index}`}
                className={`${styles.documentName} ${isChecked ? styles.checked : ''}`}
              >
                {doc}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
