import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { WelcomeSection } from "@/components/home/welcome-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"

import { GoogleReviewsSection } from "@/components/home/google-reviews-section"
import { InstagramFeedSection } from "@/components/home/instagram-feed-section"
import { VideoSection } from "@/components/home/video-section"
import { CTAStrip } from "@/components/home/cta-strip"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <WhyChooseUs />

        <GoogleReviewsSection />
        <InstagramFeedSection />
        <VideoSection />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  )
}
