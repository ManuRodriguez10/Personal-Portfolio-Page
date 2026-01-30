"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface DrawingLineProps {
  className?: string
  /** Line length in CSS (e.g. "120px", "50%"). Default "80px" */
  width?: string
  /** Thickness in px. Default 2 */
  strokeWidth?: number
}

/**
 * SVG line that "draws" in when scrolled into view (stroke-dashoffset animation).
 * Inspired by SVGator line / self-drawing animation effects.
 */
export function DrawingLine({
  className,
  width = "80px",
  strokeWidth = 2,
}: DrawingLineProps) {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div ref={ref} className={cn("inline-flex justify-start opacity-100", className)}>
      <svg
        width={width}
        height={strokeWidth + 4}
        viewBox={`0 0 200 ${strokeWidth + 4}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible opacity-100"
        aria-hidden
      >
        <line
          x1="0"
          y1={(strokeWidth + 4) / 2}
          x2="200"
          y2={(strokeWidth + 4) / 2}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeOpacity={1}
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset={isInView ? 0 : 200}
          className="drawing-line-stroke transition-[stroke-dashoffset] duration-700 ease-out"
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </svg>
    </div>
  )
}
