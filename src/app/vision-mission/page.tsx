export default function VisionMissionPage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Vision & Mission</h1>
        <div className="w-16 h-1 bg-brand-teal mb-12"></div>
        <div className="space-y-8 text-brand-light/90 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p>To be the leading architect of intelligent, scalable, and secure enterprise infrastructure globally, redefining how legacy industries operate in the digital era.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 mt-8">Our Mission</h3>
            <p>We engineer high-performance software, precision automation hardware, and secure network environments that drive measurable growth and operational efficiency for our corporate partners.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
