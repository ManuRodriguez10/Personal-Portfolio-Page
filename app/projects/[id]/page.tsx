import { notFound } from "next/navigation"
import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
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
                    <p className="text-sm font-medium text-foreground">2 months (placeholder)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                    <p className="text-sm font-medium text-foreground">Full-Stack Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Type</p>
                    <p className="text-sm font-medium text-foreground">Web Application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <SectionContainer className="pt-0 pb-12">
        <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/30 flex items-center justify-center overflow-hidden">
          <div className="text-center space-y-3">
            <div className="h-20 w-20 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">{project.title.charAt(0)}</span>
            </div>
            <span className="text-sm text-muted-foreground">Project Preview</span>
          </div>
        </div>
      </SectionContainer>

      {/* Project Details */}
      <SectionContainer className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Overview</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {"This project was built to solve [problem statement placeholder]. The main goal was to create a solution that is both performant and user-friendly, while maintaining clean, maintainable code."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {"The application features [key feature 1], [key feature 2], and [key feature 3]. Each feature was carefully designed to provide the best possible user experience."}
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card/50 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Challenge 1 Placeholder</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {"Description of how this challenge was approached and solved using [technology/approach]."}
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card/50 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Challenge 2 Placeholder</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {"Description of how this challenge was approached and solved using [technology/approach]."}
                  </p>
                </div>
              </div>
            </div>

            {/* What I'd Improve */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">{"What I'd Improve"}</h2>
              <div className="space-y-3">
                {[
                  "Improvement idea 1 placeholder - additional feature or optimization",
                  "Improvement idea 2 placeholder - better testing or documentation",
                  "Improvement idea 3 placeholder - performance or accessibility enhancements"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-sm font-medium">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop sidebar - hidden on mobile, shown on lg */}
          <div className="hidden lg:block" />
        </div>
      </SectionContainer>
    </>
  )
}
