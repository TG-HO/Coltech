export default function CompliancePage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Compliance & Standards</h1>
        <div className="w-16 h-1 bg-brand-teal mb-12"></div>
        <div className="space-y-6 text-brand-light/80 leading-relaxed text-sm">
          <p>
            At COLTECH, adherence to international standards and regulatory compliance is foundational to our enterprise solutions, especially within the fuel and automation sectors.
          </p>
          <h3 className="text-xl font-bold text-white mt-8 mb-2">Data Security & Privacy</h3>
          <p>Our software and infrastructure deployments are designed to comply with industry-standard data protection regulations. We implement end-to-end encryption, regular security audits, and strict access controls to ensure the integrity of client data.</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-2">Hardware & Automation Standards</h3>
          <p>Our pump automation and IoT hardware integrations meet stringent industrial safety and operational standards. All physical deployments are rigorously tested for durability, environmental resilience, and fail-safe operation.</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-2">Operational Certifications</h3>
          <p>We work continuously with regulatory bodies to ensure that our bespoke enterprise resource planning (ERP) systems and telemetry dashboards provide the necessary audit trails and reporting required for corporate governance.</p>
        </div>
      </div>
    </main>
  );
}
