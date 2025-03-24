"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { AboutSection } from "@/components/sections/about-section"
import { CtaSection } from "@/components/sections/cta-section"
import { PricingSection } from "@/components/sections/pricing-section"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid')] bg-repeat opacity-10 pointer-events-none dark:opacity-10 light:opacity-5"></div>
      <Header />
      <main className="flex-1 relative">
        <HeroSection />
        <FeaturesSection />
        <TargetAudienceSection />
        <PricingSection />
        {/* <RoadmapSection /> */}
        <AboutSection />
        {/* <CtaSection /> */}
      </main>
      <Footer />
    </div>
  )
}

