"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../theme-provider"
import { SunMoon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`relative overflow-hidden border-none ${
        isDark ? "bg-[#1a0b2e]/80 hover:bg-[#1a0b2e]" : "bg-[#f5f2ff]/80 hover:bg-[#f5f2ff]"
      }`}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{
          background: isDark
            ? "linear-gradient(to right, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))"
            : "linear-gradient(to right, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))",
        }}
      />

      <motion.div
        className="relative z-10 flex items-center justify-center w-full h-full"
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
        }}
        transition={{ duration: 0.5 }}
      >
        <SunMoon className={isDark ? "text-[#00ffff]" : "text-[#ff00ff]"} />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: isDark ? "0 0 8px 2px rgba(0, 255, 255, 0.5)" : "0 0 8px 2px rgba(255, 0, 255, 0.5)",
        }}
        transition={{ duration: 0.5 }}
      />
    </Button>
  )
}

