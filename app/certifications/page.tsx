"use client";
import React from "react";
import "../header.css";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Header } from "@/components/header";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with WebGL
const InfiniteMenu = dynamic(
  () => import("@/components/infiniteMenu/InfiniteMenu"),
  { ssr: false }
);

const certifications = [
  {
    image: "/certificates/cert1.png",
    link: "",
    title: "Coursera (Google)",
    description: "Data Analysis Fundamentals",
  },
  {
    image: "/certificates/cert2.png",
    link: "",
    title: "Google Digital Garage",
    description: "SEO, SEM Basics",
  },
  {
    image: "/certificates/cert3.png",
    link: "",
    title: "Altair RapidMiner",
    description: "Data Processing Workflows",
  },
  {
    image: "/certificates/cert4.png",
    link: "",
    title: "Accenture (Forage)",
    description: "Data Cleaning, Visualization",
  },
  {
    image: "/certificates/cert5.png",
    link: "",
    title: "OPSWAT Academy",
    description: "Infrastructure Security Basics",
  },
  {
    image: "/certificates/cert6.png",
    link: "",
    title: "IIT Bombay",
    description: "Python Programming Basics",
  },
  {
    image: "/certificates/cert7.png",
    link: "",
    title: "GitKraken",
    description: "Git Version Control",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <Cursor />
      <Header color="Light" />
      <HeaderNavigation />

      <main
        className="relative flex h-screen w-full flex-col items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1c1c1c 0%, #2a1f3d 50%, #1c1c1c 100%)",
        }}
      >
        {/* Page Title */}
        <div className="absolute left-0 right-0 top-0 z-10 flex flex-col items-center pt-[calc(var(--paddingY)_+_0.5rem)]">
          <h1
            className="text-center text-[clamp(28px,_5vw,_64px)] font-bold tracking-tight"
            style={{ color: "#def438", lineHeight: 1.1 }}
          >
            Certifications.
          </h1>
          <p className="mt-2 max-w-[500px] text-center text-[clamp(12px,_1vw_+_8px,_18px)]" style={{ color: "#4767e8" }}>
            Professional certifications from industry leaders
          </p>
        </div>

        {/* Infinite Menu — full page */}
        <div className="h-full w-full">
          <InfiniteMenu items={certifications} scale={1} />
        </div>

        {/* Subtle top & bottom gradient fades for polish */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,28,28,0.5) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to top, rgba(28,28,28,0.6) 0%, transparent 100%)",
          }}
        />
      </main>
    </>
  );
}
