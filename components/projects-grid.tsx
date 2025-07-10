"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


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
    Url: "https://www.behance.net/gallery/211438871/Security-App-ui-design",
    
  },
   {
    id: 2,
    title: "CRYPTO APP",
    description: "Complete Ui/Ux Design and digital experience for a crypto platform",
    category: "UI/UX",
    image: "/cryptoapp.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "cryto",
    year: "2025",
    tags: ["cryto", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/229137531/Crypto-Wallet-App",
  },
  {
    id: 3,
    title: "Music landing Page",
    description: "Complete Ui/Ux Design and digital experience for a music platform",
    category: "UI/UX",
    image: "/music_landingpage.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "music",
    year: "2024",
    tags: ["music", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/212190065/Music-Dashboard-Music-Streaming-Interface",
  },
  {
    id: 4,
    title: "Car Landing Page",
    description: "User-centered interface design for a Car application",
    category: "Web Design",
    image: "/car_ui.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "car",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/214397639/car-landing-page",
  },
  {
    id: 5,
    title: "Funiture Mobile App",
    description: "User-centered interface design for a funiture application",
    category: "UI/UX",
    image: "/funiture.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    client: "funiture App",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.behance.net/gallery/212160691/Furniture-Mobile-App-ui-design",
  },
  {
    id: 6,
    title: "Marketing Client Dashboard",
    description: "User-centered interface design for a security dashboard",
    category: "UI/UX",
    image: "/clientdashboard.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    client: "dashboard",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.behance.net/gallery/226336571/Marketing-Client-Dashboard",
  },
  {
    id: 7,
    title: "Aleris AI",
    description: "Complete Ui/Ux Design and digital experience for an AI Company",
    category: "ui/ux",
    image: "/aleris.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    client: "Aleris AI",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    figmaUrl: "https://www.behance.net/gallery/229137281/Health-Mobile-App",
  },
  {
    id: 8,
    title: " Fitness Platform Redesign",
    description: "Complete redesign of a fit platform focusing on conversion optimization",
    category: "UI/UX",
    image: "/fitnesswhite.jpg",
    color: "from-pink-500/20 to-red-500/20",
    client: "Fitness Platform",
    year: "2023",
    tags: ["Fitness", "UI Design", "User Testing"],
    figmaUrl: "https://www.figma.com/design/nbDXr8wcSvoLaCD6FWVJ8A/Untitled?node-id=0-1&t=hXtjkoYBSEzz5s69-1",
  },
  {
    id: 9,
    title: "Music Mobile App",
    description: "Complete Ui/Ux Design and digital experience for a music mobile app",
    category: "UI/UX",
    image: "/music.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "music",
    year: "2024",
    tags: ["music", "Web Design", "UI/UX"],
    figmaUrl: "https://www.behance.net/gallery/209825765/music-mobile-app-design",
  },
  {
    id: 10,
    title: "Learning Platform Redesign",
    description: "User-centered interface design for a learning platform(Udemy)",
    category: "ui/ux",
    image: "/learning_ui.jpg",
    color: "from-yellow-500/20 to-amber-500/20",
    client: "learning platform",
    year: "2024",
    tags: ["learning", "Web Design", "UI/UX"],
    figmaUrl: "https://www.figma.com/design/ShkSpPVMX8lb2O90JyAxXE/Untitled?node-id=0-1&t=h4JZjE6rFBxlfd5S-1",
  },
  {
    id: 11,
    title: "FOOD Mobile App",
    description: "User-centered interface design for a food application",
    category: "Web Design",
    image: "/food-app .jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "food",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.figma.com/design/jxOyQFjvQymETbPRr0w2q0/Untitled?node-id=0-1&t=VFWNXh1seFcliF6S-1",
  },
  {
    id: 12,
    title: "HealthCare Management App",
    description: "User-centered interface design for a food application",
    category: "Web Design",
    image: "/health-web.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "health",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.figma.com/design/61fgjKzH9vIZ1fchuhMlgn/Untitled?node-id=0-1&t=jRpWc5eGFUvu8XMs-1",
  },
  {
    id: 13,
    title: "Aleris AI landingpage",
    description: "User-centered interface design for aleris ai app",
    category: "Web Design",
    image: "/alerislanding.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "aleris ai",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/230049919/aleris-ai-website",
  },
  {
    id: 14,
    title: "Event Booking app",
    description: "User-centered interface design for event booking app",
    category: "Web Design",
    image: "/event.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "eventbooking app",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.figma.com/design/vaVaxEVVXZlftg7Sv6uuhz/Untitled?node-id=0-1&t=SizB9hV7N7PyqBy2-1",
  },
  {
    id: 15,
    title: "Bussiness Health Website",
    description: "User-centered interface design for a bussiness health website",
    category: "Web Design",
    image: "/Frame.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.figma.com/design/osMZ0loc8XVi7JAQBy3tCq/Untitled?node-id=0-1&t=J6Pe2EeHXoWawI2u-1",
  },
   {
    id: 16,
    title: "  Password  Management Website",
    description: "User-centered interface design for a Password  Management website",
    category: "Web Design",
    image: "/perfume.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/229138179/Perfume-Website-UI-Design",
  },

  {
    id: 17,
    title: "Real Estate Website",
    description: "User-centered interface design for an estate website",
    category: "Web Design",
    image: "/realestate.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.figma.com/design/osMZ0loc8XVi7JAQBy3tCq/Untitled?node-id=0-1&t=J6Pe2EeHXoWawI2u-1",
  },
  {
    id: 18,
    title: "SecuraBox Landing Page",
    description: "User-centered interface design for securabox app",
    category: "Web Design",
    image: "/securaboxlanding.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "securabox",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/223598951/SecuraBox-landing-page-ui-design",
  },

  {
    id: 19,
    title: "Wardrope Website",
    description: "User-centered interface design for wordrope app",
    category: "Web Design",
    image: "/wordrope.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "securabox",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/229139419/Wardrop-Mobile-App-UI-Design",
  },

    {
    id: 20,
    title: "  Perfume Website",
    description: "User-centered interface design for a Perfume website",
    category: "Web Design",
    image: "/perfume2.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/229138179/Perfume-Website-UI-Design",
  },
  {
    id: 21,
    title: " NFT Website",
    description: "User-centered interface design for a nft website",
    category: "Web Design",
    image: "/nft.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    figmaUrl: "https://www.behance.net/gallery/212298827/nft-mobile-app-ui-design",
  },


]


const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


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
