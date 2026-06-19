"use client";

import { motion } from "framer-motion";
import { Layers, Database, CodeSquare } from "lucide-react";

export default function SoftwarePage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="text-brand-sky font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
            Enterprise Division
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mb-8">
            Custom Software & <br /> Intelligent ERP.
          </h1>
          <div className="w-24 h-1 bg-brand-teal mb-8"></div>
          <p className="text-brand-light text-xl leading-relaxed max-w-2xl opacity-90 border-l-2 border-brand-teal pl-6">
            Automated pipeline compilation, cross-platform mobile environments, and dedicated custom enterprise systems.
          </p>
        </motion.div>

        {/* Data Matrix Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-teal/20 mb-32 border border-brand-teal/20">
          {[
            {
              title: "Operational Control",
              desc: "Integrated data management layers to process operational control mechanics.",
              icon: Layers,
            },
            {
              title: "Real-Time Logistics",
              desc: "Predictive tracking and data routing mechanics for distributed enterprises.",
              icon: Database,
            },
            {
              title: "Financial Analytics",
              desc: "Deep reporting modules ensuring instant multi-location auditing dashboards.",
              icon: CodeSquare,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-brand-navy p-12 flex flex-col items-start group"
            >
              <div className="p-4 bg-brand-teal/10 rounded-sm mb-6 border border-brand-teal/20 group-hover:border-brand-sky/50 transition-colors">
                <item.icon className="w-8 h-8 text-brand-sky" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{item.title}</h3>
              <p className="text-brand-light/70 leading-relaxed text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#1D303D] border border-brand-teal/20 p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-white text-3xl font-bold mb-16 tracking-tight">Deployment Lifecycle</h2>
          
          <div className="flex flex-col gap-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-brand-sky/20 hidden md:block"></div>
            
            {[
              { step: "01", name: "Architecture Planning", details: "Mapping dependencies and tech stack." },
              { step: "02", name: "System Engineering", details: "Core logic and API construction." },
              { step: "03", name: "Deployment & Optimization", details: "Containerized push and scaling." },
              { step: "04", name: "Continuous Monitoring", details: "Real-time health telemetry." },
            ].map((phase, i) => (
              <div key={i} className="flex gap-8 relative z-10">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-teal border-4 border-[#1D303D] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {phase.step}
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2">{phase.name}</h4>
                  <p className="text-brand-light/70 text-base">{phase.details}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
