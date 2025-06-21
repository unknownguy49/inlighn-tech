"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// Water Ripple Effect Component
export function WaterRipple({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const createRipple = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
    }, 1000)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} onClick={createRipple}>
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ scale: 0, opacity: 0.6 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-4 h-4 -ml-2 -mt-2 rounded-full bg-blue-400/30 border border-blue-400/50" />
        </motion.div>
      ))}
    </div>
  )
}

// Ink Blob Effect
export function InkBlob({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 0.1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <motion.path
          d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
          fill="url(#inkGradient)"
          initial={{ pathLength: 0 }}
          animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <defs>
          <radialGradient id="inkGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  )
}

// Liquid Loading Animation
export function LiquidLoader({ progress }: { progress: number }) {
  return (
    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
        style={{
          clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            ],
            backgroundPosition: ["-100% 0", "200% 0"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Liquid bubbles */}
      <div className="absolute inset-0 flex items-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-white/60 rounded-full absolute"
            style={{ left: `${Math.min(progress - 5 + i * 2, 95)}%` }}
            animate={{
              y: [0, -4, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Fluid Morphing Background
export function FluidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        <motion.path
          d="M0,300 C300,200 700,400 1000,300 L1000,1000 L0,1000 Z"
          fill="url(#fluidGradient1)"
          animate={{
            d: [
              "M0,300 C300,200 700,400 1000,300 L1000,1000 L0,1000 Z",
              "M0,400 C300,300 700,200 1000,350 L1000,1000 L0,1000 Z",
              "M0,350 C300,250 700,350 1000,250 L1000,1000 L0,1000 Z",
              "M0,300 C300,200 700,400 1000,300 L1000,1000 L0,1000 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,500 C400,400 600,600 1000,500 L1000,1000 L0,1000 Z"
          fill="url(#fluidGradient2)"
          animate={{
            d: [
              "M0,500 C400,400 600,600 1000,500 L1000,1000 L0,1000 Z",
              "M0,600 C400,500 600,400 1000,550 L1000,1000 L0,1000 Z",
              "M0,550 C400,450 600,550 1000,450 L1000,1000 L0,1000 Z",
              "M0,500 C400,400 600,600 1000,500 L1000,1000 L0,1000 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <defs>
          <linearGradient id="fluidGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="fluidGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Scroll-triggered Liquid Wave
export function ScrollLiquidWave() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-32">
        <motion.path
          d={`M0,60 C300,${60 + Math.sin(scrollY * 0.01) * 20} 900,${60 - Math.sin(scrollY * 0.01) * 20} 1200,60 L1200,120 L0,120 Z`}
          fill="url(#scrollWaveGradient)"
          transition={{ duration: 0.1 }}
        />
        <defs>
          <linearGradient id="scrollWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
