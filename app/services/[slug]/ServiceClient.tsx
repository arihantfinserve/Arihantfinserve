'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './page.module.css';

interface ServiceClientProps {
  title: string;
}

export default function ServiceClient({ title }: ServiceClientProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <main className={styles.mainWrapper}>
      {/* Animated Hero Section */}
      <section className={styles.wowHero}>
        <div className={styles.heroBackground}>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.badge}
          >
            Premium Service
          </motion.div>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>
            Transforming complexity into clarity. Experience unparalleled expertise and seamless execution for your business needs.
          </p>
        </motion.div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* About Block */}
          <motion.div variants={itemVariants} className={styles.wowBlock}>
            <div className={styles.blockHeader}>
              <div className={styles.iconBox}><i className="fa-solid fa-bolt"></i></div>
              <h2>Overview of {title}</h2>
            </div>
            <p>
              At Arihant Finserve, our {title} solutions are meticulously crafted to provide you with a definitive edge. We navigate the intricate financial and regulatory frameworks so you don't have to.
            </p>
            <p>
              Our seasoned experts blend industry-leading knowledge with cutting-edge strategies to deliver results that are not just compliant, but genuinely transformative for your business growth.
            </p>
          </motion.div>
          
          {/* Premium Bento Grid Features */}
          <motion.div variants={itemVariants} className={styles.wowBlock}>
            <div className={styles.blockHeader}>
              <div className={styles.iconBox}><i className="fa-solid fa-star"></i></div>
              <h2>The Arihant Advantage</h2>
            </div>
            
            <div className={styles.bentoGrid}>
              {[
                { icon: 'fa-chess-knight', title: 'Strategic Planning', desc: 'Customized roadmaps tailored to your unique goals.' },
                { icon: 'fa-shield-halved', title: 'Risk Mitigation', desc: 'Proactive compliance to shield you from penalties.' },
                { icon: 'fa-bolt-lightning', title: 'Swift Execution', desc: 'Accelerated turnarounds without compromising quality.' },
                { icon: 'fa-headset', title: 'Expert Support', desc: 'Direct access to senior chartered professionals.' }
              ].map((feat, i) => (
                <motion.div 
                  key={i} 
                  className={styles.bentoCard}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={styles.bentoIcon}><i className={`fa-solid ${feat.icon}`}></i></div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How it Works / Timeline */}
          <motion.div variants={itemVariants} className={styles.wowBlock}>
            <div className={styles.blockHeader}>
              <div className={styles.iconBox}><i className="fa-solid fa-list-check"></i></div>
              <h2>Seamless Process</h2>
            </div>
            
            <div className={styles.timeline}>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Initial Consultation</h4>
                  <p>We analyze your specific requirements and map out a precise strategy.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Document Gathering</h4>
                  <p>Secure, digital submission of all necessary paperwork with guided assistance.</p>
                </div>
              </div>
              <div className={styles.timelineStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>Execution & Filing</h4>
                  <p>Our experts handle the heavy lifting, ensuring perfect accuracy and compliance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Glassmorphism Sticky Sidebar */}
        <motion.aside 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.glassContactCard}>
            <div className={styles.cardGlow}></div>
            <h3 className={styles.contactTitle}>Start Your Journey</h3>
            <p className={styles.contactSubtitle}>Connect with our experts to proceed with your {title} requirements.</p>
            
            <div className="space-y-5">
              <div className={styles.inputWrapper}>
                <i className="fa-regular fa-user"></i>
                <input type="text" className={styles.glassInput} placeholder="Your Full Name" />
              </div>
              
              <div className={styles.inputWrapper}>
                <i className="fa-solid fa-phone"></i>
                <input type="tel" className={styles.glassInput} placeholder="Phone Number" />
              </div>
              
              <div className={styles.inputWrapper}>
                <i className="fa-regular fa-envelope"></i>
                <input type="email" className={styles.glassInput} placeholder="Email Address" />
              </div>
              
              <a 
                href={`https://wa.me/919157657347?text=I am interested in ${title}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.wowSubmitBtn}
              >
                <span>Request Consultation</span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}
