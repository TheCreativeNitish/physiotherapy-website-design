import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Knowledge Center - Hope and Heal",
  description: "Expert insights, tips, and educational articles on physiotherapy, pain management, injury prevention, and healthy living.",
}

const categories = [
  "All Articles",
  "Pain Management",
  "Injury Prevention",
  "Exercise Tips",
  "Recovery",
  "Healthy Living",
]

const featuredPost = {
  id: 1,
  slug: "understanding-chronic-back-pain",
  title: "Understanding Chronic Back Pain: Causes, Prevention, and Treatment Options",
  excerpt: "Back pain affects millions of people worldwide. Learn about the common causes, how to prevent it, and the most effective treatment approaches.",
  image: "/images/blog-back-pain.jpg",
  author: "Dr. Anil Sharma",
  date: "January 15, 2026",
  readTime: "8 min read",
  category: "Pain Management",
}

const posts = [
  {
    id: 2,
    slug: "exercise-tips-for-seniors",
    title: "Safe Exercise Tips for Seniors: Staying Active at Any Age",
    excerpt: "Discover gentle yet effective exercises that help seniors maintain mobility, strength, and independence.",
    image: "/images/blog-exercise.jpg",
    author: "Dr. Meera Patel",
    date: "January 10, 2026",
    readTime: "6 min read",
    category: "Healthy Living",
  },
  {
    id: 3,
    slug: "sports-injury-prevention",
    title: "5 Essential Warm-Up Routines to Prevent Sports Injuries",
    excerpt: "Proper warm-up is crucial for injury prevention. Learn the best routines to prepare your body for physical activity.",
    image: "/images/blog-sports.jpg",
    author: "Dr. Vikram Singh",
    date: "January 5, 2026",
    readTime: "5 min read",
    category: "Injury Prevention",
  },
  {
    id: 4,
    slug: "post-surgery-recovery",
    title: "Your Complete Guide to Post-Surgery Recovery",
    excerpt: "What to expect after orthopedic surgery and how physiotherapy can accelerate your healing process.",
    image: "/images/clinic-interior.jpg",
    author: "Dr. Anil Sharma",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "Recovery",
  },
  {
    id: 5,
    slug: "ergonomic-workspace-setup",
    title: "Creating an Ergonomic Workspace: A Complete Guide",
    excerpt: "Learn how to set up your workspace to prevent repetitive strain injuries and maintain good posture.",
    image: "/images/blog-back-pain.jpg",
    author: "Dr. Meera Patel",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Pain Management",
  },
  {
    id: 6,
    slug: "stretching-benefits",
    title: "The Science Behind Stretching: Why Flexibility Matters",
    excerpt: "Understanding the benefits of stretching and how it contributes to overall physical health and injury prevention.",
    image: "/images/blog-exercise.jpg",
    author: "Dr. Vikram Singh",
    date: "December 15, 2025",
    readTime: "6 min read",
    category: "Exercise Tips",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Knowledge center</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">
              Clinical guidance and patient education notes
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-foreground/80">
              This section archives patient education articles, exercise instructions, and safety advisories prepared by our physiotherapists. Content is intentionally text-heavy for quick reference by patients and referring doctors.
            </p>
            <div className="mt-6 max-w-md">
              <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" htmlFor="blog-search">
                Quick search
              </label>
              <div className="mt-2 flex items-center gap-2 border border-border px-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input id="blog-search" placeholder="Search articles" className="h-10 border-0 px-0 text-sm" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-6">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Categories</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`border border-border px-3 py-1 ${index === 0 ? "bg-background font-semibold text-primary" : "text-foreground/80"}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Featured article</p>
            <article className="mt-4 grid gap-6 border border-border p-4 lg:grid-cols-[2fr,3fr]">
              <div className="relative border border-dashed border-border bg-secondary/40">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="absolute left-2 top-2 bg-background px-2 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {featuredPost.category}
                </span>
              </div>
              <div>
                <Link href={`/blog/${featuredPost.slug}`} className="text-lg font-semibold text-primary underline">
                  {featuredPost.title}
                </Link>
                <p className="mt-3 text-sm text-foreground/80">{featuredPost.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Latest articles</p>
            <div className="mt-4 space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="border border-border p-4 text-sm">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="mt-2 inline-block font-semibold text-primary underline">
                    {post.title}
                  </Link>
                  <p className="mt-2 text-foreground/80">{post.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Archive updated monthly. For older notes please contact the clinic desk.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Updates</p>
              <div className="mt-3 grid gap-4 lg:grid-cols-[2fr,1fr]">
                <p className="text-sm text-foreground/80">
                  Receive a monthly digest summarising new patient education material and clinic advisories. Emails are informational only and exclude promotional content.
                </p>
                <form className="flex flex-col gap-2 text-sm">
                  <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email address
                  </label>
                  <div className="flex gap-2">
                    <Input id="newsletter-email" type="email" placeholder="name@example.com" className="h-10" />
                    <button type="button" className="border border-border px-3 py-2 font-semibold text-primary">
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
