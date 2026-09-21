import Link from "next/link"
import type { Metadata } from "next"
import { SelectedWork } from "@/components/selected-work"
import { Capabilities } from "@/components/capabilities"
import { Background } from "@/components/background"


export const metadata: Metadata = {
  title: "Home | Manuel Rodriguez",
}

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="home-hero-inner">
          <p className="home-hero-label">FULL-STACK SOFTWARE ENGINEER</p>
          <h1 id="hero-heading" className="home-hero-heading">
            Turning my passion into software solutions.
          </h1>
          <p className="home-hero-description">
            I’m Manuel Rodriguez, a full-stack software engineer creating web applications,
            sports technology, and AI-powered business tools.
          </p>
          <div className="home-hero-actions">
            <Link href="/projects" className="home-hero-button home-hero-button-primary">
              View my work
            </Link>
            <Link href="/resume" className="home-hero-button home-hero-button-secondary">
              Download resume
            </Link>
          </div>
        </div>
      </section>

      <SelectedWork />
      <Capabilities />
      <Background />
    </>
  )
}
