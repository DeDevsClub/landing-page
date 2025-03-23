"use client"

import { motion } from "framer-motion"

interface SectionBackgroundProps {
  variant: "hero" | "features" | "audience" | "pricing" | "roadmap" | "about" | "cta" | "footer"
  className?: string
}

export function SectionBackground({ variant, className = "" }: SectionBackgroundProps) {

  // Common elements that will be composed differently for each variant
  const renderGridLines = (opacity = 0.2, count = 10, direction: "horizontal" | "vertical" | "both" = "both") => {
    return (
      <>
        {(direction === "horizontal" || direction === "both") && (
          <div className={`absolute inset-0 flex flex-col justify-between z-0 opacity-${opacity * 100}`}>
            {Array.from({ length: count }).map((_, i) => (
              <div key={`h-${i}`} className="h-px bg-[#00ffff]/50"></div>
            ))}
          </div>
        )}
        {(direction === "vertical" || direction === "both") && (
          <div className={`absolute inset-0 flex justify-between z-0 opacity-${opacity * 100}`}>
            {Array.from({ length: count }).map((_, i) => (
              <div key={`v-${i}`} className="w-px bg-[#00ffff]/50"></div>
            ))}
          </div>
        )}
      </>
    )
  }

  const renderStars = (count = 50) => {
    return (
      <div className="absolute inset-0 z-0">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.2],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.8 + 0.5, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    )
  }

  const renderSynthwaveSun = (position: "bottom" | "top" = "bottom", size = 200, opacity = 0.05) => {
    return (
      <div
        className={`absolute ${position === "bottom" ? "-bottom-32" : "-top-32"} left-1/2 -translate-x-1/2 w-[${size}%] aspect-[2/1] bg-gradient-to-${position === "bottom" ? "t" : "b"} from-[#f143a9] to-transparent opacity-${opacity * 100} rounded-[100%] z-0`}
      ></div>
    )
  }

  const renderGlowEffect = (color = "#f143a9", position: "bottom" | "top" = "bottom", height = 64, opacity = 0.2) => {
    return (
      <div
        className={`absolute ${position} left-0 right-0 h-${height} bg-gradient-to-${position === "bottom" ? "t" : "b"} from-[${color}]/${opacity * 100} to-transparent z-0`}
      ></div>
    )
  }

  const renderAnimatedGradient = () => {
    return (
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba8, 71, 247, 0.3), rgba(0, 255, 255, 0.1), transparent 70%)",
            "radial-gradient(circle at 80% 80%, rgba8, 71, 247, 0.3), rgba(0, 255, 255, 0.1), transparent 70%)",
            "radial-gradient(circle at 20% 80%, rgba8, 71, 247, 0.3), rgba(0, 255, 255, 0.1), transparent 70%)",
            "radial-gradient(circle at 80% 20%, rgba8, 71, 247, 0.3), rgba(0, 255, 255, 0.1), transparent 70%)",
            "radial-gradient(circle at 20% 20%, rgba8, 71, 247, 0.3), rgba(0, 255, 255, 0.1), transparent 70%)",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    )
  }

  const renderFloatingParticles = (count = 15, colors: string[] = ["#f143a9", "#00ffff"]) => {
    return (
      <div className="absolute inset-0 z-0">
        {colors.map((color) =>
          Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={`particle-${color}-${i}`}
              className={`absolute w-1 h-1 rounded-full bg-[${color}]`}
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
          )),
        )}
      </div>
    )
  }

  const renderCyberGrid = (opacity = 0.1) => {
    return (
      <div className={`absolute inset-0 z-0 opacity-${opacity * 100}`}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Grid')] bg-repeat"></div>
      </div>
    )
  }

  const renderMountains = (
    // opacity = 0.1
  ) => {
    return (
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0 overflow-hidden opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-32">
          <div className="absolute bottom-0 left-0 w-1/3 h-24 bg-[#f143a9] opacity-30 transform skew-x-12"></div>
          <div className="absolute bottom-0 left-1/4 w-1/3 h-32 bg-[#f143a9] opacity-20 transform -skew-x-12"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-28 bg-[#00ffff] opacity-20 transform -skew-x-12"></div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-20 bg-[#00ffff] opacity-30 transform skew-x-12"></div>
        </div>
      </div>
    )
  }

  // Base background for all sections
  const baseBackground = (
    <div
      className={`absolute inset-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C] z-0 ${className}`}
    ></div>
  )

  // Section-specific borders
  const sectionBorders = (
    <>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
    </>
  )

  // Variant-specific backgrounds
  switch (variant) {
    case "hero":
      return (
        <>
          {baseBackground}
          {renderAnimatedGradient()}
          {renderFloatingParticles(20, ["#f143a9", "#00ffff"])}
          {renderGridLines(0.1, 10, "both")}
          {renderGlowEffect("#f143a9", "bottom", 40, 0.1)}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#1a0b2e] to-[#0B101C] via-[#f143a9] z-0"></div>
        </>
      )

    case "features":
      return (
        <>
          {baseBackground}
          {renderCyberGrid(0.05)}
          {renderGridLines(0.1, 8, "horizontal")}
          {renderFloatingParticles(10, ["#00ffff"])}
          {sectionBorders}
          <motion.div
            className="absolute inset-0 z-0 opacity-5"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.4), transparent 60%)",
                "radial-gradient(circle at 70% 70%, rgba(0, 255, 255, 0.4), transparent 60%)",
                "radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.4), transparent 60%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </>
      )

    case "audience":
      return (
        <>
          {baseBackground}
          {renderStars(30)}
          {renderGridLines(0.1, 6, "vertical")}
          {renderFloatingParticles(10, ["#f143a9"])}
          {sectionBorders}
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C]"
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </>
      )

    case "pricing":
      return (
        <>
          {baseBackground}
          {renderGridLines(0.1, 12, "both")}
          {renderSynthwaveSun("bottom", 200, 0.05)}
          {sectionBorders}
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C]"
            style={{
              opacity: 0.6
            }}
          />
        </>
      )

    case "roadmap":
      return (
        <>
          {baseBackground}
          {renderCyberGrid(0.03)}
          {renderGridLines(0.1, 15, "horizontal")}
          {renderFloatingParticles(8, ["#f143a9", "#00ffff"])}
          {sectionBorders}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C] z-0"></div>
        </>
      )

    case "about":
      return (
        <>
          {baseBackground}
          {renderMountains()}
          {renderGridLines(0.1, 5, "both")}
          {renderStars(20)}
          {sectionBorders}
          <motion.div
            className="absolute inset-0 z-0 opacity-10 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C]"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3), transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba8, 71, 247, 0.3), transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.3), transparent 70%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </>
      )

    case "cta":
      return (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C] z-0"></div>
          {renderSynthwaveSun("bottom", 200, 0.05)}
          {renderGridLines(0.2, 10, "horizontal")}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f143a9]/20 to-transparent z-0"></div>
        </>
      )

    case "footer":
      return (
        <>
          <div className="absolute inset-0 bg-background z-0 bg-gradient-to-r from-[#1a0b2e] to-[#0B101C]"></div>
          {renderGridLines(0.05, 5, "both")}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#1a0b2e] to-[#0B101C]"></div>
          <motion.div
            className="absolute inset-0 z-0 opacity-5"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba8, 71, 247, 0.2), transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.2), transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba8, 71, 247, 0.2), transparent 50%)",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </>
      )

    default:
      return baseBackground
  }
}

