import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FloatingNav } from "@/components/floating-nav"
import { GlassCursor } from "@/components/glass-cursor"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "Projects | Designer Portfolio",
  description: "Explore my complete portfolio of UI/UX design projects in Figma",
}

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black noise-bg">
      {/* Custom cursor */}
      <GlassCursor />

      {/* Floating navigation */}
      <FloatingNav />

      {/* Projects Header */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="container">
          <div className="flex flex-col gap-4 items-center text-center mb-16">
            <Link
              href="/#projects"
              className="inline-flex items-center text-white hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-glow">UI/UX Design Projects</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Explore my complete collection of design work. Click on any project to view the detailed Figma file.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid with Filtering */}
      <ProjectsGrid />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 backdrop-blur-sm bg-[#111111]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="font-bold text-2xl tracking-tight text-white">
                design<span className="text-primary">.</span>studio
              </Link>
              <p className="text-white text-sm">
                © {new Date().getFullYear()} Creative Design Studio. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Button
                asChild
                variant="outline"
                className="border-primary/20 bg-primary/5 hover:bg-primary/10 text-white"
              >
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild>
                <Link href="/#about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
