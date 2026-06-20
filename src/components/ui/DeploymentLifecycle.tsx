"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    title: "System Architecture",
    description: "Mapping existing legacy frameworks and defining telemetry endpoints for structural integration.",
    icon: Database,
  },
  {
    title: "Custom Engineering",
    description: "Developing scalable Next.js and Node microservices specifically tuned for high-frequency data.",
    icon: Code,
  },
  {
    title: "Compliance & Testing",
    description: "Rigorous QA environments mimicking live node traffic for absolute Zero-Downtime assurance.",
    icon: CheckCircle,
  },
  {
    title: "Enterprise Deployment",
    description: "Rolling out localized instances with active monitoring and continuous AI-driven optimization.",
    icon: Rocket,
  },
];

export default function DeploymentLifecycle() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // SVG Line Path Tracing
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="w-full py-32 bg-brand-light relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-left">
          <h2 className="text-brand-black text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Deployment Lifecycle
          </h2>
          <div className="w-16 h-1 bg-brand-teal"></div>
        </div>

        <div className="relative">
          {/* Tracing Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-navy/10 -translate-x-1/2"></div>
          
          {/* Tracing Line Foreground (SVG) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 overflow-visible">
            <svg
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full"
              preserveAspectRatio="none"
              viewBox="0 0 4 1000"
            >
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="1000"
                stroke="#156064" // brand-teal
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
                style={{
                  pathLength: pathLength,
                }}
              />
            </svg>
          </div>

          <div className="flex flex-col gap-24 relative z-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="w-full md:w-1/2 flex items-center justify-start md:justify-center">
                    <div className="w-16 h-16 bg-white border border-brand-navy/10 shadow-lg flex items-center justify-center z-30 shrink-0 absolute left-0 md:static">
                      <step.icon className="w-8 h-8 text-brand-sky" />
                    </div>
                  </div>
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-white p-8 border border-brand-navy/10 hover:border-brand-teal hover:scale-[1.02] transition-all duration-300 rounded-none"
                    >
                      <h3 className="text-2xl font-bold text-brand-black mb-3">{step.title}</h3>
                      <p className="text-brand-navy opacity-80 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
