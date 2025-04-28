"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this designer was an absolute pleasure. They took our vague ideas and transformed them into a stunning brand identity that perfectly captures our company's vision.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional headshot of business man",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director, FashionBrand",
    content:
      "The attention to detail and creativity brought to our project exceeded all expectations. Our website redesign has resulted in a 40% increase in user engagement.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional headshot of business woman",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, AppLaunch",
    content:
      "An exceptional talent who delivers not just beautiful designs but strategic solutions. The UI/UX work for our app has received overwhelmingly positive feedback from users.",
    avatar: "/placeholder.svg?height=100&width=100&query=professional headshot of asian man",
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-full border-2 border-background">
              <Image
                src={testimonials[current].avatar || "/placeholder.svg"}
                alt={testimonials[current].name}
                fill
                className="object-cover"
              />
            </div>
            <blockquote className="mb-6 text-xl font-medium leading-relaxed md:text-2xl">
              "{testimonials[current].content}"
            </blockquote>
            <div className="text-center">
              <div className="font-semibold">{testimonials[current].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setAutoplay(false)
              prev()
            }}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full ${index === current ? "bg-primary" : "bg-primary/20"}`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setAutoplay(false)
              next()
            }}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
