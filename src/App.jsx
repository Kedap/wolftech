import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import MissionVision from "./components/MissionVision";
import Disciplines from "./components/Disciplines";
import Team from "./components/Team";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body text-wolf_white bg-wolf_black">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <Disciplines />
      <Team />
      <MissionVision />
      <Footer />
    </div>
  );
}
