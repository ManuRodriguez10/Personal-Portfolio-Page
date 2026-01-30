"use client"

import dynamic from "next/dynamic"

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface LottieAnimationProps {
  animationData: any
  className?: string
}

export function LottieAnimation({ animationData, className }: LottieAnimationProps) {
  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
