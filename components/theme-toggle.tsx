"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2 border rounded-md hover:border-pink-300 dark:hover:border-pink-500 transition-colors hover:scale-105 active:scale-100", className)}
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props}
    >
      <SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";
