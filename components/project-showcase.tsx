"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "SecuraBox",
    description: "Complete Ui/Ux Design and digital experience for a Security Company",
    category: "UI/UX",
    image: "/securaboxx.png",
    color: "from-purple-500/20 to-pink-500/20",
    figmaUrl: "https://www.figma.com/design/AjzpPtiVDd2EYqRNNLrdmj/Untitled?node-id=0-1&t=obliBeW8u0xzF1vM-1",
  },
  {
    id: 2,
    title: "Music landing Page",
    description: "Complete Ui/Ux Design and digital experience for a music platform",
    category: "UI/UX",
    image: "/music_landingpage.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "music",
    year: "2024",
    tags: ["music", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/design/2EcCOH5NNSnQH7SobMNghh/Untitled?node-id=0-1&t=Ks0U5MuCxIXIfwTX-1",
  },
  {
    id: 3,
    title: "Car Mobile App",
    description: "User-centered interface design for a Car application",
    category: "ui/ux",
    image: "/car_ui.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    figmaUrl: "https://www.figma.com/design/R73ByO46tRGjb8WS7reJ9J/Untitled?node-id=0-1&t=q83QZChf3qKhaZ51-1",
  },

  {
    id: 4,
    title: "Dashboard Ui",
    description: "User-centered interface design for a security dashboard",
    category: "UI/UX",
    image: "/dashboard_ui.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    figmaUrl: "https://www.figma.com/design/Jeyw9ZoEGNO5NFazvuPdFX/Untitled?node-id=0-1&t=SB66ZQZ6aSL9qYsB-1",
  },
]

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-white mb-4">
              Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm">Featured Projects</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              A curated selection of my most impactful work across various design disciplines.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  project.color,
                )}
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] backdrop-blur-sm enhanced-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-[#151515]/80 px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm text-white">
                      {project.category}
                    </span>
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#151515]/80 text-white backdrop-blur-sm"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="group border-primary/20 bg-primary/5 hover:bg-primary/10 text-white"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
