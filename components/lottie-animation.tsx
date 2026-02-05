"use client"

import { useMemo } from "react"
import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface LottieAnimationProps {
  animationData: any
  className?: string
}

export function LottieAnimation({ animationData, className }: LottieAnimationProps) {
  // Memoize the animation data to prevent reinitialization on re-renders
  const memoizedAnimationData = useMemo(() => animationData, [animationData])

  return (
    <div className={className}>
      <Lottie
        animationData={memoizedAnimationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
