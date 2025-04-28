"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/text-reveal"
import { ParallaxText } from "@/components/parallax-text"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Scroll to About section when clicking the scroll down button
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      const navbarHeight = 100 // Approximate height of the navbar
      const elementPosition = aboutSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Scroll to Projects section when clicking View My Work
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      const navbarHeight = 100 // Approximate height of the navbar
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Scroll to Contact section when clicking Let's Connect
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const navbarHeight = 100 // Approximate height of the navbar
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden py-20 bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 to-purple-500/10 blur-[100px]"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5" />
      </div>

      <motion.div className="container relative z-10 mt-20" style={{ y, opacity }}>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for creative collaborations
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-8">
            <TextReveal>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white text-glow">
                Elevating brands through <span className="text-primary">creative</span> design
              </h1>
            </TextReveal>

            <motion.p
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I craft immersive digital experiences that blend aesthetics with functionality to create memorable brand
              moments.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="group text-base text-white" onClick={scrollToProjects}>
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 bg-primary/5 hover:bg-primary/10 text-base text-white"
              onClick={scrollToContact}
            >
              Let's Connect
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1 text-white">3+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1 text-white">99+</div>
              <div className="text-sm text-white">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1 text-white">20+</div>
              <div className="text-sm text-white">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold mb-1 text-white">15+</div>
              <div className="text-sm text-white">Design Awards</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-white hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <ParallaxText baseVelocity={-2}>
          UI/UX DESIGN • BRANDING • MOTION GRAPHICS • 3D VISUALIZATION • WEB DESIGN • CREATIVE DIRECTION •
        </ParallaxText>
      </div>
    </section>
  )
}
