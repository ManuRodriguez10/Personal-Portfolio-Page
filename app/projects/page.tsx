import { SectionContainer } from "@/components/section-container"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"
import { Folder } from "lucide-react"

export const metadata = {
  title: "Projects | Your Name",
  description: "A collection of projects I've worked on, showcasing my skills in web development and software engineering.",
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <Folder className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            All projects.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {"A curated collection of my work, from full-stack applications to open-source contributions. Each project represents unique challenges and growth."}
          </p>

          {/* Project count */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-card/50 border border-border/30">
            <span className="text-2xl font-bold text-primary">{projects.length}</span>
            <span className="text-sm text-muted-foreground">Projects & Counting</span>
          </div>
        </div>
      </section>

      <SectionContainer className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>
    </>
  )
}
