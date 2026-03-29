"use client";

import { useState } from "react";
import { projects, type Project } from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard";
import ProjectModal from "../../components/ui/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="mb-10 text-center">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Projetos
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}