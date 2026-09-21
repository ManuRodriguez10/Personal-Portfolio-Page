import { notFound } from "next/navigation"
import { CaseStudyLayout } from "@/components/case-study-layout"
import { projects, profile } from "@/lib/data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)
  if (!project) return { title: "Project Not Found" }
  return { title: `${project.title} | ${profile.fullName}`, description: project.description }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)
  if (!project) notFound()
  return <CaseStudyLayout project={project} />
}
