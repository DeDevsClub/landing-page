"use client"

import { motion } from "framer-motion"
import { format } from "date-fns"
import { type Milestone, getCategoryDetails, getStatusDetails } from "../../constants/roadmap-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface MilestoneCardProps {
  milestone: Milestone
  index: number
  isEven: boolean
  onClick: () => void
}

export function MilestoneCard({ milestone, index, isEven, onClick }: MilestoneCardProps) {
  const categoryDetails = getCategoryDetails(milestone.category)
  const statusDetails = getStatusDetails(milestone.status)

  const formattedDate = format(new Date(milestone.date), "MMM d, yyyy")

  // Animation variants
  const cardVariants = {
    initial: {
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Date marker */}
      <motion.div
    //   Date Marker
        className="shrink-0 w-full md:w-1/2 flex justify-center md:justify-end items-center mb-4 md:mb-0 relative bg-[#0B101C]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { duration: 0.3, delay: index * 0.1 },
          },
        }}
      >
        <div
          className={`px-4 py-2 rounded-full text-sm font-medium ${isEven ? "md:mr-8" : "md:ml-8"}`}
          style={{
            backgroundColor: `rgba(${statusDetails.color}, 0.2)`,
            color: statusDetails.color,
          }}
        >
          {formattedDate}
        </div>

        {/* Connector to timeline */}
        <div
          className={`hidden md:block absolute w-8 h-px ${isEven ? "left-full" : "right-full"}`}
          style={{
            background: `linear-gradient(${isEven ? "to left" : "to right"}, ${statusDetails.color}, transparent)`,
          }}
        ></div>

        {/* Timeline dot */}
        <div
          className="hidden md:block absolute left-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-4 h-4 rounded-full border-2"
          style={{
            backgroundColor: "var(--background)",
            borderColor: statusDetails.color,
            boxShadow: `0 0 8px ${statusDetails.color}80`,
          }}
        ></div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="w-full md:w-1/2"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={cardVariants}
      >
        <Card
          className="synthwave-border overflow-hidden relative group cursor-pointer hover:shadow-lg transition-all duration-300 bg-[#0B101C]"
          onClick={onClick}
        >
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: categoryDetails.color }}></div>

          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full" style={{ backgroundColor: `rgba(${categoryDetails.color}, 0.2)` }}>
                  <categoryDetails.icon className="h-4 w-4" style={{ color: categoryDetails.color }} />
                </div>
                <Badge
                  variant="outline"
                  style={{
                    borderColor: categoryDetails.color,
                    color: categoryDetails.color,
                  }}
                >
                  {categoryDetails.label}
                </Badge>
              </div>

              <Badge
                className="flex items-center gap-1"
                style={{
                  backgroundColor: `rgba(${statusDetails.color}, 0.2)`,
                  color: statusDetails.color,
                }}
              >
                <statusDetails.icon className="h-3 w-3" />
                <span>{statusDetails.label}</span>
              </Badge>
            </div>

            <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{milestone.description}</p>

            <div className="flex justify-end bg-[#ffaee0] rounded-b-lg">
              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform duration-300">
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
