"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight, TerminalSquare, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
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
              Join Our Engineering Core
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Build systems that <br /> <span className="text-brand-light">power industries.</span>
            </h1>
            <div className="w-24 h-1 bg-brand-teal mb-8"></div>
            <p className="text-brand-light text-xl leading-relaxed opacity-90 border-l-2 border-brand-teal pl-6">
              We are an elite team of architects, developers, and engineers. We do not build simple websites; we architect military-grade telemetry, automated ERPs, and secure physical infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Culture Matrix */}
      <section className="py-24 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight mb-4">Engineering Culture</h2>
            <p className="text-brand-navy/70 text-lg max-w-2xl">We prioritize deep technical excellence over corporate bureaucracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {[
              { title: "Deep Work", desc: "Minimal meetings. Maximum uninterrupted coding and architecture time.", icon: TerminalSquare },
              { title: "Hardware Access", desc: "Direct access to enterprise mainframes and IoT pump telemetry hardware.", icon: Cpu },
              { title: "Zero Trust Security", desc: "A culture of strict security audits and fail-safe implementations.", icon: ShieldCheck },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 flex flex-col items-start hover:border-brand-teal transition-all duration-300 border border-transparent z-10 hover:z-20 shadow-[0_0_0_1px_rgba(36,59,74,0.1)]"
              >
                <div className="p-3 bg-brand-light rounded-sm mb-6 border border-brand-navy/5">
                  <value.icon className="w-6 h-6 text-brand-sky" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{value.title}</h3>
                <p className="text-brand-navy/80 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-brand-black text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Open Positions
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-brand-navy/10 p-12 text-center rounded-none shadow-sm flex flex-col items-center justify-center"
          >
            <Briefcase className="w-16 h-16 text-brand-navy/20 mb-6" strokeWidth={1} />
            <h3 className="text-2xl font-bold text-brand-black mb-4">No active openings</h3>
            <p className="text-brand-navy/70 leading-relaxed max-w-lg mb-8">
              We currently do not have any open positions at this time. However, we are always on the lookout for elite talent. Check back soon or follow us on LinkedIn for updates.
            </p>
            <Link 
              href="/"
              className="text-brand-teal font-bold tracking-wide flex items-center gap-2 hover:text-brand-sky transition-colors"
            >
              Return Home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
