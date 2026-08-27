export default function TermsOfServicePage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
          <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
            Legal & Governance
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Terms of Service</h1>
        <div className="w-20 h-1 bg-brand-turquoise mb-12"></div>
        <div className="space-y-6 text-white/85 leading-relaxed text-sm md:text-base">
          <p className="text-brand-turquoise font-mono text-xs uppercase tracking-wider">Effective Date: January 1, 2026</p>
          <p className="border-l-2 border-brand-turquoise pl-6 text-white">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the COLTECH website and enterprise solutions.
          </p>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">1. Acceptance of Terms</h3>
            <p className="text-white/80">By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the services or enterprise infrastructure nodes.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">2. Enterprise Software Licenses</h3>
            <p className="text-white/80">All custom software architectures, automation dashboards, firmware, and related intellectual property remain the exclusive property of COLTECH unless explicitly transferred via a separate Enterprise Service Agreement (ESA). Reverse engineering of pump automation controllers or localized ERP nodes is strictly prohibited.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">3. Limitation of Liability</h3>
            <p className="text-white/80">In no event shall COLTECH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of the services beyond explicit SLA commitments.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
