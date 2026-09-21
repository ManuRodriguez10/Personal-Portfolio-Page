import { Geist, Geist_Mono } from "next/font/google"
import { projects } from "@/lib/data"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { WorkReveal } from "@/components/work-reveal"
import "@/components/projects-page.css"

const sans = Geist({ subsets: ["latin"], variable: "--projects-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--projects-mono" })

export const metadata = {
  title: "Projects | Manuel Rodriguez",
  description: "A collection of full-stack applications spanning business automation, sports technology, mobile development, and product-focused problem solving.",
}

export default function ProjectsPage() {
  return (
    <div className={`projects-page ${sans.variable} ${mono.variable}`}>
      <section className="projects-intro" aria-labelledby="projects-heading">
        <div className="projects-container">
          <WorkReveal delay={0}><p className="projects-kicker">PROJECTS</p></WorkReveal>
          <WorkReveal delay={80}><h1 id="projects-heading">Software across business, sport, and everyday experiences.</h1></WorkReveal>
          <WorkReveal delay={160}><p className="projects-intro-copy">A collection of full-stack, mobile, AI-powered, and academic projects built around real user needs.</p></WorkReveal>
        </div>
      </section>
      <ProjectsShowcase projects={projects} />
    </div>
  )
}
