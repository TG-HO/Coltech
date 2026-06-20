"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Server, Activity, ShieldAlert, Cpu } from "lucide-react";

export default function HardwareIntegrationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="w-full py-32 bg-brand-navy text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Hardware Integration Map
          </h2>
          <div className="w-16 h-1 bg-brand-teal mx-auto"></div>
        </div>

        <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
          {/* SVG Branching Paths */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 500 100 L 500 300 L 200 450"
              fill="transparent"
              stroke="#6D9DC5" // brand-sky
              strokeWidth="3"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 300 L 800 450"
              fill="transparent"
              stroke="#6D9DC5" // brand-sky
              strokeWidth="3"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 300 L 500 550"
              fill="transparent"
              stroke="#156064" // brand-teal
              strokeWidth="4"
              strokeDasharray="10 10"
              style={{ pathLength }}
            />
          </svg>

          {/* Central Node */}
          <div className="absolute top-[16.6%] md:top-[16.6%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-light text-brand-navy flex items-center justify-center shadow-2xl z-20 hover:scale-[1.05] transition-transform">
              <Server className="w-10 h-10" />
            </div>
            <span className="mt-4 font-bold tracking-widest uppercase text-sm">Core Mainframe</span>
          </div>

          {/* Branch 1 */}
          <div className="absolute top-[75%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-white border-2 border-brand-sky text-brand-navy flex items-center justify-center z-20 hover:scale-[1.05] hover:bg-brand-sky transition-all group">
              <Activity className="w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <span className="mt-4 font-bold tracking-widest text-xs opacity-80 uppercase text-center max-w-[120px]">Pump Telemetry</span>
          </div>

          {/* Branch 2 */}
          <div className="absolute top-[75%] right-[20%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-white border-2 border-brand-sky text-brand-navy flex items-center justify-center z-20 hover:scale-[1.05] hover:bg-brand-sky transition-all group">
              <ShieldAlert className="w-8 h-8 group-hover:text-white transition-colors" />
            </div>
            <span className="mt-4 font-bold tracking-widest text-xs opacity-80 uppercase text-center max-w-[120px]">CCTV Network</span>
          </div>

          {/* Branch 3 */}
          <div className="absolute top-[91.6%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-teal border-2 border-brand-teal text-white flex items-center justify-center z-20 hover:scale-[1.05] hover:bg-brand-sky transition-all group">
              <Cpu className="w-8 h-8" />
            </div>
            <span className="mt-4 font-bold tracking-widest text-xs opacity-80 uppercase text-center max-w-[120px]">Edge Compute</span>
          </div>

        </div>

      </div>
    </section>
  );
}
