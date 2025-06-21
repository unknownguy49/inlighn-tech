"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedPath() {
  const pathRef = useRef<SVGPathElement>(null)

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        className="absolute inset-0"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Curved path that spans across the screen */}
        <path
          ref={pathRef}
          d="M-100,300 Q400,100 800,400 T1600,200 Q1800,300 2000,500"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="2"
          fill="none"
          className="drop-shadow-sm"
        />

        {/* Animated ball moving along the path */}
        <motion.circle
          r="8"
          fill="url(#ballGradient)"
          className="drop-shadow-lg"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M-100,300 Q400,100 800,400 T1600,200 Q1800,300 2000,500')",
          }}
        />

        {/* Gradient definition for the ball */}
        <defs>
          <radialGradient id="ballGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
