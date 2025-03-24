"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { URLS } from "@/constants/urls"
import { SectionHeader } from "@/components/ui/section-header"

export function AboutSection() {
  return (
    <section id="about" className="w-full relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="about" className="bg-background"/>
      <SectionHeader title="Our Mission" content={`Founded in 2025 with a clear vision: to create a vibrant community where blockchain and AI
                enthusiasts can connect, learn, and innovate together.`}/>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-linear-to-r from-[#f143a9]/20 to-[#00ffff]/20 z-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-[#f143a9]/30 rounded-xl z-20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#f143a9] to-transparent z-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00ffff] to-transparent z-30"></div>

            {/* Gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between z-5 opacity-30">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-px bg-[#00ffff]/50"></div>
              ))}
            </div>
            <div className="absolute inset-0 flex justify-between z-5 opacity-30">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-px bg-[#00ffff]/50"></div>
              ))}
            </div>

            <Image
              src="/banner.png"
              width={2400}
              height={1800}
              alt="About DeDevs"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2 bg-background rounded-xl p-4">
               <p className="text-[#e0e0ff] md:text-lg">
               {`We believe that the intersection of these
               technologies holds immense potential to transform industries and solve complex global challenges`}
               </p>
               <p className="text-[#e0e0ff] md:text-lg">
                {`Our community welcomes everyone from seasoned professionals to curious beginners. Whether you\'re a
                blockchain developer, AI researcher, product manager, or simply interested in these technologies, DeDevs
                provides the resources, connections, and opportunities to help you grow.`}
              </p>
              <p className="text-[#e0e0ff] md:text-lg">
                {`Through virtual events, forums, collaborative projects, and curated resources, we\'re building a global
                network of innovators who are shaping the future of technology.`}
              </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mb-4 justify-end">
              <Button size="lg" variant="filledBlue" link={{ href: URLS.TWITTER, external: true }}>
                {`Learn More`}
              </Button>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

