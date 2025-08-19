"use client"

import { useState, useEffect } from "react"
import LandingHeader from "@/components/sections/landing-header"
import { Footer } from "@/components/footer"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import FeatureHero from "@/components/sections/feature-hero"
import Waitlist from "@/components/waitlist"
import ProductsSection from "@/components/sections/products-section"

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
      <main className="flex flex-col justify-center items-center gap-8 relative">
        <LandingHeader />
        <section className="w-full border-t">
          <Waitlist />
        </section>
        <section className="w-full border-t">
          <FeatureHero />
        </section>
        <section className="w-full border-t">
          <ProductsSection />
        </section>
        <section className="w-full border-t">
          <TargetAudienceSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
