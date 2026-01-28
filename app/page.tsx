import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { ProjectCard } from "@/components/project-card"
import { TechBadge } from "@/components/tech-badge"
import { AnimatedSection } from "@/components/animated-section"
import { DrawingLine } from "@/components/drawing-line"
import { projects, skills } from "@/lib/data"
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Code2, Palette, Zap } from "lucide-react"

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      {/* Hero Section - Aave-style entrance animations (background from DynamicBackground) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Status badge - fade in first */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </div>

            {/* Main heading - staggered words + drawing line (SVGator-style) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              <span className="inline-block animate-fade-in-up delay-100 text-foreground">Building </span>
              <span className="inline-block animate-fade-in-up delay-200 text-primary">exceptional</span>
              <br />
              <span className="inline-block animate-fade-in-up delay-300 text-foreground">digital experiences.</span>
            </h1>
            <div className="mt-6 animate-fade-in-up delay-350 text-primary">
              <DrawingLine width="120px" strokeWidth={2} />
            </div>

            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up delay-400">
              {"Software engineer crafting accessible, pixel-perfect interfaces and robust systems. Focused on creating products that people love to use."}
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
                <a href="#resume-placeholder" download>
                  <Download className="h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Quick stats - scale in with stagger */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up delay-600">
              <div className="transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
              </div>
              <div className="transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - scroll-triggered reveal + line draw (SVGator) */}
      <SectionContainer className="relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What I do.
          </h2>
          <div className="mt-4 flex justify-center text-primary">
            <DrawingLine width="80px" strokeWidth={2} />
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting digital experiences from concept to deployment.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code2, title: "Development", description: "Building scalable applications with modern frameworks and best practices." },
            { icon: Palette, title: "Design", description: "Creating intuitive interfaces with attention to detail and user experience." },
            { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency across all devices and platforms." },
            { icon: Sparkles, title: "Innovation", description: "Exploring new technologies and implementing creative solutions." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={80 * (i + 1)}>
              <div 
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 hover:bg-card/80 hover-lift hover-lift-glow transition-all duration-500"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>

      {/* Featured Projects Section - scroll-triggered reveal + line draw */}
      <SectionContainer id="projects" className="relative">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Featured projects.
            </h2>
            <div className="mt-4 text-primary">
              <DrawingLine width="100px" strokeWidth={2} />
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

      {/* Skills Section - scroll-triggered reveal + line draw */}
      <SectionContainer className="relative bg-muted/20">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Skills & technologies.
          </h2>
          <div className="mt-4 flex justify-center text-primary">
            <DrawingLine width="80px" strokeWidth={2} />
          </div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, i) => (
            <AnimatedSection key={skillGroup.category} delay={100 * (i + 1)}>
              <div 
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/20 hover-lift transition-all duration-300"
              >
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <TechBadge key={skill}>{skill}</TechBadge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
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
              <div className="mt-4 flex justify-center text-primary">
                <DrawingLine width="120px" strokeWidth={2} />
              </div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {"I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out."}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="h-14 px-8 text-base rounded-xl gap-2 w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/40 hover-lift hover-lift-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] focus-ring-animate cta-gradient-animate border-0 focus-visible:ring-0">
                  <a href="mailto:placeholder@example.com">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <div className="flex items-center gap-3">
                  <a
                    href="#github-placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted hover-icon transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="#linkedin-placeholder"
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
