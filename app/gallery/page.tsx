"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTAStrip } from "@/components/home/cta-strip"
import { X } from "lucide-react"

const categories = [
  { id: "all", name: "All Photos" },
  { id: "clinic", name: "Clinic Interiors" },
  { id: "treatment", name: "Treatment Sessions" },
  { id: "equipment", name: "Equipment" },
  { id: "team", name: "Our Team" },
]

const images = [
  {
    id: 1,
    src: "/images/clinic-interior.jpg",
    alt: "Modern physiotherapy clinic treatment room",
    category: "clinic",
    title: "Treatment Room",
  },
  {
    id: 2,
    src: "/images/gallery-treatment-1.jpg",
    alt: "Physiotherapist performing shoulder rehabilitation",
    category: "treatment",
    title: "Shoulder Rehabilitation",
  },
  {
    id: 3,
    src: "/images/gallery-equipment.jpg",
    alt: "Modern physiotherapy equipment",
    category: "equipment",
    title: "Rehabilitation Equipment",
  },
  {
    id: 4,
    src: "/images/gallery-reception.jpg",
    alt: "Welcoming clinic reception area",
    category: "clinic",
    title: "Reception Area",
  },
  {
    id: 5,
    src: "/images/team-photo.jpg",
    alt: "PhysioCare team of physiotherapists",
    category: "team",
    title: "Our Expert Team",
  },
  {
    id: 6,
    src: "/images/hero-physiotherapy.jpg",
    alt: "Physiotherapist helping patient with exercises",
    category: "treatment",
    title: "Guided Exercise Session",
  },
  {
    id: 7,
    src: "/images/doctor-profile.jpg",
    alt: "Dr. Anil Sharma - Lead Physiotherapist",
    category: "team",
    title: "Dr. Anil Sharma",
  },
  {
    id: 8,
    src: "/images/patient-testimonial.jpg",
    alt: "Happy patient after successful treatment",
    category: "treatment",
    title: "Patient Success Story",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof images[0] | null>(null)

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Facility gallery</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">Visual reference for treatment spaces and equipment</h1>
            <p className="mt-4 max-w-3xl text-sm text-foreground/80">
              Images are provided for orientation only and correspond to active treatment bays, equipment, and staff. Lighting and layout may vary slightly between visits.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-6">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Filter
              set</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`border border-border px-3 py-1 text-left ${
                    activeCategory === category.id ? "bg-background font-semibold text-primary" : "text-foreground/80"
                  }`}
                  type="button"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setLightboxImage(image)}
                  className="text-left"
                  type="button"
                >
                  <figure className="border border-border p-2 text-sm text-foreground/80">
                    <div className="relative aspect-square bg-secondary/40">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <p className="font-semibold text-foreground">{image.title}</p>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{image.category}</p>
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="py-12 text-sm text-muted-foreground">
                No images available for the selected filter.
              </div>
            )}
          </div>
        </section>

        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute right-6 top-6 text-background"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="w-full max-w-4xl border border-border bg-background p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] bg-secondary/40">
                <Image
                  src={lightboxImage.src || "/placeholder.svg"}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 text-sm text-foreground/80">
                <p className="font-semibold text-foreground">{lightboxImage.title}</p>
                <p className="text-xs text-muted-foreground">{lightboxImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        <section className="bg-secondary py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-4 text-sm text-foreground/80 sm:grid-cols-3">
              <div className="border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Facility size</p>
                <p className="mt-2 text-2xl font-semibold text-primary">3000+ sq. ft.</p>
              </div>
              <div className="border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Treatment stations</p>
                <p className="mt-2 text-2xl font-semibold text-primary">15 dedicated bays</p>
              </div>
              <div className="border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Equipment class</p>
                <p className="mt-2 text-2xl font-semibold text-primary">Modern & calibrated</p>
              </div>
            </div>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
