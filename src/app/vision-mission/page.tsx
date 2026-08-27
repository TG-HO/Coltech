"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Network, Box } from "lucide-react";
import Image from "next/image";

export default function VisionMissionPage() {
  return (
    <div className="w-full min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="w-full bg-brand-navy pt-36 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/capsule-bg.png"
            alt="Enterprise infrastructure background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs md:text-sm uppercase mb-4 block">
              Strategic Vision
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Architecting the <br /> <span className="text-brand-turquoise">operational backbone.</span>
            </h1>
            <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed border-l-2 border-brand-turquoise pl-6">
              Our vision is a future where critical physical operations run with the agility, transparency, and precision of modern software platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Core Directives */}
      <section className="py-28 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-light border border-brand-navy/10 p-10 md:p-12 relative overflow-hidden group hover:border-brand-turquoise transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="w-32 h-32 text-brand-navy" />
              </div>
              <div className="relative z-10">
                <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
                  Long-Term Horizon
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Vision</h2>
                <div className="w-12 h-1 bg-brand-turquoise mb-6"></div>
                <p className="text-brand-navy/80 text-base md:text-lg leading-relaxed">
                  To become the definitive technology engineering partner for mission-critical industries. We envision a connected ecosystem where every physical operation—from pipeline flow to server cluster uptime—is continuously monitored, automated, and secured.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy border border-brand-turquoise/20 p-10 md:p-12 relative overflow-hidden group text-white hover:border-brand-turquoise transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-15 transition-opacity">
                <Rocket className="w-32 h-32 text-brand-turquoise" />
              </div>
              <div className="relative z-10">
                <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
                  Core Objective
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
                <div className="w-12 h-1 bg-brand-turquoise mb-6"></div>
                <p className="text-white/85 text-base md:text-lg leading-relaxed">
                  To deploy elite software and hardware solutions that eradicate operational downtime and administrative overhead. We engineer software that scales, infrastructure that endures, and automations that redefine enterprise performance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Execution Layer Matrix */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
              Engineering Execution
            </span>
            <h2 className="text-brand-navy text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Execution Layer
            </h2>
            <div className="w-20 h-1 bg-brand-turquoise mx-auto mb-6"></div>
            <p className="text-brand-navy/70 text-base md:text-lg max-w-2xl mx-auto">How we translate our vision into concrete, verifiable engineering deliverables.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Physical Integration", desc: "Deploying high-durability sensors, pulse telemetry meters, and AI CCTV networks directly into harsh operating environments.", icon: Box },
              { title: "Digital Synthesis", desc: "Aggregating millions of telemetry data points into unified, actionable executive analytics and automated ERP pipelines.", icon: Network },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white p-10 md:p-12 flex flex-col items-center text-center border border-brand-navy/10 hover:border-brand-turquoise hover:shadow-xl transition-all duration-300 rounded-none group"
              >
                <div className="p-4 bg-brand-light rounded-sm mb-6 border border-brand-navy/10 group-hover:border-brand-turquoise transition-colors">
                  <value.icon className="w-8 h-8 text-brand-turquoise" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-turquoise transition-colors">{value.title}</h3>
                <p className="text-brand-navy/75 text-sm md:text-base leading-relaxed max-w-md">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
