"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Brain } from "lucide-react"
import { InteractiveCard } from "@/components/interactive/interactive-card"
import { SectionBackground } from "@/components/sections/section-backgrounds"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Code className="h-10 w-10 text-[#ff00ff]" />,
      title: "Blockchain Developers",
      description:
        "Whether you're building on Ethereum, Solana, or other chains, connect with peers to solve complex problems and explore new protocols.",
      glowColor: "from-[#ff00ff]/20 to-[#ff00ff]/5",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#00ffff]" />,
      title: "AI Researchers",
      description:
        "Share your latest findings, discuss cutting-edge papers, and collaborate on projects pushing the boundaries of machine learning.",
      glowColor: "from-[#00ffff]/20 to-[#00ffff]/5",
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-[#ff00ff]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
      title: "Product Managers",
      description:
        "Bridge the gap between technical innovation and market needs. Gain insights to build products at the intersection of blockchain and AI.",
      glowColor: "from-[#ff00ff]/20 to-[#ff00ff]/5",
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-[#00ffff]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Students & Beginners",
      description:
        "Start your journey with mentorship from industry experts. Access learning resources and hands-on projects to build your skills and portfolio.",
      glowColor: "from-[#00ffff]/20 to-[#00ffff]/5",
    },
  ]

  return (
    <section id="community" className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="audience" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <Badge className="inline-flex rounded-md px-3 py-1 text-sm bg-[#ff00ff]/20 text-[#ff00ff] border border-[#ff00ff]/50">
              Who We Serve
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Target Audience
            </h2>
            <p className="max-w-[900px] text-[#e0e0ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DeDevs welcomes innovators from all backgrounds who are passionate about blockchain and AI technologies.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <InteractiveCard
              key={index}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
              glowColor={audience.glowColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:opacity-90 text-white relative overflow-hidden group">
            <span className="relative z-10">Find Your Community</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

