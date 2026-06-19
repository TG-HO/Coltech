"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function ScrollZoomTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Use clip-path inset to reveal the full-res image instead of CSS scaling.
  // This completely eliminates blurriness since the image renders at native resolution.
  // We go from a small pill shape in the center, to a full screen rectangle.
  const clipPath = useTransform(
    smoothProgress, 
    [0, 0.8], 
    ["inset(40vh 35vw 40vh 35vw round 100px)", "inset(0vh 0vw 0vh 0vw round 0px)"]
  );
  
  // Fade out the initial flanking text smoothly early in the scroll
  const initialTextOpacity = useTransform(smoothProgress, [0.05, 0.3], [1, 0]);

  // Fade in the final overlay text once the image covers the screen
  const overlayTextOpacity = useTransform(smoothProgress, [0.7, 0.9], [0, 1]);
  const overlayTextY = useTransform(smoothProgress, [0.7, 0.9], [50, 0]);

  // Ensure the image darkness increases as it gets larger so white text is readable
  const overlayDarkness = useTransform(smoothProgress, [0, 0.8], [0.3, 0.75]);

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-brand-light">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Flanking Text Container */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-[40vw] z-10 pointer-events-none"
        >
          <motion.h2 
            style={{ opacity: initialTextOpacity }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-brand-black tracking-tighter whitespace-nowrap"
          >
            We are
          </motion.h2>
          <motion.h2 
            style={{ opacity: initialTextOpacity }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-brand-black tracking-tighter whitespace-nowrap"
          >
            COLTECH
          </motion.h2>
        </motion.div>
        
        {/* Crisp Full-Resolution Image Reveal */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 w-full h-full z-20 flex items-center justify-center will-change-transform"
        >
          <Image
            src="/capsule-bg.png"
            alt="High density server room"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Dynamic dark mask to ensure perfect readability of the final text */}
          <motion.div 
            style={{ opacity: overlayDarkness }}
            className="absolute inset-0 bg-brand-navy mix-blend-multiply" 
          />
        </motion.div>

        {/* Final Overlay Text */}
        <motion.div
          style={{ opacity: overlayTextOpacity, y: overlayTextY }}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        >
          <div className="max-w-4xl px-6 text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
              Automating systems for industry giants like{" "}
              <span className="text-brand-sky">Taj Gasoline</span>.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
