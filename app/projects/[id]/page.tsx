import { notFound } from "next/navigation"
import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
import { ProjectImageCarousel } from "@/components/project-image-carousel"
import { projects, profile } from "@/lib/data"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  
  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | ${profile.fullName}`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  const useEnhancedLayout = project.id === 'matchfit' || project.id === 'scent-society' || project.id === 'vibing-sarasota' || project.id === 'nsae-web-app' || project.id === 'banyan-board'

  // Side-by-side layout for featured projects
  if (useEnhancedLayout) {
    return (
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center justify-center py-6 lg:py-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto w-full max-w-[1500px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
            {/* Left: Content - 60% */}
            <div className="flex flex-col justify-center space-y-4">
              {/* Back Link */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-all duration-300 w-fit -ml-3"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                {project.title}
              </h1>
              
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild size="default" className="h-10 px-6 rounded-xl gap-2 shadow-lg shadow-primary/25">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && project.githubUrl !== "" && (
                  <Button variant="outline" size="default" asChild className="h-10 px-6 rounded-xl gap-2 bg-transparent border-border/50">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>

              {/* Mobile-only Metadata (shows below buttons on mobile) */}
              <div className="lg:hidden p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 space-y-3 mt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</p>
                    <p className="text-sm font-medium text-foreground">{project.timeline ?? "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                    <p className="text-sm font-medium text-foreground">{project.role ?? "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Type</p>
                    <p className="text-sm font-medium text-foreground">{project.type ?? "—"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stacked layout - Metadata (top) + Carousel (bottom) */}
            <div className="flex flex-col gap-3">
              {/* Top-right: Metadata Card (desktop only) */}
              <div className="hidden lg:block shrink-0 w-full">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 shadow-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</p>
                        <p className="text-sm font-medium text-foreground">{project.timeline ?? "—"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                        <p className="text-sm font-medium text-foreground">{project.role ?? "—"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Type</p>
                        <p className="text-sm font-medium text-foreground">{project.type ?? "—"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-right: Carousel - wider aspect ratio */}
              <div className="w-full">
                <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 shadow-2xl shadow-black/10 p-3">
                  <div className="aspect-[16/9] w-full">
                    <ProjectImageCarousel images={project.images ?? []} projectTitle={project.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default layout for other projects
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/50 transition-all duration-300 -ml-4 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>

              {/* Links */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/25">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-14 px-8 rounded-xl gap-2 bg-transparent border-border/50">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Timeline</p>
                    <p className="text-sm font-medium text-foreground">{project.timeline ?? "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                    <p className="text-sm font-medium text-foreground">{project.role ?? "—"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Type</p>
                    <p className="text-sm font-medium text-foreground">{project.type ?? "—"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <SectionContainer className="pt-0 pb-12">
        <ProjectImageCarousel images={project.images ?? []} projectTitle={project.title} />
      </SectionContainer>
    </>
  )
}
