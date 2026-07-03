"use client";
import { person } from "@/lib/data";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: person.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=${encodeURIComponent(
      "Let's Connect"
    )}&body=${encodeURIComponent(`Hi Gurjeet,

I came across your portfolio and was impressed by your work.

I'd love to connect and discuss a potential opportunity with you. Looking forward to hearing from you!

Best regards,
`)}`,
    color: "#00D4AA",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gurjeet-kaur",
    href: person.linkedin,
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/gurjeet-kaur",
    href: person.github,
    color: "#8892A4",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: person.phone,
    href: `tel:${person.phone}`,
    color: "#FF7B8F",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-eyebrow mb-4">Get In Touch</p>
        <h2 className="font-display font-bold text-4xl text-white mb-4">
          Let&apos;s <span className="gradient-text">Work Together</span>
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-14 leading-relaxed">
          I&apos;m open to exciting full-time roles, collaborations.
          If you have a role or project in mind, I&apos;d love to hear from you.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate/60 border border-white/5 rounded-2xl p-6 flex items-center gap-4 card-hover text-left group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
              >
                <c.icon style={{ color: c.color }} size={20} />
              </div>
              <div>
                <p className="text-muted text-xs uppercase tracking-wide mb-0.5">{c.label}</p>
                <p className="text-white text-sm font-medium group-hover:text-teal transition-colors">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Big CTA */}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}&su=${encodeURIComponent(
            "Let's Connect"
          )}&body=${encodeURIComponent(`Hi Gurjeet,

I came across your portfolio and was impressed by your work.

I'd love to connect and discuss a potential opportunity with you. Looking forward to hearing from you!

Best regards,
`)}`}
target="_blank"
          className="inline-flex items-center gap-3 bg-teal text-navy font-bold text-lg px-10 py-4 rounded-2xl hover:bg-teal-dim transition-all hover:scale-105 hover:shadow-2xl hover:shadow-teal/30"
        >
          <FaEnvelope size={18} />
          Send Me a Message
        </a>
      </div>
    </section>
  );
}
