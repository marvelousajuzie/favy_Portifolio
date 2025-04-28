"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#", sectionId: "home" },
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Services", href: "#services", sectionId: "services" },
  { name: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
]

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll to update navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine which section is currently in view
      const sections = navItems.map((item) => item.sectionId)

      // Find the current section in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      // If we're at the top of the page, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    setMobileMenuOpen(false)

    // Handle home section specially
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      // Get the height of the navbar to offset the scroll position
      const navbarHeight = 100 // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-6xl transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div
          className={`rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 ${
            isScrolled ? "bg-[#151515]/90" : "bg-[#151515]/70"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <Link
              href="#"
              className="font-bold text-xl tracking-tight text-white"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              design<span className="text-primary">.</span>studio
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {activeSection === item.sectionId ? (
                    <motion.button
                      layoutId="activeNavItem"
                      onClick={() => scrollToSection(item.sectionId)}
                      className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-full shadow-lg shadow-primary/25"
                    >
                      {item.name}
                    </motion.button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="px-4 py-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <Button size="sm" className="ml-2 text-white" onClick={() => scrollToSection("contact")}>
                Let's Talk
              </Button>
            </nav>

            <button
              className="flex md:hidden items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
          >
            <div className="flex h-full flex-col overflow-y-auto p-6">
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="font-bold text-xl tracking-tight text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("home")
                  }}
                >
                  design<span className="text-primary">.</span>studio
                </Link>
                <button
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#151515]/80 hover:bg-[#151515] transition-colors text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name} className="relative">
                    {activeSection === item.sectionId ? (
                      <motion.button
                        layoutId="activeMobileNavItem"
                        onClick={() => scrollToSection(item.sectionId)}
                        className="w-full py-3 px-4 text-lg font-bold bg-primary text-white rounded-lg flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {item.name}
                      </motion.button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className="w-full py-3 px-4 text-lg font-medium text-white hover:text-primary transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-12">
                <Button className="w-full text-white" size="lg" onClick={() => scrollToSection("contact")}>
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
