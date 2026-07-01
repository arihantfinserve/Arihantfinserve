import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arihantfinserve.com"),
  title: {
    default: "Arihant Finserve | One Partner. Every Financial Solution.",
    template: "%s | Arihant Finserve",
  },
  description: "Gujarat's most trusted financial growth partner. Expert taxation, compliance, loans, investments, company registration, audit and advisory services across Surat, Ahmedabad, Palanpur and other cities.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Arihant Finserve | One Partner. Every Financial Solution.",
    description: "Premium financial advisory services in Gujarat. Taxation, Loans, Company Registration, Investments & Compliance.",
    images: [{ url: "/logo.png" }],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnnouncementPopup from "@/components/AnnouncementPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat" />
        <meta name="geo.position" content="21.1557;72.8258" />
        <meta name="ICBM" content="21.1557, 72.8258" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111827] font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <AnnouncementPopup />
        <FloatingWhatsApp />
        <Footer />
        
        {/* Ultimate AI & SEO Schema (Organization, Founder, Services, FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["FinancialService", "AccountingService"],
                  "@id": "https://arihantfinserve.com/#organization",
                  "name": "Arihant Finserve",
                  "description": "Gujarat's premier financial growth partner offering Taxation, CA Certificates, Audit, Company Registration, Business Loans, and Insurance services.",
                  "url": "https://arihantfinserve.com",
                  "logo": "https://arihantfinserve.com/logo.png",
                  "image": "https://arihantfinserve.com/logo.png",
                  "telephone": "+919157657347",
                  "email": "arihantfinservesurat@gmail.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "S-44, 2nd Floor, Silicon Shoppers, Udhana Main Road",
                    "addressLocality": "Surat",
                    "addressRegion": "Gujarat",
                    "postalCode": "394210",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "21.1557",
                    "longitude": "72.8258"
                  },
                  "founder": {
                    "@id": "https://arihantfinserve.com/#founder"
                  },
                  "areaServed": [
                    "Surat", "Ahmedabad", "Gandhinagar", "Mehsana", "Palanpur", "Patan", "Visnagar"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "CA & Financial Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Income Tax Return Filing" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST Registration & Return Filing" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Limited Company Registration" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LLP & OPC Registration" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory & Tax Audit" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Loan & Project Finance" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NGO & Trust Registration" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CA Certificates (Net Worth, Turnover)" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FSSAI & Trademark Registration" } }
                    ]
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://arihantfinserve.com/#founder",
                  "name": "MBA Manish M Jain",
                  "jobTitle": "Founder & Managing Director",
                  "worksFor": {
                    "@id": "https://arihantfinserve.com/#organization"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What services does Arihant Finserve offer?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Arihant Finserve offers comprehensive financial services including Income Tax Returns, GST Registration, Company Registration (Pvt Ltd, LLP), Audits, Project Finance, NGO Registration, and CA Certificates."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where is Arihant Finserve located?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our head office is in Surat at S-44, 2nd Floor, Silicon Shoppers, Udhana. We also serve clients across Ahmedabad, Gandhinagar, Mehsana, Palanpur, Patan, and Visnagar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I book a consultation with Manish Jain?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can book a free consultation by visiting our website and clicking the WhatsApp icon or by calling us directly at +91 91576 57347."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
