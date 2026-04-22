"use client";
import React from "react";
import Image from "next/image";
import "../header.css";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/contactSection/footer";

const achievements = [
  {
    title: "Mealzy - Innovative Food Web Solutions Hackathon",
    prize: "🥇 First Prize",
    location: "AIC Raise, Coimbatore",
    year: "2025",
    type: "Hackathon",
    color: "#5a33f9",
    image: "", // User will provide
  },
  {
    title: "HACKSTRONAUTS - 24 Hr Challenge",
    prize: "🥇 1st Place",
    location: "SRM University, Chennai",
    year: "2025",
    type: "24Hr Challenge",
    color: "#f68ed4",
    image: "", // User will provide
  },
  {
    title: "New India Vibrant Hackathon",
    prize: "🥈 Second Prize",
    location: "Surat Municipal Corporation",
    year: "2023",
    type: "Grand Finale",
    color: "#5a33f9",
    image: "", // User will provide
  },
  {
    title: "Bureau of Indian Standards",
    prize: "🥉 Third Prize",
    location: "Sri Krishna College, Coimbatore",
    year: "2026",
    type: "Competition",
    color: "#f68ed4",
    image: "", // User will provide
  },
  {
    title: "Bitathon - Top 8 Finalist",
    prize: "🏆 Top 8 Finalist",
    location: "Goa Institute of Management",
    year: "2026",
    type: "Analytics",
    color: "#5a33f9",
    image: "", // User will provide
  },
];

export default function AchievementsPage() {
  return (
    <>
      <Cursor />
      <Header color="Light" />
      <HeaderNavigation />
      <main className="darkGradient relative flex min-h-screen w-full flex-col items-start px-paddingX py-paddingY text-[#def438]">
        <h1 className="mb-2 mt-[0.5em] text-[12.2vw] font-bold leading-[0.9] tracking-tight md:text-[clamp(16px,_6.3vw_+_8px,_120px)]">
          Achieve<span style={{ color: "#fcf2ff" }}>ments</span>
          <span style={{ color: "#f68ed4" }}>.</span>
        </h1>
        <p className="mb-8 max-w-[600px] text-[clamp(14px,_1vw_+_8px,_20px)] text-[#def438aa] md:mb-12">
          Hackathons won, challenges conquered, and recognition earned across India.
        </p>

        {/* Masonry-style image gallery layout */}
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: `rgba(222,244,56,0.03)`,
                border: `1px solid ${ach.color}25`,
              }}
            >
              {/* Image area - large, prominent */}
              <div
                className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${ach.color}15 0%, ${ach.color}05 100%)`,
                }}
              >
                {ach.image ? (
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-5xl opacity-40">🏆</span>
                    <span className="text-sm text-[#def43840]">Image coming soon</span>
                  </div>
                )}

                {/* Prize badge overlay */}
                <div
                  className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[12px] font-bold backdrop-blur-md"
                  style={{
                    background: `${ach.color}cc`,
                    color: '#1c1c1c',
                  }}
                >
                  {ach.prize}
                </div>

                {/* Type badge */}
                <div
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                  style={{
                    background: 'rgba(28,28,28,0.7)',
                    color: ach.color,
                    border: `1px solid ${ach.color}40`,
                  }}
                >
                  {ach.type}
                </div>
              </div>

              {/* Info area */}
              <div className="p-5">
                <h3 className="text-[clamp(15px,_1vw_+_6px,_20px)] font-bold leading-tight text-[#def438]">
                  {ach.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-medium"
                    style={{
                      background: `${ach.color}15`,
                      border: `1px solid ${ach.color}30`,
                      color: ach.color,
                    }}
                  >
                    📍 {ach.location}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-medium"
                    style={{
                      background: `${ach.color}15`,
                      border: `1px solid ${ach.color}30`,
                      color: ach.color,
                    }}
                  >
                    📅 {ach.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer className="bottom-0 left-0 mt-12" />
      </main>
    </>
  );
}
