"use client"

import { useEffect } from "react"

export function NavigationTracker() {
  useEffect(() => {
    const handlePopState = () => {
      // Reserved for future popstate handling
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  return null
}
