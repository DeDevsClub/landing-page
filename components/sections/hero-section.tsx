"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Twitter } from "lucide-react"
import { SectionBackground } from "@/components/sections/section-backgrounds"
// import Link from "next/link"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const users = [{
    key: 1,
    src: "https://pbs.twimg.com/profile_images/1863535589145915392/6OUF5yp2_400x400.jpg",
    alt: "@0xbuns"
  },
  {
    key: 2,
    src: "https://pbs.twimg.com/profile_images/1660702029541457943/egKTfIgY_400x400.jpg",
    alt: "@santygegen"
  },
  {
    key: 3,
    src: "https://pbs.twimg.com/profile_images/1888739662853984256/pDBZ8ZoI_400x400.jpg",
    alt: "@brookejlacey"
  },
  {
    key: 4,
    src: "https://pbs.twimg.com/profile_images/1878951982007767040/6WZKHzlx_400x400.jpg",
    alt: "@KuphDev"
  }
  ]
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-[#0B101C]">
      {/* Replace the old background with our new component */}
      <SectionBackground variant="hero" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge
                  link={{ href: "https://x.com/DeDevsClub", external: true }}
                  className="flex-inline rounded-md px-3 py-1 gap-2 text-sm bg-[#000000] justify-between text-[#FFFFFF] hover:text-[#F143A9] items-center border border-[#F143A9]">
                  <Twitter className="h-4 w-4" /> @DeDevsClub
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
              >
                {`DeDevs Club`}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-[600px] text-[#e0e0ff] md:text-xl"
              >
                Connect with like-minded engineers and enthusiasts to network, share knowledge, and collaborate on
                groundbreaking projects at the intersection of blockchain and AI.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Button
                size="lg"
                variant="filledBlue"
                // className="bg-[#000000] hover:text-[#FFFFFF] hover:bg-[#00ffff]/10 hover:opacity-90 border-[#00ffff] text-[#00ffff] relative overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 flex items-center">
                  Join DeDevs{" "}
                  <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#f143a9] to-[#00ffff] opacity-0 transition-opacity"></span>
              </Button>
              <Button size="lg" variant="filledPink" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                Explore Resources
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-4 text-sm text-[#e0e0ff]"
            >
              <div className="flex -space-x-2">
                {users.map((user) => (
                  <motion.div
                    key={user.key}
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1 + user.key * 0.1 }}
                    className="h-8 w-8 rounded-full overflow-hidden transition-transform"
                  >
                    <Image
                      src={user.src}
                      width={32}
                      height={32}
                      alt={`Community member ${user.key}`}
                      className="h-full w-full object-cover mix-blend-overlay hover:scale-125 transition-transform"
                    />
                  </motion.div>
                ))}
              </div>
              <span>Join 1,000+ members already in our community</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            // transition={{ duration: 0.3 }}
            className="relative mx-auto aspect-video overflow-hidden rounded-xl lg:order-last"
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f143a9]/20 to-[#00ffff]/20 z-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 border border-[#f143a9]/30 rounded-xl z-20"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f143a9] to-transparent z-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffff] to-transparent z-30"></div>

            {/* Interactive elements */}
            <motion.div
              className="absolute inset-0 z-5 pointer-events-none"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.15), rgba(0, 255, 255, 0.05), transparent 70%)",
                backgroundSize: "200% 200%",
              }}
            />

            <Image
              src="/banner.png"
              width={2400}
              height={1800}
              alt="DeDevs Community"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
