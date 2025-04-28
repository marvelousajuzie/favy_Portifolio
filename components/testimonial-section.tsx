"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this designer was an absolute pleasure. They took our vague ideas and transformed them into a stunning brand identity that perfectly captures our company's vision.",
    avatar: "/avatar-1.png",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director, FashionBrand",
    content:
      "The attention to detail and creativity brought to our project exceeded all expectations. Our website redesign has resulted in a 40% increase in user engagement.",
    avatar: "/avatar-2.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, AppLaunch",
    content:
      "An exceptional talent who delivers not just beautiful designs but strategic solutions. The UI/UX work for our app has received overwhelmingly positive feedback from users.",
    avatar: "/avatar-3.png",
  },
]

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" ref={ref} className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container">
        <div className="flex flex-col gap-4 items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-white mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm">Client Feedback</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Hear what clients have to say about their experience working with me.
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />

          <div className="relative rounded-3xl border border-white/10 bg-[#151515] p-8 md:p-12 backdrop-blur-sm enhanced-card">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Quote className="h-8 w-8" />
            </div>

            <div className="min-h-[200px]">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute"
                >
                  <blockquote className="mb-8 text-xl md:text-2xl font-medium leading-relaxed text-white">
                    "{testimonials[current].content}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[current].name}</div>
                      <div className="text-sm text-white">{testimonials[current].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-16 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 w-${index === current ? "10" : "2.5"} rounded-full transition-all duration-300 ${
                      index === current ? "bg-primary" : "bg-white/30"
                    }`}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1)
                      setCurrent(index)
                    }}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="h-10 w-10 rounded-full border-white/20 bg-[#151515]/80 hover:bg-[#151515] text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="h-10 w-10 rounded-full border-white/20 bg-[#151515]/80 hover:bg-[#151515] text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
