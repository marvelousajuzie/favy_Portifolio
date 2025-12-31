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
    title: "internal logistic app design",
    description: "Complete Ui/Ux Design and digital experience for a logistic app ",
    category: "UI/UX",
    image: "/logistic_app.jpg",
    color: "from-purple-500/20 to-pink-500/20",
     Url: "https://www.behance.net/gallery/240903405/Internal-Trip-Delivery-Coordination-App",
  },
   {
    id: 4,
    title: "SASS Landing Page",
    description: "Complete Ui/Ux Design and digital experience for sass Page",
    category: "UI/UX",
    image: "/sasslanding_img.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    client: "Securabox",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/237879117/SAAS-LANDING-PAGE-HERO-SECTION",
    
  },
  {
    id: 5,
    title: "SecuraBox",
    description: "Complete Ui/Ux Design and digital experience for a Security Company",
    category: "UI/UX",
    image: "/securaboxapp_img.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    client: "Securabox",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/211438871/Security-App-ui-design",
    
  },
   {
    id: 6,
    title: "CRYPTO APP",
    description: "Complete Ui/Ux Design and digital experience for a crypto platform",
    category: "UI/UX",
    image: "/cryto_img.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "cryto",
    year: "2025",
    tags: ["cryto", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/229137531/Crypto-Wallet-App",
  },
  {
    id: 7,
    title: "Music landing Page",
    description: "Complete Ui/Ux Design and digital experience for a music platform",
    category: "UI/UX",
    image: "/music_landing.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "music",
    year: "2024",
    tags: ["music", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/212190065/Music-Dashboard-Music-Streaming-Interface",
  },
  {
    id: 8,
    title: "Car Landing Page",
    description: "User-centered interface design for a Car application",
    category: "Web Design",
    image: "/car_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "car",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/214397639/car-landing-page",
  },
  {
    id: 9,
    title: "Funiture Mobile App",
    description: "User-centered interface design for a funiture application",
    category: "UI/UX",
    image: "/funiture.jpg",
    color: "from-green-500/20 to-emerald-500/20",
    client: "funiture App",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/212160691/Furniture-Mobile-App-ui-design",
  },
  {
    id: 10,
    title: "Marketing Client Dashboard",
    description: "User-centered interface design for a security dashboard",
    category: "UI/UX",
    image: "/marketdashboard_img.jpg",
    color: "from-orange-500/20 to-amber-500/20",
    client: "dashboard",
    year: "2024",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/226336571/Marketing-Client-Dashboard",
  },
  {
    id: 11,
    title: "Aleris AI",
    description: "Complete Ui/Ux Design and digital experience for an AI Company",
    category: "ui/ux",
    image: "/aleris_appimg.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    client: "Aleris AI",
    year: "2025",
    tags: ["Brand Identity", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/229137281/Health-Mobile-App",
  },
  {
    id: 12,
    title: " Fitness Mobile App",
    description: "Complete redesign of a fit platform focusing on conversion optimization",
    category: "UI/UX",
    image: "/fitnesswhite.jpg",
    color: "from-pink-500/20 to-red-500/20",
    client: "Fitness Platform",
    year: "2023",
    tags: ["Fitness", "UI Design", "User Testing"],
    Url: "https://www.behance.net/gallery/229138699/Fitness-Mobile-App",
  },
  {
    id: 13,
    title: "Music Mobile App",
    description: "Complete Ui/Ux Design and digital experience for a music mobile app",
    category: "UI/UX",
    image: "/music_img.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    client: "music",
    year: "2024",
    tags: ["music", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/209825765/music-mobile-app-design",
  },
  {
    id: 14,
    title: "Learning Platform Redesign",
    description: "User-centered interface design for a learning platform(Udemy)",
    category: "ui/ux",
    image: "/learning_pimg.jpg",
    color: "from-yellow-500/20 to-amber-500/20",
    client: "learning platform",
    year: "2024",
    tags: ["learning", "Web Design", "UI/UX"],
    Url: "https://www.behance.net/gallery/213336395/online-course-landing-page-ui-design",
  },
  {
    id: 15,
    title: "FOOD Mobile App",
    description: "User-centered interface design for a food application",
    category: "Web Design",
    image: "/food_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "food",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/229135907/Food-Mobile-App",
  },
    {
    id: 16,
    title: "LANDING PAGE Plannet",
    description: "User-centered interface design for a landing page",
    category: "Web Design",
    image: "/palenet_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "landing page",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/229140505/Plannet-website-(-Hero-Section-)",
  },
  {
    id: 17,
    title: "HealthCare Management App",
    description: "User-centered interface design for a food application",
    category: "Web Design",
    image: "/healthcare_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "health",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/215202239/Healthcare-Management-Landing-page",
  },
  {
    id: 18,
    title: " Fitness Landing Page",
    description: "Complete redesign of Fitness landing page",
    category: "UI/UX",
    image: "/fitness website.jpg",
    color: "from-pink-500/20 to-red-500/20",
    client: "Fitness Platform",
    year: "2023",
    tags: ["Fitness", "UI Design", "User Testing"],
    Url: "https://www.behance.net/gallery/229428985/Fitness-Landing-Page",
  },
  {
    id: 19,
    title: "Aleris AI Waitlist",
    description: "User-centered interface design for aleris ai app",
    category: "Web Design",
    image: "/aleris_aiwaitlist.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "aleris ai",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/237926913/waitlist-ui-design",
  },
  {
    id: 20,
    title: "Perfume1 Website",
    description: "User-centered interface design for perfume website",
    category: "Web Design",
    image: "/perfume2.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "perfume app",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/237927285/Perfume-Webiste-ui-design",
  },
  {
    id: 21,
    title: "SASS LANDING PAGE",
    description: "User-centered interface design for a landing page",
    category: "Web Design",
    image: "/bussinesshealth_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/225955575/Saas-Landing-Page-UI-design",
  },
   {
    id: 22,
    title: "  Password  Management Website",
    description: "User-centered interface design for a Password  Management website",
    category: "Web Design",
    image: "/passwordm_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/229134783/Password-Managent-landing-page",
  },

  {
    id: 23,
    title: "Real Estate Website",
    description: "User-centered interface design for an estate website",
    category: "Web Design",
    image: "/realestate_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/204598139/real-estate-website-homepage",
  },
  {
    id: 24,
    title: "SecuraBox Landing Page",
    description: "User-centered interface design for securabox app",
    category: "Web Design",
    image: "/securaboxlanding_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "securabox",
    year: "2024",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/223598951/SecuraBox-landing-page-ui-design",
  },

  {
    id: 25,
    title: "Wardrope Website",
    description: "User-centered interface design for wordrope app",
    category: "Web Design",
    image: "/wordrop_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "Wordrop",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/229139419/Wardrop-Mobile-App-UI-Design",
  },

    {
    id: 26,
    title: "  Perfume Website",
    description: "User-centered interface design for a Perfume website",
    category: "Web Design",
    image: "/perfume1_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/229138179/Perfume-Website-UI-Design",
  },
  {
    id: 27,
    title: " NFT Website",
    description: "User-centered interface design for a nft website",
    category: "Web Design",
    image: "/nft_img.jpg",
    color: "from-teal-500/20 to-green-500/20",
    client: "bussiness",
    year: "2025",
    tags: ["Web Design", "ui/ux", "SEO"],
    Url: "https://www.behance.net/gallery/212298827/nft-mobile-app-ui-design",
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

                  <div className="p-6">
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
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>

                   {/* Add safety check for tags */}
                       {project.tags && project.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                           {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-full">
                                {tag}
                                </span>
                                ))}
                                </div>
                             )}
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
