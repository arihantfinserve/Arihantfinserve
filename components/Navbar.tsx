'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarLeft}>
            <a href="tel:+919157657347" className={styles.topBarLink}>
              <i className="fa-solid fa-phone"></i> +91 9157657347
            </a>
            <span className={styles.topBarDivider}></span>
            <a href="mailto:arihantfinservesurat@gmail.com" className={styles.topBarLink}>
              <i className="fa-solid fa-envelope"></i> arihantfinservesurat@gmail.com
            </a>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/cachiragmjain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
            <span className={styles.topBarDivider}></span>
            <button className={styles.translateBtn}>
              <i className="fa-solid fa-globe"></i> EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Arihant Finserve" 
            width={180} 
            height={60} 
            style={{ objectFit: 'contain' }}
            priority 
          />
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navItem}>Home</Link>
          <Link href="/about" className={styles.navItem}>About Us</Link>
          
          {/* Services with Mega Menu */}
          <div 
            className={`${styles.navItem} ${styles.hasMegaMenu}`}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <span>Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i></span>
            <div className={`${styles.megaMenuWrapper} ${isMegaMenuOpen ? styles.open : ''}`}>
              <div className={styles.megaMenuContent}>
                <div className={styles.megaMenuGrid} onClick={() => setIsMegaMenuOpen(false)}>
                  {/* Column 1 */}
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuTitle}><i className="fa-solid fa-rocket" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Startup & Registrations</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/pvt-ltd">Pvt Ltd / LLP / OPC</Link></li>
                      <li><Link href="/services/section-8">Section 8 / Nidhi Company</Link></li>
                      <li><Link href="/services/dsc-din">DSC / DIN / PAN / TAN</Link></li>
                      <li><Link href="/services/msme">MSME / Udyam Registration</Link></li>
                      <li><Link href="/services/fssai">FSSAI License</Link></li>
                      <li><Link href="/services/iec">Import Export Code (IEC)</Link></li>
                      <li><Link href="/services/iso">ISO Certification</Link></li>
                    </ul>

                    <div className={styles.megaMenuTitle} style={{ marginTop: '15px' }}><i className="fa-solid fa-building" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Company, LLP & ROC Services</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/partnership-firm">Partnership Firm Documentation</Link></li>
                      <li><Link href="/services/pvt-ltd-registration">Private Limited Company Registration</Link></li>
                      <li><Link href="/services/llp-registration">LLP Registration</Link></li>
                      <li><Link href="/services/opc-registration">OPC Registration</Link></li>
                      <li><Link href="/services/roc-compliance">ROC Compliance</Link></li>
                      <li><Link href="/services/company-compliance">Company Compliance</Link></li>
                      <li><Link href="/services/llp-compliance">LLP Compliance</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuTitle}><i className="fa-solid fa-file-invoice-dollar" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Taxation, Accounting & Compliance</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/income-tax-return">Income Tax Return Filing</Link></li>
                      <li><Link href="/services/income-tax-notice">Income Tax Notice Handling</Link></li>
                      <li><Link href="/services/gst-registration">GST Registration & Return Filing</Link></li>
                      <li><Link href="/services/gst-notice">GST Notice Handling</Link></li>
                      <li><Link href="/services/eway-bill">E-Way Bill Assistance</Link></li>
                      <li><Link href="/services/tds-return">TDS Return Filing & Correction</Link></li>
                      <li><Link href="/services/bookkeeping">Book Keeping and Accounting</Link></li>
                      <li><Link href="/services/balance-sheet">Balance Sheet Preparation</Link></li>
                    </ul>

                    <div className={styles.megaMenuTitle} style={{ marginTop: '15px' }}><i className="fa-solid fa-clipboard-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Audit & Assurance</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/tax-audit">Tax Audit</Link></li>
                      <li><Link href="/services/statutory-audit">Statutory Audit</Link></li>
                      <li><Link href="/services/school-audit">School Audit</Link></li>
                      <li><Link href="/services/college-audit">College Audit</Link></li>
                      <li><Link href="/services/trust-audit">Trust Audit</Link></li>
                      <li><Link href="/services/other-audit">Other Audit Services</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuTitle}><i className="fa-solid fa-building-columns" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Business Loan & Finance Services</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/project-reports">Project Reports</Link></li>
                      <li><Link href="/services/cma-data">CMA Data</Link></li>
                      <li><Link href="/services/bank-loan-docs">Bank Loan Documentation</Link></li>
                      <li><Link href="/services/dpr">DPR (Detailed Project Report)</Link></li>
                      <li><Link href="/services/financial-projections">Financial Projections</Link></li>
                      <li><Link href="/services/cibil-dispute">CIBIL Dispute & Correction Assistance</Link></li>
                      <li><Link href="/services/lei-registration">LEI Registration Assistance</Link></li>
                    </ul>

                    <div className={styles.megaMenuTitle} style={{ marginTop: '15px' }}><i className="fa-solid fa-certificate" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> CA Certificates</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/net-worth-cert">Net Worth Certificate</Link></li>
                      <li><Link href="/services/turnover-cert">Turnover Certificate</Link></li>
                      <li><Link href="/services/fund-utilization-cert">Fund Utilization Certificate</Link></li>
                      <li><Link href="/services/ca-certs">CA Certificates</Link></li>
                      <li><Link href="/services/udin-certs">UDIN Certified Certificates</Link></li>
                      <li><Link href="/services/bank-tender-certs">Certificates for Banks, Tenders & Other Purposes</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuTitle}><i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Insurance Services</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/life-health-insurance">Life & Health Insurance Advising</Link></li>
                      <li><Link href="/services/corporate-business-insurance">Corporate & Business Insurance</Link></li>
                      <li><Link href="/services/commercial-vehicle-insurance">Commercial Vehicle Insurance</Link></li>
                      <li><Link href="/services/car-insurance">Car Insurance</Link></li>
                      <li><Link href="/services/claim-support">Claim Support & Consulting</Link></li>
                    </ul>

                    <div className={styles.megaMenuTitle} style={{ marginTop: '15px' }}><i className="fa-solid fa-hands-holding" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> NGO, Trust & FPO Services</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/trust-deed">Trust Deed Drafting</Link></li>
                      <li><Link href="/services/trust-registration">Trust Registration</Link></li>
                      <li><Link href="/services/section-8-company">Section 8 Company Registration</Link></li>
                      <li><Link href="/services/section-8-compliance">Section 8 Compliance</Link></li>
                      <li><Link href="/services/ngo-darpan">NGO Darpan Registration</Link></li>
                      <li><Link href="/services/school-trust-docs">School Trust Documentation</Link></li>
                      <li><Link href="/services/fpo-advisory">FPO / Producer Company Advisory</Link></li>
                    </ul>
                    
                    <div className={styles.megaMenuTitle} style={{ marginTop: '15px' }}><i className="fa-solid fa-id-card" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Business Registration & Licence Services</div>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/pan-tan">PAN & TAN Services</Link></li>
                      <li><Link href="/services/dsc">DSC (Digital Signature)</Link></li>
                      <li><Link href="/services/iec-registration">IEC (Import Export Code)</Link></li>
                      <li><Link href="/services/trademark-registration">TRADEMARK Registration</Link></li>
                      <li><Link href="/services/iso-certification">ISO Certification</Link></li>
                      <li><Link href="/services/fssai-registration">FSSAI Registration</Link></li>
                      <li><Link href="/services/shop-establishment">Shop & Establishment Registration</Link></li>
                      <li><Link href="/services/pf-esi-assistance">PF & ESI Assistance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/packages" className={styles.navItem}>Speciality & Packages</Link>
          <Link href="/utilities" className={styles.navItem}>Utility Hub</Link>
          <Link href="/contact" className={styles.navItem}>Contact</Link>
        </nav>

        <div className={styles.navRight}>
          <div className={styles.actions}>
            <a href="https://wa.me/919157657347?text=I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Book Consultation
              </Button>
            </a>
          </div>
          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Home</Link>
          <Link href="/about" className={styles.mobileNavItem} onClick={toggleMobileMenu}>About Us</Link>
          
          {/* Mobile Services Accordion */}
          <div className={styles.mobileNavAccordion}>
            <button 
              className={styles.mobileAccordionBtn} 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services <i className={`fa-solid fa-chevron-${mobileServicesOpen ? 'up' : 'down'}`}></i>
            </button>
            <div className={`${styles.mobileAccordionContent} ${mobileServicesOpen ? styles.mobileAccordionOpen : ''}`}>
              <div className={styles.mobileAccordionSection}>
                <h4><i className="fa-solid fa-rocket"></i> Registrations</h4>
                <Link href="/services/pvt-ltd" onClick={toggleMobileMenu}>Pvt Ltd / LLP / OPC</Link>
                <Link href="/services/fssai" onClick={toggleMobileMenu}>FSSAI License</Link>
              </div>
              <div className={styles.mobileAccordionSection}>
                <h4><i className="fa-solid fa-file-invoice-dollar"></i> Taxation</h4>
                <Link href="/services/income-tax-return" onClick={toggleMobileMenu}>Income Tax Return</Link>
                <Link href="/services/gst-registration" onClick={toggleMobileMenu}>GST Registration</Link>
              </div>
              <div className={styles.mobileAccordionSection}>
                <h4><i className="fa-solid fa-clipboard-check"></i> Audit & Assurance</h4>
                <Link href="/services/tax-audit" onClick={toggleMobileMenu}>Tax Audit</Link>
                <Link href="/services/statutory-audit" onClick={toggleMobileMenu}>Statutory Audit</Link>
              </div>
              <div className={styles.mobileAccordionSection}>
                <h4><i className="fa-solid fa-building-columns"></i> Business Loan</h4>
                <Link href="/services/project-reports" onClick={toggleMobileMenu}>Project Reports</Link>
                <Link href="/services/cma-data" onClick={toggleMobileMenu}>CMA Data</Link>
              </div>
              <Link href="/services" className={styles.viewAllServicesBtn} onClick={toggleMobileMenu}>View All Services</Link>
            </div>
          </div>

          <Link href="/packages" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Speciality & Packages</Link>
          <Link href="/utilities" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Utility Hub</Link>
          <Link href="/contact" className={styles.mobileNavItem} onClick={toggleMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
