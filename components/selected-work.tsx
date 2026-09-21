import Link from "next/link"
import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"
import { projects } from "@/lib/data"
import { WorkReveal } from "./work-reveal"
import insuranceScreenshot from "@/public/assets/insurance-payment-1.png"
import matchfitMobileScreenshot from "@/public/assets/matchfit-mobile-hero.png"
import "./selected-work.css"

const sans = Geist({ subsets: ["latin"], variable: "--work-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--work-mono" })

const selectedProjects = [
  {
    id: "insurance-payment",
    description: "An AI-powered workflow that extracts payment information from insurance receipts, allows staff to verify the results, and stores clean records for reporting and export.",
    stack: "React · Supabase · OpenAI API",
    screenshot: insuranceScreenshot,
    alt: "Insurance payment receipt automation system interface",
  },
  {
    id: "matchfit-mobile",
    description: "A mobile version of the MatchFit platform that brings its soccer experience to smartphones through a connected application for players and teams.",
    stack: "React Native · Supabase · Firebase",
    screenshot: matchfitMobileScreenshot,
    alt: "Person holding a phone displaying the MatchFit Mobile application",
  },
]

export function SelectedWork() {
  return (
    <section id="projects" className={`selected-work ${sans.variable} ${mono.variable}`} aria-labelledby="selected-work-heading">
      <div className="selected-work-inner">
        <WorkReveal className="selected-work-intro">
          <p className="selected-work-label">SELECTED WORK</p>
          <h2 id="selected-work-heading">Products built from problem to deployment.</h2>
          <p className="selected-work-summary">A selection of full-stack applications focused on business automation and sports technology.</p>
        </WorkReveal>
        {selectedProjects.map((selected, index) => {
          const project = projects.find((item) => item.id === selected.id)!
          return (
            <WorkReveal key={project.id}>
              <article className={`selected-work-row ${index === 1 ? "selected-work-row-reversed" : ""}`} aria-labelledby={`work-${project.id}`}>
                <div className="selected-work-copy">
                  <p className="selected-work-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3 id={`work-${project.id}`}>{project.title}</h3>
                  <p className="selected-work-description">{selected.description}</p>
                  <p className="selected-work-stack">{selected.stack}</p>
                  <div className="selected-work-links">
                    <Link href={`/projects/${project.id}`}><span>View case study</span><span className="selected-work-arrow" aria-hidden="true">→</span></Link>
                  </div>
                </div>
                <div className="selected-work-screenshot">
                  <Image src={selected.screenshot} alt={selected.alt} sizes="(max-width: 767px) 100vw, 58vw" />
                </div>
              </article>
            </WorkReveal>
          )
        })}
      </div>
    </section>
  )
}
