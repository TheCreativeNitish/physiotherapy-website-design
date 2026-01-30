import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTAStrip } from "@/components/home/cta-strip"
import Link from "next/link"
import { 
  Bone, 
  Brain, 
  Activity, 
  Baby, 
  Heart, 
  Home,
  Stethoscope,
  Users,
  ArrowRight,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services - PhysioCare",
  description: "Comprehensive physiotherapy services including orthopedic rehabilitation, neurological therapy, sports injury treatment, and more.",
}

const services = [
  {
    id: "orthopedic",
    icon: Bone,
    title: "Orthopedic Rehabilitation",
    description: "Specialized treatment for musculoskeletal conditions including joint pain, fractures, arthritis, and post-surgical rehabilitation.",
    whoItHelps: "Patients with joint pain, fractures, arthritis, back pain, and post-surgical conditions",
    benefits: [
      "Pain relief and improved mobility",
      "Faster recovery from injuries",
      "Prevention of future problems",
      "Return to normal activities",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "neuro",
    icon: Brain,
    title: "Neurological Therapy",
    description: "Expert care for patients with neurological conditions including stroke, Parkinson's disease, multiple sclerosis, and spinal cord injuries.",
    whoItHelps: "Patients recovering from stroke, living with Parkinson's, MS, or spinal cord injuries",
    benefits: [
      "Improved motor function",
      "Better balance and coordination",
      "Enhanced independence",
      "Quality of life improvement",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "sports",
    icon: Activity,
    title: "Sports Injury Treatment",
    description: "Comprehensive rehabilitation for athletes and active individuals to recover from sports injuries and prevent future ones.",
    whoItHelps: "Athletes, fitness enthusiasts, and active individuals with sports-related injuries",
    benefits: [
      "Quick return to sport",
      "Injury prevention strategies",
      "Performance optimization",
      "Sport-specific rehabilitation",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "pediatric",
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description: "Gentle, specialized care for children with developmental delays, cerebral palsy, and other pediatric conditions.",
    whoItHelps: "Children with developmental delays, cerebral palsy, and congenital conditions",
    benefits: [
      "Improved motor development",
      "Enhanced functional abilities",
      "Better posture and movement",
      "Fun, engaging therapy sessions",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "post-surgical",
    icon: Heart,
    title: "Post-Surgical Rehabilitation",
    description: "Targeted therapy programs to accelerate recovery after orthopedic, cardiac, or other surgical procedures.",
    whoItHelps: "Patients recovering from joint replacement, spine surgery, or cardiac procedures",
    benefits: [
      "Faster healing process",
      "Reduced complications",
      "Restored function and strength",
      "Personalized recovery plan",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "home-visits",
    icon: Home,
    title: "Home Visit Services",
    description: "Professional physiotherapy services delivered at the comfort of your home for patients with mobility limitations.",
    whoItHelps: "Elderly patients, those with severe mobility issues, or post-surgical patients",
    benefits: [
      "Convenience and comfort",
      "No travel required",
      "Familiar environment",
      "Flexible scheduling",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "geriatric",
    icon: Users,
    title: "Geriatric Physiotherapy",
    description: "Specialized care for elderly patients focusing on maintaining mobility, preventing falls, and improving quality of life.",
    whoItHelps: "Seniors dealing with age-related mobility issues, arthritis, or balance problems",
    benefits: [
      "Improved balance and stability",
      "Fall prevention",
      "Pain management",
      "Enhanced independence",
    ],
    image: "/images/clinic-interior.jpg",
  },
  {
    id: "womens-health",
    icon: Stethoscope,
    title: "Women's Health Physiotherapy",
    description: "Specialized treatments for women including prenatal and postnatal care, pelvic floor therapy, and osteoporosis management.",
    whoItHelps: "Women during pregnancy, postpartum, or dealing with pelvic health issues",
    benefits: [
      "Pre and postnatal care",
      "Pelvic floor strengthening",
      "Pain relief during pregnancy",
      "Faster postpartum recovery",
    ],
    image: "/images/clinic-interior.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service catalogue</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">Comprehensive Physiotherapy Services at Hope and Heal</h1>
            <p className="mt-4 max-w-3xl text-sm text-foreground/80">
              Each programme listed below follows a defined assessment template, measurable outcomes, and regular reporting to referring doctors. Click any service to view its reference code and share it with our coordination desk.
            </p>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="space-y-8">
              {services.map((service) => (
                <article key={service.id} id={service.id} className="border border-border p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-primary">
                      <service.icon className="h-4 w-4" />
                      <p className="text-xs font-semibold uppercase tracking-wide">{service.title}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">Ref code: {service.id.toUpperCase()}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/80">{service.description}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Typical cases</p>
                      <p className="mt-2 text-sm text-foreground/80">{service.whoItHelps}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Clinical benefits</p>
                      <ul className="mt-2 space-y-1 text-sm text-foreground/80">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-primary">
                    <Link href="/contact" className="underline">Discuss this programme with our team</Link>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-10">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick navigation</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {services.map((service) => (
                <Link key={service.id} href={`#${service.id}`} className="border border-border px-3 py-1 text-foreground/80 hover:text-primary">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
