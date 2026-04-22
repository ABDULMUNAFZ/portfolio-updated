import React, { useState } from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import Magentic from "@/components/ui/magentic";

const projectsData = [
  {
    title: "Full Stack Chatting Website",
    subtitle: "with Sentiment Analysis",
    description:
      "Built a full-stack real-time chat app with image sharing, sentiment analysis, and secure MongoDB Atlas storage.",
    tech: ["React.js", "Node.js", "MongoDB", "NLP"],
    demoLink: "https://full-stack-chatting-website.onrender.com",
    githubLink: "https://full-stack-chatting-website.onrender.com",
    color: "#5a33f9",
  },
  {
    title: "GreenSight AI",
    subtitle: "Terrain Segmentation for Forest Monitoring",
    description:
      "Deep learning pipeline that analyses field photos to classify terrain into 10 environmental categories in real-time.",
    tech: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    demoLink: "",
    githubLink: "https://github.com/ABDULMUNAFZ",
    color: "#fcf2ff",
  },
  {
    title: "Indian Sign Language",
    subtitle: "Recognition System",
    description:
      "Recognition with continuous sentence formation, multi-language text-to-speech, and accessibility-first design.",
    tech: ["Python", "OpenCV", "PyTorch", "NLP"],
    demoLink: "",
    githubLink: "https://github.com/ABDULMUNAFZ",
    color: "#f68ed4",
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projectsData[activeProject];

  return (
    <section className="section section__5 fifth darkGradient relative z-0 px-paddingX text-[#def438]">
      <Bulge type="Light" />
      <Header color="Light" />

      <main className="flex h-full w-full max-w-maxWidth grow flex-col items-center justify-center py-paddingY">
        <div className="anime mb-4 md:mb-8">
          <h2
            className="text-center text-[clamp(28px,_5vw,_64px)] font-bold tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            My <span style={{ color: "#fcf2ff" }}>Projects</span>
            <span style={{ color: "#f68ed4" }}>.</span>
          </h2>
        </div>

        <div className="anime flex w-full max-w-[1100px] flex-col items-center gap-6 md:flex-row md:gap-10">
          {/* Laptop Mockup */}
          <div className="relative flex w-full items-center justify-center md:w-[50%]">
            <div
              className="relative w-full max-w-[500px] overflow-hidden rounded-2xl transition-all duration-500 md:rounded-3xl"
              style={{
                background: "rgba(222,244,56,0.04)",
                border: `2px solid ${project.color}40`,
                aspectRatio: "16/10",
              }}
            >
              {/* Laptop top bar */}
              <div
                className="flex h-8 items-center gap-1.5 px-4"
                style={{ background: "rgba(222,244,56,0.06)" }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]"></div>
                <span className="ml-3 text-[10px] text-[#def43860]">
                  {project.demoLink || "localhost:3000"}
                </span>
              </div>
              {/* Screen Content */}
              <div className="flex h-[calc(100%-2rem)] flex-col items-center justify-center p-6 text-center">
                <h3
                  className="text-[clamp(20px,_2vw_+_8px,_36px)] font-bold leading-tight"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-[clamp(12px,_0.8vw_+_6px,_16px)] text-[#def43880]">
                  {project.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="rounded-full px-2.5 py-1 text-[clamp(9px,_0.5vw_+_5px,_12px)]"
                      style={{
                        background: `${project.color}18`,
                        border: `1px solid ${project.color}30`,
                        color: "#def438",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project list */}
          <div className="flex w-full flex-col gap-3 md:w-[50%] md:gap-4">
            {projectsData.map((proj, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 md:rounded-3xl md:p-5 ${
                  activeProject === i ? "scale-[1.02]" : "opacity-70 hover:opacity-100"
                }`}
                style={{
                  background:
                    activeProject === i
                      ? `${proj.color}15`
                      : "rgba(222,244,56,0.04)",
                  border:
                    activeProject === i
                      ? `1px solid ${proj.color}40`
                      : "1px solid rgba(222,244,56,0.06)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-[clamp(14px,_1vw_+_6px,_20px)] font-bold text-[#def438]">
                      {proj.title}
                    </h4>
                    <p className="mt-0.5 text-[clamp(11px,_0.6vw_+_5px,_14px)] text-[#def43880]">
                      {proj.subtitle}
                    </p>
                  </div>
                  <span
                    className="mt-1 text-[clamp(22px,_2vw,_36px)] font-bold"
                    style={{ color: `${proj.color}60` }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {activeProject === i && (
                  <div className="mt-3">
                    <p className="text-[clamp(11px,_0.6vw_+_5px,_14px)] leading-relaxed text-[#def438aa]">
                      {proj.description}
                    </p>
                    <div className="mt-3 flex gap-2">
                      {proj.demoLink && (
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full px-4 py-1.5 text-[clamp(10px,_0.6vw_+_5px,_13px)] font-semibold text-[#1c1c1c] transition-transform hover:scale-105"
                          style={{ background: proj.color }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {proj.githubLink && (
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full px-4 py-1.5 text-[clamp(10px,_0.6vw_+_5px,_13px)] font-semibold transition-transform hover:scale-105"
                          style={{
                            border: `1px solid ${proj.color}50`,
                            color: "#def438",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
