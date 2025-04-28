"use server"

import { Resend } from "resend"

// Initialize Resend with API key from environment variables, with proper error handling
const resendApiKey = process.env.RESEND_API_KEY
let resend: Resend | null = null

// Only initialize if API key exists
if (resendApiKey) {
  resend = new Resend(resendApiKey)
}

// Define the type for form data
type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      console.error("Resend API key is missing. Please add RESEND_API_KEY to your environment variables.")
      return {
        success: false,
        error: "Email service is not configured. Please contact the site administrator.",
      }
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Use verified domain in production
      to: ["your-email@example.com"], // Replace with your email
      subject: `New Contact Form: ${formData.subject}`,
      reply_to: formData.email,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
      `,
      // You can also use HTML for a nicer email
      html: `
        <h2>New message from your portfolio contact form</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
