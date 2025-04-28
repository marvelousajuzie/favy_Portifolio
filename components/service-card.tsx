"use client"

import { motion } from "framer-motion"
import { Compass, CuboidIcon as Cube, Globe, Layout, Palette, Video, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "layout":
        return Layout
      case "palette":
        return Palette
      case "globe":
        return Globe
      case "video":
        return Video
      case "cube":
        return Cube
      case "compass":
        return Compass
      default:
        return Layout
    }
  }

  const Icon = getIcon()

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border bg-background p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
