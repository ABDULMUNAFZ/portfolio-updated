import React from "react";
import EducationLanyard from "@/components/aboutSection/educationLanyard";
import Magentic from "../ui/magentic";
import { gsap } from "gsap";
import { links } from "@/data/data";
import { isDesktop } from "@/lib/utils";

export function AboutWrapper({}) {
  return (
    <main className="flex h-full w-full max-w-maxWidth grow flex-col text-[5.2vw] md:text-[clamp(18px,_0.9vw_+_13px,_28px)]">
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.18fr_0.82fr] md:gap-8">
        <div className="anime relative mt-16 md:mt-32">
          <div className="relative p-5 md:min-h-[56dvh] md:p-10">
            <h2
              className="mb-6 text-left text-[clamp(24px,_4.2vw,_56px)] font-bold tracking-tight text-colorDark md:mb-10"
              style={{ lineHeight: 1.1 }}
            >
              About<span style={{ color: "#5a33f9" }}>.</span>
            </h2>

            <div
              className="pointer-events-none absolute right-32 top-40 hidden rotate-6 rounded-full px-5 py-2 text-[0.34em] font-semibold text-colorDark shadow-[0_10px_24px_rgba(0,0,0,0.15)] md:block"
              style={{ backgroundColor: "var(--colorPink)" }}
            >
              Scalable & user focused
            </div>
            <div
              className="pointer-events-none absolute bottom-40 left-12 hidden rotate-[-7deg] rounded-full px-5 py-2 text-[0.34em] font-semibold text-colorDark shadow-[0_10px_24px_rgba(0,0,0,0.15)] md:block"
              style={{ backgroundColor: "var(--colorPink)" }}
            >
              Frontend execution
            </div>

            <p
              className="text-left text-[1.16em] font-semibold leading-[1.05] tracking-[-0.02em] text-colorDark md:text-[1.42em]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              I am a
              <span
                className="ml-3 inline-block rotate-[-4deg] rounded-full px-[0.34em] py-[0.12em] font-bold italic text-white"
                style={{ backgroundColor: "#4767e8" }}
              >
                Full-Stack Developer
              </span>
              <br />
              with expertise in
              <span className="ml-2 font-black text-[#4767e8]">
                React.js
              </span>
              ,
              <span className="ml-2 font-black">
                TypeScript
              </span>
              ,
              <br />
              <span className="ml-2 font-black text-[#4767e8]">
                Python
              </span>
              , and
              <span className="ml-2 font-black">
                {" "}
                Machine Learning
              </span>
              .
              <br className="hidden md:block" />
              <span className="mt-5 block md:mt-8">
                I have gained hands on experience through internships at
                <span
                  className="mx-2 inline-block rounded-[0.25em] px-[0.2em] py-[0.08em] font-bold italic text-colorPink"
                  style={{ backgroundColor: "var(--colorPrimary)" }}
                >
                  Cybernault Edutech
                </span>
                and
                <span
                  className="mx-2 inline-block rounded-[0.25em] px-[0.2em] py-[0.08em] font-bold italic text-colorPink"
                  style={{ backgroundColor: "var(--colorPrimary)" }}
                >
                  Mealzy
                </span>
                .
              </span>
              <span className="mt-5 block md:mt-8">
                Where I do
                <span
                  className="mx-2 inline-block rotate-[4deg] rounded-full px-[0.3em] py-[0.08em] font-bold italic text-white"
                  style={{ backgroundColor: "#4767e8" }}
                >
                  freelance
                </span>
                and developed scalable, user focused applications,
                including full-stack platforms and
                <span className="font-black"> live client projects</span>.
              </span>
            </p>

            <div className="mt-14 flex justify-start md:mt-20">
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
                className="mask group inline-flex items-center justify-center rounded-full bg-colorDark px-7 py-4 md:px-10 md:py-5"
              >
                <p className="shapka !flex items-center text-[0.62em] text-colorLight md:text-[0.5em]">
                  <span className="scrambleText whitespace-nowrap">
                    View Freelance Work
                  </span>
                  <svg
                    className="ml-4 w-[1.1em] -rotate-45 text-colorLight"
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

        <div className="anime w-full md:min-h-[100dvh] md:w-full md:justify-self-end md:overflow-visible">
          <EducationLanyard
            className="md:min-h-[100dvh]"
            frontImage="/img/lanyard/front.jpg?v=2"
            backImage="/img/lanyard/back.jpg?v=2"
          />
        </div>
      </div>
    </main>
  );
}
