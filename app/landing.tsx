"use client"

import { useState, useEffect } from "react"
import LandingHeader from "@/components/sections/landing-header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { AboutSection } from "@/components/sections/about-section"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-background text-foreground overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid')] bg-repeat opacity-10 pointer-events-none dark:opacity-10 light:opacity-5"></div> */}
      <LandingHeader />
      <main className="flex flex-col justify-center items-center gap-8 relative">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TargetAudienceSection />
      </main>
      <Footer />
    </div>
  )
}

