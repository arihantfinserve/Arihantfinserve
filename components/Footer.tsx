import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Services</h3>
          <Link href="/services/bank-loan-docs" className={styles.link}>Business Loans & Finance</Link>
          <Link href="/services/gst-registration" className={styles.link}>GST Registration</Link>
          <Link href="/services/pvt-ltd-registration" className={styles.link}>Pvt Ltd Registration</Link>
          <Link href="/services/income-tax-return" className={styles.link}>Tax & Compliance</Link>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/careers" className={styles.link}>Careers</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Resources</h3>
          <Link href="/blogs" className={styles.link}>Blogs</Link>
          <Link href="/utilities" className={styles.link}>Calculators & Utilities</Link>
          <Link href="/faq" className={styles.link}>FAQs</Link>
          <Link href="/downloads" className={styles.link}>Downloads</Link>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Our Branches</h3>
          <div className={styles.locationBlock}>
            <div className={styles.locationTitle}>Surat (Head Office)</div>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Kailash Nagar</span>
              <span className={styles.tag}>Sachin</span>
              <span className={styles.tag}>Bhestan</span>
              <span className={styles.tag}>Katargam</span>
              <span className={styles.tag}>Vesu</span>
              <span className={styles.tag}>Amroli</span>
              <span className={styles.tag}>Bhatar</span>
              <span className={styles.tag}>Varchha</span>
              <span className={styles.tag}>Chowk</span>
            </div>
          </div>
          
          <div className={styles.locationBlock}>
            <div className={styles.locationTitle}>Other Cities</div>
            <div className={styles.tagsContainer}>
              <span className={styles.tag}>Ahmedabad</span>
              <span className={styles.tag}>Gandhinagar</span>
              <span className={styles.tag}>Mehsana</span>
              <span className={styles.tag}>Palanpur</span>
              <span className={styles.tag}>Patan</span>
              <span className={styles.tag}>Visnagar</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        &copy; {new Date().getFullYear()} Arihant Finserve. All rights reserved.
      </div>
    </footer>
  );
}
