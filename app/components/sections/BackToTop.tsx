"use client";

export default function BackToTop() {
  const voltarTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-10 text-center">
      <button
        type="button"
        onClick={voltarTopo}
        className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500/20 cursor-pointer"
        aria-label="Subir ao topo"
      >
        ↑
      </button>
    </div>
  );
}