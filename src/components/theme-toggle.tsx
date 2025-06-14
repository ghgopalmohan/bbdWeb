
"use client"

// This file is intentionally kept for ShadCN compatibility but won't be used if theme toggling is removed.
// If you decide to re-add theme toggling, this component can be used.

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  // Return null if you don't want to show the toggle, or style it as needed.
  // For the current "Duwy" design, we are removing it from the header.
  return null; 

  // Example of how it could be used if needed:
  /*
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full text-foreground hover:bg-accent/50 hover:text-accent-foreground"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
  */
}
