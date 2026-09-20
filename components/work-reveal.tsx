"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function WorkReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !("IntersectionObserver" in window)) return
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let animation: Animation | undefined
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      observer.disconnect()
      if (!reducedMotion.matches && typeof element.animate === "function") {
        animation = element.animate([
          { opacity: 0, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 550, delay, easing: "ease-out", fill: "backwards" })
      }
    }, { threshold: 0.08 })
    const onMotionChange = () => { if (reducedMotion.matches) animation?.cancel() }
    reducedMotion.addEventListener("change", onMotionChange)
    observer.observe(element)
    return () => {
      observer.disconnect()
      animation?.cancel()
      reducedMotion.removeEventListener("change", onMotionChange)
    }
  }, [delay])

  return <div ref={ref} className={className}>{children}</div>
}
