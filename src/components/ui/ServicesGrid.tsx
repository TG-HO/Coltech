"use client";

import { Code, Bot, Droplet, ShieldCheck, Network, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Software Development",
    copy: "Custom web applications, responsive cross-platform mobile apps, and dedicated enterprise ERP solutions.",
    icon: Code,
    href: "/software",
  },
  {
    title: "Pump Automation",
    copy: "Smart telemetry automation and integrated ERP for operational control, dispensing volume, and retail POS.",
    icon: Droplet,
    href: "/automation",
  },
  {
    title: "AI & Machine Learning",
    copy: "Advanced computer vision, predictive telemetry analytics, and autonomous process orchestration pipelines.",
    icon: Bot,
    href: "/software",
  },
  {
    title: "CCTV & Security",
    copy: "End-to-end industrial CCTV deployment with AI-enabled surveillance monitoring and perimeter safeguards.",
    icon: ShieldCheck,
    href: "/infrastructure",
  },
  {
    title: "Enterprise Networking",
    copy: "High-performance physical layer networking, structural server configuration, and high-availability nodes.",
    icon: Network,
    href: "/infrastructure",
  },
  {
    title: "Data Logistics",
    copy: "Real-time edge telemetry and multi-location active auditing dashboards built for Zero-Downtime operations.",
    icon: Database,
    href: "/automation",
  },
];

export default function ServicesGrid() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
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

  return (
    <section id="services" className="w-full bg-brand-light py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-brand-turquoise inline-block"></span>
            <span className="text-brand-turquoise font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-brand-navy text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Elite Service Offerings
          </h2>
          <div className="w-20 h-1 bg-brand-turquoise"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              onClick={() => router.push(service.href)}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group bg-white p-8 border border-brand-navy/10 hover:border-brand-turquoise hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300 flex flex-col items-start rounded-none cursor-pointer"
            >
              <div className="mb-6 p-3.5 bg-brand-light border border-brand-navy/5 rounded-sm inline-block group-hover:bg-brand-turquoise/10 transition-colors">
                <service.icon
                  className="w-7 h-7 text-brand-turquoise transition-colors duration-300 group-hover:text-brand-navy"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-brand-navy font-bold text-xl mb-3 leading-tight group-hover:text-brand-turquoise transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-navy/75 text-sm md:text-base leading-[1.7]">
                {service.copy}
              </p>
              <div className="mt-auto pt-8 w-full">
                <span className="text-brand-turquoise font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 group-hover:text-brand-navy transition-colors">
                  Explore Platform
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block font-mono"
                  >
                    &rarr;
                  </motion.span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
