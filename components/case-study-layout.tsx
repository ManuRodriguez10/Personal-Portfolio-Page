import { Geist, Geist_Mono } from "next/font/google"
import type { Project } from "./project-card"
import { ProjectImageCarousel } from "./project-image-carousel"
import { WorkReveal } from "./work-reveal"
import { ScrollCue } from "./scroll-cue"
import "./case-study.css"

const sans = Geist({ subsets: ["latin"], variable: "--case-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--case-mono" })

type Feature = { title: string; description: string }
type CaseDetails = { category: string; overview: string; featureHeading: string; features: Feature[] }

const details: Record<string, CaseDetails> = {
  "insurance-payment": {
    category: "CLIENT WORK",
    overview: "A modular web application built for Franco Fernández & Asociados to reduce manual insurance-receipt processing. I developed the workflow that extracts structured payment data with the OpenAI API, gives staff a side-by-side verification step, and stores approved records in a centralized database.",
    featureHeading: "A clearer receipt-processing workflow.",
    features: [
      { title: "AI receipt extraction", description: "Staff can upload PDF receipts and extract receipt numbers, client details, policy numbers, dates, and payment amounts." },
      { title: "Human verification", description: "A side-by-side interface lets staff review and correct extracted information before it enters the database." },
      { title: "Reporting and feedback", description: "Users can filter records, export to Excel, and store instructions that help improve later AI results." },
    ],
  },
  "matchfit-mobile": {
    category: "MOBILE APPLICATION",
    overview: "A React Native version of MatchFit created to bring the platform’s soccer experience to smartphones. I built the mobile application and connected Supabase and Firebase services for authentication, real-time data, and backend functionality.",
    featureHeading: "The MatchFit experience on mobile.",
    features: [
      { title: "Mobile-first access", description: "Players and coaches can use the MatchFit experience through a smartphone interface built with React Native." },
      { title: "Authentication", description: "Integrated services support account access and connect users to the platform on mobile." },
      { title: "Connected data", description: "Supabase and Firebase provide the real-time data and backend services used by the application." },
    ],
  },
  matchfit: {
    category: "CAPSTONE PROJECT",
    overview: "A full-stack soccer team management application developed as my senior thesis. I designed and built the role-based product for coaches and players, covering onboarding, team operations, dashboards, and matchday lineup creation.",
    featureHeading: "Team management built around soccer.",
    features: [
      { title: "Team onboarding", description: "Coaches can create teams while players join with invite codes and complete profiles with positions and jersey numbers." },
      { title: "Role-specific dashboards", description: "Coaches and players see relevant team statistics, events, published lineups, and roster information." },
      { title: "Interactive lineup builder", description: "Coaches can choose formations and position players with drag-and-drop controls on a visual soccer field." },
      { title: "Secure data access", description: "Supabase Row-Level Security protects team data according to each user’s role." },
    ],
  },
  "vibing-sarasota": {
    category: "ACADEMIC PROJECT",
    overview: "A web programming final project for discovering Sarasota businesses and attractions. I built the React interface, category browsing, search, detail views, map links, and the Supabase-backed suggestion workflow.",
    featureHeading: "Local discovery made easier.",
    features: [
      { title: "Category discovery", description: "Visitors can browse beaches, dining, hotels, golf, shopping, and exercise destinations." },
      { title: "Search and details", description: "Search, descriptions, images, and Google Maps links help users evaluate each location." },
      { title: "Community suggestions", description: "A validated form stores user-submitted places in the Supabase database." },
    ],
  },
  "scent-society": {
    category: "ACADEMIC PROJECT",
    overview: "A software engineering final project for browsing and purchasing premium colognes. I built the React storefront and Django API, including discovery filters, persistent shopping carts, protected routes, authentication, and checkout.",
    featureHeading: "A complete fragrance shopping flow.",
    features: [
      { title: "Fragrance discovery", description: "Customers can browse men’s and women’s collections and filter products by scent type." },
      { title: "Cart and checkout", description: "Persistent carts, product carousels, promo-code validation, and a multi-step checkout support purchasing." },
      { title: "Protected accounts", description: "JWT authentication, email verification, and protected routes secure account and cart features." },
    ],
  },
  "banyan-board": {
    category: "ACADEMIC PROJECT",
    overview: "A software engineering project created to help students organize academic responsibilities. I developed a JavaFX experience for campus updates, tasks, alerts, and calendar planning.",
    featureHeading: "Academic information in one place.",
    features: [
      { title: "Task tracking", description: "Students can create and manage a comprehensive list of academic tasks." },
      { title: "Campus updates", description: "The interface surfaces events, deadlines, and urgent information through clear notifications." },
      { title: "Calendar planning", description: "Calendar tools give students a visual way to organize upcoming responsibilities." },
    ],
  },
  "nsae-web-app": {
    category: "ACADEMIC PROJECT",
    overview: "A software engineering project for a nonprofit animal shelter focused on volunteer engagement and event management. I built React interfaces and Django functionality for registration, event access, volunteer-hour tracking, and administrative reporting.",
    featureHeading: "Volunteer operations in one application.",
    features: [
      { title: "Volunteer accounts", description: "Authentication and registration give volunteers secure access to the application." },
      { title: "Events and hours", description: "Volunteers can review upcoming events and record their service hours." },
      { title: "Administrative reporting", description: "Activity tracking supports reports and dashboards for shelter administrators." },
    ],
  },
}

const groupOrder = ["Mobile development", "Frontend", "Backend", "Database & services", "Authentication", "APIs & integrations"]
const technologyGroups: Record<string, string[]> = {
  "Mobile development": ["React Native"],
  Frontend: ["React", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "HTML", "JavaFX"],
  Backend: ["Django", "Java"],
  "Database & services": ["Supabase", "PostgreSQL", "Firebase"],
  Authentication: ["JWT"],
  "APIs & integrations": ["OpenAI API"],
}
const groupExplanations: Record<string, string> = {
  "Mobile development": "Provides the native mobile application structure and smartphone user experience.",
  Frontend: "Builds the interface, navigation, interaction patterns, and client-side product experience.",
  Backend: "Handles application logic and server-side functionality.",
  "Database & services": "Stores application data and supports connected backend services.",
  Authentication: "Protects user accounts and authenticated application routes.",
  "APIs & integrations": "Connects the product to specialized external capabilities.",
}

export function CaseStudyLayout({ project }: { project: Project }) {
  const content = details[project.id]
  const heroDescription = project.description.match(/^[^.!?]+[.!?]/)?.[0] ?? project.description
  const groups = groupOrder.map((label) => ({ label, technologies: technologyGroups[label].filter((tech) => project.tech.includes(tech)) })).filter((group) => group.technologies.length)
  return (
    <div className={`case-study ${sans.variable} ${mono.variable}`}>
      <section className="case-hero">
        <div className="case-container">
          <WorkReveal>
            <p className="case-category">{content.category}</p>
            <h1>{project.title}</h1>
            <p className="case-hero-description">{heroDescription}</p>
            <dl className="case-meta">
              <div><dt>ROLE</dt><dd>{project.role}</dd></div>
              <div><dt>YEAR</dt><dd>{project.year}</dd></div>
              <div><dt>TECHNOLOGY</dt><dd>{project.tech.join(" · ")}</dd></div>
            </dl>
            <div className="case-actions">
              <div className="case-links">
                {project.deploymentUrl && <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer">Live Project ↗</a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Project Demo ↗</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
              </div>
              <ScrollCue />
            </div>
          </WorkReveal>
        </div>
      </section>
      <section id="project-overview" className="case-section case-overview">
        <div className="case-container case-editorial">
          <WorkReveal className="case-section-heading"><p className="case-label">OVERVIEW</p><h2>Understanding the project.</h2></WorkReveal>
          <WorkReveal><p className="case-overview-copy">{content.overview}</p></WorkReveal>
        </div>
      </section>
      <section className="case-section case-features">
        <div className="case-container">
          <WorkReveal className="case-section-heading"><p className="case-label">KEY FEATURES</p><h2>{content.featureHeading}</h2></WorkReveal>
          <div className="case-feature-grid">
            {content.features.map((feature, index) => <WorkReveal key={feature.title} delay={(index % 2) * 80}><article><p className="case-feature-number">{String(index + 1).padStart(2, "0")}</p><h3>{feature.title}</h3><p>{feature.description}</p></article></WorkReveal>)}
          </div>
        </div>
      </section>
      <section className="case-gallery">
        <div className="case-container">
          <WorkReveal className="case-gallery-heading"><p className="case-gallery-label">PRODUCT GALLERY</p><h2>A closer look at the experience.</h2></WorkReveal>
          <WorkReveal><div className="case-gallery-frame"><ProjectImageCarousel images={project.images ?? []} projectTitle={project.title} projectId={project.id} /></div></WorkReveal>
        </div>
      </section>
      <section className="case-section case-technical">
        <div className="case-container">
          <WorkReveal className="case-section-heading"><p className="case-label">TECHNICAL IMPLEMENTATION</p><h2>How the project was built.</h2></WorkReveal>
          <div className="case-tech-grid">
            {groups.map((group, index) => <WorkReveal key={group.label} delay={(index % 3) * 70}><article><p className="case-tech-label">{group.label}</p><h3>{group.technologies.join(" · ")}</h3><p>{groupExplanations[group.label]}</p></article></WorkReveal>)}
          </div>
        </div>
      </section>
    </div>
  )
}
