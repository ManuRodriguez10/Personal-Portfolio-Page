"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const AUTOPLAY_INTERVAL_MS = 3000

interface ProjectImageCarouselProps {
  images: string[]
  projectTitle: string
  projectId: string
}

export function ProjectImageCarousel({ images, projectTitle, projectId }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const prevProjectIdRef = useRef<string | null>(null)

  // Reset carousel to first image only when project ID changes
  useEffect(() => {
    if (prevProjectIdRef.current !== null && prevProjectIdRef.current !== projectId) {
      setCurrentIndex(0)
    }
    prevProjectIdRef.current = projectId
  }, [projectId])

  // Autoplay: advance to next image on an interval when playing
  useEffect(() => {
    if (!images || images.length <= 1 || !isPlaying) return
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(id)
  }, [images?.length, isPlaying])

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full min-h-[200px] rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border/30 flex items-center justify-center overflow-hidden">
        <div className="text-center space-y-3">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{projectTitle.charAt(0)}</span>
          </div>
          <span className="text-sm text-muted-foreground">Project Preview</span>
        </div>
      </div>
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative group w-full h-full min-h-[200px]">
      {/* Main Image */}
      <div className="w-full h-full rounded-xl overflow-hidden bg-muted/30 flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} screenshot ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Play / Pause + Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPlaying((p) => !p)}
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <div className="px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-medium text-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}
