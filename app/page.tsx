import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { ProjectCard } from "@/components/project-card"
import { SkillsCarousel } from "@/components/skills-carousel"
import { AnimatedSection } from "@/components/animated-section"
import { DrawingLine } from "@/components/drawing-line"
import { LottieAnimation } from "@/components/lottie-animation"
import { projects, skills, profile } from "@/lib/data"
import { ArrowRight, Download, Mail, Github, Linkedin, GraduationCap } from "lucide-react"

// Import animation data
import animationData from "@/public/animations/isometric-data-analysis.json"
import webDevelopmentData from "@/public/animations/web-development.json"

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      {/* Hero Section - Aave-style entrance animations (background from DynamicBackground) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl">
            {/* Status badge - fade in first */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </div>

            {/* Main heading - gradient text via SVG, Aave-style fade + slide up on load */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance [&_svg]:max-w-full [&_svg]:h-auto animate-hero-headline" aria-label="Manuel Rodriguez">
              <svg viewBox="0 0 700 80" className="w-full max-w-4xl" preserveAspectRatio="xMinYMid meet">
                <defs>
                  <linearGradient id="hero-title-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--foreground)" />
                    <stop offset="50%" stopColor="var(--primary)" className="gradient-fade-stop" />
                    <stop offset="100%" stopColor="var(--foreground)" />
                  </linearGradient>
                </defs>
                <text x="0" y="52" fill="url(#hero-title-gradient)" className="font-bold" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontSize: "52px", letterSpacing: "-0.025em" }}>
                  Manuel Rodriguez
                </text>
              </svg>
            </h1>
            <div className="mt-6 animate-fade-in-up delay-350 text-primary opacity-100">
              <DrawingLine width="120px" strokeWidth={4} />
            </div>

            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up delay-400">
              {profile.longBio}
            </p>

            {/* CTA buttons - hover lift, glow, animated gradient (SVGator liquid/gradient) */}
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-500">
              <Button asChild size="lg" className="h-14 px-8 text-base rounded-xl gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover-lift hover-lift-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] group focus-ring-animate cta-gradient-animate border-0 focus-visible:ring-0">
                <Link href="/projects" className="inline-flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base rounded-xl gap-2 bg-transparent border-border/50 hover:bg-muted/50 hover:border-border hover-lift transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]">
                <Link href="/resume">
                  <Download className="h-5 w-5" />
                  Resume
                </Link>
              </Button>
            </div>

            </div>

            {/* Web Development Lottie - right side on desktop */}
            <div className="hidden lg:flex items-center justify-center animate-fade-in-up delay-600">
              <LottieAnimation
                animationData={webDevelopmentData}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key highlights: simple 3-column grid, each card has text + icon in flex layout */}
      <SectionContainer>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-10 lg:mb-12 [&_svg]:h-auto" aria-label="Key highlights">
            <svg viewBox="0 0 450 80" className="w-full max-w-[320px] mx-auto" preserveAspectRatio="xMinYMid meet">
              <defs>
<linearGradient id="key-highlights-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--foreground)" />
                <stop offset="50%" stopColor="var(--primary)" className="gradient-fade-stop" />
                <stop offset="100%" stopColor="var(--foreground)" />
              </linearGradient>
              </defs>
              <text x="50%" y="52" textAnchor="middle" fill="url(#key-highlights-gradient)" className="font-bold" style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontSize: "52px", letterSpacing: "-0.025em" }}>
                Key highlights
              </text>
            </svg>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 md:auto-rows-fr">
            {/* Expected graduation - top left */}
            <AnimatedSection variant="statCard" delay={0} className="md:row-span-1">
              <div className="flex items-stretch justify-between gap-4 min-h-[280px] rounded-xl border border-border/80 bg-muted/40 p-8 lg:p-10 stat-card-hover">
                <div className="flex flex-col justify-center">
                  <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">May 2026</p>
                  <p className="mt-1 text-base lg:text-lg text-foreground/80">Expected graduation.</p>
                </div>
                <div className="shrink-0 w-28 h-28 lg:w-32 lg:h-50 opacity-70 flex items-center justify-center text-primary/70 animate-decorative-breathe" aria-hidden>
                  <GraduationCap className="w-full h-full" />
                </div>
              </div>
            </AnimatedSection>
            {/* Projects built - right, spans both rows */}
            <AnimatedSection variant="statCard" delay={100} className="md:row-span-2 md:min-h-0">
              <div className="flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-full rounded-xl border border-border/80 bg-muted/40 p-8 lg:p-10 stat-card-hover gap-4">
                <p className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">{projects.length}</p>
                <p className="text-lg lg:text-xl text-foreground/80">Projects built.</p>
                <div className="w-64 h-64 lg:w-80 lg:h-80 opacity-70 flex items-center justify-center mt-1" aria-hidden>
                  <LottieAnimation animationData={animationData} className="w-full h-full" />
                </div>
              </div>
            </AnimatedSection>
            {/* Related coursework - bottom left */}
            <AnimatedSection variant="statCard" delay={200} className="md:row-span-1">
              <div className="flex items-stretch justify-between gap-4 min-h-[280px] rounded-xl border border-border/80 bg-muted/40 p-8 lg:p-10 stat-card-hover">
                <div className="flex flex-col justify-center">
                  <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">10+</p>
                  <p className="mt-1 text-base lg:text-lg text-foreground/80">Related coursework.</p>
                </div>
                <div className="shrink-0 w-28 h-28 lg:w-32 lg:h-50 opacity-70 flex items-center justify-center text-primary/70 animate-decorative-breathe" aria-hidden>
                  <svg viewBox="0 0 80 80" fill="currentColor" className="w-full h-full">
                    <rect x="16" y="48" width="12" height="24" rx="3" opacity="0.6" />
                    <rect x="34" y="36" width="12" height="36" rx="3" opacity="0.8" />
                    <rect x="52" y="24" width="12" height="48" rx="3" opacity="1" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionContainer>

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

      {/* Featured Projects Section - scroll-triggered reveal + line draw */}
      <SectionContainer id="projects" className="relative">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Featured projects.
            </h2>
            <div className="mt-4 text-primary opacity-100">
              <DrawingLine width="100px" strokeWidth={4} />
            </div>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              A selection of recent work that showcases my skills and approach to problem-solving.
            </p>
          </div>
          <Link
            href="/projects"
            className="group hidden sm:inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl border border-border/50 hover:border-border hover:bg-muted/30 hover-lift hover-underline transition-all duration-300"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </AnimatedSection>

        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.id} delay={120 * (i + 1)}>
              <ProjectCard project={project} variant="featured" />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button variant="outline" asChild className="w-full h-14 text-base rounded-xl gap-2 bg-transparent">
            <Link href="/projects">
              View all projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Contact CTA Section - scroll-triggered reveal + line draw */}
      <SectionContainer className="relative">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 p-12 sm:p-16 lg:p-20 hover-lift transition-all duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-full blur-[100px] opacity-50" />
            
            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                {"Let's build something great together."}
              </h2>
              <div className="mt-4 flex justify-center text-primary opacity-100">
                <DrawingLine width="120px" strokeWidth={4} />
              </div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out."}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="h-14 px-8 text-base rounded-xl gap-2 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 hover-lift hover-lift-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] focus-ring-animate cta-gradient-animate border-0 focus-visible:ring-0">
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted hover-icon transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted hover-icon transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </>
  )
}
