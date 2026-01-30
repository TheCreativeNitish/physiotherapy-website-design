"use client"

import { Phone, MessageCircle } from "lucide-react"

export function StickyContactWidget() {
  return (
    <>
      {/* Mobile: WhatsApp Only - Left Bottom */}
      <div className="fixed left-4 bottom-6 z-40 flex md:hidden">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>

      {/* Desktop: Phone & WhatsApp - Right Bottom */}
      <div className="fixed right-6 bottom-20 z-40 hidden md:flex flex-col gap-4">
        {/* Phone Button */}
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Call us"
          title="Call us"
        >
          <Phone className="h-7 w-7" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </>
  )
}
