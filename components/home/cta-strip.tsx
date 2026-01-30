"use client"

import Link from "next/link"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import { BookAppointmentButton } from "@/components/book-appointment-button"

export function CTAStrip() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Don't let pain hold you back. Our expert physiotherapists are here to help you heal and get back to doing what you love.
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            <Phone className="h-5 w-5" />
            Call Us Today
          </a>
          <BookAppointmentButton variant="outline" size="lg">
            <Calendar className="h-5 w-5" />
            Book Appointment
          </BookAppointmentButton>
        </div>

        <p className="mt-8 text-sm text-white/80">
          Available Mon - Sat: 9:00 AM - 8:00 PM • Same-day appointments available
        </p>
      </div>
    </section>
  )
}

