import { Geist } from "next/font/google"
import { WorkReveal } from "./work-reveal"
import "./contact.css"

const sans = Geist({ subsets: ["latin"], variable: "--contact-sans" })

export function Contact() {
  return (
    <section className={`contact-section ${sans.variable}`} aria-labelledby="contact-heading">
      <div className="contact-inner">
        <WorkReveal delay={0}><p className="contact-label">CONTACT</p></WorkReveal>
        <WorkReveal delay={80}><h2 id="contact-heading">Have a problem worth building for?</h2></WorkReveal>
        <WorkReveal delay={160}>
          <p className="contact-description">I’m open to full-time software engineering opportunities, sports-tech roles, and selected client projects.</p>
        </WorkReveal>
        <WorkReveal delay={240}>
          <div className="contact-actions">
            <a className="contact-button contact-button-primary" href="mailto:m.rodriguez25@ncf.edu">Email me</a>
            <a className="contact-button contact-button-secondary" href="https://www.linkedin.com/in/manuel-rodriguez-a783b9235/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn ↗
            </a>
          </div>
        </WorkReveal>
      </div>
    </section>
  )
}
