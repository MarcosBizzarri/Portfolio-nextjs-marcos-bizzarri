import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-14 text-center">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-10 top-24 -z-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="overflow-hidden rounded-full border border-cyan-400/30 bg-white/5 p-1 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-105">
        <Image
          src="/img/marcos-bizzarri.png"
          alt="Marcos Bizzarri"
          width={190}
          height={190}
          className="rounded-full object-cover"
        />
      </div>

      <div className="mt-8">
        <p className="text-xl text-gray-300 md:text-2xl">Olá, eu sou o</p>

        <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          Marcos Bizzarri
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-xl">
          Desenvolvedor Frontend focado em interfaces modernas, performáticas e
          experiências visuais marcantes com React, Next.js e Tailwind.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/cv/developer-marcos.pdf"
            download
            className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-500/20"
          >
            Currículo
          </a>

          <a
            href="https://wa.me/5519994449107"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}