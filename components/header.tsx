"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { URLs } from "@/constants/urls"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f143a9]/20 bg-[#0B101C] backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="h-8 w-8 rounded-full bg-gradient-to-r from-[#f143a9] to-[#00ffff] flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-70 animate-pulse"></div>
              <span className="text-white font-bold relative z-10">
                <Image
                  src="/favicon.ico"
                  width={32}
                  height={32}
                  alt="DeDevs Logo"
                />
              </span>
            </motion.div>
            <span className="text-xl font-bold text-white">DeDevs</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 text-white hover:text-[#00ffff]"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#0B101C] border-b border-[#f143a9]/20 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#community"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#roadmap"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#resources"
                className="text-sm font-medium hover:text-[#00ffff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Button
                className="w-full bg-gradient-to-r from-[#f143a9] to-[#00ffff] hover:opacity-90 text-white"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Button>
            </nav>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            About
          </Link>
          <Link href="#features" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            Features
          </Link>
          <Link href="#community" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            Community
          </Link>
          <Link href="#roadmap" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            Roadmap
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            Pricing
          </Link>
          <Link href="#resources" className="text-sm font-medium text-white hover:text-[#00ffff] transition-colors">
            Resources
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="filledPink"
            link={{ 
              href: URLs.main,
              external: true
             }}
          >
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}
