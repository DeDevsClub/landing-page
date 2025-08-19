"use client"

import { useState, useEffect } from "react"
import LandingHeader from "@/components/sections/landing-header"
import { Footer } from "@/components/footer"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import FeatureHero from "@/components/sections/feature-hero"
import Waitlist from "@/components/waitlist"
import ProductsSection from "@/components/sections/products-section"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
  <div className="min-h-screen w-full h-full bg-background overflow-hidden mx-auto flex flex-col items-center">
      <section className="relative w-full overflow-hidden">
        <LandingHeader />
      <section className="w-full border-t">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
          <Waitlist />
</div>
        </section>
      <section className="w-full border-t">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
          <FeatureHero />
</div>
        </section>
      <section className="w-full border-t">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
          <ProductsSection />
</div>
        </section>
      <section className="w-full border-t">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
          <TargetAudienceSection />
</div>
        </section>
      </section>
      <Footer />
    </div>
  )
}