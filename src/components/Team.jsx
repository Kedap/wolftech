const MEMBERS = [
  { name: 'Capitán del Equipo',        role: 'Team Lead & Estrategia',         color: '#FF6B35' },
  { name: 'Desarrollador de Software',  role: 'Programación & Algoritmos',      color: '#00D4FF' },
  { name: 'Ingeniero Mecánico',         role: 'Diseño & Manufactura',           color: '#00FF9F' },
  { name: 'Ingeniero en Electrónica',   role: 'Hardware & Circuitos',           color: '#00D4FF' },
  { name: 'Sistemas Embebidos',         role: 'Firmware & Control',             color: '#FF6B35' },
  { name: 'Miembro del Equipo',         role: 'Integración & Testing',          color: '#00FF9F' },
]

function Avatar ({ color }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" fill="#1C2333" stroke={color} strokeWidth="1.5" />
      <circle cx="32" cy="26" r="10" fill="#243047" stroke={color} strokeWidth="1" />
      <path d="M12,54 Q32,38 52,54" fill="#243047" stroke={color} strokeWidth="1" />
    </svg>
  )
}

export default function Team () {
  return (
    <section id="team" className="bg-wolf_black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="reveal font-mono text-wolf_blue text-xs tracking-[0.4em] mb-3">[ 04 · EQUIPO ]</p>
        <h2 className="reveal font-display font-bold text-4xl sm:text-5xl text-wolf_white mb-4" style={{ transitionDelay: '0.1s' }}>
          NUESTRO<br /><span className="text-wolf_blue">EQUIPO</span>
        </h2>
        <p className="reveal font-body text-wolf_gray mb-16 max-w-xl" style={{ transitionDelay: '0.2s' }}>
          Estudiantes de ISC del TESCHA unidos por la pasión por la robótica y la tecnología.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMBERS.map(({ name, role, color }, i) => (
            <div
              key={i}
              className="reveal group bg-wolf_dark border border-wolf_steel hover:border-wolf_blue/40 p-6 flex items-center gap-5 transition-all duration-300"
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Avatar color={color} />
              </div>
              <div>
                <p className="font-body font-semibold text-wolf_white text-sm leading-snug mb-1">{name}</p>
                <p className="font-mono text-xs tracking-wide" style={{ color }}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
