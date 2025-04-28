"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/lib/actions"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError(result.error || "Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.")
      console.error("Contact form error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-white/10 bg-[#151515] p-6 md:p-8 backdrop-blur-sm enhanced-card"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex h-full flex-col items-center justify-center text-center py-12"
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Send className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-white max-w-md">
            Thank you for reaching out. I'll get back to you as soon as possible to discuss your project.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-white">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="font-medium">{error}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-white/20 bg-[#151515]/80 focus:border-primary focus:ring-primary text-white placeholder:text-white/60 enhanced-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="border-white/20 bg-[#151515]/80 focus:border-primary focus:ring-primary text-white placeholder:text-white/60 enhanced-input"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-white">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
              className="border-white/20 bg-[#151515]/80 focus:border-primary focus:ring-primary text-white placeholder:text-white/60 enhanced-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="min-h-[150px] border-white/20 bg-[#151515]/80 focus:border-primary focus:ring-primary text-white placeholder:text-white/60 enhanced-input"
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full text-white" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <div className="text-xs text-white/60 text-center pt-2">
            Powered by Resend. Your message will be sent directly to my inbox.
          </div>
        </form>
      )}
    </motion.div>
  )
}
