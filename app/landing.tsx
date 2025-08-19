"use client"

import { useState, useEffect } from "react"
import LandingHeader from "@/components/sections/landing-header"
import { Footer } from "@/components/footer"
import FeaturesSection from "@/components/sections/features-section"
import { TargetAudienceSection } from "@/components/sections/target-audience-section"
import { AboutSection } from "@/components/sections/about-section"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Bookmark, NotebookPen, CheckCircle2, Link2, CalendarDays, Bell, SquareCheck } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Book, Users, Globe2 } from "lucide-react"
import { URLS } from "@/constants/urls"
import Waitlist from "@/components/waitlist"

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

        <section>
          <Waitlist />
        </section>

        {/* Premium hero overlay to set the tone */}
        <section className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-50%,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-16 sm:py-24 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight p-6 bg-muted rounded-md mb-4 sm:mb-12"
            >
              DeDevs Club
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
            >
              A global community for builders at the edge of AI and blockchain.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto"
            >
              Learn, build, and ship with peers worldwide. From workshops and code labs to open collaboration and career acceleration—join us to create the future together.
            </motion.p>
          </div>
        </section>
        {/* Existing feature hero (kept, normalized container) */}
      {/* <section className="w-full border-t">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
          <FeatureHero />
        </div>
      </section> */}
  <FeaturesSection />
  <TargetAudienceSection />
      </main>
      <Footer />
    </div>
  )
}
