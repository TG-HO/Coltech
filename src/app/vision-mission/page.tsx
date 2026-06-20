"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, Network, Box } from "lucide-react";
import Image from "next/image";

export default function VisionMissionPage() {
  return (
    <div className="w-full min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="w-full bg-brand-navy pt-32 pb-24 text-white relative overflow-hidden">
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
            <span className="text-brand-sky font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
              Vision & Mission
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Architecting the <br /> <span className="text-brand-light">operational backbone.</span>
            </h1>
            <div className="w-24 h-1 bg-brand-teal mb-8"></div>
            <p className="text-brand-light text-xl leading-relaxed opacity-90 border-l-2 border-brand-teal pl-6">
              Our vision is a future where legacy industries operate with the agility, security, and precision of modern tech giants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Core Directives */}
      <section className="py-24 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-light border border-brand-navy/10 p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye className="w-32 h-32 text-brand-navy" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-brand-black mb-6">Our Vision</h2>
                <div className="w-12 h-1 bg-brand-teal mb-8"></div>
                <p className="text-brand-navy/80 text-lg leading-relaxed">
                  To become the definitive engineering partner for critical industries. We envision a digital landscape where every physical operation—from pipeline flow to server uptime—is meticulously monitored, automated, and secured.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy p-12 relative overflow-hidden group text-white"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket className="w-32 h-32 text-white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <div className="w-12 h-1 bg-brand-sky mb-8"></div>
                <p className="text-brand-light/90 text-lg leading-relaxed">
                  To aggressively deploy elite technical solutions that eradicate operational inefficiencies. We build software that scales, infrastructure that survives, and automations that redefine enterprise capabilities.
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
            <h2 className="text-brand-black text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Execution Layer
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto mb-8"></div>
            <p className="text-brand-navy/70 text-lg max-w-2xl mx-auto">How we translate our vision into tangible engineering outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {[
              { title: "Physical Integration", desc: "Deploying military-grade sensors and CCTV networks into harsh environments.", icon: Box },
              { title: "Digital Synthesis", desc: "Aggregating millions of data points into unified, actionable executive dashboards.", icon: Network },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="bg-white p-12 flex flex-col items-center text-center hover:border-brand-teal transition-all duration-300 border border-transparent z-10 hover:z-20 shadow-sm"
              >
                <div className="p-4 bg-brand-light rounded-sm mb-6 border border-brand-navy/5">
                  <value.icon className="w-8 h-8 text-brand-sky" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">{value.title}</h3>
                <p className="text-brand-navy/80 text-base leading-relaxed max-w-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
