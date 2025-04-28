"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
}

export function ProjectCard({ title, description, image, category }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border bg-background"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
            {category}
          </span>
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}
