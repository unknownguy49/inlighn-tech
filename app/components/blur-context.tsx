"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface BlurContextType {
  hoveredElement: string | null
  setHoveredElement: (id: string | null) => void
}

const BlurContext = createContext<BlurContextType | undefined>(undefined)

export function BlurProvider({ children }: { children: ReactNode }) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  return <BlurContext.Provider value={{ hoveredElement, setHoveredElement }}>{children}</BlurContext.Provider>
}

export function useBlur() {
  const context = useContext(BlurContext)
  if (context === undefined) {
    throw new Error("useBlur must be used within a BlurProvider")
  }
  return context
}

export function BlurWrapper({
  children,
  id,
  className = "",
}: {
  children: ReactNode
  id: string
  className?: string
}) {
  const { hoveredElement, setHoveredElement } = useBlur()
  const isBlurred = hoveredElement && hoveredElement !== id

  return (
    <div
      className={`transition-all duration-300 ${isBlurred ? "blur-sm opacity-70" : ""} ${className}`}
      onMouseEnter={() => setHoveredElement(id)}
      onMouseLeave={() => setHoveredElement(null)}
    >
      {children}
    </div>
  )
}
