"use client";

import { motion } from "framer-motion";
import { Server, ShieldAlert, Network, HardDrive } from "lucide-react";
import HardwareIntegrationMap from "@/components/ui/HardwareIntegrationMap";

export default function InfrastructurePage() {
  return (
    <div className="w-full min-h-screen bg-brand-navy pt-36 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-brand-turquoise inline-block"></span>
            <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase">
              Core Physical Systems
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mb-8">
            Managed IT Systems & <br /> <span className="text-brand-turquoise">Security Architectures.</span>
          </h1>
          <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-brand-turquoise pl-6">
            High-performance physical layer networking, structural server configuration, edge computing virtualization, and continuous network health assessments.
          </p>
        </motion.div>

        {/* Technical Gravity Layout - Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {[
            {
              title: "Server Configuration",
              details: "Bare-metal high-density server rack deployment and secure edge virtualization clusters.",
              icon: Server,
            },
            {
              title: "Network Security",
              details: "Automated patch deployment, zero-trust network access, and multi-tier technical support structures.",
              icon: Network,
            },
            {
              title: "Storage Redundancy",
              details: "High-availability SAN/NAS routing and zero-loss failover cluster synchronization.",
              icon: HardDrive,
            },
            {
              title: "AI Surveillance",
              details: "Optical threat detection models on live multi-feed industrial CCTV video streams.",
              icon: ShieldAlert,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-[#193760] p-10 flex flex-col items-start border border-brand-turquoise/20 hover:border-brand-turquoise transition-all duration-300 group shadow-lg"
            >
              <div className="p-4 bg-brand-navy rounded-sm mb-6 border border-brand-turquoise/30 group-hover:border-brand-turquoise transition-colors">
                <item.icon className="w-8 h-8 text-brand-turquoise" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-brand-turquoise transition-colors">{item.title}</h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Structural Diagnostic Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-brand-turquoise/20 bg-[#193760] p-10 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[2px] bg-brand-turquoise inline-block"></span>
              <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase">
                System Telemetry
              </span>
            </div>
            <h2 className="text-white text-3xl font-bold mb-4 tracking-tight">Active Diagnostics</h2>
            <p className="text-white/80 text-base md:text-lg">Continuous network topology health telemetry mapping.</p>
          </div>
          <div className="flex-1 w-full font-mono text-sm">
            <div className="flex justify-between border-b border-brand-turquoise/20 py-3 text-white/80">
              <span>SYS_NODE_01</span>
              <span className="text-brand-turquoise font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between border-b border-brand-turquoise/20 py-3 text-white/80">
              <span>STORAGE_ROUTING</span>
              <span className="text-brand-turquoise font-bold">ACTIVE_SYNC</span>
            </div>
            <div className="flex justify-between border-b border-brand-turquoise/20 py-3 text-white/80">
              <span>OPTICAL_THREAT_MODEL</span>
              <span className="text-brand-turquoise font-bold">STANDBY</span>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Hardware Integration SVG Tracing */}
        <div className="mt-8 -mx-6">
          <HardwareIntegrationMap />
        </div>

      </div>
    </div>
  );
}
