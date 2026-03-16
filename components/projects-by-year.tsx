"use client"

import { useState } from "react"
import { ProjectCard, type Project } from "./project-card"
import { cn } from "@/lib/utils"

interface ProjectsByYearProps {
  projects: Project[]
}

export function ProjectsByYear({ projects }: ProjectsByYearProps) {
  const groupedByYear = projects.reduce<Record<number, Project[]>>((acc, project) => {
    const year = project.year ?? new Date().getFullYear()
    ;(acc[year] ??= []).push(project)
    return acc
  }, {})

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a)

  const [activeYear, setActiveYear] = useState(years[0])

  return (
    <div>
      <nav className="mb-10 rounded-2xl bg-card/60 border border-border/40 p-2 backdrop-blur-sm">
        <div className="flex">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={cn(
                "relative flex-1 px-8 py-4 rounded-xl text-lg font-semibold tracking-wide transition-all duration-200 cursor-pointer",
                activeYear === year
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {year}
              <span className={cn(
                "ml-2 text-sm font-normal",
                activeYear === year ? "text-primary-foreground/70" : "text-muted-foreground/60"
              )}>
                ({groupedByYear[year].length} {groupedByYear[year].length === 1 ? "project" : "projects"})
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {groupedByYear[activeYear].map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
