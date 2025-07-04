"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface MorphingCardProps {
  title: string
  description: string
  icon: React.ReactNode
  hoverContent: React.ReactNode
  className?: string
}

export default function MorphingCard({ title, description, icon, hoverContent, className = "" }: MorphingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-500 ease-out cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 h-full">
        <div
          className={`transition-all duration-500 ${isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div
          className={`absolute inset-0 p-6 transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {hoverContent}
        </div>
      </CardContent>
    </Card>
  )
}
