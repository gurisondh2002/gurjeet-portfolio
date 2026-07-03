"use client";
import { experience } from "@/lib/data";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-eyebrow mb-4">Where I&apos;ve Worked</p>
          <h2 className="font-display font-bold text-4xl text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-8 bottom-0 w-px bg-gradient-to-b from-teal via-teal/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <div key={exp.company} className="relative md:pl-14">
                {/* Dot */}
                <div
                  className="absolute left-0 top-2 w-10 h-10 rounded-full border-2 flex items-center justify-center hidden md:flex"
                  style={{ borderColor: exp.color, background: `${exp.color}15`, boxShadow: `0 0 16px ${exp.color}40` }}
                >
                  <FaBriefcase style={{ color: exp.color }} size={14} />
                </div>

                {/* Card */}
                <div
                  className="bg-slate/60 border border-white/5 rounded-2xl p-6 card-hover backdrop-blur-sm"
                  style={{ borderLeftColor: exp.color, borderLeftWidth: 3 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold text-base mt-0.5"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full border"
                        style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}10` }}
                      >
                        {exp.period}
                      </span>
                      <p className="flex items-center gap-1 text-muted text-xs mt-1.5 justify-end">
                        <FaMapMarkerAlt size={10} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
