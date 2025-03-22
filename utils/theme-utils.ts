export const getSynthwaveColors = (isDarkMode: boolean) => {
  return {
    background: isDarkMode ? "#0b0014" : "#ffffff",
    foreground: isDarkMode ? "#ffffff" : "#0b0014",
    primary: "#ff00ff",
    secondary: "#00ffff",
    accent: isDarkMode ? "#1a0b2e" : "#f5f2ff",
    muted: isDarkMode ? "#e0e0ff80" : "#71717a",
    border: isDarkMode ? "#ff00ff40" : "#ff00ff20",
    cardBg: isDarkMode ? "#0b001499" : "#ffffff99",
    gradientFrom: "from-[#ff00ff]",
    gradientTo: "to-[#00ffff]",
    glowPrimary: isDarkMode ? "rgba(255, 0, 255, 0.3)" : "rgba(255, 0, 255, 0.2)",
    glowSecondary: isDarkMode ? "rgba(0, 255, 255, 0.3)" : "rgba(0, 255, 255, 0.2)",
  }
}

