import React from 'react';
import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

type Props = {
  params: Promise<{ slug: string }>;
};

const formatTitle = (slug: string) => {
  const acronyms = ['GST', 'LLP', 'OPC', 'DSC', 'DIN', 'PAN', 'TAN', 'MSME', 'FSSAI', 'IEC', 'ISO', 'ITR', 'TDS', 'ROC', 'MCA', 'PF', 'ESI', 'NGO', 'FPO', 'CA', 'UDIN', 'CMA', 'DPR'];
  
  return slug
    .split('-')
    .map((word) => {
      const upper = word.toUpperCase();
      if (acronyms.includes(upper)) return upper;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  if (!slug) {
    return {
      title: 'Service Not Found | Arihant Finserve',
    };
  }
  
  const title = formatTitle(slug);
    
  return {
    title: `${title} | Arihant Finserve`,
    description: `Comprehensive ${title} solutions by Arihant Finserve. Expert financial, compliance, and advisory services.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  const title = formatTitle(slug);

  return <ServiceClient title={title} />;
}
