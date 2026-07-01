"use client";

import React, { useState } from 'react';
import styles from './FinancialCalculators.module.css';

type Tab = 'EMI' | 'HRA' | 'TAX';

export default function FinancialCalculators() {
  const [activeTab, setActiveTab] = useState<Tab>('EMI');

  // EMI State
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(10);

  // HRA State
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [hraReceived, setHraReceived] = useState<number>(20000);
  const [rentPaid, setRentPaid] = useState<number>(15000);
  const [isMetro, setIsMetro] = useState<boolean>(true);

  // Tax State (Simple)
  const [income, setIncome] = useState<number>(1200000);
  const [deductions, setDeductions] = useState<number>(150000);

  // EMI Calculation
  const calculateEMI = () => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    if (p <= 0 || r <= 0 || n <= 0) return 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  // HRA Calculation
  const calculateHRAExemption = () => {
    const basicYearly = basicSalary * 12;
    const hraYearly = hraReceived * 12;
    const rentYearly = rentPaid * 12;

    const condition1 = hraYearly;
    const condition2 = Math.max(0, rentYearly - 0.1 * basicYearly);
    const condition3 = isMetro ? 0.5 * basicYearly : 0.4 * basicYearly;

    return Math.round(Math.min(condition1, condition2, condition3));
  };

  // Simple Tax Calculation (Old Regime Approx)
  const calculateTax = () => {
    let taxableIncome = income - deductions;
    if (taxableIncome <= 250000) return 0;
    let tax = 0;
    
    if (taxableIncome > 250000 && taxableIncome <= 500000) {
      tax += (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
      tax += 12500 + (taxableIncome - 500000) * 0.2;
    } else if (taxableIncome > 1000000) {
      tax += 112500 + (taxableIncome - 1000000) * 0.3;
    }

    // Health & Education Cess (4%)
    tax += tax * 0.04;
    return Math.round(tax);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Financial Calculators</h2>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${activeTab === 'EMI' ? styles.active : ''}`}
          onClick={() => setActiveTab('EMI')}
        >
          EMI Calculator
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'HRA' ? styles.active : ''}`}
          onClick={() => setActiveTab('HRA')}
        >
          HRA Exemption
        </button>
        <button
          className={`${styles.tabBtn} ${activeTab === 'TAX' ? styles.active : ''}`}
          onClick={() => setActiveTab('TAX')}
        >
          Income Tax (Est.)
        </button>
      </div>

      <div className={styles.calculatorForm}>
        {activeTab === 'EMI' && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Loan Amount (₹)</label>
              <input
                type="number"
                className={styles.input}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Interest Rate (% p.a.)</label>
              <input
                type="number"
                step="0.1"
                className={styles.input}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Tenure (Years)</label>
              <input
                type="number"
                className={styles.input}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
              />
            </div>
            <div className={styles.resultBox}>
              <div className={styles.resultTitle}>Monthly EMI</div>
              <div className={styles.resultValue}>₹ {calculateEMI().toLocaleString('en-IN')}</div>
            </div>
          </>
        )}

        {activeTab === 'HRA' && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Basic Salary (Monthly ₹)</label>
              <input
                type="number"
                className={styles.input}
                value={basicSalary}
                onChange={(e) => setBasicSalary(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>HRA Received (Monthly ₹)</label>
              <input
                type="number"
                className={styles.input}
                value={hraReceived}
                onChange={(e) => setHraReceived(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Rent Paid (Monthly ₹)</label>
              <input
                type="number"
                className={styles.input}
                value={rentPaid}
                onChange={(e) => setRentPaid(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={isMetro}
                  onChange={(e) => setIsMetro(e.target.checked)}
                />
                Living in Metro City (50% Basic)
              </label>
            </div>
            <div className={styles.resultBox}>
              <div className={styles.resultTitle}>Exempt HRA (Yearly)</div>
              <div className={styles.resultValue}>₹ {calculateHRAExemption().toLocaleString('en-IN')}</div>
            </div>
          </>
        )}

        {activeTab === 'TAX' && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Total Income (₹)</label>
              <input
                type="number"
                className={styles.input}
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Total Deductions (₹) e.g., 80C</label>
              <input
                type="number"
                className={styles.input}
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
              />
            </div>
            <div className={styles.resultBox}>
              <div className={styles.resultTitle}>Estimated Tax (Old Regime)</div>
              <div className={styles.resultValue}>₹ {calculateTax().toLocaleString('en-IN')}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
