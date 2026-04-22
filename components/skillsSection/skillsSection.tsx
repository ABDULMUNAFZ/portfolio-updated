import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "HTML5", "CSS3", "JavaScript", "TypeScript", "LaTeX"],
    color: "#5a33f9",
  },
  {
    title: "Frontend",
    skills: ["React.js", "Three.js", "Spline", "Webflow"],
    color: "#f68ed4",
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "Flask", "Netlify", "Hostinger"],
    color: "#fcf2ff",
  },
  {
    title: "AI / ML",
    skills: ["YOLO V8", "OpenCV", "PyTorch", "Twilio"],
    color: "#5a33f9",
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Pycharm", "BitBucket"],
    color: "#f68ed4",
  },
  {
    title: "Design",
    skills: ["Rhino", "Adobe", "WordPress"],
    color: "#fcf2ff",
  },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Teamwork",
  "Time Management",
];

export function SkillsSection() {
  return (
    <section className="section section__3 third darkGradient relative z-0 px-paddingX text-colorLight">
      <Bulge type="Light" />
      <Header color="Light" />

      <main className="flex h-full w-full max-w-maxWidth grow flex-col items-center justify-center py-paddingY">
        <div className="anime mb-6 md:mb-10">
          <h2
            className="text-center text-[clamp(28px,_5vw,_64px)] font-bold tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Technical <span style={{ color: "#fcf2ff" }}>Skills</span>
            <span style={{ color: "#5a33f9" }}>.</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[500px] text-center text-[clamp(12px,_1vw_+_8px,_18px)] text-[#def43899]">
            Technologies & tools I work with every day
          </p>
        </div>

        {/* Skills Grid */}
        <div className="anime grid w-full max-w-[1100px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="glass-card-dark group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:scale-[1.03] md:rounded-3xl md:p-6"
            >
              <h3
                className="mb-3 text-[clamp(11px,_0.8vw_+_6px,_16px)] font-bold uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="rounded-full px-3 py-1.5 text-[clamp(10px,_0.7vw_+_6px,_14px)] font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${cat.color}18`,
                      border: `1px solid ${cat.color}30`,
                      color: "#def438",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="anime mt-4 flex w-full max-w-[1100px] flex-wrap items-center justify-center gap-2 md:mt-6 md:gap-3">
          <span className="mr-2 text-[clamp(10px,_0.7vw_+_6px,_13px)] font-bold uppercase tracking-widest text-[#def43880]">
            Soft Skills
          </span>
          {softSkills.map((skill, i) => (
            <span
              key={i}
              className="rounded-full px-4 py-2 text-[clamp(10px,_0.7vw_+_6px,_14px)] font-medium text-[#def438]"
              style={{
                background: "rgba(246,142,212,0.1)",
                border: "1px solid rgba(246,142,212,0.2)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </main>
    </section>
  );
}
