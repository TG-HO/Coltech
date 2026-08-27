"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyPartner() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for the image block
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const points = [
    {
      title: "Innovation-Driven",
      desc: "Cutting-edge telemetry and software systems delivering immediate, measurable business impact.",
    },
    {
      title: "Client-Centric Architecture",
      desc: "Tailored enterprise solutions engineered to integrate seamlessly into existing workflows.",
    },
    {
      title: "Proven Industrial Expertise",
      desc: "Specialized engineering teams possessing deep cross-domain hardware and software mastery.",
    },
    {
      title: "End-to-End Execution",
      desc: "Complete operational lifecycle management from initial schematic planning to 24/7 SLA support.",
    },
  ];

  return (
    <section id="why-partner" ref={containerRef} className="w-full flex flex-col lg:flex-row m-0 p-0 overflow-hidden">
      {/* Left Half: Image with Parallax */}
      <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-auto flex-shrink-0 overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] -top-[10%]">
          <Image
            src="/why-partner-bg.png"
            alt="Industrial Automation & Network Infrastructure"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle Deep Navy overlay */}
          <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Right Half: Content Block */}
      <div className="w-full lg:w-1/2 bg-brand-navy p-12 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.2)] text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[2px] bg-brand-turquoise inline-block"></span>
          <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
            Value Proposition
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
        >
          Why Partner With COLTECH?
        </motion.h2>

        <motion.ul
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              variants={listItemVariants}
              whileHover={{ x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col border-l-2 border-brand-turquoise pl-6"
            >
              <span className="text-white font-bold text-lg md:text-xl mb-1 tracking-wide">
                {point.title}
              </span>
              <span className="text-white/80 text-sm md:text-base leading-relaxed">
                {point.desc}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
