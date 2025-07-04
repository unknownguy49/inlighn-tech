"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import ScrollReveal from "./scroll-reveal"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      company: "Google",
      content:
        "InlighnTech completely transformed my career trajectory. The hands-on approach and industry mentorship helped me land my dream job at Google. The curriculum is cutting-edge and the instructors are world-class.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      program: "Full Stack Development",
    },
    {
      name: "Michael Chen",
      role: "Cybersecurity Analyst at Microsoft",
      company: "Microsoft",
      content:
        "The cybersecurity program is incredibly comprehensive. I went from zero knowledge to securing enterprise systems in just 12 weeks. The practical labs and real-world scenarios prepared me perfectly for my role.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      program: "Cybersecurity",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Netflix",
      company: "Netflix",
      content:
        "The data science curriculum is cutting-edge and industry-relevant. I'm now building ML models that impact millions of users. The career support team helped me negotiate a 200% salary increase!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      program: "Data Science",
    },
    {
      name: "David Park",
      role: "Business Intelligence Analyst at Amazon",
      company: "Amazon",
      content:
        "The data analysis program gave me the skills to transition from finance to tech. The instructors are patient, knowledgeable, and always available to help. Best investment I've ever made in my career.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      program: "Data Analysis",
    },
    {
      name: "Lisa Wang",
      role: "Full Stack Developer at Spotify",
      company: "Spotify",
      content:
        "From complete beginner to full stack developer in 16 weeks! The project-based learning approach and mentorship program made all the difference. I'm now working on features used by millions of music lovers.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      program: "Full Stack Development",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Quote className="h-8 w-8 md:h-10 md:w-10 text-purple-400" />
              <h2 className="text-3xl md:text-5xl font-black text-foreground">Success Stories</h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hear from our graduates who are now thriving in top tech companies
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="relative h-96 md:h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-background/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700/50 h-full flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                      <p className="text-purple-400 font-semibold text-base md:text-lg">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {testimonials[currentIndex].program} Graduate
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-700/50"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-muted-foreground group-hover:text-purple-400 transition-colors" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-background/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-700/50"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-muted-foreground group-hover:text-purple-400 transition-colors" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-purple-400 w-8" : "bg-gray-600 hover:bg-background0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
