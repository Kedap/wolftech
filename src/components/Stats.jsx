const STATS = [
  { value: '12+', label: 'Miembros Activos',        color: 'text-wolf_blue' },
  { value: '8',   label: 'Torneos Participados',     color: 'text-wolf_orange' },
  { value: '15+', label: 'Proyectos Desarrollados',  color: 'text-wolf_blue' },
  { value: '5',   label: 'Categorías Competitivas',  color: 'text-wolf_green' },
]

export default function Stats () {
  return (
    <section className="bg-wolf_steel py-16 px-6 border-y border-wolf_blue/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ value, label, color }) => (
          <div key={label} className="reveal text-center group">
            <p className={`font-display font-black text-5xl sm:text-6xl ${color} glow-blue-text mb-2 group-hover:scale-110 transition-transform duration-300`}>
              {value}
            </p>
            <p className="font-mono text-wolf_gray text-xs tracking-widest uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
