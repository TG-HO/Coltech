export default function CoreValuesPage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Core Values</h1>
        <div className="w-16 h-1 bg-brand-teal mb-12"></div>
        <div className="space-y-8 text-brand-light/90 text-lg leading-relaxed">
          <p>
            At COLTECH, our core values define our approach to enterprise technology and automation. We prioritize operational excellence, uncompromised security, and scalable infrastructure.
          </p>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 mt-8">Integrity & Transparency</h3>
            <p>We build systems that offer complete visibility and control, ensuring our partners always have an accurate, real-time understanding of their operations.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 mt-8">Innovation in Automation</h3>
            <p>By constantly exploring advanced telemetry and artificial intelligence, we continuously push the boundaries of what automation can achieve for legacy industries.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 mt-8">Reliability at Scale</h3>
            <p>Our solutions are engineered for high-availability. We understand that in industrial applications, downtime is not an option.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
