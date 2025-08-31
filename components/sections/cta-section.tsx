"use client"

import { SectionBackground } from "@/components/sections/section-backgrounds"
import { SectionHeader } from "@/components/ui/section-header"
import { WaitlistForm } from "@/components/waitlist-form"

export function CtaSection() {
  return (
    // biome-ignore lint/nursery/useUniqueElementIds: okay for now
<section id="resources" className="w-full relative overflow-hidden">
        <SectionBackground variant="cta" />
        <SectionHeader title="Ready to Join the DeDevs Community?" content={"Connect with thousands of blockchain and AI enthusiasts, access exclusive resources, and be part of groundbreaking collaborative projects."} />
          <WaitlistForm />
    </section>
  )
}
