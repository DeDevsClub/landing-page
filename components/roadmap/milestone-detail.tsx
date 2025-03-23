"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { X, ExternalLink } from "lucide-react"
import { type Milestone, getCategoryDetails, getStatusDetails } from "@/constants/roadmap-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { synthwaveColors as colors } from "@/utils/synthwave-colors"

interface MilestoneDetailProps {
  milestone: Milestone
  onClose: () => void
}

export function MilestoneDetail({ milestone, onClose }: MilestoneDetailProps) {
  const categoryDetails = getCategoryDetails(milestone.category)
  const statusDetails = getStatusDetails(milestone.status)

  const formattedDate = format(new Date(milestone.date), "MMMM d, yyyy")

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-background rounded-lg shadow-xl synthwave-border"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Header with gradient */}
        <div
          className="h-24 relative overflow-hidden rounded-t-lg"
          style={{
            background: `linear-gradient(135deg, ${categoryDetails.color}, ${statusDetails.color})`,
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 synthwave-grid opacity-30"></div>

          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title and badges */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <h2 className="text-2xl font-bold">{milestone.title}</h2>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="flex items-center gap-1"
                style={{
                  borderColor: categoryDetails.color,
                  color: categoryDetails.color,
                }}
              >
                <categoryDetails.icon className="h-3 w-3" />
                <span>{categoryDetails.label}</span>
              </Badge>

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
          </div>

          {/* Date */}
          <div
            className="inline-block px-3 py-1 rounded-full text-sm mb-6"
            style={{
              backgroundColor: `rgba(${statusDetails.color}, 0.1)`,
              color: statusDetails.color,
            }}
          >
            {formattedDate}
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <p className="text-muted-foreground">{milestone.description}</p>
            {milestone.longDescription && <p>{milestone.longDescription}</p>}
          </div>

          {/* Link if available */}
          {milestone.link && (
            <div className="mt-6">
              <Button
                className="flex items-center gap-2"
                style={{
                  background: `linear-gradient(90deg, ${colors.blue.primary}, ${colors.pink.primary})`,
                }}
                asChild
              >
                <a href={milestone.link} target="_blank" rel="noopener noreferrer">
                  {milestone.linkText || "Learn More"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
