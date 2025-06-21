"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MicroLoaderProps {
  onComplete: () => void
}

export default function MicroLoader({ onComplete }: MicroLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState(0) // 0: loading, 1: logo reveal, 2: complete

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 4 + 1
        const newProgress = Math.min(prev + increment, 100)

        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => setStage(1), 300)
          setTimeout(() => setStage(2), 1500)
          setTimeout(onComplete, 2200)
        }

        return newProgress
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          exit={{
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="text-center">
            {stage === 0 && (
              <>
                {/* Simple progress bar like Micro */}
                <div className="w-64 h-0.5 bg-gray-800 rounded-full mb-8 mx-auto overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                </div>

                {/* Minimal text */}
                <motion.p
                  className="text-gray-500 text-sm font-medium tracking-wider uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Loading
                </motion.p>
              </>
            )}

            {stage === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                {/* Clean logo reveal */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-blue-500">Inlighn</span>Tech
                </motion.div>

                <motion.p
                  className="text-gray-400 text-sm tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Tech Education Platform
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
