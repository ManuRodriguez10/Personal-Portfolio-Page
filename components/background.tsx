import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import { WorkReveal } from "./work-reveal"
import "./background.css"

const sans = Geist({ subsets: ["latin"], variable: "--background-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--background-mono" })

const entries = [
  {
    category: "TEACHING",
    title: "Teaching Assistant",
    organization: "Computer Science Department · New College of Florida",
    description: "Supporting students in software engineering, Java, and object-oriented programming through workshops, tutoring, feedback, and course-material review.",
  },
  {
    category: "CLIENT WORK",
    title: "Insurance Payment Receipt Automation System",
    organization: "Built for Franco Fernández & Asociados",
    description: "Developed an AI-powered workflow that extracts structured information from insurance payment receipts, allows staff to verify the results, and stores clean records for reporting and export.",
  },
  {
    category: "SPORT",
    title: "10+ years around soccer",
    description: "Firsthand experience with the sport informs my interest in building practical technology around the workflows of coaches, players, and teams.",
  },
]

export function Background() {
  return (
    <section className={`background-section ${sans.variable} ${mono.variable}`} aria-labelledby="background-heading">
      <div className="background-inner">
        <WorkReveal className="background-intro">
          <p className="background-label">BACKGROUND</p>
          <h2 id="background-heading">Engineering knowledge shaped by real-world problems.</h2>
          <p className="background-statement">My background sits at the intersection of software, business, and sport. As a computer science teaching assistant, I help students work through software engineering and object-oriented programming concepts. Outside the classroom, I have applied those skills to real business problems, including building an AI-powered insurance payment automation system.</p>
          <p className="background-statement">More than a decade around soccer continues to shape my interest in sports technology and the way I think about building tools for coaches, players, and teams.</p>
          <Link className="background-resume-link" href="/resume">
            <span>View my résumé</span><span className="background-arrow" aria-hidden="true">→</span>
          </Link>
        </WorkReveal>

        <div className="background-entries">
          {entries.map((entry, index) => (
            <WorkReveal key={entry.category} delay={index * 100} className="background-entry-reveal">
              <article className="background-entry">
                <p className="background-entry-category">{entry.category}</p>
                <h3>{entry.title}</h3>
                {entry.organization && <p className="background-entry-organization">{entry.organization}</p>}
                <p className="background-entry-description">{entry.description}</p>
              </article>
            </WorkReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
