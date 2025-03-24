"use client"

import { motion } from "framer-motion"
import { Network, BookOpen, Code, Brain } from "lucide-react"
import { InteractiveCard } from "@/components/interactive/interactive-card"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { SectionHeader } from "@/components/ui/section-header"

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
    <section id="features" className="w-full relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="features" />
      <SectionHeader title="Why Join DeDevs?" content={"Connect with thousands of blockchain and AI enthusiasts, access exclusive resources, and be part of groundbreaking collaborative projects."} />
      <div className="container relative z-10">
        <div className="mx-auto grid max-w-screen gap-8 py-2 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            // className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <InteractiveCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                glowColor={feature.glowColor}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

