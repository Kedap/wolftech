export default function MissionVision () {
  return (
    <section className="bg-wolf_black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="reveal font-mono text-wolf_blue text-xs tracking-[0.4em] mb-3">[ 02 · PROPÓSITO ]</p>
        <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-wolf_white mb-16" style={{ transitionDelay: '0.1s' }}>
          MISIÓN &<br /><span className="text-wolf_blue">VISIÓN</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Misión */}
          <div className="reveal corner-bracket bg-wolf_dark border border-wolf_steel p-8 hover:border-wolf_blue/40 transition-colors duration-300 group" style={{ transitionDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-wolf_orange/60 text-wolf_orange text-lg font-display font-bold">M</div>
              <h3 className="font-display font-bold text-xl text-wolf_white tracking-wider">MISIÓN</h3>
            </div>
            <p className="font-body text-wolf_gray leading-relaxed">
              Representar al TESCHA en torneos de robótica competitiva nacionales e internacionales,
              desarrollando soluciones tecnológicas innovadoras que integren hardware y software,
              mientras formamos ingenieros capaces de resolver problemas reales con creatividad y rigor técnico.
            </p>
            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-px bg-wolf_orange" />
              <span className="font-mono text-wolf_orange text-xs tracking-widest">ACCIÓN</span>
            </div>
          </div>

          {/* Visión */}
          <div className="reveal corner-bracket bg-wolf_dark border border-wolf_steel p-8 hover:border-wolf_blue/40 transition-colors duration-300 group" style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-wolf_blue/60 text-wolf_blue text-lg font-display font-bold">V</div>
              <h3 className="font-display font-bold text-xl text-wolf_white tracking-wider">VISIÓN</h3>
            </div>
            <p className="font-body text-wolf_gray leading-relaxed">
              Convertirnos en el equipo de robótica de referencia del Estado de México, reconocidos por
              la excelencia técnica, el trabajo en equipo y la innovación constante. Inspirar a futuras
              generaciones del TESCHA y demostrar que Chalco es una fuente de talento tecnológico de primer nivel.
            </p>
            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-px bg-wolf_blue" />
              <span className="font-mono text-wolf_blue text-xs tracking-widest">FUTURO</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
