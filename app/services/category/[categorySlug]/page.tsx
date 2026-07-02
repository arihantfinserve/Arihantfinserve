import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categoriesData } from '@/lib/servicesData';
import styles from '../../[slug]/page.module.css';

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const { categorySlug } = resolvedParams;
  
  const category = categoriesData.find(c => c.categorySlug === categorySlug);
  
  if (!category) {
    return {
      title: 'Category Not Found | Arihant Finserve',
    };
  }
  
  return {
    title: `${category.title} | Arihant Finserve`,
    description: `Explore our comprehensive services in ${category.title} offered by Arihant Finserve.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { categorySlug } = resolvedParams;

  const category = categoriesData.find(c => c.categorySlug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{category.title}</h1>
        <p className={styles.heroSubtitle}>
          Select a specific service below to learn more about how we can help you.
        </p>
      </section>

      <section className={styles.container} style={{ gridTemplateColumns: '1fr', maxWidth: '1200px' }}>
        <div className={styles.contentBlock}>
          <h2><i className={`fa-solid ${category.icon}`}></i> Available Services</h2>
          <p>Click on any service to view detailed information and contact our experts.</p>
          
          <div className={styles.featuresGrid} style={{ marginTop: '3rem', gap: '2rem' }}>
            {category.subServices.map((sub, idx) => (
              <Link href={`/services/${sub.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div className={styles.featureCard} style={{ height: '100%', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                  <div className={styles.featureIcon} style={{ width: '60px', height: '60px', fontSize: '1.8rem', marginBottom: '1rem' }}>
                    <i className="fa-solid fa-file-lines"></i>
                  </div>
                  <div className={styles.featureText} style={{ fontSize: '1.2rem' }}>{sub.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
