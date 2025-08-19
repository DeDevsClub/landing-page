"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { HighlightText } from "@/components/text-highlight";

import { motion } from "framer-motion";
import { HexagonBackground } from "./background";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { quickLinks } from "@/constants/urls";

export default function FeatureHero() {
    // Feature dot styling
    const featureDot =
        "inline-flex h-2 w-2 rounded-full bg-pink-500 mr-2 self-center mt-0.5";

    // Demo animation states
    const [_activeTab, setActiveTab] = useState(1); // 0: Content Writer, 1: Code Assistant, etc.
    const [responseIndex, setResponseIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Sample code response for typing animation
    const fullResponse = `export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const nextPage = () => setPage(p => Math.min(p + 1, totalPages));
  const prevPage = () => setPage(p => Math.max(p - 1, 1));
  
  return { page, setPage, totalPages, setTotalPages, 
          loading, setLoading, nextPage, prevPage };
};`;

    // Show animation after component mounts
    useEffect(() => {
        setIsVisible(true);

        // Auto rotate tabs every 8 seconds
        const tabInterval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % 4);
            setResponseIndex(0); // Reset typing animation when tab changes
        }, 8000);

        return () => clearInterval(tabInterval);
    }, []);

    // Typing animation effect
    useEffect(() => {
        if (responseIndex < fullResponse.length) {
            const typingTimer = setTimeout(() => {
                setResponseIndex((prevIndex) => prevIndex + 1);
            }, 30); // Speed of typing

            return () => clearTimeout(typingTimer);
        }
    }, [responseIndex]);
    return (
        <section
            id="hero"
            className="grid grid-cols-1 w-full py-2 items-center justify-center overflow-hidden min-h-[90vh] lg:h-dvh max-w-screen-5xl mx-auto px-2 sm:px-6 relative z-10 bg-background"
        >
            <HexagonBackground />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-50%,hsl(var(--primary)/0.15),transparent_60%)]" />
            <div className="mx-auto max-w-5xl px-4 sm:px-12 py-12 text-center space-y-2 bg-background w-full border-dashed rounded-md">

                <div className="my-8 max-w-5xl mx-auto justify-center items-center w-[60%]" />

                {/* Content wrapper with smooth entrance animations */}
                <div
                    className={cn(
                        "grid grid-cols-1 lg:gap-4 transition-all duration-700 transform mx-auto items-center justify-center w-full rounded-md mt-12 py-12 border-y-4 px-4",
                        "border-pink-300 dark:border-pink-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                    )}
                >
                    {/* Hero text and features */}
                    <div className="lg:col-span-12 space-y-4 rounded-md w-full bg-background mx-auto flex flex-col items-center justify-center max-w-5xl">

                        {/* Window chrome bar */}
                        <div className="absolute left-2 top-2 flex items-center space-x-2 p-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                                <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 transition-colors">
                                    DeDevs: Builders for Builders
                                </Badge>
                        <div>
                        <div className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight space-y-2 py-2 lg:py-2">
                                    <HighlightText
                                        text="Welcome to DeDevs"
                                    // inViewMargin="-100px"
                                    // transition={{ duration: 12, ease: "easeInOut" }}
                                    // inView={true}
                                    // className="text-text px-2 rounded-md bg-pink-200 dark:bg-pink-500"
                                    />
                                </div>
                {/* <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-text text-lg max-w-5xl mx-auto bg-muted p-2 border-t rounded-b-md"
                >
                    Learn, build, and ship with peers worldwide.
                    From workshops and code labs to open collaboration and career acceleration.
                    Join us to create the future together.
                </motion.p> */}
                </div>
                        <motion.div>
                            <div className="space-y-0 text-center bg-background rounded-t-md py-1 lg:p-1 z-10">
                                <div className="text-xl font-semibold tracking-tight space-y-2 py-2 lg:py-2">
                                Our mission is to empower builders with the tools they need to build with ease.
                                </div>
                            </div>
                            {/* Feature highlights */}
                            <div className="gap-4 lg:gap-2 items-center grid grid-cols-2 lg:grid-cols-2 grid-rows-2 rounded-md justify-center sm:px-8 p-4 lg:p-2 border-t-4 bg-muted">
                                <div className="space-y-1 lg:space-y-2">
                                    <div className="grid grid-cols-1 items-center gap-2">
                                        {/* <span className={featureDot} /> */}
                                        <span className="font-medium text-sm">Prompt Builder</span>
                                        <div className="text-xs text-muted-foreground">
                                            Design, test, and deploy prompts that perform.
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="grid grid-cols-1 items-center gap-2">
                                        {/* <span className={featureDot} /> */}
                                        <span className="font-medium text-sm">
                                            Bookmarks Manager
                                        </span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Save and organize links, snippets, and resources.
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="grid grid-cols-1 items-center gap-2">
                                        {/* <span className={featureDot} /> */}
                                        <span className="font-medium text-sm">Smart Notes</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Capture ideas and structure research effortlessly.
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="grid grid-cols-1 items-center gap-2">
                                        {/* <span className={featureDot} /> */}
                                        <span className="font-medium text-sm">Knowledge Management</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Centralize docs and insights for fast retrieval.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
          <div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-label={link.aria}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm h-full">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon icon={link.icon} width={16} height={16} />
                        <span className="font-medium">{link.label}</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground/80 truncate">{new URL(link.href).hostname}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
          </div>
        </section>

    );
}
