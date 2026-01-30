"use client"

import { ArrowRight } from "lucide-react"

const services = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&fit=max",
    icon: "👤",
    title: "Patient Assessment",
    description: "In the journey to Successful treatment of a patient, an accurate diagnosis of problem is the half battle won.",
    href: "/services#assessment"
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&fit=max",
    icon: "🏃",
    title: "Exercise Therapy",
    description: "Advances Exercise Therapy Treatment, Breakaway from the crappy and boring workout routine.",
    href: "/services#exercise"
  },
  {
    image: "https://ik.imagekit.io/dvl5mhvik/premium_photo-1661672215321-e67893b20059.avif",
    icon: "⚡",
    title: "Electro Therapy",
    description: "Electrotherapy is an effective and non-invasive method of treating pain.",
    href: "/services#electro"
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&fit=max",
    icon: "🤲",
    title: "Manual Therapy",
    description: "Synergy Physiotherapy Clinic is a physiotherapy clinic that specializes in Manual and hand therapy.",
    href: "/services#manual"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&fit=max",
    icon: "💪",
    title: "Fitness Therapy",
    description: "Fitness therapy is a form of rehabilitation that focuses on increasing the mobility of joints.",
    href: "/services#fitness"
  },
  {
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&fit=max",
    icon: "🤖",
    title: "Robotic Therapy",
    description: "Synergy is a robotic therapy device that helps patients recover from injuries, decrease pain and increase the range of motion.",
    href: "/services#robotic"
  },
  {
    image: "https://ik.imagekit.io/dvl5mhvik/neuro.avif",
    icon: "🧠",
    title: "Neuro Rehab",
    description: "Synergy is an advanced neuro-rehabilitation platform that helps the brain to recover from stroke, trauma and other neurological conditions.",
    href: "/services#neuro"
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&fit=max",
    icon: "🤰",
    title: "Prenatal & Postnatal Therapy",
    description: "Prenatal and Postnatal Therapy is a therapy that helps with the transition from pregnancy to parenthood.",
    href: "/services#prenatal"
  },
  {
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&fit=max",
    icon: "💉",
    title: "Dry Needling Therapy",
    description: "Dry needling therapy is the use of a needle to stimulate the muscles. It is a non-invasive, drug-free treatment.",
    href: "/services#dry-needling"
  }
]

export function ServicesSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center fade-in">
          <span className="inline-block rounded-full bg-teal-600/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-teal-600 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground heading-animated">
            What We're Offering
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-foreground/70">
            Comprehensive physiotherapy treatments tailored to your recovery needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Read More Button */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-2.5 rounded-lg transition-all hover:gap-3 shadow-md hover:shadow-lg"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
