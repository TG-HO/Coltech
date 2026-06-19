"use client";

import { Code, Bot, Droplet, ShieldCheck, Network, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Software Development",
    copy: "Custom applications, web and mobile app development, and enterprise ERP solutions.",
    icon: Code,
    href: "/software",
  },
  {
    title: "Pump Automation",
    copy: "Smart automation and integrated ERP for operational control, sales, and finance.",
    icon: Droplet,
    href: "/automation",
  },
  {
    title: "AI & Machine Learning",
    copy: "Advanced computer vision, predictive analytics, and process automation pipelines.",
    icon: Bot,
    href: "/software",
  },
  {
    title: "CCTV & Security",
    copy: "End-to-end CCTV installation and AI-enabled surveillance monitoring.",
    icon: ShieldCheck,
    href: "/infrastructure",
  },
  {
    title: "Enterprise Networking",
    copy: "High-performance physical layer networking and structural server configuration.",
    icon: Network,
    href: "/infrastructure",
  },
  {
    title: "Data Logistics",
    copy: "Real-time edge telemetry and multi-location active auditing dashboards.",
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section id="services" className="w-full bg-brand-light py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-brand-black text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Elite Service Offerings
          </h2>
          <div className="w-16 h-1 bg-brand-teal"></div>
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
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(36, 59, 74, 0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group bg-white p-8 border border-brand-navy/10 flex flex-col items-start rounded-sm cursor-pointer"
            >
              <div className="mb-6 p-3 bg-brand-light rounded-sm inline-block">
                <service.icon
                  className="w-8 h-8 text-brand-teal transition-colors duration-300 group-hover:text-brand-sky"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-brand-black font-bold text-xl mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-brand-navy text-base leading-[1.8] opacity-85">
                {service.copy}
              </p>
              <div className="mt-auto pt-8 w-full">
                <span className="text-brand-teal font-semibold text-sm tracking-wide uppercase flex items-center gap-2 group-hover:text-brand-sky transition-colors">
                  Explore Platform
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="inline-block"
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
