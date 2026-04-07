export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-4xl px-4 py-14 text-center">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-md">
        <h2 className="mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Sobre mim
        </h2>

        <p className="text-base leading-8 text-gray-300 md:text-lg">
          Desenvolvedor Full Stack focado em aplicações modernas, performáticas e escaláveis, com experiência em React, Next.js, Node.js, Firebase e integração com APIs e IA.
        </p>
      </div>
    </section>
  );
}
