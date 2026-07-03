"use client";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Languages: "#00D4AA",
  Frontend: "#7B8FFF",
  Backend: "#FF7B8F",
  Databases: "#FFB347",
  "Cloud & DevOps": "#00BFFF",
  Testing: "#C9B1FF",
  "AI / ML": "#FF85A1",
  "Dev Practices": "#A0E7A0",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">What I Work With</p>
          <h2 className="font-display font-bold text-4xl text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const color = categoryColors[category] || "#00D4AA";
            return (
              <div
                key={category}
                className="bg-navy/60 border border-white/5 rounded-2xl p-6 card-hover backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: color, boxShadow: `0 0 8px ${color}60` }}
                  />
                  <h3
                    className="font-display font-semibold text-sm uppercase tracking-wider"
                    style={{ color }}
                  >
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                      style={{
                        background: `${color}10`,
                        borderColor: `${color}30`,
                        color,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
