"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  id: string
}

export default function SectionDivider({ id }: SectionDividerProps) {
  return (
    <div id={id} className="relative py-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
