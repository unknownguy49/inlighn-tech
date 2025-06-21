"use client"

import { motion } from "framer-motion"

export default function FloatingBubbles() {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-white/20 to-blue-200/30 dark:from-white/10 dark:to-blue-400/20 backdrop-blur-sm border border-white/20 dark:border-white/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
