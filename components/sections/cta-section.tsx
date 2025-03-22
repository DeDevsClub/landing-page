"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/sections/section-backgrounds"

export function CtaSection() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="cta" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Join the DeDevs Community?
            </h2>
            <p className="mx-auto max-w-[700px] text-[#e0e0ff] md:text-xl">
              Connect with thousands of blockchain and AI enthusiasts, access exclusive resources, and be part of
              groundbreaking collaborative projects.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2 min-[400px]:flex-row"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f143a9] to-[#00ffff] hover:opacity-90 text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Join DeDevs Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
            </Button>
            <Button size="lg" variant="outline" className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10">
              Explore Resources
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {[
              { count: "5,000+", label: "Community Members" },
              { count: "50+", label: "Monthly Events" },
              { count: "100+", label: "Collaborative Projects" },
              { count: "30+", label: "Industry Partners" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl font-bold text-[#f143a9]">{stat.count}</div>
                <div className="text-sm text-[#e0e0ff]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

