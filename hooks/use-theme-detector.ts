"use client"

import { useTheme } from "../theme-provider"
import { useEffect, useState } from "react"

export function useThemeDetector() {
  const { theme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    // Check if we're on the client
    if (typeof window !== "undefined") {
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkTheme(theme === "dark" || (theme === "system" && isSystemDark))
    }
  }, [theme])

  return { isDarkTheme }
}

