"use client";

import { motion } from "framer-motion";
import { Layers, Database, CodeSquare } from "lucide-react";
import DeploymentLifecycle from "@/components/ui/DeploymentLifecycle";

export default function SoftwarePage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
            <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
              Enterprise Software Division
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mb-8">
            Custom Software & <br /> <span className="text-brand-turquoise">Intelligent ERP.</span>
          </h1>
          <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-brand-turquoise pl-6">
            Automated deployment pipelines, high-concurrency Node microservices, and dedicated enterprise resource planning architectures.
          </p>
        </motion.div>

        {/* Data Matrix Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-28">
          {[
            {
              title: "Operational Control",
              desc: "Integrated data management layers to streamline multi-facility workflows and inventory logistics.",
              icon: Layers,
            },
            {
              title: "Real-Time Telemetry",
              desc: "Predictive tracking and automated data routing mechanics for distributed industrial operations.",
              icon: Database,
            },
            {
              title: "Financial Analytics",
              desc: "Deep reporting modules ensuring instant multi-location auditing dashboards and transaction reconciliation.",
              icon: CodeSquare,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-[#193760] p-10 flex flex-col items-start border border-brand-turquoise/20 hover:border-brand-turquoise transition-all duration-300 group shadow-lg"
            >
              <div className="p-4 bg-brand-navy rounded-sm mb-6 border border-brand-turquoise/30 group-hover:border-brand-turquoise transition-colors">
                <item.icon className="w-8 h-8 text-brand-turquoise" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-brand-turquoise transition-colors">{item.title}</h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Deployment Lifecycle SVG Tracing */}
        <div className="mt-8 -mx-6">
          <DeploymentLifecycle />
        </div>

      </div>
    </div>
  );
}
