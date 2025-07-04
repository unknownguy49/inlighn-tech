"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, BookOpen, Award, Mail } from "lucide-react"

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  const navItems = [
    { id: "home", icon: Home, href: "/" },
    { id: "about", icon: User, href: "/about" },
    { id: "programs", icon: BookOpen, href: "/programs" },
    { id: "verify", icon: Award, href: "/verify-certificate" },
    { id: "contact", icon: Mail, href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                activeSection === item.id
                  ? "bg-blue-600 text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
