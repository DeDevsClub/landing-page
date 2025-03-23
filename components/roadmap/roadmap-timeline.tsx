"use client"

import { useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"
import {
  roadmapData,
  type TimelinePeriod,
  type MilestoneCategory,
  type MilestoneStatus,
  getCategoryDetails,
  getStatusDetails,
} from "@/constants/roadmap-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { MilestoneCard } from "./milestone-card"
import { MilestoneDetail } from "./milestone-detail"
import { synthwaveColors as colors } from "@/utils/synthwave-colors"

export default function RoadmapTimeline() {
  const [activePeriod, setActivePeriod] = useState(0)
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null)
  const [view, setView] = useState<"quarters" | "all">("quarters")
  const [categoryFilters, setCategoryFilters] = useState<MilestoneCategory[]>([])
  const [statusFilters, setStatusFilters] = useState<MilestoneStatus[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    setActivePeriod((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setActivePeriod((prev) => (prev < roadmapData.length - 1 ? prev + 1 : prev))
  }

  const toggleCategoryFilter = (category: MilestoneCategory) => {
    setCategoryFilters((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const toggleStatusFilter = (status: MilestoneStatus) => {
    setStatusFilters((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  const filteredPeriods = view === "quarters" ? [roadmapData[activePeriod]] : roadmapData

  const getFilteredMilestones = (period: TimelinePeriod) => {
    return period.milestones.filter((milestone) => {
      const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(milestone.category)
      const statusMatch = statusFilters.length === 0 || statusFilters.includes(milestone.status)
      return categoryMatch && statusMatch
    })
  }

  const allCategories: MilestoneCategory[] = ["product", "community", "technology", "partnership", "event"]
  const allStatuses: MilestoneStatus[] = ["completed", "in-progress", "upcoming"]

  const selectedMilestoneData = selectedMilestone
    ? roadmapData.flatMap((period) => period.milestones).find((m) => m.id === selectedMilestone)
    : null

  return (
    <div className="relative">
      <SectionBackground variant="roadmap" />

      {/* Header */}
      <div className="container px-4 md:px-6 pt-12 md:pt-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge
            className="inline-flex rounded-md px-3 py-1 text-sm border synthwave-border mb-4"
            style={{
              backgroundColor: `rgba(${colors.blue.primary}, 0.2)`,
              color: colors.blue.primary,
            }}
          >
            Project Timeline
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="synthwave-text">Roadmap</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {`Explore our journey from inception to the future. Track our progress, see what we\'ve accomplished, and
            discover what\'s coming next for the DeDevs community.`}
          </p>
        </div>

        {/* Timeline Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Tabs
            defaultValue="quarters"
            className="w-full md:w-auto"
            onValueChange={(value) => setView(value as "quarters" | "all")}
          >
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="quarters">Quarterly View</TabsTrigger>
              <TabsTrigger value="all">Full Timeline</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2 w-full md:w-auto">
            {view === "quarters" && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  disabled={activePeriod === 0}
                  className="border-primary text-primary hover:bg-primary/10 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>

                <div className="px-4 py-2 rounded-md bg-background/50 backdrop-blur-sm border border-primary/20 min-w-[120px] text-center">
                  {roadmapData[activePeriod].label}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={activePeriod === roadmapData.length - 1}
                  className="border-secondary text-secondary hover:bg-secondary/10 disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </>
            )}

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="ml-2">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Filter by Category</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {allCategories.map((category) => {
                      const details = getCategoryDetails(category)
                      return (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={categoryFilters.includes(category)}
                            onCheckedChange={() => toggleCategoryFilter(category)}
                            style={{
                              borderColor: details.color,
                              backgroundColor: categoryFilters.includes(category) ? details.color : undefined,
                            }}
                          />
                          <Label htmlFor={`category-${category}`} className="flex items-center gap-1">
                            <details.icon className="h-3 w-3" style={{ color: details.color }} />
                            <span>{details.label}</span>
                          </Label>
                        </div>
                      )
                    })}
                  </div>

                  <h4 className="font-medium">Filter by Status</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {allStatuses.map((status) => {
                      const details = getStatusDetails(status)
                      return (
                        <div key={status} className="flex items-center space-x-2">
                          <Checkbox
                            id={`status-${status}`}
                            checked={statusFilters.includes(status)}
                            onCheckedChange={() => toggleStatusFilter(status)}
                            style={{
                              borderColor: details.color,
                              backgroundColor: statusFilters.includes(status) ? details.color : undefined,
                            }}
                          />
                          <Label htmlFor={`status-${status}`} className="flex items-center gap-1">
                            <details.icon className="h-3 w-3" style={{ color: details.color }} />
                            <span>{details.label}</span>
                          </Label>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCategoryFilters([])
                        setStatusFilters([])
                      }}
                    >
                      Reset Filters
                    </Button>
                    <Button size="sm" onClick={() => document.dispatchEvent(new Event("close-popover"))}>
                      Apply
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {allStatuses.map((status) => {
            const details = getStatusDetails(status)
            return (
              <div key={status} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: details.color }}></div>
                <span className="text-sm">{details.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="container px-4 md:px-6 pb-24 relative z-10">
        <div className="relative" ref={timelineRef}>
          {/* Line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${colors.blue.primary}80, ${colors.pink.primary}80)`,
              zIndex: 1,
            }}
          ></div>

          {/* Periods */}
          <div className="relative z-10">
            {filteredPeriods.map((period) => {
              const filteredMilestones = getFilteredMilestones(period)

              if (filteredMilestones.length === 0) {
                return (
                  <div key={period.id} className="py-8 text-center">
                    <p className="text-muted-foreground">No milestones match your filters for {period.label}</p>
                  </div>
                )
              }

              return (
                <div key={period.id} className="mb-12">
                  {view === "all" && (
                    <div className="flex justify-center mb-8">
                      <div
                        className="px-6 py-2 rounded-full synthwave-border text-lg font-medium"
                        style={{
                          backgroundColor: `rgba(${colors.blue.primary}, 0.1)`,
                        }}
                      >
                        {period.label}
                      </div>
                    </div>
                  )}

                  <div className="space-y-12">
                    {filteredMilestones.map((milestone, index) => (
                      <MilestoneCard
                        key={milestone.id}
                        milestone={milestone}
                        index={index}
                        onClick={() => setSelectedMilestone(milestone.id)}
                        isEven={index % 2 === 0}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Milestone Detail Modal */}
        <AnimatePresence>
          {selectedMilestoneData && (
            <MilestoneDetail milestone={selectedMilestoneData} onClose={() => setSelectedMilestone(null)} />
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 overflow-hidden">
        <SectionBackground variant="cta" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Us on This <span className="synthwave-text">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Be part of our community and help shape the future of blockchain and AI technologies. Together, we can
              build something extraordinary.
            </p>
            <Button
              size="lg"
              className="relative overflow-hidden group"
              style={{
                background: `linear-gradient(90deg, ${colors.pink.primary}, ${colors.blue.primary})`,
              }}
            >
              <span className="relative z-10 flex items-center text-white">Join DeDevs Community</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, ${colors.pink.primary}, ${colors.blue.primary})`,
                }}
              ></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
