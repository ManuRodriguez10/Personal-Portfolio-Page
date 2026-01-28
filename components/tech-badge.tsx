import type React from "react"
import { cn } from "@/lib/utils"

interface TechBadgeProps {
  children: React.ReactNode
  className?: string
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium",
        "bg-primary/10 text-primary/90 border border-primary/20",
        "transition-all duration-300 hover:bg-primary/20 hover:border-primary/30",
        "hover:scale-105 hover:shadow-sm hover:shadow-primary/20 cursor-default",
        className
      )}
    >
      {children}
    </span>
  )
}
