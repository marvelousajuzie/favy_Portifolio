"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { ServiceShowcase } from "@/components/service-showcase"
import { TestimonialSection } from "@/components/testimonial-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"
import { GlassCursor } from "@/components/glass-cursor"

export default function ClientPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black noise-bg">
      {/* Custom cursor */}
      <GlassCursor />

      {/* Floating navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-400/5 blur-[80px]" />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-primary/5 blur-[60px]" />
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/10" />
                <Image
                  src="/favor.jpg"
                  alt="Designer portrait"
                  fill
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <span className="text-white font-light">UI/UX Designer</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 p-6 backdrop-blur-xl bg-[#111111] border border-white/10 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-white">3+</span>
                    <span className="text-sm text-white">Years Experience</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold text-white">100+</span>
                    <span className="text-sm text-white">Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-shadow-sm">
                  Crafting Digital <span className="text-primary">Experiences</span> That Inspire
                </h2>
                <p className="text-lg text-white leading-relaxed">
                  I'm a multidisciplinary designer with a passion for creating immersive digital experiences that blend
                  aesthetics with functionality. My approach combines strategic thinking with creative execution to
                  deliver designs that not only captivate but also drive results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Design Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">Brand Identity</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">Motion Graphics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">Framer Designer</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">Figma & Adobe Suite</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">Blender & Cinema 4D</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">After Effects</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-white">WebGL & Three.js</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 bg-primary/5 hover:bg-primary/10">
                  My Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectShowcase />

      {/* Services Section */}
      <ServiceShowcase />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 backdrop-blur-sm bg-[#111111]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }}
                className="font-bold text-2xl tracking-tight text-white"
              >
                design<span className="text-primary">.</span>studio
              </button>
              <p className="text-white text-sm">
                © {new Date().getFullYear()} Creative Design Studio. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link href="https://x.com/favour90840" className="text-white hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/favydesign/" className="text-white hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.behance.net/favourajuzie" className="text-white hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Behance</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
