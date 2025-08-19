"use client"

import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { URLS } from "@/constants/urls"
import { motion } from "framer-motion"

export function Footer() {
  const links = [
    { href: URLS.MAIN, label: "Website", aria: "Website", icon: "lucide:globe-2" },
    { href: URLS.BLOG, label: "Blog", aria: "Blog", icon: "lucide:newspaper" },
    { href: URLS.DOCS, label: "Docs", aria: "Docs", icon: "lucide:book-open" },
    { href: URLS.TERMINAL, label: "Terminal", aria: "Terminal", icon: "lucide:terminal" },
    { href: URLS.LINKS, label: "Links", aria: "Links", icon: "lucide:link-2" },
    { href: URLS.TWITTER, label: "X (Twitter)", aria: "X (Twitter)", icon: "ri:twitter-x-fill" },
    { href: URLS.CLUB, label: "Club", aria: "Club", icon: "lucide:users" },
    { href: URLS.ACADEMY, label: "Academy", aria: "Academy", icon: "lucide:graduation-cap" },
  ]

  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 gap-10 items-start">
          {/* Left: brand + badge + blurb */}
          <div>
            {/* <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Image src="/logo.png" alt="DeDevs Logo" width={16} height={16} className="rounded-sm" />
                DeDevs
              </span>
            </div> */}
            <Link href="/" className="mt-3 flex items-center gap-2">
              <Image src="/logo.png" alt="DeDevs Logo" width={28} height={28} />
              <span className="text-xl font-semibold tracking-tight">DeDevs</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Build at the intersection of blockchain and AI. Join our community to learn, collaborate, and ship.</p>
          </div>

          {/* Right: link cards */}
          <div>
            <nav aria-label="Footer links">
              <div className="grid sm:grid-cols-2 gap-4">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-label={item.aria}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm h-full">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon icon={item.icon} width={16} height={16} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground/80 truncate">{new URL(item.href).hostname}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
