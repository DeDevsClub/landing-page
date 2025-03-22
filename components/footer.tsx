"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Github, Linkedin, DiscIcon as Discord } from "lucide-react"
import { SectionBackground } from "@/components/sections/section-backgrounds"

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 border-t border-[#ff00ff]/20 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="footer" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className="h-8 w-8 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-70 animate-pulse"></div>
                <span className="text-white font-bold relative z-10">D</span>
              </motion.div>
              <span className="text-xl font-bold text-white">DeDevs</span>
            </Link>
            <p className="text-[#e0e0ff]/70 max-w-[400px]">
              A vibrant community for blockchain and machine learning engineers and enthusiasts to connect, learn, and
              innovate together.
            </p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="#" className="text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="#" className="text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="#" className="text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Link href="#" className="text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Forums
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Podcasts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-[#e0e0ff]/70 hover:text-[#00ffff] transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#ff00ff]/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-[#e0e0ff]/50">© {new Date().getFullYear()} DeDevs. All rights reserved.</p>
          <p className="text-xs text-[#e0e0ff]/50 mt-4 sm:mt-0">Made with passion by the DeDevs team</p>
        </div>
      </div>
    </footer>
  )
}

