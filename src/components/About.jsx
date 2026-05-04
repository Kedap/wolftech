export default function About() {
  const details = [
    { label: "Institución", value: "TESCHA" },
    { label: "Ubicación", value: "Chalco, Edo. Méx." },
    { label: "Carrera", value: "Ing. Sistemas Computacionales" },
    { label: "Fundación", value: "2025" },
  ];

  return (
    <section id="about" className="bg-wolf_dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="reveal font-mono text-wolf_blue text-xs tracking-[0.4em] mb-3">
          [ 01 · NOSOTROS ]
        </p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl text-wolf_white mb-16"
          style={{ transitionDelay: "0.1s" }}
        >
          ¿QUIÉNES
          <br />
          <span className="text-wolf_blue">SOMOS?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info cards */}
          <div className="reveal space-y-4" style={{ transitionDelay: "0.2s" }}>
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 border border-wolf_steel p-4 hover:border-wolf_blue/50 transition-colors duration-300"
              >
                <div className="w-1 h-12 bg-wolf_blue flex-shrink-0" />
                <div>
                  <p className="font-mono text-wolf_gray text-xs tracking-widest">
                    {label.toUpperCase()}
                  </p>
                  <p className="font-body font-semibold text-wolf_white">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative circuit lines */}
            <div className="pt-4 flex items-center gap-3 opacity-40">
              <div className="w-3 h-3 border border-wolf_blue rotate-45" />
              <div className="flex-1 h-px bg-wolf_blue/30" />
              <div className="w-2 h-2 bg-wolf_blue rotate-45" />
              <div className="w-8 h-px bg-wolf_blue/30" />
              <div className="w-1.5 h-1.5 bg-wolf_orange rotate-45" />
            </div>
          </div>

          {/* Right: text */}
          <div className="reveal space-y-6" style={{ transitionDelay: "0.3s" }}>
            <p className="font-body text-wolf_white/80 leading-relaxed text-lg">
              <span className="text-wolf_blue font-semibold">WolfTech</span> es
              el equipo de robótica competitivo del Tecnológico de Estudios
              Superiores de Chalco (
              <span className="text-wolf_white font-medium">TESCHA</span>),
              conformado por estudiantes apasionados de la carrera de
              <span className="text-wolf_white font-medium">
                {" "}
                Ingeniería en Sistemas Computacionales
              </span>
              .
            </p>
            <p className="font-body text-wolf_gray leading-relaxed">
              Nacimos con la convicción de que la tecnología transforma vidas.
              Diseñamos, programamos y construimos robots con un propósito:
              representar a nuestra institución en torneos regionales y
              nacionales, demostrando que desde Chalco se puede competir al más
              alto nivel.
            </p>
            <p className="font-body text-wolf_gray leading-relaxed">
              Más que un equipo, somos una comunidad de aprendizaje donde el
              hardware, el software y la estrategia se fusionan. Cada
              competencia es una oportunidad para crecer, cada robot una
              declaración de intenciones.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-8 h-px bg-wolf_orange" />
              <p className="font-mono text-wolf_orange text-xs tracking-widest">
                CHALCO · ESTADO DE MÉXICO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
