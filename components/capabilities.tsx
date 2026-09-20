import { Geist, Geist_Mono } from "next/font/google"
import { WorkReveal } from "./work-reveal"
import "./capabilities.css"

const sans = Geist({ subsets: ["latin"], variable: "--capabilities-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--capabilities-mono" })

const capabilities = [
  {
    title: "Full-stack applications",
    description: "Responsive products that connect polished frontend interfaces with backend services, authentication, databases, and reliable deployment.",
  },
  {
    title: "AI automation",
    description: "Practical AI integrations that reduce repetitive work, organize information, and improve existing business processes.",
  },
  {
    title: "Sports technology",
    description: "Software designed around the real workflows of coaches, players, teams, and sports organizations.",
  },
]

export function Capabilities() {
  return (
    <section className={`capabilities ${sans.variable} ${mono.variable}`} aria-labelledby="capabilities-heading">
      <div className="capabilities-inner">
        <WorkReveal className="capabilities-intro">
          <p className="capabilities-label">CAPABILITIES</p>
          <h2 id="capabilities-heading">Software built around real workflows.</h2>
          <p className="capabilities-summary">I design and build complete digital products with a focus on clarity, reliability, and practical impact.</p>
        </WorkReveal>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <WorkReveal key={capability.title} delay={index * 100} className="capability-reveal">
              <article className="capability-item">
                <p className="capability-number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{capability.title}</h3>
                <p className="capability-description">{capability.description}</p>
              </article>
            </WorkReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
