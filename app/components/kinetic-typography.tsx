"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface KineticTextProps {
  text: string
  className?: string
  delay?: number
  type?: "letters" | "words" | "lines"
}

export function KineticText({ text, className = "", delay = 0, type = "letters" }: KineticTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (type === "letters") {
    return (
      <div className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="inline-block"
            style={{ transformOrigin: "50% 50%" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    )
  }

  if (type === "words") {
    return (
      <div className={className}>
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {text}
    </motion.div>
  )
}

export function AnimatedCounter({
  target,
  duration = 2000,
  delay = 0,
}: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {count}
    </motion.span>
  )
}

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="relative z-10"
        animate={{
          x: [0, -2, 2, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-blue-500 opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-red-500 opacity-70"
        animate={{
          x: [0, -1, 1, 0],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 3,
          delay: 0.05,
        }}
      >
        {text}
      </motion.span>
    </div>
  )
}
