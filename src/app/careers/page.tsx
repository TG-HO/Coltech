export default function CareersPage() {
  return (
    <main className="w-full min-h-[70vh] bg-brand-navy pt-32 pb-24 text-white flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Careers at COLTECH</h1>
        <div className="w-16 h-1 bg-brand-teal mx-auto mb-10"></div>
        <div className="bg-brand-light/5 border border-brand-light/10 p-8 rounded-sm">
          <p className="text-brand-light/80 text-xl font-medium tracking-wide">
            We currently do not have any open positions at this time. 
          </p>
          <p className="text-brand-light/60 mt-4">
            Please check back later or follow our professional channels for future opportunities.
          </p>
        </div>
      </div>
    </main>
  );
}
