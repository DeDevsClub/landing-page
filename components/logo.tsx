"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
} as const;

const _sizes: any = {
  sm: {
    svg: "h-6",
    betaTag: "bottom-[2px] left-[calc(100%+6px)] px-1.5 py-0.5 text-[9px]",
  },
  lg: {
    svg: "h-12",
    betaTag: "bottom-[4px] left-[calc(100%+10px)] px-2 py-0.5 text-base",
  },
  xl: {
    svg: "h-14",
    betaTag: "bottom-[7px] left-[calc(100%+15px)] px-2.5 py-1 text-base",
  },
};

export const Logo = ({
  logoVariants,
  className,
  containerClassName,
  transition,
  height,
  width,
}: {
  logoVariants?: {
    light: string;
    dark: string;
  };
  transition?: boolean;
  containerClassName?: string;
  className?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <motion.div
        variants={pathVariants}
        initial="hidden"
        animate={transition ? "visible" : "hidden"}
        className="w-full"
      >
      <Image
        src={logoVariants?.light || "/favicon.ico"}
        alt="Logo"
        width={width || 2400}
        height={height || 1200}
        className={cn(
          "max-h-[256px] w-auto", className
        )}
      />
      </motion.div>
    </div>
  );
};
