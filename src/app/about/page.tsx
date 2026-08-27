"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Target, Lightbulb, Users, Shield, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import ContactModal from "@/components/ui/ContactModal";
import Image from "next/image";

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

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
              The Circle of Life (COLTECH)
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Engineering the <br /> <span className="text-brand-turquoise">future of enterprise.</span>
            </h1>
            <div className="w-20 h-1 bg-brand-turquoise mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed border-l-2 border-brand-turquoise pl-6">
              COLTECH was founded on a singular vision: to bring high-availability IT infrastructure, seamless pump automation, and custom software directly into the operations of industry giants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Matrix */}
      <section className="py-28 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
              Foundational Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Core Values</h2>
            <p className="text-brand-navy/70 text-base md:text-lg max-w-2xl">The architectural and ethical pillars that dictate our engineering choices and client partnerships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Precision", desc: "Absolute accuracy in every line of production code and server rack configuration.", icon: Target },
              { title: "Innovation", desc: "Pioneering new standards in IoT telemetry and automated ERP integrations.", icon: Lightbulb },
              { title: "Integrity", desc: "Transparent, secure engineering with zero black-box dependencies.", icon: Shield },
              { title: "Partnership", desc: "We operate as an agile, dedicated extension of your internal teams.", icon: Users },
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

      {/* History Timeline */}
      <section className="py-32 bg-brand-light relative" ref={timelineRef}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs uppercase block mb-2">
              Evolution & Milestones
            </span>
            <h2 className="text-brand-navy text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-brand-turquoise mx-auto"></div>
          </div>

          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-navy/10 -translate-x-1/2"></div>
            
            {/* Animated SVG Tracing Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 overflow-visible">
              <svg
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full"
                preserveAspectRatio="none"
                viewBox="0 0 4 1000"
              >
                <motion.line
                  x1="2" y1="0" x2="2" y2="1000"
                  stroke="#1CB08F"
                  strokeWidth="4"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength }}
                />
              </svg>
            </div>

            <div className="flex flex-col gap-20 relative z-20">
              {[
                { year: "2024", title: "Company Inception", desc: "COLTECH is established to bridge the gap between heavy physical infrastructure and modern enterprise software architectures." },
                { year: "2024", title: "Taj Gasoline Strategic Partnership", desc: "Secured our anchor enterprise contract, automating end-to-end wetstock telemetry and multi-site retail POS." },
                { year: "2025", title: "Infrastructure & Security Scaling", desc: "Scaling operations into AI-enabled CCTV monitoring and high-density server rack deployments." },
                { year: "Future", title: "Global Technology Ecosystem", desc: "Continuing our mission to digitize, automate, and optimize critical enterprise operations globally." },
              ].map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center">
                      <div className="w-20 h-20 bg-brand-navy border-2 border-brand-turquoise flex items-center justify-center z-30 shrink-0 absolute left-0 md:static shadow-lg">
                        <span className="text-brand-turquoise font-bold text-sm tracking-wider">{step.year}</span>
                      </div>
                    </div>
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white p-8 border border-brand-navy/10 hover:border-brand-turquoise transition-all duration-300 rounded-none shadow-sm"
                      >
                        <h3 className="text-2xl font-bold text-brand-navy mb-2">{step.title}</h3>
                        <p className="text-brand-navy/75 leading-relaxed text-sm md:text-base">{step.desc}</p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 bg-brand-navy text-center px-6">
        <span className="text-brand-turquoise font-semibold tracking-[0.25em] text-xs uppercase block mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
          Ready to modernize your infrastructure?
        </h2>
        <motion.button
          onClick={() => setIsContactOpen(true)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="bg-brand-turquoise text-white px-8 py-4 rounded font-bold text-base md:text-lg inline-flex items-center gap-3 hover:bg-white hover:text-brand-navy shadow-lg shadow-brand-turquoise/20 transition-all cursor-pointer"
        >
          Contact Our Engineers <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
