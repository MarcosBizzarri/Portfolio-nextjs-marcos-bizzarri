"use client";

import type { Project } from "../../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-[0_0_60px_rgba(59,130,246,0.2)]">
        <video controls className="w-full rounded-2xl border border-white/10">
          <source src={project.video} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>

          <p className="mt-4 text-sm leading-7 text-gray-300">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
            >
              Ver Projeto
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver Repositório
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-red-400/20 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500/20 cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}