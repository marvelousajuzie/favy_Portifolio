"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Extended project data with Figma URLs
const projects = [
  {
    id: 1,
    title: "SecuraBox",
    description: "Complete Ui/Ux Design and digital experience for a Security Company",
    category: "UI/UX",
    image: "/securaboxx.png",
    color: "from-purple-500/20 to-pink-500/20",
    client: "Securabox",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/file/example-fashion-brand",
  },
  {
    id: 2,
    title: "Aleris AI",
    description: "Complete Ui/Ux Design and digital experience for an AI Company",
    category: "ui/ux",
    image: "/aleris.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    client: "Aleris AI",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/file/example-3d-visualization",
  },
  {
    id: 3,
    title: "Funiture Mobile App",
    description: "User-centered interface design for a funiture application",
    category: "UI/UX",
    image: "/funiture_ui.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    client: "funiture App",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/file/example-wellness-app",
  },
  {
    id: 4,
    title: "Dashboard Ui",
    description: "User-centered interface design for a security dashboard",
    category: "UI/UX",
    image: "/dashboard_ui.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    client: "dashboard",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/file/example-interactive-web",
  },
  {
    id: 5,
    title: " Fitness Platform Redesign",
    description: "Complete redesign of a fit platform focusing on conversion optimization",
    category: "UI/UX",
    image: "/fitness_app.jpg",
    color: "from-pink-500/20 to-red-500/20",
    client: "Fitness Platform",
    year: "2023",
    tags: ["Fitness", "UI Design", "User Testing"],
    figmaUrl: "https://www.figma.com/file/example-ecommerce-redesign",
  },
  {
    id: 6,
    title: "Brand Identity System",
    description: "Comprehensive brand identity system for a tech startup",
    category: "Branding",
    image: "/creative-visionary.png",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "Tech Innovate",
    year: "2022",
    tags: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
    figmaUrl: "https://www.figma.com/file/example-brand-identity",
  },
  {
    id: 7,
    title: "Product Launch Campaign",
    description: "Integrated marketing campaign for a new product launch",
    category: "Marketing",
    image: "/sleek-speaker-display.png",
    color: "from-yellow-500/20 to-amber-500/20",
    client: "Audio Tech",
    year: "2023",
    tags: ["Campaign Strategy", "Visual Design", "Social Media"],
    figmaUrl: "https://www.figma.com/file/example-product-launch",
  },
  {
    id: 8,
    title: "Corporate Website Redesign",
    description: "Modern website redesign for a corporate client with focus on user experience",
    category: "Web Design",
    image: "/abstract-brand-elements.png",
    color: "from-teal-500/20 to-green-500/20",
    client: "Corporate Inc",
    year: "2022",
    tags: ["Web Design", "Content Strategy", "SEO"],
    figmaUrl: "https://www.figma.com/file/example-corporate-website",
  },
]

// All unique categories from projects
const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="relative py-16 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full",
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "border-white/20 bg-[#151515]/80 hover:bg-[#151515] text-white",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] backdrop-blur-sm enhanced-card h-full">
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

                  <div className="p-6">
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
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                      <div className="text-sm text-white">
                        <span className="text-white/60">Client:</span> {project.client}
                      </div>
                      <div className="text-sm text-white">
                        <span className="text-white/60">Year:</span> {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
