import React from "react";
import EducationLanyard from "@/components/aboutSection/educationLanyard";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import { links } from "@/data/data";
import { isDesktop } from "@/lib/utils";

export function AboutWrapper({}) {
  return (
    <main className="flex h-full w-full max-w-maxWidth grow flex-col items-center justify-center text-[5.2vw] sm:text-[4vw] md:text-[clamp(18px,_0.9vw_+_13px,_28px)] lg:justify-start">
      <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:items-start lg:grid-cols-[1.18fr_0.82fr] lg:gap-8">
        {/* About Text — full width on mobile/tablet, left column on desktop */}
        <div className="anime relative mt-0 lg:mt-32">
          <div className="relative p-4 sm:p-5 md:p-8 lg:min-h-[56dvh] lg:p-10">
            <h2
              className="mb-4 text-center text-[clamp(28px,_5vw,_56px)] font-bold tracking-tight text-colorDark sm:mb-6 lg:mb-10 lg:text-left"
              style={{ lineHeight: 1.1 }}
            >
              About<span style={{ color: "#4767e8" }}>.</span>
            </h2>

            <div
              className="pointer-events-none absolute right-32 top-40 hidden rotate-6 rounded-full px-5 py-2 text-[0.34em] font-semibold text-colorDark shadow-[0_10px_24px_rgba(0,0,0,0.15)] lg:block"
              style={{ backgroundColor: "var(--colorPink)" }}
            >
              Scalable & user focused
            </div>
            <div
              className="pointer-events-none absolute bottom-40 left-12 hidden rotate-[-7deg] rounded-full px-5 py-2 text-[0.34em] font-semibold text-colorDark shadow-[0_10px_24px_rgba(0,0,0,0.15)] lg:block"
              style={{ backgroundColor: "var(--colorPink)" }}
            >
              Frontend execution
            </div>

            <p
              className="text-center text-[1.08em] font-semibold leading-[1.1] tracking-[-0.02em] text-colorDark sm:text-[1.16em] sm:leading-[1.05] lg:text-left lg:text-[1.42em]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              I am a
              <span
                className="ml-2 inline-block rotate-[-4deg] rounded-full px-[0.3em] py-[0.1em] text-[0.9em] font-bold italic text-white sm:ml-3 sm:px-[0.34em] sm:py-[0.12em] sm:text-[1em]"
                style={{ backgroundColor: "#4767e8" }}
              >
                Full-Stack Developer
              </span>
              <br />
              with expertise in
              <span className="ml-1 font-black text-[#4767e8] sm:ml-2">
                React.js
              </span>
              ,
              <span className="ml-1 font-black sm:ml-2">
                TypeScript
              </span>
              ,
              <br className="hidden sm:block" />
              <span className="ml-1 font-black text-[#4767e8] sm:ml-2">
                Python
              </span>
              , and
              <span className="ml-1 font-black sm:ml-2">
                {" "}
                Machine Learning
              </span>
              .
              <br className="hidden lg:block" />
              <span className="mt-4 block sm:mt-5 lg:mt-8">
                I have gained hands on experience through internships at
                <span
                  className="mx-1 inline-block rounded-[0.25em] px-[0.18em] py-[0.06em] font-bold italic text-colorPink sm:mx-2 sm:px-[0.2em] sm:py-[0.08em]"
                  style={{ backgroundColor: "var(--colorPrimary)" }}
                >
                  Cybernault Edutech
                </span>
                and
                <span
                  className="mx-1 inline-block rounded-[0.25em] px-[0.18em] py-[0.06em] font-bold italic text-colorPink sm:mx-2 sm:px-[0.2em] sm:py-[0.08em]"
                  style={{ backgroundColor: "var(--colorPrimary)" }}
                >
                  Mealzy
                </span>
                .
              </span>
              <span className="mt-4 block sm:mt-5 lg:mt-8">
                Where I do
                <span
                  className="mx-1 inline-block rotate-[4deg] rounded-full px-[0.28em] py-[0.06em] font-bold italic text-white sm:mx-2 sm:px-[0.3em] sm:py-[0.08em]"
                  style={{ backgroundColor: "#4767e8" }}
                >
                  freelance
                </span>
                and developed scalable, user focused applications,
                including full-stack platforms and
                <span className="font-black"> live client projects</span>.
              </span>
            </p>

            <div className="mt-8 flex justify-center sm:mt-10 lg:mt-20 lg:justify-start">
              <Magentic
                href={links.freelance}
                scrambleParams={{
                  text: "View Freelance Work",
                }}
                onMouseEnter={() => {
                  if (isDesktop()) {
                    gsap.to("body", {
                      "--colorLight": "#1c1c1c",
                      "--colorDark": "#def438",
                      "--colorSecondaryDark": "#c5d830",
                      "--colorSecondaryLight": "#3a3a3a",
                      "--colorSecondaryHalfLight": "#2a2a2a",
                      "--colorSecondaryHalfDark": "#e5f760",
                      "--colorWhite": "#1c1c1c",
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (isDesktop()) {
                    gsap.to("body", {
                      "--colorLight": "#def438",
                      "--colorDark": "#1c1c1c",
                      "--colorSecondaryDark": "#3a3a3a",
                      "--colorSecondaryLight": "#c5d830",
                      "--colorSecondaryHalfLight": "#e5f760",
                      "--colorSecondaryHalfDark": "#2a2a2a",
                      "--colorWhite": "#def438",
                    });
                  }
                }}
                className="mask group inline-flex items-center justify-center rounded-full bg-colorDark px-6 py-3 sm:px-7 sm:py-4 md:px-10 md:py-5"
              >
                <p className="shapka !flex items-center text-[0.6em] text-colorLight sm:text-[0.62em] md:text-[0.5em]">
                  <span className="scrambleText whitespace-nowrap">
                    View Freelance Work
                  </span>
                  <svg
                    className="ml-3 w-[1em] -rotate-45 text-colorLight sm:ml-4 sm:w-[1.1em]"
                    viewBox="0 0 14 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>arrow-up-right</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="2.5"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Artboard"
                        transform="translate(-1019.000000, -279.000000)"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <g
                          id="arrow-up-right"
                          transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                        >
                          <polyline
                            id="Path"
                            points="2.76923077 0 12 0 12 9.23076923"
                          ></polyline>
                          <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </Magentic>
            </div>
          </div>
        </div>

        {/* Lanyard — hidden on mobile & tablet, visible only on desktop (lg+) */}
        <div className="anime hidden w-full lg:block lg:min-h-[100dvh] lg:justify-self-end lg:overflow-visible">
          <EducationLanyard
            className="lg:min-h-[100dvh]"
            frontImage="/img/lanyard/front.jpg?v=2"
            backImage="/img/lanyard/back.jpg?v=2"
          />
        </div>
      </div>
    </main>
  );
}
