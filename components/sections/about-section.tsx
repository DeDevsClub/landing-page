"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { URLS } from "@/constants/urls"
import { SectionHeader } from "@/components/ui/section-header"
import { useEffect, useState } from "react"
import { Globe2, Users, Sparkles, Rocket, Cpu, Blocks } from "lucide-react"

function CountUp({ to, duration = 1200, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setValue(Math.floor(progress * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return <span>{value.toLocaleString()}{suffix}</span>
}

export function AboutSection() {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="about" className="bg-background"/>
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Our Mission"
          content={`Founded in 2025 with a clear vision: to create a vibrant community where blockchain and AI
                enthusiasts can connect, learn, and innovate together.`}
        />

        {/* Trust badges */}
        <div className="mt-4 mb-8 flex flex-wrap gap-2">
          <Badge variant="outline" className="border-[#00ffff]/30 text-[#e0e0ff]"> <Sparkles className="mr-1 h-3.5 w-3.5" /> Future-focused</Badge>
          <Badge variant="outline" className="border-[#00ffff]/30 text-[#e0e0ff]"> <Globe2 className="mr-1 h-3.5 w-3.5" /> Global community</Badge>
          <Badge variant="outline" className="border-[#00ffff]/30 text-[#e0e0ff]"> <Cpu className="mr-1 h-3.5 w-3.5" /> AI × Blockchain</Badge>
          <Badge variant="outline" className="border-[#00ffff]/30 text-[#e0e0ff]"> <Blocks className="mr-1 h-3.5 w-3.5" /> Open collaboration</Badge>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-5 bg-background h-full w-full"
          >
            <div className="space-y-3 bg-background/70 backdrop-blur rounded-xl p-4 border border-white/5">
               <p className="text-text md:text-lg">
               {`We believe that the intersection of these
               technologies holds immense potential to transform industries and solve complex global challenges.`}
               </p>
               <p className="text-text md:text-lg">
                {`Our community welcomes everyone from seasoned professionals to curious beginners. Whether you're a
                blockchain developer, AI researcher, product manager, or simply interested in these technologies, DeDevs
                provides the resources, connections, and opportunities to help you grow.`}
              </p>
              <p className="text-text md:text-lg">
                {`Through virtual events, forums, collaborative projects, and curated resources, we're building a global
                network of innovators who are shaping the future of technology.`}
              </p>
            </div>  

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-background/60 p-3">
                <Users className="h-5 w-5 text-[#00ffff] mt-0.5" />
                <div>
                  <p className="text-sm text-text">Community-first</p>
                  <p className="text-text">Mentorship, meetups, and maker culture</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-background/60 p-3">
                <Cpu className="h-5 w-5 text-[#f143a9] mt-0.5" />
                <div>
                  <p className="text-sm text-text">Practical learning</p>
                  <p className="text-text">Workshops, code labs, and real projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-background/60 p-3">
                <Blocks className="h-5 w-5 text-[#00ffff] mt-0.5" />
                <div>
                  <p className="text-sm text-text">Open collaboration</p>
                  <p className="text-text">Build with peers across the world</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-background/60 p-3">
                <Rocket className="h-5 w-5 text-[#f143a9] mt-0.5" />
                <div>
                  <p className="text-sm text-text">Career acceleration</p>
                  <p className="text-text">Showcase, ship, and get discovered</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-start">
              <Button size="lg" variant="filledBlue" link={{ href: URLS.TWITTER, external: true }} aria-label="Follow updates on X">
                {`Join the Conversation`}
              </Button>
            </div>
          </motion.div>
        </div>
        </div>
    </section>
  )
}
