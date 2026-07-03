"use client";
import { useEffect, useState } from "react";
import { person, stats } from "@/lib/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const roles = [
  "Software Development Engineer",
  "Full Stack Developer",
  "React & Node.js Engineer",
  "Cloud & DevOps Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((r) => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {[
        { size: 8, top: "20%", left: "10%", delay: "0s" },
        { size: 5, top: "70%", left: "80%", delay: "2s" },
        { size: 12, top: "50%", left: "5%", delay: "4s" },
        { size: 6, top: "85%", left: "60%", delay: "1s" },
        { size: 10, top: "15%", left: "75%", delay: "3s" },
      ].map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="section-eyebrow mb-6 animate-fade-in">
          👋 Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="font-display font-bold text-5xl md:text-7xl mb-4 leading-tight">
          <span className="gradient-text glow-text">{person.name}</span>
        </h1>

        {/* Typing role */}
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="font-display text-xl md:text-2xl text-muted">
            {displayed}
            <span className="animate-blink text-teal ml-0.5">|</span>
          </span>
        </div>

        {/* Location */}
        <p className="flex items-center justify-center gap-2 text-muted text-sm mb-10">
          <FaMapMarkerAlt className="text-teal" />
          {person.location}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-teal text-navy font-semibold px-8 py-3.5 rounded-xl hover:bg-teal-dim transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal/20"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="border border-teal/40 text-teal font-semibold px-8 py-3.5 rounded-xl hover:bg-teal/10 transition-all"
          >
            View Projects
          </button>
          <a
            href={`mailto:${person.email}`}
            className="flex items-center gap-2 border border-white/10 text-muted font-medium px-6 py-3.5 rounded-xl hover:border-white/30 hover:text-white transition-all"
          >
            <FaDownload size={14} />
            Download CV
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate/60 border border-white/5 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="font-display font-bold text-2xl text-teal">
                {s.value}
              </div>
              <div className="text-muted text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-5">
        {[
  { icon: FaGithub, href: person.github, label: "GitHub" },
  { icon: FaLinkedin, href: person.linkedin, label: "LinkedIn" },
  {
    icon: FaEnvelope,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=${encodeURIComponent(
      "Let's Connect"
    )}&body=${encodeURIComponent(`Hi Gurjeet,

I came across your portfolio and was impressed by your work.

I'd love to connect and discuss a potential opportunity with you. Looking forward to hearing from you!

Best regards,
`)}`,
    label: "Email",
  },
].map(({ icon: Icon, href, label }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-muted hover:text-teal hover:border-teal/40 transition-all hover:scale-110"
  >
    <Icon size={18} />
  </a>
))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs">
          <div className="w-px h-12 bg-gradient-to-b from-teal/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
