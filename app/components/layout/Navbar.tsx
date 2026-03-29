"use client";

import { useState } from "react";

const navItems = [
  { name: "Sobre", href: "#sobre" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/40 bg-black/70 shadow-[0_8px_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 xl:px-8 2xl:max-w-[1440px]">
        <h1 className="cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent transition duration-300 hover:scale-105 md:text-4xl">
          Portfólio
        </h1>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.18)] xl:px-6 xl:py-3 xl:text-base 2xl:px-7 2xl:text-lg"
            >
              {item.name}
              <span className="absolute inset-x-4 -bottom-[6px] h-[2px] scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-400/20 bg-black/90 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}