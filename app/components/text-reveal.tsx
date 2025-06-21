"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  // Convert children to string safely
  const text = typeof children === "string" ? children : React.Children.toArray(children).join(" ")
  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  )
}
