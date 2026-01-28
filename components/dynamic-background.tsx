"use client"

import { useEffect, useState, useRef } from "react"

export type BackgroundVariant = "mesh" | "aurora" | "ambient"

interface DynamicBackgroundProps {
  /** "mesh" = drifting orbs + gradient mesh. "aurora" = soft horizontal bands. "ambient" = floating geometric shapes (SVGator-style). */
  variant?: BackgroundVariant
}

/** Ambient variant: shapes drift, scale, and rotate so they feel active. */
const AMBIENT_SHAPES = [
  { type: "circle" as const, x: "15%", y: "25%", size: 80, anim: "ambient-float-a", dur: 12, delay: -2, opacity: "opacity-60 dark:opacity-50" },
  { type: "circle" as const, x: "82%", y: "18%", size: 56, anim: "ambient-float-b", dur: 14, delay: -4, opacity: "opacity-50 dark:opacity-45" },
  { type: "circle" as const, x: "28%", y: "72%", size: 96, anim: "ambient-float-c", dur: 16, delay: 0, opacity: "opacity-45 dark:opacity-40" },
  { type: "triangle" as const, x: "72%", y: "78%", size: 64, anim: "ambient-float-d", dur: 11, delay: -6, opacity: "opacity-55 dark:opacity-48" },
  { type: "circle" as const, x: "48%", y: "42%", size: 48, anim: "ambient-float-a", dur: 10, delay: -1, opacity: "opacity-40 dark:opacity-35" },
  { type: "pentagon" as const, x: "10%", y: "82%", size: 52, anim: "ambient-float-b", dur: 13, delay: -3, opacity: "opacity-50 dark:opacity-42" },
  { type: "circle" as const, x: "90%", y: "52%", size: 64, anim: "ambient-float-c", dur: 15, delay: -5, opacity: "opacity-38 dark:opacity-32" },
]

export function DynamicBackground({ variant = "aurora" }: DynamicBackgroundProps) {
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number>()
  const posRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        setMouse(posRef.current)
        rafRef.current = undefined
      })
    }
    const onLeave = () => setMouse(null)
    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {variant === "mesh" && (
        <>
          {/* Gradient mesh – slow “breathing” (light) */}
          <div
            className="absolute inset-0 opacity-60 dark:opacity-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.72 0.18 195 / 0.15), transparent 60%),
                radial-gradient(ellipse 70% 50% at 80% 70%, oklch(0.72 0.18 195 / 0.12), transparent 55%),
                radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.65 0.12 220 / 0.08), transparent 50%)
              `,
              animation: "mesh-breathe 12s ease-in-out infinite",
            }}
          />
          {/* Gradient mesh – dark */}
          <div
            className="absolute inset-0 opacity-0 dark:opacity-70"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 20% 30%, oklch(0.80 0.18 195 / 0.12), transparent 60%),
                radial-gradient(ellipse 70% 50% at 80% 70%, oklch(0.80 0.18 195 / 0.10), transparent 55%),
                radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.70 0.12 220 / 0.06), transparent 50%)
              `,
              animation: "mesh-breathe 14s ease-in-out infinite",
              animationDelay: "-2s",
            }}
          />
          {/* Drifting orbs */}
          <div className="absolute top-1/4 -left-[10%] w-[45%] aspect-square rounded-full bg-primary/15 blur-[100px] opacity-70 will-change-transform" style={{ animation: "orb-drift-1 20s ease-in-out infinite" }} />
          <div className="absolute bottom-1/4 -right-[10%] w-[50%] aspect-square rounded-full bg-primary/12 blur-[110px] opacity-60 will-change-transform" style={{ animation: "orb-drift-2 22s ease-in-out infinite", animationDelay: "-4s" }} />
          <div className="absolute top-1/2 left-1/2 w-[35%] aspect-square rounded-full bg-primary/10 blur-[90px] opacity-50 -translate-x-1/2 -translate-y-1/2 will-change-transform" style={{ animation: "orb-drift-3 18s ease-in-out infinite", animationDelay: "-1s" }} />
          <div className="absolute top-[60%] left-[15%] w-[30%] aspect-square rounded-full bg-primary/8 blur-[80px] opacity-40 will-change-transform" style={{ animation: "orb-drift-4 24s ease-in-out infinite", animationDelay: "-6s" }} />
          <div className="absolute top-[20%] right-[20%] w-[25%] aspect-square rounded-full bg-primary/10 blur-[70px] opacity-50 will-change-transform" style={{ animation: "orb-drift-5 16s ease-in-out infinite", animationDelay: "-3s" }} />
        </>
      )}

      {variant === "aurora" && (
        <>
          {/* Aurora: soft horizontal bands that drift (light) */}
          <div className="absolute inset-0 dark:opacity-0">
            <div
              className="absolute inset-x-0 h-[50%] top-[10%] rounded-full blur-[100px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 120% 80% at 50% 50%, oklch(0.72 0.18 195 / 0.12), transparent 70%)",
                animation: "aurora-band-1 18s ease-in-out infinite",
              }}
            />
            <div
              className="absolute inset-x-0 h-[45%] top-[45%] rounded-full blur-[90px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 100% 60% at 50% 50%, oklch(0.65 0.12 220 / 0.08), transparent 65%)",
                animation: "aurora-band-2 22s ease-in-out infinite",
                animationDelay: "-5s",
              }}
            />
            <div
              className="absolute inset-x-0 h-[40%] top-[25%] rounded-full blur-[80px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 80% 100% at 50% 50%, oklch(0.72 0.18 195 / 0.06), transparent 60%)",
                animation: "aurora-band-3 20s ease-in-out infinite",
                animationDelay: "-2s",
              }}
            />
          </div>
          {/* Aurora – dark */}
          <div className="absolute inset-0 opacity-0 dark:opacity-100">
            <div
              className="absolute inset-x-0 h-[50%] top-[10%] rounded-full blur-[100px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 120% 80% at 50% 50%, oklch(0.80 0.18 195 / 0.10), transparent 70%)",
                animation: "aurora-band-1 18s ease-in-out infinite",
              }}
            />
            <div
              className="absolute inset-x-0 h-[45%] top-[45%] rounded-full blur-[90px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 100% 60% at 50% 50%, oklch(0.70 0.12 220 / 0.06), transparent 65%)",
                animation: "aurora-band-2 22s ease-in-out infinite",
                animationDelay: "-5s",
              }}
            />
            <div
              className="absolute inset-x-0 h-[40%] top-[25%] rounded-full blur-[80px] will-change-transform"
              style={{
                background: "radial-gradient(ellipse 80% 100% at 50% 50%, oklch(0.80 0.18 195 / 0.05), transparent 60%)",
                animation: "aurora-band-3 20s ease-in-out infinite",
                animationDelay: "-2s",
              }}
            />
          </div>
        </>
      )}

      {variant === "ambient" && (
        <div className="absolute inset-0 overflow-hidden">
          {AMBIENT_SHAPES.map((s, i) => (
            <div
              key={i}
              className={`ambient-shape absolute will-change-transform ${s.opacity}`}
              style={{
                left: s.x,
                top: s.y,
                width: s.size,
                height: s.size,
                transform: "translate(-50%, -50%)",
                animation: `${s.anim} ${s.dur}s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite`,
                animationDelay: `${s.delay}s`,
              }}
              aria-hidden
            >
              {s.type === "circle" && (
                <div
                  className="h-full w-full rounded-full bg-primary/25 dark:bg-primary/20"
                  style={{ boxShadow: "0 0 0 1px oklch(0.72 0.18 195 / 0.08)" }}
                />
              )}
              {s.type === "triangle" && (
                <div
                  className="h-full w-full bg-primary/22 dark:bg-primary/18"
                  style={{
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    boxShadow: "0 0 0 1px oklch(0.72 0.18 195 / 0.06)",
                  }}
                />
              )}
              {s.type === "pentagon" && (
                <div
                  className="h-full w-full bg-primary/20 dark:bg-primary/16"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    boxShadow: "0 0 0 1px oklch(0.72 0.18 195 / 0.06)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Cursor-follow glow – shared */}
      {mouse != null && (
        <div
          className="absolute w-[min(80vw,400px)] aspect-square rounded-full bg-primary/20 blur-[80px] opacity-60 pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Subtle grid – shared */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
