"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { URLS } from "@/constants/urls"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const users = [{
    key: 1,
    src: "/images/members/0xbuns.png",
    handle: "0xbuns"
  },
  {
    key: 2,
    src: "/images/members/santygegen.png",
    handle: "santygegen"
  },
  {
    key: 3,
    src: "/images/members/brookejlacey.png",
    handle: "brookejlacey"
  },
  {
    key: 4,
    src: "/images/members/kuphdev.png",
    handle: "kuphdev"
  }]
  return (
    <section
      className="h-[600px] w-full flex items-center justify-center text-lg overflow-hidden bg-background relative"
      style={{
        backgroundImage: `url('/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative inset-0 justify-center text-center bg-gradient-to-b from-transparent to-[#0B101C]/80 z-0"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col h-[512px] bg-background items-center justify-center py-8 w-full max-w-[85vw] px-12 shadow-lg rounded-xl sm:px-32 z-10"
      >
        <div className="text-[#e0e0ff] font-light grid grid-cols-1 justify-center items-center md:text-xl mt-4 w-full text-center bg-gradient-to-r from-[#f143a9] to-[#00ffff] rounded-xl p-2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-white text-center bg-background rounded-t-lg p-2"
        >
          DeDevs Club
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex w-full justify-center items-center text-[#e0e0ff] py-4 md:text-xl text-center bg-background rounded-b-lg"
        >
          {`Connect with like-minded engineers and enthusiasts to network, share knowledge, and collaborate on
          groundbreaking projects at the intersection of blockchain and AI.`}
        </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-4 text-sm text-[#e0e0ff] p-4 rounded-xl mt-6"
        >
          <div className="flex -space-x-2">
            {users.map((user) => (
              <motion.div
                key={user.key}
                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 + user.key * 0.1 }}
                className="h-10 w-10 rounded-full overflow-hidden transition-transform hover:scale-125"
                onClick={() => window.open(`https://x.com/${user.handle}`, '_blank')}
              >
                <Image
                  src={user.src}
                  width={400}
                  height={400}
                  alt={`Community member ${user.key}`}
                  className="h-full w-full object-cover transition-transform"
                />
              </motion.div>
            ))}
          </div>
          <span>Join 1,000+ members already in our community</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col w-full gap-2 min-[400px]:flex-row mt-8"
        >
          <Button
            size="lg"
            variant="filledBlue"
            className="flex items-center w-full text-sm md:text-md justify-between"
            link={{ href: URLS.CLUB, external: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="relative z-10 flex items-center w-full justify-between">
              Join DeDevs{' '}
              <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="flex h-8 w-8" />
              </motion.span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-0 transition-opacity"></span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}