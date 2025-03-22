"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface InteractiveHeroElementProps {
  className?: string
}

export function InteractiveHeroElement({ className }: InteractiveHeroElementProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      controls.start({
        background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 0, 255, 0.15), rgba(0, 255, 255, 0.05), transparent 70%)`,
        transition: { duration: 0.3 },
      })
    }

    const handleMouseLeave = () => {
      controls.start({
        background:
          "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.05), rgba(0, 255, 255, 0.02), transparent 70%)",
        transition: { duration: 0.3 },
      })
    }

    const element = containerRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [controls])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        initial={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.05), rgba(0, 255, 255, 0.02), transparent 70%)",
        }}
        animate={controls}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-end z-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-px bg-[#00ffff]/50 mb-8"></div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-around z-0 opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="w-px bg-[#00ffff]/50"></div>
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#ff00ff]"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00ffff]"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

