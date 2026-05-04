const DISCIPLINES = [
  {
    name: "Mini-Sumo",
    desc: "Versión miniaturizada del sumo clásico con robots de menos de 500g y alta precisión.",
    icon: "◆",
    color: "wolf_green",
  },
  {
    name: "Seguidor de Línea",
    desc: "El robot detecta y sigue una línea de contraste a la mayor velocidad posible en pistas de competencia.",
    icon: "◈",
    color: "wolf_blue",
  },
  {
    name: "Velocista",
    desc: "Robots ultrarrápidos que recorren circuitos cerrados optimizando trayectorias y velocidad.",
    icon: "▷",
    color: "wolf_blue",
  },
  {
    name: "Sumo de Robots",
    desc: "Dos robots compiten para expulsarse mutuamente del ring usando sensores y estrategia de empuje.",
    icon: "⬡",
    color: "wolf_orange",
  },
  {
    name: "Robótica General",
    desc: "Categoría abierta para proyectos de robótica aplicada: manipuladores, autónomos y más.",
    icon: "◉",
    color: "wolf_orange",
  },
];

const ACCENT = {
  wolf_orange: {
    border: "hover:border-wolf_orange/60",
    text: "text-wolf_orange",
    bg: "bg-wolf_orange",
  },
  wolf_blue: {
    border: "hover:border-wolf_blue/60",
    text: "text-wolf_blue",
    bg: "bg-wolf_blue",
  },
  wolf_green: {
    border: "hover:border-wolf_green/60",
    text: "text-wolf_green",
    bg: "bg-wolf_green",
  },
};

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-wolf_dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="reveal font-mono text-wolf_blue text-xs tracking-[0.4em] mb-3">
          [ 03 · DISCIPLINAS ]
        </p>
        <h2
          className="reveal font-display font-bold text-4xl sm:text-5xl text-wolf_white mb-4"
          style={{ transitionDelay: "0.1s" }}
        >
          CATEGORÍAS DE
          <br />
          <span className="text-wolf_blue">COMPETENCIA</span>
        </h2>
        <p
          className="reveal font-body text-wolf_gray mb-16 max-w-xl"
          style={{ transitionDelay: "0.2s" }}
        >
          Participamos en múltiples disciplinas de robótica competitiva, cada
          una con sus propios desafíos técnicos y estratégicos.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map(({ name, desc, icon, color }, i) => {
            const a = ACCENT[color];
            return (
              <div
                key={name}
                className={`reveal bg-wolf_steel border border-wolf_steel_mid ${a.border} p-6 transition-all duration-300 group cursor-default`}
                style={{ transitionDelay: `${0.1 * i}s` }}
              >
                <div
                  className={`text-3xl ${a.text} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {icon}
                </div>
                <h3
                  className={`font-display font-bold text-sm tracking-wider ${a.text} mb-3`}
                >
                  {name.toUpperCase()}
                </h3>
                <p className="font-body text-wolf_gray text-sm leading-relaxed">
                  {desc}
                </p>
                <div
                  className={`mt-4 w-0 h-0.5 ${a.bg} group-hover:w-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
