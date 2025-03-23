"use client"

import type React from "react"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Users,
  Rocket,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronLeft,
  Brain,
  Code,
  Network,
  DiscIcon as Discord,
  BookOpen,
} from "lucide-react"
import { SectionBackground } from "@/components/sections/section-backgrounds"

interface RoadmapItem {
  id: string
  title: string
  description: string
  date: string
  status: "completed" | "in-progress" | "upcoming"
  icon: React.ReactNode
  color: string
}

export function RoadmapSection() {
  const [activeQuarter, setActiveQuarter] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const quarters = [
    { id: "q1-2023", label: "Q1 2023" },
    { id: "q2-2023", label: "Q2 2023" },
    { id: "q3-2023", label: "Q3 2023" },
    { id: "q4-2023", label: "Q4 2023" },
    { id: "q1-2024", label: "Q1 2024" },
    { id: "q2-2024", label: "Q2 2024" },
  ]

  const roadmapItems: Record<string, RoadmapItem[]> = {
    "q1-2023": [
      {
        id: "community-launch",
        title: "Community Launch",
        description: "Official launch of the DeDevs community platform with forums and resource library.",
        date: "January 2023",
        status: "completed",
        icon: <Users className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "discord-server",
        title: "Discord Server",
        description: "Launch of our Discord server for real-time discussions and networking.",
        date: "February 2023",
        status: "completed",
        icon: <Discord className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "first-meetup",
        title: "First Virtual Meetup",
        description: "Our inaugural virtual meetup featuring talks from industry experts.",
        date: "March 2023",
        status: "completed",
        icon: <Users className="h-6 w-6" />,
        color: "#4CC38A",
      },
    ],
    "q2-2023": [
      {
        id: "learning-paths",
        title: "Learning Paths",
        description: "Structured learning paths for blockchain and AI development launched on our platform.",
        date: "April 2023",
        status: "completed",
        icon: <BookOpen className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "hackathon-1",
        title: "First Hackathon",
        description: "Our first community hackathon focused on blockchain applications.",
        date: "May 2023",
        status: "completed",
        icon: <Code className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "mentorship",
        title: "Mentorship Program",
        description: "Launch of our mentorship program connecting beginners with experienced professionals.",
        date: "June 2023",
        status: "completed",
        icon: <Users className="h-6 w-6" />,
        color: "#4CC38A",
      },
    ],
    "q3-2023": [
      {
        id: "ai-workshops",
        title: "AI Workshop Series",
        description: "Weekly workshops covering various aspects of AI development and implementation.",
        date: "July 2023",
        status: "completed",
        icon: <Brain className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "blockchain-course",
        title: "Blockchain Course",
        description: "Comprehensive blockchain development course created in partnership with industry leaders.",
        date: "August 2023",
        status: "completed",
        icon: <Network className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "community-projects",
        title: "Community Projects",
        description: "Launch of collaborative community projects with open-source contributions.",
        date: "September 2023",
        status: "completed",
        icon: <Code className="h-6 w-6" />,
        color: "#4CC38A",
      },
    ],
    "q4-2023": [
      {
        id: "global-conference",
        title: "Global Virtual Conference",
        description: "Our first global virtual conference with speakers from around the world.",
        date: "October 2023",
        status: "completed",
        icon: <Users className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "hackathon-2",
        title: "AI + Blockchain Hackathon",
        description: "Hackathon focused on projects combining AI and blockchain technologies.",
        date: "November 2023",
        status: "completed",
        icon: <Rocket className="h-6 w-6" />,
        color: "#4CC38A",
      },
      {
        id: "year-review",
        title: "Year in Review",
        description: "Celebration of our community achievements and growth in our first year.",
        date: "December 2023",
        status: "completed",
        icon: <Calendar className="h-6 w-6" />,
        color: "#4CC38A",
      },
    ],
    "q1-2024": [
      {
        id: "mobile-app",
        title: "Mobile App Launch",
        description: "Launch of the DeDevs mobile app for iOS and Android with community features.",
        date: "January 2024",
        status: "in-progress",
        icon: <Rocket className="h-6 w-6" />,
        color: "#f143a9",
      },
      {
        id: "job-board",
        title: "Job Board",
        description: "Dedicated job board for blockchain and AI positions from partner companies.",
        date: "February 2024",
        status: "in-progress",
        icon: <Users className="h-6 w-6" />,
        color: "#f143a9",
      },
      {
        id: "research-grants",
        title: "Research Grants Program",
        description: "Launch of our research grants program to fund innovative projects.",
        date: "March 2024",
        status: "upcoming",
        icon: <Brain className="h-6 w-6" />,
        color: "#00ffff",
      },
    ],
    "q2-2024": [
      {
        id: "certification",
        title: "Certification Program",
        description: "Industry-recognized certification program for blockchain and AI skills.",
        date: "April 2024",
        status: "upcoming",
        icon: <CheckCircle2 className="h-6 w-6" />,
        color: "#00ffff",
      },
      {
        id: "regional-events",
        title: "Regional In-Person Events",
        description: "Series of in-person meetups and workshops in major tech hubs.",
        date: "May 2024",
        status: "upcoming",
        icon: <Calendar className="h-6 w-6" />,
        color: "#00ffff",
      },
      {
        id: "enterprise-partnerships",
        title: "Enterprise Partnerships",
        description: "Strategic partnerships with enterprise companies for exclusive resources and opportunities.",
        date: "June 2024",
        status: "upcoming",
        icon: <Network className="h-6 w-6" />,
        color: "#00ffff",
      },
    ],
  }

  const handlePrevious = () => {
    setActiveQuarter((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setActiveQuarter((prev) => (prev < quarters.length - 1 ? prev + 1 : prev))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-[#4CC38A]" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-[#f143a9]" />
      case "upcoming":
        return <Calendar className="h-4 w-4 text-[#00ffff]" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "upcoming":
        return "Upcoming"
      default:
        return ""
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#4CC38A]/20 text-[#4CC38A] border-[#4CC38A]/50"
      case "in-progress":
        return "bg-[#f143a9]/20 text-[#f143a9] border-[#f143a9]/50"
      case "upcoming":
        return "bg-[#00ffff]/20 text-[#00ffff] border-[#00ffff]/50"
      default:
        return ""
    }
  }

  return (
    <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="roadmap" />

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
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">DeDevs Roadmap</h2>
            <p className="max-w-[900px] text-[#e0e0ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {`Follow our journey and see what\'s coming next for the DeDevs community.`}
            </p>
          </div>
        </motion.div>

        {/* Timeline navigation */}
        <div className="mt-12 relative">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={activeQuarter === 0}
              className="border-[#f143a9] text-[#f143a9] hover:bg-[#f143a9]/10 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>

            <div className="flex-1 mx-4 overflow-hidden" ref={scrollRef}>
              <div className="flex justify-between relative">
                {quarters.map((quarter, index) => (
                  <motion.button
                    key={quarter.id}
                    onClick={() => setActiveQuarter(index)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      activeQuarter === index
                        ? "text-white bg-linear-to-r from-[#f143a9]/30 to-[#00ffff]/30"
                        : "text-[#e0e0ff]/70 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {quarter.label}
                    {activeQuarter === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#f143a9] to-[#00ffff]"
                        layoutId="quarterIndicator"
                      />
                    )}
                  </motion.button>
                ))}

                {/* Timeline line */}
                <div className="absolute left-0 right-0 bottom-0 h-px bg-[#e0e0ff]/20"></div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeQuarter === quarters.length - 1}
              className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Roadmap items */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={quarters[activeQuarter].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {roadmapItems[quarters[activeQuarter].id].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="border-0 bg-[#0B101C]/50 backdrop-blur-xs border border-[#f143a9]/20 hover:border-[#00ffff]/40 transition-all duration-300 group overflow-hidden relative h-full">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[item.color] to-transparent opacity-50"></div>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-full bg-[${item.color}]/10 text-[${item.color}]`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-white">{item.title}</h3>
                              <Badge className={`${getStatusColor(item.status)}`}>
                                <span className="flex items-center gap-1">
                                  {getStatusIcon(item.status)}
                                  <span className="text-xs">{getStatusText(item.status)}</span>
                                </span>
                              </Badge>
                            </div>
                            <p className="text-sm text-[#e0e0ff]/80 mb-2">{item.description}</p>
                            <p className="text-xs text-[#e0e0ff]/60">{item.date}</p>
                          </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-4 h-1 w-full bg-[#e0e0ff]/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              item.status === "completed"
                                ? "bg-[#4CC38A]"
                                : item.status === "in-progress"
                                  ? "bg-[#f143a9]"
                                  : "bg-[#00ffff]"
                            }`}
                            initial={{ width: "0%" }}
                            animate={{
                              width:
                                item.status === "completed" ? "100%" : item.status === "in-progress" ? "50%" : "0%",
                            }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* View full roadmap button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/roadmap"
            >
              <Button className="bg-[#f143a9] hover:text-[#f143a9] hover:opacity-90 text-white relative overflow-hidden group hover:border-[#f143a9]/ border-2 border-[#f143a9]/40">
                <span className="relative z-10 flex items-center">
                  View Roadmap
                </span>
                <span className="absolute inset-0 transition-opacity"></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

