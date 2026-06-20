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
              The Circle of Life
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Engineering the <br /> <span className="text-brand-light">future of enterprise.</span>
            </h1>
            <div className="w-24 h-1 bg-brand-teal mb-8"></div>
            <p className="text-brand-light text-xl leading-relaxed opacity-90 border-l-2 border-brand-teal pl-6">
              COLTECH was founded on a singular vision: to bring military-grade IT infrastructure, seamless automation, and custom software directly into the hands of industry giants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Matrix (Flat Ink Design) */}
      <section className="py-24 bg-white border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black tracking-tight mb-4">Core Values</h2>
            <p className="text-brand-navy/70 text-lg max-w-2xl">The foundational pillars that dictate our architectural choices and client relationships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-navy/10 border border-brand-navy/10">
            {[
              { title: "Precision", desc: "Absolute accuracy in every line of code and server rack.", icon: Target },
              { title: "Innovation", desc: "Pushing boundaries in automation and AI integrations.", icon: Lightbulb },
              { title: "Integrity", desc: "Transparent engineering with zero black-box solutions.", icon: Shield },
              { title: "Partnership", desc: "We operate as an extension of your internal teams.", icon: Users },
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

      {/* History Timeline */}
      <section className="py-32 bg-brand-light relative" ref={timelineRef}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-brand-black text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Our Journey
            </h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto"></div>
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
                  stroke="#156064"
                  strokeWidth="4"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength }}
                />
              </svg>
            </div>

            <div className="flex flex-col gap-24 relative z-20">
              {[
                { year: "2024", title: "Inception", desc: "COLTECH is founded to bridge the gap between heavy industry and modern software architectures." },
                { year: "2024", title: "Taj Gasoline Partnership", desc: "Secured our first major enterprise contract, automating end-to-end wetstock telemetry." },
                { year: "2025", title: "Expansion", desc: "Scaling operations into AI-enabled CCTV and massive server rack deployments." },
                { year: "Future", title: "Global Reach", desc: "Continuing our mission to digitize and optimize infrastructure globally." },
              ].map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center">
                      <div className="w-20 h-20 bg-brand-navy border-4 border-white flex items-center justify-center z-30 shrink-0 absolute left-0 md:static">
                        <span className="text-brand-light font-bold">{step.year}</span>
                      </div>
                    </div>
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-white p-8 border border-brand-navy/10 hover:border-brand-teal transition-colors duration-300 rounded-none shadow-sm"
                      >
                        <h3 className="text-2xl font-bold text-brand-black mb-2">{step.title}</h3>
                        <p className="text-brand-navy/80 leading-relaxed">{step.desc}</p>
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
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">Ready to modernize your infrastructure?</h2>
        <motion.button
          onClick={() => setIsContactOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-sky text-white px-8 py-4 rounded font-bold text-lg inline-flex items-center gap-3 hover:bg-white hover:text-brand-navy transition-colors"
        >
          Contact Our Engineers <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
