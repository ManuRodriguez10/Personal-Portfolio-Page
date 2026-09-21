import { Geist, Geist_Mono } from "next/font/google"
import { projects } from "@/lib/data"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { Contact } from "@/components/contact"
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
          <p className="projects-kicker">PROJECTS</p>
          <h1 id="projects-heading">Software built for real-world use.</h1>
          <p className="projects-intro-copy">A collection of full-stack applications spanning business automation, sports technology, mobile development, and product-focused problem solving.</p>
        </div>
      </section>
      <ProjectsShowcase projects={projects} />
      <Contact />
    </div>
  )
}
