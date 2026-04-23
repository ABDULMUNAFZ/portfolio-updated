"use client";
import React from "react";
import "../achievements.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import {
  AchievementSection,
  type AchievementData,
} from "@/components/achievementsPage/achievementSection";

const achievementsData: AchievementData[] = [
  {
    // Light BG (color="Dark") — use blue #4767e8 as secondary accent
    title: "Mealzy — Innovative Food Web Solutions",

    position: "1st Prize",
    positionRank: 1,
    eventType: "Hackathon",
    location: "AIC Raise, Coimbatore",
    date: "March 2025",
    description:
      "Built Mealzy, an AI-powered food delivery platform that reimagines how people discover and order meals. Won first place among 50+ competing teams.",
    descriptionJSX: (
      <>
        Built <span style={{ color: "#4767e8", fontWeight: 700 }}>Mealzy</span>, an{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>AI-powered</span> food delivery
        platform that reimagines how people discover and order meals. Won{" "}
        <span style={{ fontWeight: 800 }}>first place</span> among 50+ competing teams.
      </>
    ),
    images: [
      "/achievements/ach11.png",
      "/achievements/ach12.png",
      "/achievements/ach13.png",
    ],
  },
  {
    // Dark BG (color="Light") — use pink #f68ed4 as secondary accent
    title: "HACKSTRONAUTS — 24 Hour Challenge",

    position: "1st Place",
    positionRank: 1,
    eventType: "24Hr Challenge",
    location: "SRM University, Chennai",
    date: "February 2025",
    description:
      "Conquered a grueling 24-hour hackathon at SRM University. Delivered a full-stack solution under extreme time pressure, securing the top position.",
    descriptionJSX: (
      <>
        Conquered a grueling{" "}
        <span style={{ color: "#f68ed4", fontWeight: 700 }}>24-hour hackathon</span> at{" "}
        <span style={{ fontWeight: 700 }}>SRM University</span>. Delivered a{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>full-stack solution</span> under
        extreme time pressure, securing the{" "}
        <span style={{ fontWeight: 800 }}>top position</span>.
      </>
    ),
    images: [
      "/achievements/ach21.png",
      "/achievements/ach22.png",
      "/achievements/ach23.png",
    ],
  },
  {
    // Light BG — use blue
    title: "New India Vibrant Hackathon",

    position: "2nd Prize",
    positionRank: 2,
    eventType: "Grand Finale",
    location: "Surat Municipal Corporation, Surat",
    date: "December 2023",
    description:
      "Reached the grand finale of a national-level hackathon and secured second prize. Competed against top teams from across India.",
    descriptionJSX: (
      <>
        Reached the{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>grand finale</span> of a{" "}
        <span style={{ fontWeight: 700 }}>national-level</span> hackathon and secured{" "}
        <span style={{ fontWeight: 800 }}>second prize</span>. Competed against{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>top teams from across India</span>.
      </>
    ),
    images: [
      "/achievements/ach31.png",
      "/achievements/ach32.png",
    ],
  },
  {
    // Dark BG — use pink
    title: "Bureau of Indian Standards",

    position: "3rd Prize",
    positionRank: 3,
    eventType: "Competition",
    location: "Sri Krishna College, Coimbatore",
    date: "January 2026",
    description:
      "Recognized by the Bureau of Indian Standards for excellence in technical innovation. Placed third in a competitive field of participants.",
    descriptionJSX: (
      <>
        Recognized by the{" "}
        <span style={{ color: "#f68ed4", fontWeight: 700 }}>Bureau of Indian Standards</span> for
        excellence in{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>technical innovation</span>. Placed{" "}
        <span style={{ fontWeight: 800 }}>third</span> in a competitive field of participants.
      </>
    ),
    images: [
      "/achievements/ach41.jpeg",
      "/achievements/ach42.png",
      "/achievements/ach43.png",
    ],
  },
  {
    // Light BG — use blue
    title: "Bitathon 2026 — Top 8 Finalist",

    position: "Top 8 Finalist",
    positionRank: 0,
    eventType: "Analytics",
    location: "Goa Institute of Management, Goa",
    date: "February 2026",
    description:
      "Secured a Top 8 Finalist position at Bitathon 2026, hosted by Goa Institute of Management. Competing with highly talented teams from across India and advancing to the final round marked a significant milestone.",
    descriptionJSX: (
      <>
        Secured a{" "}
        <span style={{ fontWeight: 800 }}>Top 8 Finalist</span> position at{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>Bitathon 2026</span>, hosted by{" "}
        <span style={{ color: "#4767e8", fontWeight: 700 }}>Goa Institute of Management</span>. Competing with
        highly talented teams from across{" "}
        <span style={{ fontWeight: 700 }}>India</span> and advancing to the{" "}
        <span style={{ fontWeight: 700 }}>final round</span> marked a significant milestone.
      </>
    ),
    images: [
      "/achievements/ach51.png",
      "/achievements/ach52.png",
      "/achievements/ach53.png",
    ],
  },
];

export default function AchievementsPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          {/* Fixed background watermark */}
          <div className="background ach-background">
            ACHIEVE
            <br />
            MENTS
          </div>

          {achievementsData.map((item, index) => (
            <AchievementSection
              key={index}
              item={item}
              index={index}
              length={achievementsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
