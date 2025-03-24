"use client"

import { Button } from "@/components/ui/button"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import { URLS } from "@/constants/urls"
import { SectionHeader } from "@/components/ui/section-header"

export function CtaSection() {
  return (
    <section id="resources" className="w-full relative overflow-hidden">
        <SectionBackground variant="cta" />
        <SectionHeader title="Ready to Join the DeDevs Community?" content={"Connect with thousands of blockchain and AI enthusiasts, access exclusive resources, and be part of groundbreaking collaborative projects."} />
          <Button
            size="lg"
            className="w-full py-4"
            variant="outlineBlue"
            link={{ href: URLS.CLUB, external: true }}
          > 
            <span className="relative z-10">Join DeDevs Today</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#f143a9] to-[#00ffff] opacity-0 group-hover:opacity-50 transition-opacity"></span>
          </Button>
    </section>
  )
}
