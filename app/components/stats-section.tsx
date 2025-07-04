"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, FolderOpen, ThumbsUp, Award } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    {
      icon: Users,
      label: "INTERNS ENROLLED",
      value: 5000,
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FolderOpen,
      label: "PROJECTS COMPLETED",
      value: 1200,
      suffix: "+",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ThumbsUp,
      label: "SATISFACTION RATE",
      value: 98,
      suffix: "%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      label: "TOP INSTRUCTORS",
      value: 50,
      suffix: "+",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6">Our Impact in Numbers</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming careers and building the future of technology education
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                onViewportEnter={() => setIsVisible(true)}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                </div>

                <div className="mb-2 md:mb-3">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground"
                  />
                </div>

                <p className="text-sm md:text-base font-semibold text-muted-foreground tracking-wide">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({
  target,
  suffix = "",
  isVisible,
  className,
}: {
  target: number
  suffix?: string
  isVisible: boolean
  className?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target])

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
