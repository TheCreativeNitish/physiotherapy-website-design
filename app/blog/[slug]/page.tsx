import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"

// This would typically come from a CMS or database
const article = {
  title: "Understanding Chronic Back Pain: Causes, Prevention, and Treatment Options",
  excerpt: "Back pain affects millions of people worldwide. Learn about the common causes, how to prevent it, and the most effective treatment approaches.",
  image: "/images/blog-back-pain.jpg",
  author: "Dr. Anil Sharma",
  authorImage: "/images/doctor-profile.jpg",
  authorRole: "Lead Physiotherapist",
  date: "January 15, 2026",
  readTime: "8 min read",
  category: "Pain Management",
  content: `
    <p>Back pain is one of the most common health complaints, affecting people of all ages. While it can be frustrating and debilitating, understanding its causes and treatment options can help you manage and overcome this condition effectively.</p>

    <h2>Common Causes of Back Pain</h2>
    <p>Back pain can arise from various factors, including:</p>
    <ul>
      <li><strong>Poor Posture:</strong> Sitting or standing incorrectly for prolonged periods puts strain on your spine.</li>
      <li><strong>Muscle Strain:</strong> Lifting heavy objects or sudden movements can strain back muscles.</li>
      <li><strong>Disc Problems:</strong> Herniated or degenerative discs can cause significant pain.</li>
      <li><strong>Arthritis:</strong> Spinal arthritis can narrow the space around the spinal cord.</li>
      <li><strong>Sedentary Lifestyle:</strong> Lack of physical activity weakens the muscles supporting your spine.</li>
    </ul>

    <h2>Prevention Strategies</h2>
    <p>Many cases of back pain can be prevented with these strategies:</p>
    <ol>
      <li><strong>Maintain Good Posture:</strong> Keep your back straight and shoulders relaxed when sitting or standing.</li>
      <li><strong>Exercise Regularly:</strong> Strengthen your core muscles to support your spine.</li>
      <li><strong>Lift Properly:</strong> Bend your knees and keep the load close to your body.</li>
      <li><strong>Stay Active:</strong> Avoid prolonged sitting; take regular breaks to move around.</li>
      <li><strong>Maintain a Healthy Weight:</strong> Excess weight puts additional stress on your back.</li>
    </ol>

    <h2>Treatment Options</h2>
    <p>When back pain occurs, several treatment approaches can help:</p>

    <h3>Physiotherapy</h3>
    <p>Physiotherapy is often the most effective treatment for back pain. A physiotherapist can design a personalized program that includes:</p>
    <ul>
      <li>Manual therapy techniques</li>
      <li>Targeted exercises to strengthen supporting muscles</li>
      <li>Postural correction guidance</li>
      <li>Pain management strategies</li>
    </ul>

    <h3>Lifestyle Modifications</h3>
    <p>Simple changes in daily habits can significantly reduce back pain:</p>
    <ul>
      <li>Using ergonomic furniture</li>
      <li>Taking regular breaks from sitting</li>
      <li>Sleeping on a supportive mattress</li>
      <li>Applying heat or cold therapy</li>
    </ul>

    <h2>When to Seek Professional Help</h2>
    <p>While mild back pain often resolves on its own, you should consult a physiotherapist if you experience:</p>
    <ul>
      <li>Pain that persists for more than two weeks</li>
      <li>Pain that radiates down your leg</li>
      <li>Numbness or tingling in your legs</li>
      <li>Pain accompanied by fever or unexplained weight loss</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Back pain doesn't have to control your life. With proper understanding, prevention strategies, and professional treatment when needed, you can maintain a healthy, pain-free back. If you're experiencing persistent back pain, don't hesitate to reach out to our team at PhysioCare for a personalized assessment and treatment plan.</p>
  `,
}

const relatedPosts = [
  {
    id: 1,
    slug: "ergonomic-workspace-setup",
    title: "Creating an Ergonomic Workspace: A Complete Guide",
    image: "/images/blog-back-pain.jpg",
    category: "Pain Management",
  },
  {
    id: 2,
    slug: "stretching-benefits",
    title: "The Science Behind Stretching: Why Flexibility Matters",
    image: "/images/blog-exercise.jpg",
    category: "Exercise Tips",
  },
  {
    id: 3,
    slug: "post-surgery-recovery",
    title: "Your Complete Guide to Post-Surgery Recovery",
    image: "/images/clinic-interior.jpg",
    category: "Recovery",
  },
]

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-background py-10">
          <div className="mx-auto max-w-4xl px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to articles
            </Link>
            <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">{article.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-primary">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-foreground/80">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden border border-border">
                  <Image
                    src={article.authorImage || "/placeholder.svg"}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{article.author}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wide text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-6">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border bg-background p-3 text-xs text-muted-foreground">
              Articles are prepared by treating therapists and reviewed quarterly. Kindly contact the clinic if you need clarifications or printable versions.
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-8">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border">
              <div className="relative aspect-[21/9] bg-secondary/40">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_220px]">
              <article
                className="prose prose-sm max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <aside className="space-y-4 text-sm text-foreground/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Share</p>
                  <button className="mt-2 border border-border px-3 py-2 text-xs text-primary">
                    <Share2 className="mr-2 inline h-3.5 w-3.5" /> Copy link
                  </button>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Author</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="relative h-12 w-12 border border-border">
                      <Image
                        src={article.authorImage || "/placeholder.svg"}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{article.author}</p>
                      <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-10">
          <div className="mx-auto max-w-5xl px-4">
            <div className="border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Need assistance</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-foreground/80">
                <p className="flex-1">
                  If you require supervised guidance for this condition, contact the coordination desk with the article title for appointment scheduling.
                </p>
                <Link href="/contact" className="border border-border px-3 py-2 text-sm font-semibold text-primary">
                  Contact clinic
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Related reading</p>
            <div className="mt-4 space-y-4">
              {relatedPosts.map((post) => (
                <article key={post.id} className="border border-border p-4 text-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.category}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-1 inline-block font-semibold text-primary underline">
                    {post.title}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
