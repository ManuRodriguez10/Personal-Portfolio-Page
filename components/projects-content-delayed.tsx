"use client"

import { useEffect, useState } from "react"

const DELAY_MS = 100

/**
 * Debug: renders children only after a short delay.
 * Use to see if delaying paint breaks a bad first-pass update cycle when navigating back to /projects.
 */
export function ProjectsContentDelayed({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), DELAY_MS)
    return () => clearTimeout(id)
  }, [])

  if (!ready) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-muted-foreground text-sm">
        Loading…
      </div>
    )
  }

  return <>{children}</>
}
