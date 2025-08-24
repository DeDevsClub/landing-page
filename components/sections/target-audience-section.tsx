"use client"

import { motion } from "framer-motion"
import { Code, Brain, CheckCircle2 } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Code className="h-10 w-10 text-[#F6339A]" />,
      title: "Blockchain Developers",
      description:
        "Whether you're building on Ethereum, Solana, or other chains, connect with peers to solve complex problems and explore new protocols.",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#4285F4]" />,
      title: "AI Researchers",
      description:
        "Share your latest findings, discuss cutting-edge papers, and collaborate on projects pushing the boundaries of machine learning.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-[#F6339A]"
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
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-[#4285F4]"
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
    },
  ]

  return (
    <section id="community" className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 items-start">
          {/* Left column: header + description + checklist */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Code className="h-3.5 w-3.5" /> Community
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Our Community</h2>
            <p className="mt-2 text-muted-foreground">We welcome innovators who are passionate about blockchain and AI technologies.</p>
            {/* <ul className="mt-4 space-y-2 text-sm grid grid-cols-2 gap-1 sm:gap-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Blockchain developers, AI researchers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Product managers and founders</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Students and early-career builders</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Collaborators across chains & models</li>
            </ul> */}
          </div>

          {/* Right column: audience preview cards */}
          <div>
            <div className="mt-0 grid grid-cols-1 gap-4">
              {audiences.map((audience, index) => (
                <motion.div key={index} whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    {audience.icon}
                    <span>{audience.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{audience.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
