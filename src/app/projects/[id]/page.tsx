import { PROJECTS, getProjectById } from "@/utils/projects";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}

// Generate static params for performance
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}
