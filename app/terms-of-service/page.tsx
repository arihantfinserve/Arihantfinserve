import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-screen-md mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-gray">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">
          Welcome to Arihant Finserve. By accessing or using our website and services, you agree to be bound by the following terms and conditions.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          Please read these Terms of Service carefully before using our website. By using our site, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you may not use our services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our website in any way that violates applicable laws or regulations, or infringes on the rights of others.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          All content, materials, and intellectual property on our website are owned by Arihant Finserve or its licensors. You may not reproduce, distribute, or create derivative works without our explicit permission.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="mb-4">
          Arihant Finserve shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our services are provided &quot;as is&quot; without any warranties of any kind.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms of Service, please contact us at arihantfinserve@gmail.com.
        </p>
      </div>
    </div>
  );
}
