"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "./ContactModal";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax background (moves slower than scroll)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Fade out content as user scrolls down
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image
          src="/hero-bg.png"
          alt="Enterprise Server Infrastructure"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Deep Navy brand overlay mask */}
        <div className="absolute inset-0 bg-[#152F52]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#152F52]/55" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 flex flex-col items-start justify-center"
      >
        {/* Brand Kicker - High-contrast Turquoise Tagline Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#152F52]/85 border border-[#1CB08F]/50 backdrop-blur-md shadow-lg shadow-[#1CB08F]/10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#1CB08F] animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
          <span className="text-[#1CB08F] font-bold tracking-[0.25em] text-xs md:text-sm uppercase drop-shadow-sm">
            BEYOND THE DIGITAL <span className="text-white/40 font-normal mx-1">//</span> ENTERPRISE IT & AUTOMATION
          </span>
        </motion.div>

        {/* H1 Headline */}
        <motion.h1 variants={itemVariants} className="text-white font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] max-w-4xl mb-8 drop-shadow-md">
          Future-Ready Technology for <span className="text-[#1CB08F]">Scalable Growth.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-white/90 text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-12 border-l-2 border-[#1CB08F] pl-6">
          Empowering modern enterprises through custom software, smart pump automation,
          and secure end-to-end IT infrastructure.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#1CB08F] text-white px-8 py-4 rounded font-bold tracking-wide shadow-lg shadow-[#1CB08F]/25 hover:bg-white hover:text-[#152F52] hover:shadow-xl text-center min-w-[200px] transition-all duration-300 cursor-pointer"
          >
            Deploy Solutions
          </motion.button>
          <motion.a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-transparent border-2 border-white/80 hover:border-[#1CB08F] text-white hover:text-[#1CB08F] px-8 py-4 rounded font-bold tracking-wide text-center min-w-[200px] transition-all duration-300 cursor-pointer backdrop-blur-xs"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
