import WolfLogo from "./WolfLogo";

const NAV = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Categorías", href: "#disciplines" },
  { label: "Equipo", href: "#team" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="bg-wolf_black border-t border-wolf_blue/10 pt-16 pb-8 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <WolfLogo variant="icon" size={40} />
              <span className="font-display font-bold text-xl text-wolf_white tracking-widest">
                WOLF<span className="text-wolf_blue">TEC</span>
              </span>
            </div>
            <p className="font-body text-wolf_gray text-sm leading-relaxed">
              Equipo de robótica competitivo del TESCHA, Chalco. Ingeniería,
              innovación y pasión por la tecnología.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-wolf_blue text-xs tracking-widest mb-4">
              NAVEGACIÓN
            </p>
            <nav className="flex flex-col gap-3">
              {NAV.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="font-body text-left text-wolf_gray text-sm hover:text-wolf_blue transition-colors duration-200 w-fit"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-mono text-wolf_blue text-xs tracking-widest mb-4">
              INSTITUCIÓN
            </p>
            <div className="space-y-2 font-body text-wolf_gray text-sm">
              <p>Tecnológico de Estudios Superiores de Chalco</p>
              <p>Chalco, Estado de México</p>
              <p>Ing. en Sistemas Computacionales</p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-wolf_gray text-xs tracking-widest hover:text-wolf_blue transition-colors duration-200 border border-wolf_steel hover:border-wolf_blue/40 px-3 py-1.5"
              >
                GITHUB
              </a>
              <a
                href="https://www.facebook.com/people/Wolftesch/61577342693841/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-wolf_gray text-xs tracking-widest hover:text-wolf_orange transition-colors duration-200 border border-wolf_steel hover:border-wolf_orange/40 px-3 py-1.5"
              >
                FACEBOOK
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wolf_steel pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-wolf_gray_dark text-xs tracking-wider">
            2025 WOLFTEC
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-wolf_blue rounded-full animate-pulse" />
            <span className="font-mono text-wolf_gray_dark text-xs tracking-wider">
              SISTEMA ACTIVO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
