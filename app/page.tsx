import Link from "next/link"
import type { Metadata } from "next"
import { SectionContainer } from "@/components/section-container"
import { SkillsCarousel } from "@/components/skills-carousel"
import { AnimatedSection } from "@/components/animated-section"
import { DrawingLine } from "@/components/drawing-line"
import { skills } from "@/lib/data"
import { SelectedWork } from "@/components/selected-work"


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
            <a href="/resume.pdf" download="Manuel-Rodriguez-Resume.pdf" className="home-hero-button home-hero-button-secondary">
              Download résumé
            </a>
          </div>
        </div>
      </section>

      <SelectedWork />

      {/* Skills Section - ongoing carousel (Aave-style) - first after hero */}
      <SectionContainer className="relative bg-muted/20">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance [&_svg]:max-w-full [&_svg]:h-auto" aria-label="Skills and dth">
            <svg viewBox="0 0 520 64" className="w-full max-w-3xl mx-auto" preserveAspectRatio="xMidYMid meet">
              <defs>
<linearGradient id="skills-technologies-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--foreground)" />
                <stop offset="50%" stopColor="var(--primary)" className="gradient-fade-stop" />
                <stop offset="100%" stopColor="var(--foreground)" />
              </linearGradient>
              </defs>
              <text x="50%" y="42" textAnchor="middle" fill="url(#skills-technologies-gradient)" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontSize: "42px", fontWeight: 700, letterSpacing: "-0.025em" }}>
                Skills &amp; technologies.
              </text>
            </svg>
          </h2>
          <div className="mt-4 flex justify-center text-primary opacity-100">
            <DrawingLine width="80px" strokeWidth={4} />
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <SkillsCarousel skills={skills.flatMap((g) => g.items)} />
        </AnimatedSection>
      </SectionContainer>

    </>
  )
}
