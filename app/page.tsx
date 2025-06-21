"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Code, Database, BarChart3, CheckCircle, Star, Play, ChevronRight } from "lucide-react"
import Image from "next/image"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import MicroLoader from "./components/micro-loader"
import ScrollReveal from "./components/scroll-reveal"
import CustomCursor from "./components/custom-cursor"
import StarfieldBackground from "./components/starfield-background"
import { KineticText, GlitchText } from "./components/kinetic-typography"
import ApplicationPopup from "./components/application-popup"
import PartnersCarousel from "./components/partners-carousel"
import StatsSection from "./components/stats-section"
import FAQSection from "./components/faq-section"
import TestimonialsCarousel from "./components/testimonials-carousel"
import SectionDivider from "./components/section-divider"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showApplicationPopup, setShowApplicationPopup] = useState(false)

  const programs = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Master ethical hacking, penetration testing, and security protocols with hands-on experience",
      duration: "12 weeks",
      price: "$2,999",
      color: "from-red-500 to-pink-500",
      features: ["Ethical Hacking", "Network Security", "Incident Response", "Malware Analysis"],
      rating: 4.9,
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Build scalable applications with modern frameworks and cloud technologies",
      duration: "16 weeks",
      price: "$3,499",
      color: "from-blue-500 to-cyan-500",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "Cloud Deployment"],
      rating: 4.8,
      students: "2,100+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extract insights from complex datasets using AI and machine learning",
      duration: "14 weeks",
      price: "$3,299",
      color: "from-green-500 to-emerald-500",
      features: ["Machine Learning", "Statistical Analysis", "Data Visualization", "Big Data"],
      rating: 4.9,
      students: "800+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description: "Transform raw data into actionable business intelligence",
      duration: "10 weeks",
      price: "$2,499",
      color: "from-purple-500 to-violet-500",
      features: ["Business Intelligence", "SQL Mastery", "Excel Analytics", "Dashboard Creation"],
      rating: 4.7,
      students: "950+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isLoading) {
    return <MicroLoader onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Continuous Starfield Background */}
      <div className="fixed inset-0 z-0">
        <StarfieldBackground />
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="text-center px-6 max-w-7xl mx-auto py-20">
            <ScrollReveal delay={0.2}>
              <Badge className="mb-6 md:mb-8 bg-blue-900/20 text-blue-300 border-blue-800 px-4 md:px-6 py-2 md:py-3 text-sm font-semibold backdrop-blur-sm">
                🚀 Next-Generation Tech Education Platform
              </Badge>
            </ScrollReveal>

            <KineticText
              text="Shape Tomorrow's"
              className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 text-white leading-tight tracking-tight"
              delay={400}
              type="words"
            />

            <GlitchText
              text="Digital Future"
              className="block text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 leading-tight tracking-tight"
            />

            <ScrollReveal delay={0.6}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Master cutting-edge technologies through immersive, hands-on experiences that bridge the gap between
                learning and real-world application with industry-leading mentorship
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("programs")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto"
                >
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("testimonials")}
                  className="border-2 border-gray-600 text-white hover:bg-gray-800 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Watch Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider id="partners" />

        {/* Partners Carousel */}
        <PartnersCarousel />

        <SectionDivider id="programs" />

        {/* Programs Section */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16 lg:mb-20">
                <KineticText
                  text="Our Programs"
                  className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6"
                  type="words"
                />
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                  Immerse yourself in cutting-edge technologies with industry mentorship and real-world projects
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {programs.map((program, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:shadow-2xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300 group overflow-hidden h-full relative">
                    {/* Background image that appears on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10">
                      <CardContent className="p-6 md:p-8 flex-1 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                          <div
                            className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            <program.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                          </div>
                          <div className="text-right">
                            <Badge className="bg-white/20 text-white text-xs md:text-sm transition-colors duration-300">
                              {program.duration}
                            </Badge>
                            <div className="text-2xl md:text-3xl font-black text-white mt-2 transition-colors duration-300">
                              {program.price}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 transition-colors duration-300">
                          {program.title}
                        </h3>
                        <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-1 transition-colors duration-300">
                          {program.description}
                        </p>

                        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-200 text-sm md:text-base transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-200 font-medium text-sm transition-colors duration-300">
                              {program.rating} ({program.students})
                            </span>
                          </div>
                        </div>

                        <Button
                          onClick={() => (window.location.href = "/programs")}
                          className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-semibold py-2 md:py-3 rounded-full transition-all duration-300 text-sm md:text-base mt-auto`}
                        >
                          Learn More <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider id="stats" />

        {/* Stats Section */}
        <StatsSection />

        <SectionDivider id="testimonials" />

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />

        <SectionDivider id="faq" />

        {/* FAQ Section */}
        <FAQSection />

        <Footer />
        <ApplicationPopup open={showApplicationPopup} onOpenChange={setShowApplicationPopup} />
      </div>
    </div>
  )
}
