"use client"

import { motion } from "framer-motion"
import { Code, Brain } from "lucide-react"
import { InteractiveCard } from "@/components/interactive/interactive-card"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { SectionHeader } from "@/components/ui/section-header"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Code className="h-10 w-10 text-[#f143a9]" />,
      title: "Blockchain Developers",
      description:
        "Whether you're building on Ethereum, Solana, or other chains, connect with peers to solve complex problems and explore new protocols.",
      glowColor: "from-[#f143a9]/20 to-[#f143a9]/5",
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
          className="h-10 w-10 text-[#f143a9]"
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
      glowColor: "from-[#f143a9]/20 to-[#f143a9]/5",
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
    <section id="community" className="w-full relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="audience" />
      <SectionHeader title="Who We Serve" content={
        "We welcome innovators who are passionate about blockchain and AI technologies."
      } />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-2 text-center"
        >
          <div className="space-y-2">

          </div>
        </motion.div>
        {/* Audience Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 border-y-8 border-[#f143a9]/40 mt-10 border-rounded-lg rounded-lg">
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
      </div>
    </section>
  )
}

