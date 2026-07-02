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
            <Link href="/services" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }} onClick={() => setIsMegaMenuOpen(false)}>
              Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px', marginLeft: '4px' }}></i>
            </Link>
            <div className={`${styles.megaMenuWrapper} ${isMegaMenuOpen ? styles.open : ''}`}>
              <div className={styles.megaMenuContent}>
                <div className={styles.megaMenuGrid} onClick={() => setIsMegaMenuOpen(false)}>
                  {/* Column 1 */}
                  <div className={styles.megaMenuColumn}>
                    <Link href="/services/category/startup-registrations" className={styles.megaMenuTitle} style={{ textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-rocket" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Startup & Registrations</Link>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/pvt-ltd">Pvt Ltd / LLP / OPC</Link></li>
                      <li><Link href="/services/section-8">Section 8 / Nidhi Company</Link></li>
                      <li><Link href="/services/dsc-din">DSC / DIN / PAN / TAN</Link></li>
                      <li><Link href="/services/msme">MSME / Udyam Registration</Link></li>
                      <li><Link href="/services/fssai">FSSAI License</Link></li>
                      <li><Link href="/services/iec">Import Export Code (IEC)</Link></li>
                      <li><Link href="/services/iso">ISO Certification</Link></li>
                    </ul>

                    <Link href="/services/category/company-llp-roc" className={styles.megaMenuTitle} style={{ marginTop: '15px', textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-building" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Company, LLP & ROC Services</Link>
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
                    <Link href="/services/category/taxation-accounting-compliance" className={styles.megaMenuTitle} style={{ textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-file-invoice-dollar" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Taxation, Accounting & Compliance</Link>
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

                    <Link href="/services/category/audit-assurance" className={styles.megaMenuTitle} style={{ marginTop: '15px', textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-clipboard-check" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Audit & Assurance</Link>
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
                    <Link href="/services/category/business-loan-finance" className={styles.megaMenuTitle} style={{ textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-building-columns" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Business Loan & Finance Services</Link>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/project-reports">Project Reports</Link></li>
                      <li><Link href="/services/cma-data">CMA Data</Link></li>
                      <li><Link href="/services/bank-loan-docs">Bank Loan Documentation</Link></li>
                      <li><Link href="/services/dpr">DPR (Detailed Project Report)</Link></li>
                      <li><Link href="/services/financial-projections">Financial Projections</Link></li>
                      <li><Link href="/services/cibil-dispute">CIBIL Dispute & Correction Assistance</Link></li>
                      <li><Link href="/services/lei-registration">LEI Registration Assistance</Link></li>
                    </ul>

                    <Link href="/services/category/ca-certificates" className={styles.megaMenuTitle} style={{ marginTop: '15px', textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-certificate" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> CA Certificates</Link>
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
                    <Link href="/services/category/insurance-services" className={styles.megaMenuTitle} style={{ textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-shield-halved" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Insurance Services</Link>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/life-health-insurance">Life & Health Insurance Advising</Link></li>
                      <li><Link href="/services/corporate-business-insurance">Corporate & Business Insurance</Link></li>
                      <li><Link href="/services/commercial-vehicle-insurance">Commercial Vehicle Insurance</Link></li>
                      <li><Link href="/services/car-insurance">Car Insurance</Link></li>
                      <li><Link href="/services/claim-support">Claim Support & Consulting</Link></li>
                    </ul>

                    <Link href="/services/category/ngo-trust-fpo" className={styles.megaMenuTitle} style={{ marginTop: '15px', textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-hands-holding" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> NGO, Trust & FPO Services</Link>
                    <ul className={styles.megaMenuList}>
                      <li><Link href="/services/trust-deed">Trust Deed Drafting</Link></li>
                      <li><Link href="/services/trust-registration">Trust Registration</Link></li>
                      <li><Link href="/services/section-8-company">Section 8 Company Registration</Link></li>
                      <li><Link href="/services/section-8-compliance">Section 8 Compliance</Link></li>
                      <li><Link href="/services/ngo-darpan">NGO Darpan Registration</Link></li>
                      <li><Link href="/services/school-trust-docs">School Trust Documentation</Link></li>
                      <li><Link href="/services/fpo-advisory">FPO / Producer Company Advisory</Link></li>
                    </ul>
                    
                    <Link href="/services/category/business-registration-licence" className={styles.megaMenuTitle} style={{ marginTop: '15px', textDecoration: 'none', display: 'block' }}><i className="fa-solid fa-id-card" style={{ color: 'var(--accent-gold)', marginRight: '8px' }}></i> Business Registration & Licence Services</Link>
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
                <Link href="/services/category/startup-registrations" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-rocket"></i> Startup & Registrations</h4></Link>
                <Link href="/services/category/company-llp-roc" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-building"></i> Company, LLP & ROC Services</h4></Link>
                <Link href="/services/category/taxation-accounting-compliance" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-file-invoice-dollar"></i> Taxation, Accounting & Compliance</h4></Link>
                <Link href="/services/category/audit-assurance" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-clipboard-check"></i> Audit & Assurance</h4></Link>
                <Link href="/services/category/business-loan-finance" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-building-columns"></i> Business Loan & Finance</h4></Link>
                <Link href="/services/category/ca-certificates" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-certificate"></i> CA Certificates</h4></Link>
                <Link href="/services/category/insurance-services" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-shield-halved"></i> Insurance Services</h4></Link>
                <Link href="/services/category/ngo-trust-fpo" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-hands-holding"></i> NGO, Trust & FPO Services</h4></Link>
                <Link href="/services/category/business-registration-licence" onClick={toggleMobileMenu}><h4><i className="fa-solid fa-id-card"></i> Business Registration & Licences</h4></Link>
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
