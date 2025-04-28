"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full aspect-square transition-transform duration-200 ease-out">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-4/5 h-4/5"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-20 w-32 h-32 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                <Image src="/vibrant-creative-mind.png" alt="Designer" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 backdrop-blur-md border"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-lg md:text-xl">
            5+
            <div className="absolute text-xs md:text-sm font-normal text-center mt-6">
              Years
              <br />
              Experience
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 backdrop-blur-md border"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-lg md:text-xl">
            100+
            <div className="absolute text-xs md:text-sm font-normal text-center mt-6">
              Projects
              <br />
              Completed
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
