"use client";

import { motion } from "framer-motion";

export default function StatementBlock() {
  return (
    <section className="w-full bg-white relative">
      {/* Top 2px architectural rule separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-brand-turquoise origin-left"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden">
        {/* H2 Title */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <h2 className="text-brand-navy text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            Empowering businesses through innovation, automation, and <span className="text-brand-turquoise">digital transformation</span>.
          </h2>
        </motion.div>

        {/* Supporting Paragraph */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-1/2 flex items-center"
        >
          <p className="text-brand-navy/80 text-lg md:text-xl font-normal leading-[1.8] border-l-2 border-brand-turquoise pl-8">
            Established in 2024, Circle of Life (COLTECH) is a forward-thinking
            technology company committed to delivering innovative, reliable, and
            scalable enterprise IT solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
