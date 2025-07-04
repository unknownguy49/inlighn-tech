"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What makes InlighnTech different from other coding bootcamps?",
      answer:
        "InlighnTech focuses on immersive, hands-on learning with real industry projects. Our programs include 1-on-1 mentorship, job placement assistance, and blockchain-verified certificates. We maintain small class sizes to ensure personalized attention and have partnerships with leading tech companies.",
    },
    {
      question: "Do I need prior programming experience to join?",
      answer:
        "No prior experience is required for our beginner-friendly programs like Full Stack Development and Data Analysis. For intermediate programs like Cybersecurity and Data Science, basic programming knowledge is helpful but not mandatory. We provide pre-course materials to help you prepare.",
    },
    {
      question: "What kind of job support do you provide?",
      answer:
        "We offer comprehensive career support including resume building, interview preparation, portfolio development, and direct connections with our hiring partners. Our job placement rate is over 85% within 6 months of graduation, with average salary increases of 150%.",
    },
    {
      question: "Are the certificates industry-recognized?",
      answer:
        "Yes, our certificates are blockchain-verified and recognized by major tech companies. We're certified by ISO and registered with the Ministry of Corporate Affairs. Many of our graduates have been hired by companies like Google, Microsoft, and Netflix.",
    },
    {
      question: "What is the class schedule and duration?",
      answer:
        "Our programs run from 10-16 weeks depending on the track. Classes are held Monday-Friday, 6-9 PM IST, with weekend project sessions. We also offer weekend-only batches for working professionals. All sessions are recorded for later review.",
    },
    {
      question: "Do you offer payment plans or scholarships?",
      answer:
        "Yes, we offer flexible payment plans including EMI options and income-share agreements. We also provide merit-based scholarships, diversity scholarships, and special discounts for students and veterans. Contact our admissions team for personalized options.",
    },
    {
      question: "What technology stack will I learn?",
      answer:
        "Our curriculum covers the latest industry-standard technologies. Full Stack includes React, Node.js, MongoDB, AWS. Cybersecurity covers Kali Linux, Wireshark, Metasploit. Data Science includes Python, TensorFlow, Pandas, and cloud platforms. We update our curriculum quarterly.",
    },
    {
      question: "Can I switch programs after starting?",
      answer:
        "Yes, you can switch to another program within the first two weeks if you find the current one isn't the right fit. We'll work with you to find the best program for your goals and transfer any applicable coursework. Our goal is your success.",
    },
  ]

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 md:h-10 md:w-10 text-blue-400" />
              <h2 className="text-3xl md:text-5xl font-black text-foreground">Frequently Asked Questions</h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about our programs and admissions
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <button
                  className="w-full px-6 md:px-8 py-6 md:py-8 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-foreground pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
