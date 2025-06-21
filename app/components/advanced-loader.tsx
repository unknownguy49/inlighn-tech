"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AdvancedLoaderProps {
  onComplete: () => void
}

export default function AdvancedLoader({ onComplete }: AdvancedLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState(0) // 0: loading, 1: logo reveal, 2: complete
  const [loadingText, setLoadingText] = useState("Initializing")

  const loadingTexts = ["Initializing", "Loading Assets", "Preparing Experience", "Almost Ready", "Welcome"]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 2 + 0.5
        const newProgress = Math.min(prev + increment, 100)

        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1))
        setLoadingText(loadingTexts[textIndex])

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setStage(1), 500)
          setTimeout(() => setStage(2), 2000)
          setTimeout(onComplete, 3000)
        }

        return newProgress
      })
    }, 80)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-blue-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 2,
                    delay: i * 0.01,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
              }}
            />
          ))}

          <div className="text-center z-10">
            {stage === 0 && (
              <>
                {/* Progress Counter with glitch effect */}
                <motion.div
                  className="relative text-8xl md:text-9xl font-mono font-black text-white mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    key={Math.floor(progress)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block"
                  >
                    {String(Math.floor(progress)).padStart(3, "0")}
                  </motion.span>

                  {/* Glitch overlay */}
                  <motion.div
                    className="absolute inset-0 text-blue-400 opacity-30"
                    animate={{
                      x: [0, -2, 2, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {String(Math.floor(progress)).padStart(3, "0")}
                  </motion.div>
                </motion.div>

                {/* Advanced progress bar */}
                <div className="w-96 h-2 bg-gray-800 rounded-full mb-8 mx-auto overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 400] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Loading text with typewriter effect */}
                <motion.div
                  className="text-gray-400 text-xl font-medium tracking-wider"
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  >
                    _
                  </motion.span>
                </motion.div>
              </>
            )}

            {stage === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                {/* Logo reveal with advanced animation */}
                <motion.div
                  className="text-6xl md:text-8xl font-black text-white mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.span
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Inlighn
                  </motion.span>
                  <motion.span
                    className="inline-block"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Tech
                  </motion.span>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                  className="text-gray-400 text-xl tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Shaping Tomorrow's Tech Leaders
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
