"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { URLS } from "@/constants/urls"
import NavLinks from "./nav-links"
import { Icon } from "@iconify/react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full max-w-screen-xl mx-auto border-b-2 border-muted/20 backdrop-blur-sm bg-background">
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 bg-background">
            <motion.div
              className="h-8 w-8 rounded-full bg-background flex items-center justify-center relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-background opacity-70 animate-pulse"></div>
              <span className="text-text font-bold relative z-10">
                <Image
                  src="/favicon.ico"
                  width={32}
                  height={32}
                  alt="DeDevs Logo"
                />
              </span>
            </motion.div>
            <span className="text-xl font-bold text-text">DeDevs</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end gap-1">
          <motion.div
            initial={{ opacity: 0, x: - 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href={URLS.TWITTER} target="_blank" rel="noopener noreferrer">
       <Button
            variant="outline"
            size="icon"
            className="mr-2"
            aria-label="Menu"
          >
            <Icon icon="ri:twitter-x-fill" className="h-5 w-5" />
          </Button>
          </Link>
          <Button
            variant={isOpen ? "default" : "outline"}
            size="icon"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-muted/20 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </div>
        )}

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center bg-background">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href={URLS.CLUB} target="_blank" rel="noopener noreferrer">
          <Button
            variant="default"
          >
            Join Now
          </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
