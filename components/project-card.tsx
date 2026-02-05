import Link from "next/link"
import Image from "next/image"
import { TechBadge } from "./tech-badge"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
  featured?: boolean
  timeline?: string
  role?: string
  type?: string
  images?: string[]
}

interface ProjectCardProps {
  project: Project
  variant?: "default" | "featured" | "teaser"
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured"
  const isTeaser = variant === "teaser"

  if (isTeaser) {
    const firstSentence = project.description.match(/^[^.!?]*[.!?]/)?.[0] ?? project.description.split(/\s+/).slice(0, 12).join(" ") + "…"
    return (
      <article
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl h-[340px]",
          "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
          "border border-primary/20",
          "transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20",
          "hover-lift"
        )}
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden />
        <div className="relative flex flex-1 flex-col p-6 min-h-0 gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 shrink-0">
            <span className="text-base font-bold text-primary">{project.title.charAt(0)}</span>
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {firstSentence}
          </p>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-card/50 backdrop-blur-sm border border-border/30",
        "transition-all duration-500 hover:border-primary/40 hover:bg-card/80",
        "hover-lift hover-lift-glow",
        "hover:shadow-[0_0_60px_-15px] hover:shadow-primary/25",
        isFeatured && "md:flex-row md:items-stretch"
      )}
    >
      {/* Image or Placeholder - zoom on hover (Aave-style) */}
      <div 
        className={cn(
          "relative aspect-video w-full overflow-hidden bg-gradient-to-br from-muted to-muted/50",
          isFeatured && "md:w-1/2 md:aspect-auto md:min-h-[320px]"
        )}
      >
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105">
            <div className="text-center space-y-2">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
              </div>
              <span className="text-xs text-muted-foreground">Project Preview</span>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={cn("flex flex-col flex-1 p-6 lg:p-8", isFeatured && "md:w-1/2 md:justify-center")}>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
          {project.tech.length > 4 && (
            <TechBadge className="bg-muted/50 text-muted-foreground border-muted">
              +{project.tech.length - 4}
            </TechBadge>
          )}
        </div>

        {/* Explore Button */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90 hover:gap-3 shadow-lg shadow-primary/25"
          >
            Explore Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
