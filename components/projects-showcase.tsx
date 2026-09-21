import Link from "next/link"
import Image from "next/image"
import type { Project } from "./project-card"
import { WorkReveal } from "./work-reveal"

const featuredIds = new Set(["insurance-payment", "matchfit-mobile", "matchfit"])

const categories: Record<string, string> = {
  "insurance-payment": "CLIENT WORK",
  "matchfit": "SPORTS TECHNOLOGY",
  "matchfit-mobile": "MOBILE DEVELOPMENT",
  "vibing-sarasota": "LOCAL DISCOVERY",
  "scent-society": "E-COMMERCE",
  "banyan-board": "ACADEMIC PLANNING",
  "nsae-web-app": "NONPROFIT SOFTWARE",
}

const featuredDescriptions: Record<string, string> = {
  "insurance-payment": "An AI-powered workflow that replaces manual receipt entry for an insurance office. It extracts structured payment information, lets staff verify the results, and stores clean records for reporting and export.",
  "matchfit": "A soccer team management platform designed around the day-to-day work of coaches and players. It connects rosters, scheduling, team dashboards, and a visual matchday lineup builder in one role-based workflow.",
  "matchfit-mobile": "A mobile version of MatchFit that brings the soccer platform experience to players and teams on smartphones. Built with React Native, Supabase, and Firebase, it supports authentication, real-time data, and the platform’s connected mobile experience.",
}

const previewImages: Record<string, string> = {
  "insurance-payment": "/assets/insurance-payment-1.png",
  "matchfit-mobile": "/assets/matchfit-mobile-hero.png",
  "matchfit": "/assets/matchfit-3.png",
  "vibing-sarasota": "/assets/vibing-sarasota-1.png",
  "scent-society": "/assets/scent-society-1.png",
  "banyan-board": "/assets/banyan-board-1.png",
  "nsae-web-app": "/assets/nsae-web-app-home.png",
}

function ProjectPreview({ project, featured = false }: { project: Project; featured?: boolean }) {
  const source = previewImages[project.id] ?? project.heroImage ?? project.images?.[0]
  if (!source) return null
  const mobileHero = project.id === "matchfit-mobile"
  return (
    <Link className={featured ? "featured-preview-frame" : "more-preview-frame"} href={`/projects/${project.id}`} aria-label={`View ${project.title} case study`}>
      <Image
        src={source}
        alt={mobileHero ? "Person holding a phone displaying the MatchFit Mobile account screen" : `${project.title} application preview`}
        fill
        className={mobileHero ? "project-preview-image project-preview-cover" : "project-preview-image project-preview-contain"}
        sizes={featured ? "(max-width: 767px) 100vw, 58vw" : "(max-width: 767px) 100vw, 50vw"}
      />
    </Link>
  )
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (compact) {
    return <Link className="project-text-link" href={`/projects/${project.id}`}><span>Explore project</span><span aria-hidden="true">→</span></Link>
  }
  return (
    <div className="project-links">
      <Link className="project-text-link" href={`/projects/${project.id}`}><span>View case study</span><span aria-hidden="true">→</span></Link>
      {project.deploymentUrl && <a className="project-text-link" href={project.deploymentUrl} target="_blank" rel="noopener noreferrer"><span>Live project</span><span aria-hidden="true">↗</span></a>}
      {project.githubUrl && <a className="project-text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><span>View GitHub</span><span aria-hidden="true">↗</span></a>}
    </div>
  )
}

function ProjectMeta({ project }: { project: Project }) {
  return <p className="project-meta">{project.year} · {categories[project.id] ?? project.type ?? "PROJECT"}</p>
}

export function ProjectsShowcase({ projects }: { projects: Project[] }) {
  const featured = ["insurance-payment", "matchfit-mobile", "matchfit"].map((id) => projects.find((project) => project.id === id)).filter(Boolean) as Project[]
  const remaining = projects.filter((project) => !featuredIds.has(project.id))

  return (
    <section className="projects-collection" aria-labelledby="featured-work-heading">
      <div className="projects-container">
        <WorkReveal className="featured-heading">
          <p className="projects-section-label">FEATURED WORK</p>
          <h2 id="featured-work-heading">Projects built from problem to deployment.</h2>
        </WorkReveal>

        <div className="featured-projects">
          {featured.map((project, index) => (
            <WorkReveal key={project.id}>
              <article className={`featured-project ${index === 1 ? "featured-project-reversed" : ""}`}>
                <div className="featured-project-info">
                  <ProjectMeta project={project} />
                  <h3>{project.title}</h3>
                  <p className="featured-project-description">{featuredDescriptions[project.id]}</p>
                  <p className="featured-project-tech">{project.tech.join(" · ")}</p>
                  <ProjectLinks project={project} />
                </div>
                <ProjectPreview project={project} featured />
              </article>
            </WorkReveal>
          ))}
        </div>

        <div className="more-projects">
          <WorkReveal><h2>More projects</h2></WorkReveal>
          <div className="more-projects-grid">
            {remaining.map((project, index) => (
              <WorkReveal key={project.id} delay={(index % 2) * 80}>
                <article className="more-project">
                  <ProjectPreview project={project} />
                  <ProjectMeta project={project} />
                  <h3>{project.title}</h3>
                  <p className="more-project-description">{project.description}</p>
                  <p className="more-project-tech">{project.tech.join(" · ")}</p>
                  <ProjectLinks project={project} compact />
                </article>
              </WorkReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
