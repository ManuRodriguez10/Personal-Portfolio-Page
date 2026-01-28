"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "section"
  id?: string
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Component = "div",
  id,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ triggerOnce: true })

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(
        "animate-on-scroll",
        isInView && "is-visible",
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  )
}
