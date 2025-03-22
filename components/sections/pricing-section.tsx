"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, Users, ArrowRight } from "lucide-react"
import { SectionBackground } from "@/components/sections/section-backgrounds"

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
      icon: <Users className="h-5 w-5" />,
      accentColor: "#00ffff",
      hoverColor: "from-[#00ffff]/20 to-[#00ffff]/5",
      borderColor: "border-[#00ffff]/30",
      buttonVariant: "outline" as const,
      buttonClass: "border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10",
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
        "Exclusive industry events",
        "Job board priority access",
      ],
      cta: "Get Started",
      icon: <BookOpen className="h-5 w-5" />,
      accentColor: "#f143a9",
      hoverColor: "from-[#f143a9]/20 to-[#f143a9]/5",
      borderColor: "border-[#f143a9]/30",
      buttonVariant: "default" as const,
      buttonClass:
        "bg-gradient-to-r from-[#f143a9] to-[#00ffff] hover:opacity-90 text-white relative overflow-hidden group",
    },
  ]

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="pricing" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <Badge className="inline-flex rounded-md px-3 py-1 text-sm bg-[#f143a9]/20 text-[#f143a9] border border-[#f143a9]/50">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Choose Your Path</h2>
            <p className="max-w-[900px] text-[#e0e0ff] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join our community and access resources tailored to your blockchain and AI journey.
            </p>
          </div>
        </motion.div>

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
                className={`border-0 bg-[#0b0014]/50 backdrop-blur-sm border ${plan.borderColor} hover:border-[#00ffff]/40 transition-all duration-300 group overflow-hidden relative h-full`}
              >
                {plan.id === "premium" && (
                  <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 rotate-45">
                    <Badge className="bg-gradient-to-r from-[#f143a9] to-[#00ffff] text-white border-none px-8 py-1">
                      Popular
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f143a9]/5 to-[#00ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f143a9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${plan.hoverColor}`}>{plan.icon}</div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  </div>
                  <CardDescription className="text-[#e0e0ff]/80">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                <CardFooter>
                  <Button className={`w-full ${plan.buttonClass}`} variant={plan.buttonVariant} size="lg">
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
                    {plan.id === "premium" && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
                    )}
                  </Button>
                </CardFooter>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center mt-16 text-center"
        >
          <div className="max-w-[700px] space-y-4">
            <h3 className="text-xl font-semibold text-white">Need a custom solution for your team?</h3>
            <p className="text-[#e0e0ff]/80">
              Contact us for enterprise pricing and custom solutions for teams of all sizes.
            </p>
            <Button variant="outline" className="border-[#f143a9] text-[#f143a9] hover:bg-[#f143a9]/10 mt-2">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
