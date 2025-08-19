"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InteractiveCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  glowColor?: string
  delay?: number
}

export function InteractiveCard({
  icon,
  title,
  description,
  className,
  glowColor = "from-[#f143a9]/20 to-[#00ffff]/20",
  delay = 0,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="border-0 bg-background/40 backdrop-blur-xs border border-primary/20 hover:border-secondary/40 transition-all duration-300 group overflow-hidden relative h-full">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <CardHeader>
          <div className="mb-2 relative">
            {icon}
            <motion.div
              className={`absolute -inset-2 bg-linear-to-r ${glowColor} rounded-full blur-xl -z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.7 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <CardTitle className="text-xl text-[#FFFFFF] transition-all duration-300">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFFFFF] text-sm sm:text-md">{description}</p>

          <motion.div
            className="w-full h-1 mt-4 bg-linear-to-r from-primary/0 via-primary/50 to-secondary/0 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </CardContent>
      </Card>
    </motion.div>
    </div>
  )
}

