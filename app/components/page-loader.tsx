"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-center">
            {/* Progress Counter */}
            <motion.div
              className="text-6xl md:text-8xl font-mono font-bold text-foreground mb-12 drop-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {String(Math.floor(progress)).padStart(3, "0")}
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 h-2 bg-muted border border-border rounded-full mb-16 mx-auto overflow-hidden shadow-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>

            {/* Logo Animation */}
            <motion.div
              className="text-4xl md:text-6xl font-black text-foreground"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: progress > 90 ? 1 : 0,
                scale: progress > 90 ? 1 : 0.8,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Inlighn
              </span>
              Tech
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-muted-foreground text-lg mt-6 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
