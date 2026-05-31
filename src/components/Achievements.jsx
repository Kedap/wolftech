const ITEMS = [
  {
    year: "May 2025",
    title: "3er lugar robotfut",
    desc: "Primer podio de ISC en torneo de robótica competitiva.",
    color: "wolf_blue",
  },
  {
    year: "May 2025",
    title: "Fundación de WolfTec",
    desc: "Creación oficial del equipo con los primeros integrantes de la carrera de ISC.",
    color: "wolf_orange",
  },
  {
    year: "Dic 2024",
    title: "Primer Torneo Participado Xmas Challenge",
    desc: "Debut en competencia universitaria local con las categorías sumo",
    color: "wolf_green",
  },
  {
    year: "Nov 2024",
    title: "Prototipo #001",
    desc: "Construcción del primer robot del equipo, marcando el inicio del proyecto WolfTec",
    color: "wolf_blue",
  },
];

const C = {
  wolf_blue: "#00D4FF",
  wolf_orange: "#FF6B35",
  wolf_green: "#00FF9F",
};

export default function Achievements() {
  return (
    <section className="bg-wolf_dark py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="reveal font-mono text-wolf_blue text-xs tracking-[0.4em] mb-3">
          [ 05 · LOGROS ]
        </p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl text-wolf_white mb-16"
          style={{ transitionDelay: "0.1s" }}
        >
          NUESTROS
          <br />
          <span className="text-wolf_blue">LOGROS</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-wolf_steel" />

          <div className="space-y-10">
            {ITEMS.map(({ year, title, desc, color }, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-6"
                style={{ transitionDelay: `${0.15 * i}s` }}
              >
                {/* Year */}
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-mono text-wolf_gray text-xs">
                    {year}
                  </span>
                </div>

                {/* Dot */}
                <div className="flex-shrink-0 relative z-10 mt-1">
                  <div
                    className="w-3 h-3 rotate-45"
                    style={{ backgroundColor: C[color] }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 bg-wolf_steel border border-wolf_steel_mid hover:border-wolf_blue/30 p-5 transition-colors duration-300 -mt-1">
                  <p
                    className="font-mono text-xs tracking-widest mb-2"
                    style={{ color: C[color] }}
                  >
                    {title.toUpperCase()}
                  </p>
                  <p className="font-body text-wolf_gray text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
