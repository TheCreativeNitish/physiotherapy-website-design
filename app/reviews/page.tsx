"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleReviewsSection } from "@/components/home/google-reviews-section"
// We can reuse the section directly or copy logic. Since the section is self-contained with title, let's wrap it nicely.

export default function ReviewsPage() {
    // Mock data for extra reviews if we want more than the home section
    const reviews = [
        {
            name: "Anjali Gupta",
            rating: 5,
            date: "2 weeks ago",
            text: "Dr. Neha is incredibly knowledgeable. Her diagnosis was spot on, and the dry needling sessions helped my chronic shoulder pain significantly. Highly recommended!",
            avatar: "A"
        },
        {
            name: "Rahul Nair",
            rating: 5,
            date: "1 month ago",
            text: "Best physiotherapy clinic in Ramamurthy Nagar. The staff is professional, and the equipment is top-notch. I recovered from my ACL surgery much faster than expected.",
            avatar: "R"
        },
        {
            name: "Suresh Kumar",
            rating: 5,
            date: "3 weeks ago",
            text: "I went for back pain treatment. The manual therapy and IASTM worked wonders. Very clean and hygienic clinic.",
            avatar: "S"
        },
        {
            name: "Meera Reddy",
            rating: 5,
            date: "2 months ago",
            text: "Compassionate care is what you get here. They listen to you patiently. The exercises prescribed were easy to follow at home.",
            avatar: "M"
        },
        {
            name: "David John",
            rating: 5,
            date: "1 week ago",
            text: "Excellent service. The appointment system is smooth, and there is no waiting time. Dr. Neha explains everything clearly.",
            avatar: "D"
        },
        {
            name: "Priya S",
            rating: 5,
            date: "3 days ago",
            text: "Treatment is effective and affordable. I visited for neck stiffness and saw results in just 3 sessions.",
            avatar: "P"
        }
    ]

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1">
                {/* Hero */}
                <section className="bg-slate-50 py-16 text-center border-b border-gray-100">
                    <div className="mx-auto max-w-4xl px-4">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Success Stories</h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Hear from our happy patients who have reclaimed their active lives with us.
                        </p>

                        <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-slate-900">4.9/5</p>
                                <div className="flex text-yellow-500 text-sm mt-1">
                                    {"★★★★★"}
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Google Rating</p>
                            </div>
                            <div className="h-12 w-px bg-gray-200"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-slate-900">1000+</p>
                                <p className="text-sm font-medium text-teal-600 mt-1">Patients</p>
                                <p className="text-xs text-slate-500 mt-1">Recovered</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Grid */}
                <section className="py-16 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="h-10 w-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {review.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{review.name}</h4>
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-yellow-400 text-sm mb-3">
                                        {"★★★★★"}
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        "{review.text}"
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="https://www.google.com/maps/place/Hope%26Heal+Physiotherapy+Clinic" // Replace with actual link if available
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                            >
                                <img src="/google-logo.svg" alt="Google" className="h-5 w-5" onError={(e) => e.currentTarget.style.display = 'none'} /> {/* Fallback if no icon */}
                                Write a Review on Google
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
