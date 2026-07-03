"use client";
import Image from "next/image";
import { person, education } from "@/lib/data";
import { FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="section-eyebrow mb-4">Who I Am</p>
            <h2 className="font-display font-bold text-4xl mb-6 text-white leading-tight">
              Building systems that{" "}
              <span className="gradient-text">scale and perform</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              {person.summary}
            </p>

            {/* Contact info pills */}
            <div className="flex flex-col gap-3">
              {[
                { icon: FaMapMarkerAlt, text: person.location },
                { icon: FaPhone, text: person.phone },
                { icon: FaEnvelope, text: person.email },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-teal" size={13} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: education card + avatar placeholder */}
          <div className="flex flex-col gap-6">
            {/* Avatar area */}
            <div className="relative flex justify-center">
              <div className="w-52 h-52 rounded-2xl overflow-hidden border border-teal/20 glow-teal animate-float">
                <Image
                  src="/Gurjeet_Kaur.png"
                  alt="Gurjeet Kaur"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-teal text-navy text-xs font-bold px-3 py-1.5 rounded-full">
                Available ✓
              </div>
            </div>

            {/* Education card */}
            {education.map((ed) => (
              <div
                key={ed.institution}
                className="bg-slate/60 border border-white/5 rounded-2xl p-6 card-hover backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-teal" size={18} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-snug mb-1">
                      {ed.institution}
                    </p>
                    <p className="text-muted text-xs mb-2">{ed.degree}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs bg-teal/10 text-teal border border-teal/20 px-2 py-0.5 rounded-full">
                        {ed.grade}
                      </span>
                      <span className="text-xs text-muted">{ed.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
