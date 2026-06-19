export default function TermsOfServicePage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>
        <div className="w-16 h-1 bg-brand-teal mb-12"></div>
        <div className="space-y-6 text-brand-light/80 leading-relaxed text-sm">
          <p>Effective Date: January 1, 2026</p>
          <p>
            Please read these Terms of Service ("Terms") carefully before using the COLTECH website and enterprise solutions.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-2">1. Acceptance of Terms</h3>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-2">2. Enterprise Software Licenses</h3>
          <p>All custom software, automation dashboards, and related intellectual property remain the property of COLTECH unless explicitly transferred via a separate Enterprise Service Agreement (ESA). Reverse engineering of pump automation controllers or localized ERP nodes is strictly prohibited.</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-2">3. Limitation of Liability</h3>
          <p>In no event shall COLTECH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <p className="mt-8 pt-8 border-t border-brand-light/10 italic">This is a placeholder terms of service for demonstration purposes.</p>
        </div>
      </div>
    </main>
  );
}
