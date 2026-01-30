import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppointmentModalProvider } from '@/contexts/appointment-modal-context'
import { AppointmentBookingModal } from '@/components/appointment-booking-modal'
import { StickyContactWidget } from '@/components/sticky-contact-widget'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Hope and Heal - Expert Physiotherapy & Rehabilitation',
  description: 'Professional physiotherapy services for pain relief, injury recovery, and mobility restoration. Personalized treatment by certified physiotherapists. Book your appointment today.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AppointmentModalProvider>
          {children}
          <AppointmentBookingModal />
          <StickyContactWidget />
          <Analytics />
        </AppointmentModalProvider>
      </body>
    </html>
  )
}
