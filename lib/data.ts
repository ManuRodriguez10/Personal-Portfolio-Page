import type { Project } from "@/components/project-card"

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI Chat Application",
    description: "An intelligent chatbot powered by OpenAI's GPT-4, featuring conversation history, custom personas, and real-time streaming responses.",
    tech: ["React", "Node.js", "OpenAI", "WebSockets"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
    featured: true,
  },
  {
    id: "project-3",
    title: "Task Management System",
    description: "A collaborative project management tool with Kanban boards, team workspaces, and real-time updates for distributed teams.",
    tech: ["Vue.js", "Firebase", "Tailwind", "PWA"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
    featured: true,
  },
  {
    id: "project-4",
    title: "Real-Time Analytics Dashboard",
    description: "A comprehensive analytics platform with interactive charts, custom report generation, and automated data pipeline processing.",
    tech: ["React", "D3.js", "PostgreSQL", "Redis"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
  },
  {
    id: "project-5",
    title: "Social Media API",
    description: "A RESTful API service handling user authentication, content management, and social interactions at scale.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
  },
  {
    id: "project-6",
    title: "Mobile Fitness App",
    description: "A cross-platform fitness tracking application with workout plans, progress visualization, and community challenges.",
    tech: ["React Native", "GraphQL", "AWS", "Expo"],
    githubUrl: "#github-placeholder",
    liveUrl: "#live-placeholder",
  },
]

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
]

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "[Company Name]",
    period: "2022 — Present",
    description: "Lead development of customer-facing applications, mentoring junior developers, and architecting scalable solutions.",
  },
  {
    title: "Software Engineer",
    company: "[Previous Company]",
    period: "2020 — 2022",
    description: "Built and maintained multiple web applications, implemented CI/CD pipelines, and improved system performance by 40%.",
  },
  {
    title: "Junior Developer",
    company: "[First Company]",
    period: "2018 — 2020",
    description: "Developed features for the core product, collaborated with cross-functional teams, and learned best practices in agile development.",
  },
]

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "[University Name]",
    period: "2014 — 2018",
    description: "Focused on software engineering, algorithms, and distributed systems. Graduated with honors.",
  },
]
