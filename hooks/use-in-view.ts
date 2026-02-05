"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

interface UseInViewOptions {
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    rootMargin = "0px 0px -60px 0px",
    threshold = 0.1,
    triggerOnce = true,
  } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const rafRef = useRef<number>()
  const isInViewRef = useRef(false) // Track state to prevent unnecessary updates
  const timeoutRef = useRef<number>()

  // Use useLayoutEffect for synchronous viewport check (runs before paint)
  useLayoutEffect(() => {
    if (!triggerOnce) return
    
    const el = ref.current
    if (!el) return

    // Check if element is already visible synchronously (before observer creation)
    const rect = el.getBoundingClientRect()
    const marginBottom = 60
    const isVisible = rect.top < window.innerHeight - marginBottom && rect.bottom > 0
    
    if (isVisible && !isInViewRef.current) {
      isInViewRef.current = true
      setIsInView(true)
    }
  }, [triggerOnce])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If already in view from layoutEffect check, skip observer creation
    if (triggerOnce && isInViewRef.current) {
      return
    }

    // Disconnect existing observer if any
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Cancel any pending RAF or timeout
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Delay observer creation using requestIdleCallback to batch and prevent simultaneous firing
    // This helps when navigating back and many components mount at once
    const scheduleObserver = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        timeoutRef.current = (window as any).requestIdleCallback(callback, { timeout: 100 }) as any
      } else {
        timeoutRef.current = window.setTimeout(callback, 10) // Small delay to batch
      }
    }
    
    scheduleObserver(() => {
      const el = ref.current
      if (!el) return

      // Double-check if element became visible during the delay
      if (triggerOnce && isInViewRef.current) {
        return
      }

      // Use a single shared RAF for all callbacks to batch updates
      let rafScheduled = false

      const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        // For triggerOnce, disconnect immediately after first intersection
        if (triggerOnce && entry.isIntersecting && isInViewRef.current) {
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
          return
        }

        // Batch RAF callbacks - only schedule one if not already scheduled
        if (!rafScheduled) {
          rafScheduled = true
          rafRef.current = requestAnimationFrame(() => {
            rafScheduled = false
            if (entry.isIntersecting) {
              // Early return if already in view (for triggerOnce)
              if (triggerOnce && isInViewRef.current) return
              isInViewRef.current = true
              setIsInView(true)
              // Disconnect observer after first intersection for triggerOnce
              if (triggerOnce && observerRef.current) {
                observerRef.current.disconnect()
              }
            } else if (!triggerOnce) {
              // Early return if already not in view
              if (!isInViewRef.current) return
              isInViewRef.current = false
              setIsInView(false)
            }
          })
        }
      },
      { rootMargin, threshold }
    )
    observerRef.current = observer
    observer.observe(el)
    }, 0) // Small delay to batch observer creation
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [rootMargin, threshold, triggerOnce])

  const reset = () => {
    isInViewRef.current = false
    setIsInView(false)
    if (observerRef.current && ref.current) {
      observerRef.current.disconnect()
      
      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      const newObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry) return

          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
          }

          rafRef.current = requestAnimationFrame(() => {
            if (entry.isIntersecting) {
              if (triggerOnce && isInViewRef.current) return
              isInViewRef.current = true
              setIsInView(true)
            } else if (!triggerOnce) {
              if (!isInViewRef.current) return
              isInViewRef.current = false
              setIsInView(false)
            }
          })
        },
        { rootMargin, threshold }
      )
      observerRef.current = newObserver
      if (ref.current) {
        newObserver.observe(ref.current)
      }
    }
  }

  return { ref, isInView, reset }
}
