import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arihantfinserve.com';

  const services = [
    'pvt-ltd', 'section-8', 'dsc-din', 'msme', 'fssai', 'iec', 'iso',
    'gst', 'lut', 'itr', 'tds', 'tax-planning',
    'roc', 'director-compliance', 'winding-up',
    'trademark', 'copyright', 'design',
    'payroll', 'pf-esi', 'labour-law',
    'audit', 'loans', 'demat',
    'business-loans', 'home-loans', 'loan-against-property', 'personal-loans', 'project-finance', 'msme-loans'
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/utilities`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...serviceUrls,
  ];
}
