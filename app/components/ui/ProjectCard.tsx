import Image from "next/image";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 text-left shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="h-65 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
          {project.techIcons.map((icon) => (
            <div
              key={icon}
              className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md"
            >
              <Image
                src={icon}
                alt="Tecnologia do projeto"
                width={34}
                height={34}
              />
            </div>
          ))}
        </div>
      </div>

      <h3 className="mt-4 text-center text-xl font-bold text-white transition group-hover:text-cyan-400">
        {project.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-center text-sm text-gray-400">
        {project.description}
      </p>
    </button>
  );
}