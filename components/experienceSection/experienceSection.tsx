import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import Magentic from "@/components/ui/magentic";
import { links } from "@/data/data";

const experiences = [
  {
    company: "Mealzy",
    role: "Frontend Developer Intern",
    period: "June 2025 – July 2025",
    type: "Onsite",
    description:
      "Working on real-time frontend development using React.js, focusing on responsive UI components and user-centric design patterns.",
    tech: ["React.js", "JavaScript", "CSS3", "Responsive UI"],
    color: "#5a33f9",
  },
  {
    company: "Cybernault Edutech",
    role: "Full Stack Developer Intern",
    period: "Dec 2024 – May 2025",
    type: "Remote",
    description:
      "Completed a 6-month internship with hands-on training and real-time project experience building full-stack web applications.",
    tech: ["React.js", "Node.js", "TypeScript", "Full Stack"],
    color: "#f68ed4",
  },
];

export function ExperienceSection() {
  return (
    <section className="section section__4 fourth lightGradient items-center justify-center px-paddingX pb-10 pt-paddingY text-colorDark">
      <Bulge type="Dark" />
      <Header color="Dark" />

      <main className="flex h-full w-full max-w-maxWidth grow flex-col items-center justify-center">
        <div className="anime mb-6 md:mb-10">
          <h2
            className="text-center text-[clamp(28px,_5vw,_64px)] font-bold tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Work <span style={{ color: "#5a33f9" }}>Experience</span>
            <span style={{ color: "#f68ed4" }}>.</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="anime flex w-full max-w-[900px] flex-col gap-4 md:gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:scale-[1.01] md:rounded-3xl md:p-8"
              style={{
                borderLeft: `4px solid ${exp.color}`,
              }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-[clamp(18px,_1.5vw_+_8px,_28px)] font-bold text-colorDark">
                    {exp.company}
                  </h3>
                  <p
                    className="mt-0.5 text-[clamp(13px,_0.8vw_+_6px,_18px)] font-medium"
                    style={{ color: exp.color }}
                  >
                    {exp.role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-colorDark px-3 py-1 text-[clamp(10px,_0.6vw_+_6px,_13px)] font-medium text-[#def438]">
                    {exp.period}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[clamp(10px,_0.6vw_+_6px,_13px)] font-medium"
                    style={{
                      background: `${exp.color}20`,
                      color: exp.color,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[clamp(12px,_0.8vw_+_6px,_16px)] leading-relaxed text-colorSecondaryDark">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tech.map((t, j) => (
                  <span
                    key={j}
                    className="rounded-full px-3 py-1 text-[clamp(10px,_0.6vw_+_5px,_13px)] font-medium"
                    style={{
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}25`,
                      color: '#1c1c1c',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Hire Me CTA */}
          <div className="anime flex flex-col items-center justify-center rounded-2xl p-6 text-center md:rounded-3xl md:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(90,51,249,0.06) 0%, rgba(246,142,212,0.06) 100%)',
              border: '1px dashed rgba(90,51,249,0.25)',
            }}
          >
            <p className="mb-1 text-[clamp(14px,_1vw_+_8px,_22px)] font-bold text-colorDark">
              Waiting for my next adventure<span style={{ color: "#f68ed4" }}>...</span>
            </p>
            <p className="mb-4 text-[clamp(11px,_0.7vw_+_6px,_15px)] text-colorSecondaryDark">
              Open to exciting opportunities & collaborations
            </p>
            <Magentic
              href={links.contact}
              strength={50}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[clamp(12px,_0.8vw_+_6px,_16px)] font-bold text-[#fcf2ff] transition-transform hover:scale-105"
              style={{ background: '#5a33f9' }}
              scrambleParams={{ text: "Hire Me →", chars: "-x" }}
            >
              <span className="scrambleText">Hire Me →</span>
            </Magentic>
          </div>
        </div>
      </main>
    </section>
  );
}
