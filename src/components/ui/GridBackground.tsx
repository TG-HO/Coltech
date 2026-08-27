"use client";

import { memo } from "react";

const GridBackground = memo(function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.035]">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#152F52"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
        />
      </svg>
      {/* Subtle radial gradient to fade out edges into brand light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#F8FAFC_100%)]"></div>
    </div>
  );
});

export default GridBackground;
