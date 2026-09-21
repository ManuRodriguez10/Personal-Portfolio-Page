import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google"
import { Contact } from "@/components/contact"
import { WorkReveal } from "@/components/work-reveal"
import "./resume.css"

const sans = Geist({ subsets: ["latin"], variable: "--resume-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--resume-mono" })

export const metadata = {
  title: "Resume | Manuel Rodriguez",
  description: "Experience, selected projects, technical skills, and education for Manuel Rodriguez.",
}

const experiences = [
  {
    dates: "JAN 2025 - MAY 2026",
    title: "Teaching Assistant - Software Engineering and Object-Oriented Programming",
    organization: "Computer Science Department, New College of Florida",
    location: "Sarasota, Florida",
    bullets: [
      "Support students through individual tutoring and group workshops focused on Java, object-oriented programming, and software engineering.",
      "Review course materials with the professor to improve clarity, accuracy, and educational effectiveness.",
      "Grade assignments and provide detailed, actionable technical feedback that helps students strengthen their work.",
    ],
  },
  {
    dates: "2026",
    title: "Full-Stack Software Engineer - Client Project",
    organization: "Franco Fernández & Asociados",
    bullets: [
      "Developed an AI-powered workflow that processes uploaded insurance payment receipts and extracts structured payment information.",
      "Built a side-by-side verification experience so staff can review and correct extracted data before approval.",
      "Used React, Supabase, and the OpenAI API to store clean records and support reporting and export workflows.",
    ],
  },
  {
    dates: "AUG 2025 - JAN 2026",
    title: "Venture Planning Intern",
    organization: "Suncoast Venture Studio",
    location: "Sarasota, Florida",
    bullets: [
      "Conducted market research, competitive analysis, and financial feasibility assessments for early-stage startups.",
      "Collaborated with founders and mentors to refine business models and go-to-market strategies.",
      "Researched technology stacks, large language models, and AI integration opportunities for product development.",
    ],
  },
]

const selectedProjects = [
  {
    category: "CAPSTONE PROJECT",
    title: "MatchFit",
    description: "A soccer team management platform for coaches and players, with role-based dashboards, team and roster management, event scheduling, and an interactive matchday lineup builder.",
    stack: "REACT · VITE · SUPABASE · POSTGRESQL · TAILWIND CSS · RADIX UI",
    href: "/projects/matchfit",
  },
  {
    category: "MOBILE APPLICATION",
    title: "MatchFit Mobile",
    description: "A React Native version of the MatchFit platform that brings its connected soccer experience to smartphones using Supabase and Firebase-backed services.",
    stack: "REACT NATIVE · SUPABASE · FIREBASE",
    href: "/projects/matchfit-mobile",
  },
  {
    category: "ACADEMIC PROJECT",
    title: "Scent Society",
    description: "A full-stack e-commerce application built with React and Django for fragrance discovery, authenticated shopping, real-time cart management, and a multi-step checkout experience.",
    stack: "REACT · VITE · DJANGO · POSTGRESQL · JWT · TAILWIND CSS",
    href: "/projects/scent-society",
  },
]

const skillGroups = [
  { label: "LANGUAGES", skills: ["JavaScript", "Python", "Java", "SQL", "HTML", "CSS"] },
  { label: "FRONTEND", skills: ["React", "Vite", "Tailwind CSS", "Radix UI"] },
  { label: "BACKEND", skills: ["Django", "Django REST Framework", "Supabase", "REST APIs"] },
  { label: "DATABASES & AUTH", skills: ["PostgreSQL", "Supabase Auth", "JWT Authentication", "Row-Level Security"] },
  { label: "TOOLS & WORKFLOW", skills: ["Google Workspace", "Microsoft Office Suite"] },
]

const education = [
  { dates: "AUG 2023 - MAY 2026", degree: "Bachelor of Science in Computer Science", school: "New College of Florida", location: "Sarasota, Florida" },
  { dates: "AUG 2022 - MAY 2023", degree: "Associate of Business Management", school: "Bryant & Stratton College", location: "Albany, New York" },
]

export default function ResumePage() {
  return (
    <div className={`resume-page ${sans.variable} ${mono.variable}`}>
      <section className="resume-hero" aria-labelledby="resume-heading">
        <div className="resume-container">
          <WorkReveal>
            <p className="resume-label resume-label-navy">RESUME</p>
            <h1 id="resume-heading">Experience across software, education, and product development.</h1>
            <p className="resume-hero-copy">I’m Manuel Rodriguez, a full-stack software engineer with experience building web applications, developing AI-powered business tools, and supporting students in software engineering and object-oriented programming.</p>
            <div className="resume-hero-actions">
              <a className="resume-download-button" href="/resume.pdf" download="Manuel-Rodriguez-Resume.pdf">Download résumé</a>
              <Link className="resume-projects-link" href="/projects"><span>View projects</span><span aria-hidden="true">→</span></Link>
            </div>
          </WorkReveal>
        </div>
      </section>

      <section className="resume-section resume-experience" aria-labelledby="experience-heading">
        <div className="resume-container">
          <WorkReveal className="resume-section-intro">
            <p className="resume-label">EXPERIENCE</p>
            <h2 id="experience-heading">Building, teaching, and solving real problems.</h2>
          </WorkReveal>
          <div className="resume-rows">
            {experiences.map((experience, index) => (
              <WorkReveal key={experience.title} delay={index * 80}>
                <article className="resume-row">
                  <p className="resume-date">{experience.dates}</p>
                  <div className="resume-row-content">
                    <h3>{experience.title}</h3>
                    <p className="resume-organization">{experience.organization}{experience.location && <> · {experience.location}</>}</p>
                    <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              </WorkReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-project-section" aria-labelledby="selected-projects-heading">
        <div className="resume-container">
          <WorkReveal className="resume-section-intro">
            <p className="resume-label resume-label-navy">SELECTED PROJECTS</p>
            <h2 id="selected-projects-heading">Products developed from idea to implementation.</h2>
          </WorkReveal>
          <div className="resume-project-list">
            {selectedProjects.map((project, index) => (
              <WorkReveal key={project.title} delay={index * 80}>
                <article className="resume-project-row">
                  <p className="resume-project-category">{project.category}</p>
                  <div className="resume-project-details">
                    <h3>{project.title}</h3>
                    <p className="resume-project-description">{project.description}</p>
                    <p className="resume-project-stack">{project.stack}</p>
                    <Link className="resume-case-link" href={project.href}><span>View case study</span><span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              </WorkReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section resume-skills" aria-labelledby="skills-heading">
        <div className="resume-container">
          <WorkReveal className="resume-section-intro">
            <p className="resume-label">TECHNICAL SKILLS</p>
            <h2 id="skills-heading">Tools used to build complete products.</h2>
          </WorkReveal>
          <div className="resume-skills-grid">
            {skillGroups.map((group, index) => (
              <WorkReveal key={group.label} delay={(index % 4) * 70}>
                <article className="resume-skill-group">
                  <h3>{group.label}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              </WorkReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="resume-section resume-education" aria-labelledby="education-heading">
        <div className="resume-container">
          <WorkReveal className="resume-section-intro">
            <p className="resume-label">EDUCATION</p>
            <h2 id="education-heading">Computer science and business foundations.</h2>
          </WorkReveal>
          <div className="resume-rows resume-education-rows">
            {education.map((item, index) => (
              <WorkReveal key={item.degree} delay={index * 80}>
                <article className="resume-row resume-education-row">
                  <p className="resume-date">{item.dates}</p>
                  <div className="resume-row-content">
                    <h3>{item.degree}</h3>
                    <p className="resume-organization">{item.school} · {item.location}</p>
                  </div>
                </article>
              </WorkReveal>
            ))}
          </div>
          <WorkReveal className="resume-languages">
            <p className="resume-label">LANGUAGES</p>
            <div className="resume-language-list">
              <p><strong>Spanish</strong><span>Native</span></p>
              <p><strong>English</strong><span>Fluent</span></p>
            </div>
          </WorkReveal>
        </div>
      </section>

      <Contact />
    </div>
  )
}
