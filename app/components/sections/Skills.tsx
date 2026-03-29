import Image from "next/image";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-5xl px-4 py-14 text-center">
      <h2 className="mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Habilidades
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex h-36 w-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-cyan-500/20"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="mb-3 transition duration-300 group-hover:scale-110"
            />
            <p className="text-sm font-medium text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}