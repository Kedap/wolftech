import WolfLogo from "./WolfLogo";

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="hero-grid relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Scan beam */}
      <div className="scan-beam" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#06080C_80%)] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-wolf_blue/40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-wolf_blue/40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-wolf_blue/40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-wolf_blue/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Wolf logo solo */}
        <div className="animate-float mb-8">
          <WolfLogo
            variant="icon"
            size={140}
            className="drop-shadow-[0_0_30px_#00D4FF66]"
          />
        </div>

        {/* Label */}
        <p
          className="font-mono text-wolf_blue text-xs tracking-[0.4em] mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          [ EQUIPO DE ROBÓTICA COMPETITIVO ]
        </p>

        {/* Main title */}
        <h1
          className="glitch font-display font-black text-7xl sm:text-8xl md:text-9xl text-wolf_white glow-blue-text mb-4 animate-fade-in"
          data-text="WOLFTECH"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          WOLFTECH
        </h1>

        {/* Divider */}
        <div
          className="flex items-center gap-4 mb-6 animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-wolf_blue" />
          <div className="w-2 h-2 bg-wolf_orange rotate-45" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-wolf_blue" />
        </div>

        {/* School info */}
        <p
          className="font-mono text-wolf_gray text-xs sm:text-sm tracking-widest mb-8 animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          TESCHA · ISC
        </p>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#about")}
          className="animate-fade-in font-body font-semibold text-sm tracking-widest px-8 py-3 border border-wolf_blue text-wolf_blue hover:bg-wolf_blue hover:text-wolf_black transition-all duration-300 glow-blue"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          CONÓCENOS
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.4s", opacity: 0 }}
      >
        <span className="font-mono text-wolf_gray/50 text-xs tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-wolf_blue/60 to-transparent" />
      </div>
    </section>
  );
}
