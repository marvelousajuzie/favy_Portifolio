"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function GlassCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div className="h-8 w-8 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/20" />
    </motion.div>
  )
}
