export default function CompliancePage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
          <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
            Regulatory Framework
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Compliance & Standards</h1>
        <div className="w-20 h-1 bg-brand-turquoise mb-12"></div>
        <div className="space-y-6 text-white/85 leading-relaxed text-sm md:text-base">
          <p className="border-l-2 border-brand-turquoise pl-6 text-white text-base md:text-lg">
            At COLTECH, strict adherence to international standards and regulatory compliance is foundational to our enterprise solutions, especially within industrial automation and fuel infrastructure sectors.
          </p>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20 mt-8">
            <h3 className="text-xl font-bold text-white mb-2">Data Security & Privacy</h3>
            <p className="text-white/80">Our software and infrastructure deployments are designed to comply with industry-standard data protection regulations. We implement end-to-end encryption, regular security audits, and strict role-based access controls to safeguard client data.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">Hardware & Automation Standards</h3>
            <p className="text-white/80">Our pump automation and IoT hardware integrations meet stringent industrial safety and operational standards. All physical deployments are rigorously stress-tested for durability, environmental resilience, and fail-safe operation.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">Operational Certifications</h3>
            <p className="text-white/80">We work continuously with regulatory bodies to ensure that our bespoke enterprise resource planning (ERP) systems and telemetry dashboards provide the immutable audit trails and real-time reporting required for corporate governance.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
