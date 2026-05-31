import { useState, useEffect } from "react";
import WolfLogo from "./WolfLogo";

const NAV = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Categorías", href: "#disciplines" },
  { label: "Equipo", href: "#team" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-wolf_black/95 backdrop-blur-md border-b border-wolf_blue/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-3 group"
        >
          <WolfLogo
            variant="icon"
            size={36}
            className="group-hover:drop-shadow-[0_0_8px_#00D4FF] transition-all duration-300"
          />
          <span className="font-display font-bold text-lg text-wolf_white tracking-widest group-hover:text-wolf_white transition-colors duration-300">
            WOLF<span className="text-wolf_blue">TEC</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="font-body text-sm tracking-wider text-wolf_gray hover:text-wolf_blue transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-wolf_blue group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-wolf_blue transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-wolf_blue transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-wolf_blue transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72" : "max-h-0"}`}
      >
        <nav className="bg-wolf_dark/95 backdrop-blur-md border-t border-wolf_blue/10 px-6 py-4 flex flex-col gap-4">
          {NAV.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="font-body text-left text-wolf_gray hover:text-wolf_blue transition-colors duration-200 tracking-wider text-sm"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
