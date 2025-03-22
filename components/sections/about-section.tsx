"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/sections/section-backgrounds"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="about" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f143a9]/20 to-[#00ffff]/20 z-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-[#f143a9]/30 rounded-xl z-20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f143a9] to-transparent z-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent z-30"></div>

            {/* Grid lines */}
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
            <div className="space-y-2">
              <Badge className="inline-flex rounded-md px-3 py-1 text-sm bg-[#00ffff]/20 text-[#00ffff] border border-[#00ffff]/50">
                About Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Our Mission</h2>
              <p className="text-[#e0e0ff] md:text-lg">
                {`DeDevs was founded in 2025 with a clear vision: to create a vibrant community where blockchain and AI
                enthusiasts can connect, learn, and innovate together. We believe that the intersection of these
                technologies holds immense potential to transform industries and solve complex global challenges.`}
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
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-[#f143a9] to-[#00ffff] hover:opacity-90 text-white relative overflow-hidden group">
                <span className="relative z-10">{`Join Our Community`}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
              </Button>
              <Button variant="outline" className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10">
                {`Learn More`}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

