"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Copy, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ResendSetupGuide() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-8 rounded-xl border border-white/10 bg-[#151515] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-white hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center">
          <div className="mr-2 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-sm">i</span>
          </div>
          <span className="font-medium">How to set up Resend for the contact form</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="p-4 border-t border-white/10 space-y-4">
          <p className="text-white/80">Follow these steps to set up Resend for your contact form:</p>

          <ol className="space-y-4 text-white/80 list-decimal pl-5">
            <li>
              <p>
                <a
                  href="https://resend.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Sign up for a Resend account
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </p>
            </li>

            <li>
              <p>Create an API key in your Resend dashboard</p>
            </li>

            <li>
              <p>Add the API key to your environment variables:</p>
              <div className="mt-2 relative">
                <div className="bg-black/50 rounded p-3 font-mono text-sm overflow-x-auto">
                  RESEND_API_KEY=re_123456789
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-2 top-2 h-8 w-8 p-0"
                  onClick={() => copyToClipboard("RESEND_API_KEY=re_123456789")}
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </li>

            <li>
              <p>Update the recipient email in the server action file:</p>
              <div className="mt-2 bg-black/50 rounded p-3 font-mono text-sm overflow-x-auto">
                <span className="text-gray-400">// In lib/actions.ts, change:</span>
                <br />
                to: ["your-email@example.com"], <span className="text-gray-400">// Replace with your email</span>
              </div>
            </li>

            <li>
              <p>
                For production, verify your domain in Resend and update the "from" address to use your verified domain.
              </p>
            </li>
          </ol>

          <div className="bg-primary/10 rounded-lg p-4 text-white">
            <h4 className="font-medium mb-2">Important Note</h4>
            <p className="text-sm">
              When testing, you can use the default{" "}
              <code className="bg-black/50 px-1 py-0.5 rounded">onboarding@resend.dev</code> sender, but for production,
              you should verify your domain and use a custom email address.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
