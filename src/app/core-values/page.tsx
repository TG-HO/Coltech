export default function CoreValuesPage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
          <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
            Guiding Principles
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Core Values</h1>
        <div className="w-20 h-1 bg-brand-turquoise mb-12"></div>
        <div className="space-y-8 text-white/90 text-base md:text-lg leading-relaxed">
          <p className="border-l-2 border-brand-turquoise pl-6 text-white text-lg md:text-xl">
            At COLTECH, our core values define our approach to enterprise technology and automation. We prioritize operational excellence, uncompromised security, and scalable infrastructure.
          </p>
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-2xl font-bold text-white mb-3">Integrity & Transparency</h3>
            <p className="text-white/80">We build systems that offer complete visibility and control, ensuring our partners always have an accurate, real-time understanding of their operations.</p>
          </div>
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-2xl font-bold text-white mb-3">Innovation in Automation</h3>
            <p className="text-white/80">By constantly exploring advanced telemetry and artificial intelligence, we continuously push the boundaries of what automation can achieve for legacy industries.</p>
          </div>
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-2xl font-bold text-white mb-3">Reliability at Scale</h3>
            <p className="text-white/80">Our solutions are engineered for high-availability. We understand that in industrial applications, downtime is not an option.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
