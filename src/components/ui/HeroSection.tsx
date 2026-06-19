"use client";

import Image from "next/image";
import { color, motion, useScroll, useTransform } from "framer-motion";
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section ref={ref} className="relative w-full min-h-[85vh] flex items-center pt-20 overflow-hidden">
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
        {/* Dark slate mask overlay */}
        <div className="absolute inset-0 bg-brand-navy/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-navy/40" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-start justify-center"
      >
        {/* Kicker */}
        <motion.span variants={itemVariants} className="text-brand-sky font-bold tracking-[0.2em] text-sm md:text-base mb-6 uppercase flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brand-sky inline-block"></span>
          Enterprise IT & Infrastructure Automation
        </motion.span>

        {/* H1 Headline */}
        <motion.h1 variants={itemVariants} className="text-white font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] max-w-4xl mb-8 drop-shadow-md">
          Future-Ready Technology for <span className="text-brand-sky">Scalable Growth.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-brand-light text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-12 opacity-90 border-l-2 border-brand-teal pl-6">
          Empowering businesses through custom software, smart pump automation,
          and secure end-to-end IT infrastructure.
        </motion.p>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <motion.button
            onClick={() => setIsContactOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-teal text-white px-8 py-4 rounded font-bold tracking-wide shadow-lg hover:shadow-brand-teal/20 hover:shadow-xl text-center min-w-[200px] transition-shadow duration-300 cursor-pointer"
          >
            Deploy Solutions
          </motion.button>
          <motion.a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded font-bold tracking-wide text-center min-w-[200px] cursor-pointer"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
