"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { motion } from "framer-motion";
import ActionButton from "../action-button";
import { HexagonBackground } from "./background";

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

    // Get partial response for typing animation
    const getPartialResponse = () => fullResponse.slice(0, responseIndex);

    // Template categories with icons
    // const templates = [
    //   { name: "Content Writer", active: activeTab === 0 },
    //   { name: "Code Assistant", active: activeTab === 1 },
    //   { name: "Data Analysis", active: activeTab === 2 },
    //   { name: "Image Gen", active: activeTab === 3 },
    // ];

    return (
        <section
            id="hero"
            className="grid grid-cols-1 w-full py-2 items-center justify-center overflow-hidden min-h-[90vh] lg:h-dvh max-w-screen-5xl mx-auto px-2 sm:px-6 relative z-10 bg-background"
        >
            <HexagonBackground />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-50%,hsl(var(--primary)/0.15),transparent_60%)]" />
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-16 sm:py-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight p-6 bg-muted rounded-md mb-4 sm:mb-12"
                >
                    DeDevs Club
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
                >
                    A global community for builders at the edge of AI and blockchain.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto"
                >
                    Learn, build, and ship with peers worldwide. From workshops and code labs to open collaboration and career acceleration—join us to create the future together.
                </motion.p>
            </div>

            {/* // p-2 rounded-md justify-center items-center sm:mt-0 */}
            {/* <div
          className="px-2 mx-auto relative z-10 min-h-full w-full max-w-screen py-12 sm:py-0 sm:flex sm:flex-col justify-center items-center "
          > */}
            {/* Content wrapper with smooth entrance animations */}
            <div
                className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 lg:gap-4 transition-all duration-700 transform mx-auto items-center justify-center w-fit rounded-md",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
            >
                {/* Left column: Hero text and features */}
                <div className="lg:col-span-12 space-y-2 border-4 border-border rounded-md w-full bg-muted mx-auto flex flex-col items-center justify-center max-w-screen-md max-h-screen-2xl mb-2">

                    {/* Window chrome bar */}
                    <div className="absolute left-2 top-2 flex items-center space-x-2 p-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <motion.div>
                        <div className="space-y-2 text-center bg-background rounded-t-md p-2 z-10">
                            <Badge className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-500 transition-colors">
                                VibesGuide | Knowledge Management for Builders
                            </Badge>
                            <div className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight space-y-2 py-2 lg:py-2">
                                Speak the{" "}
                                <span
                                    className="text-text px-2 py-1 rounded-md bg-pink-200 dark:bg-pink-500"
                                >{" "}
                                    language of AI{" "}
                                </span>{" "}
                                <br />
                                with your VibesGuide
                            </div>

                            <div className="text-sm md:text-md lg:text-lg text-muted-foreground xl:max-w-screen lg:py-2">
                                Your workspace for crafting, testing, and deploying AI prompts
                                — with templates and powerful analytics.
                            </div>
                        </div>
                        {/* Feature highlights */}
                        <div className="gap-4 items-center grid grid-cols-2 lg:grid-cols-2 grid-rows-2 justify-center sm:px-12 p-4 border-t-4 bg-muted">
                            <div className="space-y-1">
                                <div className="flex items-center">
                                    <span className={featureDot} />
                                    <span className="font-medium text-sm">Prompt Builder</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Design, test, and deploy prompts that perform.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center">
                                    <span className={featureDot} />
                                    <span className="font-medium text-sm">
                                        Bookmarks
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Save and organize links, snippets, and resources.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center">
                                    <span className={featureDot} />
                                    <span className="font-medium text-sm">Notes</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Capture ideas and structure research effortlessly.
                                </p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center">
                                    <span className={featureDot} />
                                    <span className="font-medium text-sm">Knowledge Management</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Centralize docs and insights for fast retrieval.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative gradient elements */}
            {/* <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" /> */}
        </section>

    );
}
