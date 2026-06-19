"use client";

import { motion } from "framer-motion";
import { Server, ShieldAlert, Network, HardDrive } from "lucide-react";

export default function InfrastructurePage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-24"
        >
          <span className="text-brand-sky font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
            Core Infrastructure
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mb-8">
            Managed IT Systems & <br /> Security Architectures.
          </h1>
          <div className="w-24 h-1 bg-brand-teal mb-8"></div>
          <p className="text-brand-light text-xl leading-relaxed max-w-2xl opacity-90 border-l-2 border-brand-teal pl-6">
            High-performance physical layer networking, structural server configuration, and continuous network health assessments.
          </p>
        </motion.div>

        {/* Technical Gravity Layout - Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-teal/20 mb-24 border border-brand-teal/20">
          {[
            {
              title: "Server Configuration",
              details: "Bare-metal deployment and secure edge virtualization clusters.",
              icon: Server,
            },
            {
              title: "Network Security",
              details: "Automated patch deployment and multi-tier technical support structures.",
              icon: Network,
            },
            {
              title: "Storage Redundancy",
              details: "High-availability storage routing and zero-loss failover nodes.",
              icon: HardDrive,
            },
            {
              title: "AI Surveillance",
              details: "Optical threat detection models on live video streams.",
              icon: ShieldAlert,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-brand-navy p-12 flex flex-col items-start group"
            >
              <div className="p-4 bg-brand-teal/10 rounded-sm mb-6 border border-brand-teal/20 group-hover:border-brand-sky/50 transition-colors">
                <item.icon className="w-8 h-8 text-brand-sky" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-brand-light/70 leading-relaxed text-base">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Structural Diagnostic Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-brand-teal/20 bg-[#1D303D] p-10 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Active Diagnostics</h2>
            <p className="text-brand-sky text-lg">Continuous health telemetry mapping.</p>
          </div>
          <div className="flex-1 w-full font-mono text-sm">
            <div className="flex justify-between border-b border-brand-teal/20 py-3 text-brand-light/80">
              <span>SYS_NODE_01</span>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex justify-between border-b border-brand-teal/20 py-3 text-brand-light/80">
              <span>STORAGE_ROUTING</span>
              <span className="text-green-400">ACTIVE_SYNC</span>
            </div>
            <div className="flex justify-between border-b border-brand-teal/20 py-3 text-brand-light/80">
              <span>OPTICAL_THREAT_MODEL</span>
              <span className="text-brand-sky">STANDBY</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
