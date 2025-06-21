"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const partners = [
    {
      name: "MCA",
      logo: "/images/mca-logo.webp",
      description: "Ministry of Corporate Affairs",
    },
    {
      name: "ISO",
      logo: "/images/iso-logo.png",
      description: "International Organization for Standardization",
    },
    {
      name: "Startup India",
      logo: "/images/startup-india-logo.png",
      description: "Government of India Initiative",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted & Certified</h3>
          <p className="text-gray-300">Recognized by leading organizations and government bodies</p>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-4xl">
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
              <AnimatePresence mode="wait">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className={`flex flex-col items-center transition-all duration-500 ${
                      index === currentIndex ? "opacity-100 scale-110" : "opacity-40 scale-90"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: index === currentIndex ? 1 : 0.4, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 bg-gray-800 rounded-xl p-3 shadow-lg">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <h4 className="font-semibold text-white text-sm md:text-base">{partner.name}</h4>
                    <p className="text-xs text-gray-400 text-center max-w-32">{partner.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
