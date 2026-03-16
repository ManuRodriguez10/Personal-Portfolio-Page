import { SectionContainer } from "@/components/section-container"
import { ProjectsByYear } from "@/components/projects-by-year"
import { projects } from "@/lib/data"
import { Folder } from "lucide-react"

export const metadata = {
  title: "Projects | Manuel Rodriguez",
  description: "A collection of projects I've worked on, showcasing my skills in web development and software engineering.",
}

type ProjectsPageProps = {
  searchParams?: Promise<{ minimal?: string }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = searchParams ? await searchParams : {}
  const isMinimal = params.minimal === "1"

  if (isMinimal) {
    return (
      <>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-2xl font-bold text-foreground">Projects (minimal)</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Minimal view for debugging back-nav lag. Visit /projects?minimal=1 then go to a project and press back.
          </p>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <Folder className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance animate-fade-in-up delay-100">
                All projects.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                {"A curated collection of my work, from full-stack applications to open-source contributions. Each project represents unique challenges and growth."}
              </p>

              {/* Project count */}
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card/50 border border-border/30 animate-fade-in-up delay-300">
                <span className="text-2xl font-bold text-primary">{projects.length}</span>
                <span className="text-sm text-muted-foreground">Projects & Counting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer className="pt-4">
        <ProjectsByYear projects={projects} />
      </SectionContainer>
    </>
  )
}
