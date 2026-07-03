"use client";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">What I&apos;ve Built</p>
          <h2 className="font-display font-bold text-4xl text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-navy/70 border border-white/5 rounded-2xl p-8 card-hover backdrop-blur-sm flex flex-col"
              style={{ borderTopColor: proj.accent, borderTopWidth: 2 }}
            >
              {/* Emoji + name */}
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="text-4xl w-14 h-14 flex items-center justify-center rounded-2xl border"
                  style={{ background: `${proj.accent}12`, borderColor: `${proj.accent}30` }}
                >
                  {proj.emoji}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">{proj.name}</h3>
                  <p className="text-muted text-xs mt-0.5">Personal Project</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6">{proj.description}</p>

              {/* Key highlights */}
              <ul className="space-y-2 mb-6 flex-1">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted/80">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: proj.accent }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{ color: proj.accent, borderColor: `${proj.accent}30`, background: `${proj.accent}10` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
