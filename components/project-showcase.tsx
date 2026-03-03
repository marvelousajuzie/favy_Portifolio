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
    title: "Fintech Mobile App",
    description: "Complete Ui/Ux Design and digital experience for a Fintech Mobile app",
    category: "UI/UX",
    image: "/Fintech app.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/239675023/Fintech-App",
  },
  {
   id: 2,
    title: "Salad Bar Resturant website ( landing )",
    description: "Complete Ui/Ux Design and digital experience for a Salad website",
    category: "UI/UX",
    image: "/Salad website.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/240902507/Salad-Bar-Restaurant-website ",
  },
   {
   id: 3,
    title: "Alyra Ai Assistant",
    description: "Complete Ui/Ux Design and digital experience for a AI assistant app ",
    category: "UI/UX",
    image: "/alyra_img.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/243483083/AI-ASSISTANT-MOBILE-APP-DESIGN",
  },
   {
   id: 4,
    title: "internal logistic app design",
    description: "Complete Ui/Ux Design and digital experience for a logistic app ",
    category: "UI/UX",
    image: "/logistic_app.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/240903405/Internal-Trip-Delivery-Coordination-App",
  },
  {
   id: 5,
    title: "SASS Landing Page",
    description: "Complete Ui/Ux Design and digital experience for sass Page",
    category: "UI/UX",
    image: "/sasslanding_img.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/237879117/SAAS-LANDING-PAGE-HERO-SECTION",
  },
  {
    id: 6,
    title: "SecuraBox",
    description: "Complete Ui/Ux Design and digital experience for a Security Company",
    category: "UI/UX",
    image: "/securabox.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
   Url: "https://www.behance.net/gallery/211438871/Security-App-ui-design",
  },
  {
    id: 7,
    title: "CRYPTO APP",
    description: "Complete Ui/Ux Design and digital experience for a crypto platform",
    category: "UI/UX",
    image: "/cryto_img.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
   Url: "https://www.behance.net/gallery/229137531/Crypto-Wallet-App",
  },

  {
    id: 8,
    title: "Music landing Page",
    description: "Complete Ui/Ux Design and digital experience for a music platform",
    category: "UI/UX",
    image: "/music_landing.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    Url: "https://www.behance.net/gallery/212190065/Music-Dashboard-Music-Streaming-Interface",
  },



   {
    id: 9,
    title: "  Entertainment Flyer Design",
    category: "Graphics",
    image: "/kissandswim.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


   {
    id: 10,
    title: " logo Brand Identity Flyer Design",
    category: "Graphics",
    image: "/logobrand.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


   {
    id: 11,
    title: "  Valentine Flyer Design",
    category: "Graphics",
    image: "/romanceflyer.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


   {
    id: 12,
    title: "  Food Flyer Design",
    category: "Graphics",
    image: "/foodflyer.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


  {
    id: 13,
    title: " Gevinc Flyer Design",
    category: "Graphics",
    image: "/gevinc.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },

    {
    id: 14,
    title: "  Vendi Flyer Design",
    category: "Graphics",
    image: "/vendi.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },

   {
    id: 15,
    title: "Real Estate Flyer Design",
    category: "Graphics",
    image: "/realestate_flyer.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


   {
    id: 16,
    title: "  Church Flyer Design",
    category: "Graphics",
    image: "/unleash.png",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


    {
    id: 17,
    title: "  Beauty Design",
    category: "Graphics",
    image: "/liquerose.png",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },



    {
    id: 18,
    title: "  Food Design",
    category: "Graphics",
    image: "/food-design.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },


   {
    id: 19,
    title: "  Makeup Flyer Design",
    category: "Graphics",
    image: "/makeup-flyer.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },



   {
    id: 20,
    title: " Gadget Store Flyer Design",
    category: "Graphics",
    image: "/gadget-store.png",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },

     {
    id: 21,
    title: "  Hair Flyer Design",
    category: "Graphics",
    image: "/shampoo-flyer.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2026",
    tags: ["Graphics"],
  },
  
]

const categories = ["All", "UI/UX", "Graphics"]

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-[#151515] text-white/70 hover:text-white hover:bg-[#1a1a1a] border border-white/10"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
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
                            href={project.Url}
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
                        href={project.Url}
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
          </AnimatePresence>
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