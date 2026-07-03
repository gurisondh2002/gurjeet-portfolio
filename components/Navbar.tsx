"use client";
import { useState, useEffect } from "react";
import { person } from "@/lib/data";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const scrollY = window.scrollY + 200;
      sections.forEach((sec) => {
        if (sec && sec.offsetTop <= scrollY && sec.offsetTop + sec.offsetHeight > scrollY) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/90 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-display font-bold text-lg text-white hover:text-teal transition-colors"
          >
            GK<span className="text-teal">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.slice(1).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    active === item.id ? "text-teal" : "text-muted hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${person.email}`}
            className="hidden md:inline-flex items-center gap-2 bg-teal text-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-dim transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm font-medium ${active === item.id ? "text-teal" : "text-muted"}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`mailto:${person.email}`}
              className="w-fit bg-teal text-navy px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* Side dots — desktop only */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            title={item.label}
            onClick={() => scrollTo(item.id)}
            className={`w-2.5 h-2.5 rounded-full border border-muted transition-all duration-300 nav-dot ${
              active === item.id ? "active scale-125" : "bg-transparent hover:border-teal"
            }`}
          />
        ))}
      </div>
    </>
  );
}
