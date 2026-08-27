"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, TerminalSquare, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
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
              Engineering Core
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Build systems that <br /> <span className="text-brand-turquoise">power industries.</span>
            </h1>
            <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed border-l-2 border-brand-turquoise pl-6">
              We are an elite team of architects, developers, and systems engineers. We architect high-concurrency telemetry, automated ERPs, and secure physical infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Culture Matrix */}
      <section className="py-28 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
              Our Ethos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Engineering Culture</h2>
            <p className="text-brand-navy/70 text-base md:text-lg max-w-2xl">We prioritize deep technical craftsmanship, clean architectures, and zero bureaucracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Deep Focus", desc: "Minimal meetings. Maximum uninterrupted architectural and coding deep work.", icon: TerminalSquare },
              { title: "Hardware Integration", desc: "Direct access to bare-metal mainframes, edge computing clusters, and pump telemetry hardware.", icon: Cpu },
              { title: "Zero Trust Security", desc: "A culture of continuous security audits, fail-safe redundancy, and Zero-Downtime rollouts.", icon: ShieldCheck },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-brand-light p-8 flex flex-col items-start border border-brand-navy/10 hover:border-brand-turquoise hover:shadow-xl transition-all duration-300 rounded-none group"
              >
                <div className="p-3.5 bg-white rounded-sm mb-6 border border-brand-navy/10 group-hover:border-brand-turquoise transition-colors">
                  <value.icon className="w-6 h-6 text-brand-turquoise" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-turquoise transition-colors">{value.title}</h3>
                <p className="text-brand-navy/75 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
              Opportunities
            </span>
            <h2 className="text-brand-navy text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Open Positions
            </h2>
            <div className="w-20 h-1 bg-brand-turquoise mx-auto"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-brand-navy/10 p-12 text-center rounded-none shadow-sm flex flex-col items-center justify-center"
          >
            <div className="p-4 bg-brand-light border border-brand-navy/10 rounded-full mb-6">
              <Briefcase className="w-10 h-10 text-brand-turquoise" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">No active openings</h3>
            <p className="text-brand-navy/70 leading-relaxed max-w-lg mb-8 text-sm md:text-base">
              We currently do not have any publicly open positions. However, we are always interested in connecting with elite systems architects and full-stack developers.
            </p>
            <Link 
              href="/"
              className="bg-brand-turquoise text-white px-6 py-3 rounded font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-brand-navy transition-colors shadow-sm"
            >
              Return Home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
