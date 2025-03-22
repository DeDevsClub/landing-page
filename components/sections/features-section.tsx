"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Network, BookOpen, Code, Brain } from "lucide-react"
import { InteractiveCard } from "@/components/interactive/interactive-card"
import { SectionBackground } from "@/components/sections/section-backgrounds"

export function FeaturesSection() {
  const features = [
    {
      icon: <Network className="h-10 w-10 text-[#f143a9]" />,
      title: "Networking Opportunities",
      description:
        "Connect with industry experts, innovators, and enthusiasts in blockchain and AI through virtual meetups, forums, and exclusive events.",
      glowColor: "from-[#f143a9]/20 to-[#f143a9]/5",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#00ffff]" />,
      title: "Knowledge Sharing",
      description:
        "Access curated resources, workshops, and discussions led by experts to enhance your skills and stay updated on the latest trends.",
      glowColor: "from-[#00ffff]/20 to-[#00ffff]/5",
    },
    {
      icon: <Code className="h-10 w-10 text-[#f143a9]" />,
      title: "Collaborative Projects",
      description:
        "Join forces with fellow members on open-source projects, hackathons, and innovative solutions at the intersection of blockchain and AI.",
      glowColor: "from-[#f143a9]/20 to-[#f143a9]/5",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#00ffff]" />,
      title: "Career Growth",
      description:
        "Discover job opportunities, mentorship programs, and skill development resources tailored for blockchain and AI professionals.",
      glowColor: "from-[#00ffff]/20 to-[#00ffff]/5",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="features" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <Badge className="inline-flex rounded-md px-3 py-1 text-sm bg-[#00ffff]/20 text-[#00ffff] border border-[#00ffff]/50">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Why Join DeDevs?</h2>
            <p className="max-w-[900px] text-[#e0e0ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our community offers unique benefits for blockchain and AI enthusiasts at all levels.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {features.map((feature, index) => (
            <InteractiveCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              glowColor={feature.glowColor}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

