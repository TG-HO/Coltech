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
      desc: "Cutting-edge technology with practical business impact.",
    },
    {
      title: "Client-Centric Approach",
      desc: "Customized solutions to meet unique business needs.",
    },
    {
      title: "Proven Expertise",
      desc: "Experienced team with multi-domain knowledge.",
    },
    {
      title: "End-to-End Solutions",
      desc: "From planning to implementation and support.",
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
          {/* Subtle overlay to ensure the image matches the dark slate mood slightly */}
          <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Right Half: Content Block */}
      <div className="w-full lg:w-1/2 bg-brand-navy p-12 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12"
        >
          Why Partner With COL?
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
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="flex flex-col border-l-2 border-brand-teal pl-6"
            >
              <span className="text-white font-bold text-xl mb-1 tracking-wide">
                {point.title}:
              </span>
              <span className="text-brand-sky text-base leading-relaxed tracking-wide">
                {point.desc}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
