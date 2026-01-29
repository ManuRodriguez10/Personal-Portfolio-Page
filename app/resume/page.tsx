import Link from "next/link"
import { SectionContainer } from "@/components/section-container"
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
      {/* Hero */}
      <section className="relative pt-12 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-1/3 h-1/2 bg-primary/15 rounded-full blur-[100px] opacity-50" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Resume</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                My experience.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A comprehensive overview of my professional journey, education, and the skills I bring to every project.
              </p>
            </div>
            <Button asChild size="lg" className="h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/25 w-full sm:w-auto">
              <Link href="/resume">
                <Download className="h-5 w-5" />
                View Resume
              </Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "May 2026", label: "Expected Graduation" },
              { value: "4", label: "Projects Completed" },
              { value: "20+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <SectionContainer className="pt-0">
        <div className="rounded-3xl border border-border/30 bg-card/50 backdrop-blur-sm overflow-hidden">
          {/* Header */}
          <div className="p-8 sm:p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b border-border/30">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                <span className="text-3xl font-bold text-primary">MR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {profile.fullName}
              </h2>
              <p className="mt-2 text-xl text-primary font-medium">{profile.title}</p>
              <p className="mt-3 text-muted-foreground">
                {profile.address} • {profile.email} • {profile.phone}
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
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

          {/* Summary */}
          <div className="p-8 sm:p-12 border-b border-border/30">
            <h3 className="text-xl font-semibold text-foreground mb-4">Summary</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {profile.longBio}
            </p>
          </div>

          {/* Experience */}
          <div className="p-8 sm:p-12 border-b border-border/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border/50">
                  <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                    <span className="text-sm text-muted-foreground font-medium">{job.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{job.company}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-8 sm:p-12 border-b border-border/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border/50">
                  <div className="absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{edu.school}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="p-8 sm:p-12 border-b border-border/30">
            <h3 className="text-xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <TechBadge key={skill}>{skill}</TechBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Courses */}
          <div className="p-8 sm:p-12 border-b border-border/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Related Courses</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {relatedCourses.map((course) => (
                <TechBadge key={course}>{course}</TechBadge>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.language} className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{lang.language}</span>
                  <span className="text-muted-foreground">— {lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
