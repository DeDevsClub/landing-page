"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, Users, ArrowRight, UsersIcon, CircleUser, StarIcon, TwitterIcon } from "lucide-react"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { SectionHeader } from '@/components/ui/section-header';
import Link from "next/link"

export function PricingSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const plans = [
    {
      id: "free",
      name: "DeDevs Club",
      description: "Perfect for enthusiasts and beginners looking to explore blockchain and AI.",
      price: "$0",
      period: "mo",
      features: [
        "Access to community forums",
        "Join virtual meetups",
        "Basic learning resources",
        "Public project collaborations",
        "Community Discord access",
        "Monthly newsletter",
      ],
      cta: "Join for Free",
      icon: <Users className="h-8 w-8 rounded-full p-1 border-2 border-[#ffffff] bg-[#f143a9]" />,
      accentColor: "#f143a9",
      hoverColor: "[#f143a9]/5",
      borderColor: "border-[#f143a9]/30",
      buttonVariant: "filledBlue" as const,
      buttonClass: "bg-[#f143a9]/20 text-[#f143a9] border border-[#f143a9]/50 hover:opacity-90 relative overflow-hidden group",
      link: "https://whop.com/dedevs",
      badge: <CircleUser className="flex justify-center items-center text-[#000000] w-16 h-8" />
    },
    {
      id: "premium",
      name: "DeDevs Academy",
      description: "For serious developers looking to master blockchain and AI technologies.",
      price: "$50",
      period: "mo",
      features: [
        "Everything in DeDevs Club",
        "Premium learning paths & courses",
        "1-on-1 mentorship sessions",
        "Private project collaborations",
        "Early access to new resources",
        "Certification opportunities",
        "Priority access to new apps"
      ],
      cta: "Get Started",
      icon: <BookOpen className="h-8 w-8 rounded-full p-1 border-2 border-[#ffffff] bg-[#f143a9]" />,
      accentColor: "#f143a9",
      hoverColor: "[#f143a9]/5",
      borderColor: "border-[#f143a9]/30",
      buttonVariant: "filledPink" as const,
      buttonClass:
        "hover:bg-linear-to-r from-[#f143a9] to-[#00ffff] bg-[#f143a9] hover:opacity-90 text-white relative overflow-hidden group",
      link: "https://whop.com/dedevs-academy",
      badge: <StarIcon className="flex justify-center items-center text-[#000000] w-16 h-8" />
    },
  ]

  return (
    <section id="pricing" className="w-full relative overflow-hidden">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="pricing" />
      <SectionHeader title="Choose Your Path" />
      <div className="container px-4 md:px-6 relative z-10">

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mt-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative"
            >
              <Card
                className={`bg-[#0B101C]/50 backdrop-blur-xs border ${plan.borderColor} hover:border-[#00ffff]/40 transition-all duration-300 group overflow-hidden relative h-full`}
              >
                <div className="absolute top-2 right-0 transform translate-x-1/3 -translate-y-1/3 rotate-45 p-4">
                  <Badge className="bg-[#00ffff] border-none px-12 ml-6 flex justify-center items-center">
                    {plan.badge}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-[#f143a9]/5 to-[#00ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#f143a9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00ffff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Card className="bg-transparent h-full grid grid-cols-1 grid-rows-1 justify-center">
                  <CardHeader className="grid grid-rows-1 grid-cols-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-full bg-linear-to-r ${plan.hoverColor}`}>{plan.icon}</div>
                      <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    </div>
                    <CardDescription className="text-[#e0e0ff]/80">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 grid grid-rows-1 grid-cols-1 justify-center">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold" style={{ color: plan.accentColor }}>
                        {plan.price}
                      </span>
                      <span className="text-xl text-[#e0e0ff]/60 ml-1">/{plan.period}</span>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: hoveredCard === plan.id ? 1 : 0.8,
                            x: hoveredCard === plan.id ? 0 : -5,
                          }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <Check style={{ color: plan.accentColor }} className="h-5 w-5 shrink-0 mt-0.5" />
                          <span className="text-[#e0e0ff]/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative bottom-0 w-full h-full">
                    <Button
                      variant={plan.buttonVariant}
                      size="lg"
                      className={`flex w-full justify-center`}
                    >
                      {/* CTA Text */}
                      <span className="relative z-10 flex items-center">
                        {plan.cta}
                        {plan.id === "premium" && (
                          <motion.span
                            animate={{
                              x: hoveredCard === plan.id ? 5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.span>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-linear-to-r from-[#f143a9] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </Card>

              {/* Glow effect */}
              {hoveredCard === plan.id && (
                <motion.div
                  className="absolute inset-0 rounded-lg blur-xl -z-10 opacity-30"
                  style={{ backgroundColor: plan.accentColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
