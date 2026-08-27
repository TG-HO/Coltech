export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
          <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
            Legal & Trust
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <div className="w-20 h-1 bg-brand-turquoise mb-12"></div>
        <div className="space-y-6 text-white/85 leading-relaxed text-sm md:text-base">
          <p className="text-brand-turquoise font-mono text-xs uppercase tracking-wider">Effective Date: January 1, 2026</p>
          <p className="border-l-2 border-brand-turquoise pl-6 text-white">
            COLTECH (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our enterprise software and automation services.
          </p>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">1. Information We Collect</h3>
            <p className="text-white/80">We may collect information about you in a variety of ways. The information we may collect includes personally identifiable information, such as your name, corporate organization, email address, and telephone number, and system telemetry metadata.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">2. Use of Your Information</h3>
            <p className="text-white/80">Having accurate information permits us to provide a secure, efficient, and customized deployment experience. Specifically, we use information collected to: configure and manage your enterprise account, coordinate hardware deployments, deliver technical updates, and manage service level agreements.</p>
          </div>
          
          <div className="bg-[#193760] p-8 border border-brand-turquoise/20">
            <h3 className="text-xl font-bold text-white mb-2">3. Security of Your Information</h3>
            <p className="text-white/80">We use administrative, technical, and physical security measures to help protect your enterprise data. All database connections and live telemetry data streams are protected by 256-bit SSL encryption and strict access isolation protocols.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
