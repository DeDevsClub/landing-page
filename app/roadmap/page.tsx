import type { Metadata } from "next"
import RoadmapTimeline from "@/components/roadmap/roadmap-timeline"

export const metadata: Metadata = {
  title: "DeDevs Roadmap - Our Journey and Future Plans",
  description: "Explore the DeDevs project timeline, milestones, and future plans for our blockchain and AI community.",
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <RoadmapTimeline />
    </div>
  )
}

