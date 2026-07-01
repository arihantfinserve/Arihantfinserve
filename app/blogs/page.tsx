import React from 'react';

export const metadata = {
  title: 'Blog | Arihant Finserve',
  description: 'Insights and articles on taxation, compliance, and wealth management.',
};

const articles = [
  {
    id: 1,
    title: "10 Tax Saving Strategies for SMEs in 2026",
    date: "June 25, 2026",
    author: "Arihant Tax Team",
    category: "Taxation",
    content: (
      <>
        <p className="mb-4">As an SME owner in 2026, optimizing your tax liability is more critical than ever. With evolving regulations, staying ahead means exploring advanced strategies that not only ensure compliance but also maximize your retained earnings.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">1. Restructure Your Business Entity</h3>
        <p className="mb-4">Choosing the right business structure (such as an LLP or Private Limited Company) can drastically alter your tax obligations. We often find SMEs overpaying simply because they haven't evolved their legal structure to match their revenue.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">2. Leverage Section 80JJAA</h3>
        <p className="mb-4">If your business is growing and hiring, don't miss out on the deduction available for employing new regular workmen. This incentive is specifically designed to promote employment and can offer substantial tax relief.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">3. Invest in Technology and R&D</h3>
        <p className="mb-4">In 2026, digitization is key. Expenses incurred on upgrading your digital infrastructure, software subscriptions, and certain R&D activities can often be claimed as fully deductible business expenses.</p>

        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">4. Opt for Presumptive Taxation</h3>
        <p className="mb-4">For eligible small businesses and professionals, Section 44AD/44ADA continues to be a hassle-free way to declare income at a prescribed rate, eliminating the need to maintain detailed books of account.</p>

        <p className="mt-8 font-semibold">Conclusion</p>
        <p className="mb-4">Tax planning is a year-round exercise, not just a year-end scramble. Consult with our experts at Arihant Finserve to tailor these strategies to your specific business model.</p>
      </>
    )
  },
  {
    id: 2,
    title: "Understanding GST Compliance in the Modern Era",
    date: "June 18, 2026",
    author: "Compliance Dept",
    category: "Compliance",
    content: (
      <>
        <p className="mb-4">The Goods and Services Tax (GST) framework has undergone significant refinement. Today, compliance is heavily driven by automation, e-invoicing, and real-time data matching.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">The Rise of E-Invoicing</h3>
        <p className="mb-4">E-invoicing is now the norm for a broader range of businesses. Ensure your ERP or billing software is tightly integrated with the Invoice Registration Portal (IRP) to generate IRNs seamlessly. Failure to do so not only attracts penalties but also delays your buyers' Input Tax Credit (ITC).</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">ITC Reconciliation</h3>
        <p className="mb-4">Reconciling GSTR-2B with your purchase register is no longer optional. The automated ecosystem strictly disallows ITC if the supplier hasn't filed their returns. Regular vendor communication and strict payment terms based on GST compliance are essential.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">Handling Notices and Scrutiny</h3>
        <p className="mb-4">With AI-driven analytics, the tax department is quick to flag discrepancies between GSTR-1, GSTR-3B, and E-way bills. Maintaining a robust internal audit trail is your best defense against automated scrutiny notices.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Future of Wealth Management",
    date: "June 10, 2026",
    author: "Wealth Advisory Team",
    category: "Wealth Management",
    content: (
      <>
        <p className="mb-4">Wealth management is shifting from traditional asset allocation to holistic, goal-based financial planning integrated with alternative investments.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">The Role of AI and Robo-Advisors</h3>
        <p className="mb-4">While robo-advisors provide excellent low-cost portfolio rebalancing, the human element remains crucial for complex estate planning, tax optimization, and understanding emotional biases during market volatility.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">Rise of Alternative Investments</h3>
        <p className="mb-4">Investors are increasingly looking beyond equities and bonds. Fractional real estate, private equity, and structured debt products are becoming more accessible to High Net Worth Individuals (HNIs), providing better risk-adjusted returns.</p>
        
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">ESG and Sustainable Investing</h3>
        <p className="mb-4">Environmental, Social, and Governance (ESG) criteria are now mainstream. Investors are actively demanding portfolios that align with their personal values without sacrificing yield.</p>
        
        <p className="mt-8 font-semibold">Looking Ahead</p>
        <p className="mb-4">At Arihant Finserve, our hybrid approach combines cutting-edge technology with seasoned human expertise to secure your financial legacy.</p>
      </>
    )
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Insights &amp; Articles
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Expert perspectives on taxation, compliance, and wealth management to help you stay ahead.
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {article.category}
                </span>
                <span className="text-slate-500 text-sm font-medium">
                  {article.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                {article.title}
              </h2>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold mr-4">
                  {article.author.charAt(0)}
                </div>
                <div className="text-slate-700 font-medium">
                  By {article.author}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-800 leading-relaxed">
                {article.content}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
