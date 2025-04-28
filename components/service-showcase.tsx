"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Compass, CuboidIcon as Cube, Globe, Layout, Palette, Video, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
  isInView: boolean
}

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences for web and mobile applications.",
    icon: Layout,
  },
  {
    title: "Brand Identity",
    description: "Developing cohesive visual identities that communicate your brand's values and personality.",
    icon: Palette,
  },
  {
    title: "Web Design",
    description: "Designing beautiful, responsive websites that convert visitors into customers.",
    icon: Globe,
  },
  {
    title: "Motion Graphics",
    description: "Bringing your ideas to life with captivating animations and visual effects.",
    icon: Video,
  },
  {
    title: "Framer Designer",
    description: "Creating realistic framer designs and environments for products and spaces.",
    icon: Cube,
  },
  {
    title: "Art Direction",
    description: "Guiding the visual style and creative vision for your projects.",
    icon: Compass,
  },
]

function ServiceCard({ title, description, icon: Icon, index, isInView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative rounded-3xl border border-white/10 bg-[#151515] p-8 backdrop-blur-sm enhanced-card">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
        <p className="text-white">{description}</p>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export function ServiceShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-white mb-4">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm">Design Expertise</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and digital presence.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
