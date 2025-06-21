"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import CustomCursor from "../components/custom-cursor"
import ScrollReveal from "../components/scroll-reveal"
import MagneticElement from "../components/magnetic-element"
import { Button } from "@/components/ui/button"
import StarfieldBackground from "../components/starfield-background"
import { WaterRipple } from "../components/fluid-effects"
import { KineticText } from "../components/kinetic-typography"
import SectionDivider from "../components/section-divider"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@inlighntech.com",
      description: "Send us an email anytime - we respond within 2 hours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-8PM EST, Sat 10AM-4PM EST",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Tech Hub, Innovation District, San Francisco, CA",
      description: "Schedule an appointment for campus tour",
      color: "from-purple-500 to-pink-500",
    },
  ]

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
          <div className="text-center px-4 md:px-6 max-w-6xl mx-auto py-20">
            <ScrollReveal delay={0.2}>
              <Badge className="mb-6 md:mb-8 bg-green-900/20 text-green-300 border-green-800 px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-semibold backdrop-blur-sm">
                💬 Get In Touch
              </Badge>
            </ScrollReveal>

            <div className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 text-white leading-tight">
              <KineticText text="Let's " className="inline" type="words" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                Start
              </span>
              <KineticText text=" Your Tech Journey" className="inline" type="words" delay={400} />
            </div>

            <ScrollReveal delay={0.6}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Have questions about our programs? Ready to apply? We're here to guide you every step of the way to your
                dream tech career.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SectionDivider id="contact-form" />

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Form */}
              <ScrollReveal>
                <WaterRipple>
                  <Card className="bg-gray-900 border-gray-700 shadow-2xl hover:shadow-3xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6">
                        Send Us a Message
                      </CardTitle>
                      <p className="text-gray-300 text-base md:text-lg">
                        Fill out the form below and we'll get back to you within 2 hours during business hours
                      </p>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                      {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                              <Label htmlFor="name" className="text-white text-base md:text-lg font-semibold">
                                Full Name *
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 mt-2 md:mt-3 py-3 md:py-4 px-3 md:px-4 text-base md:text-lg rounded-xl"
                                placeholder="Your full name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-white text-base md:text-lg font-semibold">
                                Email Address *
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 mt-2 md:mt-3 py-3 md:py-4 px-3 md:px-4 text-base md:text-lg rounded-xl"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="message" className="text-white text-base md:text-lg font-semibold">
                              Message *
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={6}
                              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 mt-2 md:mt-3 p-3 md:p-4 text-base md:text-lg rounded-xl"
                              placeholder="Tell us about your background, career goals, and what you'd like to know about our programs..."
                            />
                          </div>

                          <WaterRipple>
                            <MagneticElement>
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 md:py-4 text-lg md:text-xl font-bold rounded-xl"
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center gap-3 justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white"></div>
                                    Sending Message...
                                  </div>
                                ) : (
                                  <>
                                    <Send className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                                    Send Message
                                  </>
                                )}
                              </Button>
                            </MagneticElement>
                          </WaterRipple>
                        </form>
                      ) : (
                        <div className="text-center py-12 md:py-16">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                            <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6">
                            Message Sent Successfully! 🎉
                          </h3>
                          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                            Thank you for reaching out! Our admissions team will get back to you within 2 hours during
                            business hours.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </WaterRipple>
              </ScrollReveal>

              {/* Contact Information */}
              <div className="space-y-8 md:space-y-12">
                <ScrollReveal delay={0.2}>
                  <div>
                    <KineticText
                      text="Get In Touch"
                      className="text-3xl md:text-4xl font-black text-white mb-6 md:mb-8"
                      type="words"
                    />
                    <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                      Ready to transform your career? We're here to guide you every step of the way from application to
                      job placement.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-6 md:space-y-8">
                  {contactInfo.map((info, index) => (
                    <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                      <WaterRipple>
                        <MagneticElement>
                          <Card className="bg-gray-900 border-gray-700 hover:shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300 group">
                            <CardContent className="p-6 md:p-8">
                              <div className="flex items-start gap-4 md:gap-6">
                                <div
                                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                                >
                                  <info.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 group-hover:text-blue-400 transition-colors">
                                    {info.title}
                                  </h3>
                                  <p className="text-blue-400 font-bold text-base md:text-lg mb-1 md:mb-2">
                                    {info.details}
                                  </p>
                                  <p className="text-gray-300 text-sm md:text-base">{info.description}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </MagneticElement>
                      </WaterRipple>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Office Hours */}
                <ScrollReveal delay={0.6}>
                  <WaterRipple>
                    <Card className="bg-blue-900/20 border-blue-800 hover:shadow-xl hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
                          <h3 className="text-lg md:text-2xl font-bold text-white">Office Hours</h3>
                        </div>
                        <div className="space-y-2 md:space-y-3 text-gray-300 text-base md:text-lg">
                          <p>
                            <span className="font-bold text-white">Monday - Friday:</span> 9:00 AM - 8:00 PM EST
                          </p>
                          <p>
                            <span className="font-bold text-white">Saturday:</span> 10:00 AM - 4:00 PM EST
                          </p>
                          <p>
                            <span className="font-bold text-white">Sunday:</span> Closed
                          </p>
                          <p className="text-blue-400 font-medium mt-3 md:mt-4 text-sm md:text-base">
                            📞 Emergency support available 24/7 for current students
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </WaterRipple>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
