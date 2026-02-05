import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
import { AnimatedSection } from "@/components/animated-section"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
import { experience, education, skills, profile, relatedCourses, languages } from "@/lib/data"
import { Download, Briefcase, GraduationCap, FileText, Github, Linkedin, Globe, BookOpen, Languages } from "lucide-react"

export const metadata = {
  title: `Resume | ${profile.fullName}`,
  description: `Professional experience, education, and skills — ${profile.title} at New College of Florida.`,
}

export default function ResumePage() {
  return (
    <>
      {/* Manuel Rodriguez Header */}
      <section className="relative pt-12 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in-up">
            <div className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up delay-100">
                  <span className="text-3xl font-bold text-primary">MR</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground animate-fade-in-up delay-200">
                  {profile.fullName}
                </h1>
                <p className="mt-2 text-xl text-primary font-medium animate-fade-in-up delay-300">{profile.title}</p>
                <p className="mt-3 text-muted-foreground animate-fade-in-up delay-400">
                  {profile.address} • {profile.email} • {profile.phone}
                </p>
                <div className="mt-6 flex items-center justify-center gap-3 animate-fade-in-up delay-500">
                  {[
                    { icon: Github, label: "GitHub", href: profile.githubUrl },
                    { icon: Linkedin, label: "LinkedIn", href: profile.linkedinUrl },
                    { icon: Globe, label: "Portfolio", href: "/" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Experience Hero */}
      <section className="relative pb-12">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Resume</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance animate-fade-in-up delay-100">
                My experience.
              </h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up delay-200">
                A comprehensive overview of my professional journey, education, and skills.
              </p>
            </div>
            <Button asChild size="default" className="h-12 px-6 rounded-xl gap-2 shadow-lg shadow-primary/25 w-full sm:w-auto animate-fade-in-up delay-300">
              <a href="/resume.pdf" download="Manuel-Rodriguez-Resume.pdf">
                <Download className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <SectionContainer className="pt-0">
        <div className="rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden">
          {/* Experience */}
          <AnimatedSection>
            <div className="p-8 sm:p-12 border-b border-border/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <AnimatedSection key={index} delay={80 * (index + 1)}>
                    <div className="relative pl-8 border-l-2 border-primary/40">
                      <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-primary/20" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <span className="text-sm text-foreground/70 font-medium">{job.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{job.company}</p>
                      <p className="text-foreground/80 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection>
            <div className="p-8 sm:p-12 border-b border-border/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <AnimatedSection key={index} delay={80 * (index + 1)}>
                    <div className="relative pl-8 border-l-2 border-primary/40">
                      <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-primary/20" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-sm text-foreground/70 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{edu.school}</p>
                      <p className="text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection>
            <div className="p-8 sm:p-12 border-b border-border/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <h3 className="text-xl font-semibold text-foreground mb-8">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <AnimatedSection key={skillGroup.category} delay={80 * (index + 1)}>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <TechBadge key={skill}>{skill}</TechBadge>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Related Courses */}
          <AnimatedSection>
            <div className="p-8 sm:p-12 border-b border-border/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Related Courses</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedCourses.map((course, index) => (
                  <AnimatedSection key={course} delay={20 * (index + 1)}>
                    <TechBadge>{course}</TechBadge>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection>
            <div className="p-8 sm:p-12 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => (
                  <AnimatedSection key={lang.language} delay={80 * (index + 1)}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{lang.language}</span>
                      <span className="text-foreground/70">— {lang.proficiency}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>
    </>
  )
}
