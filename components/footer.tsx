"use client"

import Link from "next/link"
import { SectionBackground } from "@/components/sections/section-backgrounds"
import Image from "next/image"
import { Icon } from "@iconify/react"
import { URLS } from "@/constants/urls"

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-[#f143a9]/20 relative">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="footer" />

      <div className="flex flex-col items-center w-full max-w-screen-xl relative z-10 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4 w-full">
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="DeDevs Logo"
              width={32}
              height={32}
            />
              <span className="text-xl font-bold text-white">DeDevs</span>
            </Link>
          </div>
          <div className="w-full">
            <nav aria-label="Footer">
              <ul className="flex items-center gap-2 md:gap-3 whitespace-nowrap overflow-x-auto pb-2 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
                <li>
                  <Link href={URLS.MAIN} aria-label="Website" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:globe-2" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.BLOG} aria-label="Blog" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:newspaper" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.DOCS} aria-label="Docs" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:book-open" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.TERMINAL} aria-label="Terminal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:terminal" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.LINKS} aria-label="Links" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:link-2" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.TWITTER} aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="ri:twitter-x-fill" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.CLUB} aria-label="Club" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:users" width={20} height={20} />
                  </Link>
                </li>
                <li>
                  <Link href={URLS.ACADEMY} aria-label="Academy" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-[#e0e0ff]/70 hover:text-[#00ffff] hover:bg-white/5 transition-colors">
                    <Icon icon="lucide:graduation-cap" width={20} height={20} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
