"use client"

import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { URLS } from "@/constants/urls"
import { motion } from "framer-motion"

export function Footer() {

  const socialLinks = [
    { href: URLS.TWITTER, label: "X (Twitter)", aria: "X (Twitter)", icon: "ri:twitter-x-fill" },
    { href: URLS.CLUB, label: "Club", aria: "Club", icon: "lucide:users" },
    { href: URLS.DOCS, label: "Docs", aria: "Docs", icon: "lucide:book-open" },
  ]
  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          {/* Left: brand + badge + blurb */}
          <div className="flex flex-cols h-full justify-start w-full items-center text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="DeDevs Logo" width={24} height={24} />
              <span className="text-base font-semibold tracking-tight ml-2">DeDevs Club</span>
            </Link>
          </div>

          {/* Right: social icons row */}
          <nav aria-label="Footer links" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.aria}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card shadow-sm w-8 h-8 flex items-center justify-center">
                    <Icon icon={link.icon} width={16} height={16} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
