"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section"
  id?: string
  variant?: "default" | "statCard"
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Component = "div",
  id,
  variant = "default",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ triggerOnce: true })

  const animationClass = variant === "statCard" ? "animate-stat-card" : "animate-on-scroll"

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(
        animationClass,
        isInView && "is-visible",
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  )
}
