import React from "react";
import { Header } from "@/components/header";
import { Bulge } from "@/components/bulge";
import { ImageCollage } from "./imageCollage";
import { cn } from "@/lib/utils";

export type AchievementData = {
  title: string;
  position: string;
  positionRank: number; // 1,2,3 for podium, 0 for other
  eventType: string;
  location: string;
  date: string;
  description: string;
  descriptionJSX?: React.ReactNode; // Rich colored description
  images: string[];
};

type AchievementSectionProps = {
  item: AchievementData;
  index: number;
  length: number;
  color: "Dark" | "Light";
};

export function AchievementSection({
  item,
  index,
  color,
  length,
}: AchievementSectionProps) {
  const possibleTailwindClasses = [
    "text-colorDark",
    "text-colorLight",
    "bg-colorDark",
    "bg-colorLight",
    "bg-colorSecondaryDark",
    "bg-colorSecondaryLight",
  ];

  // color = text color. "Dark" text → light background, "Light" text → dark background
  // isDarkBg = whether the BACKGROUND is dark (i.e. text is "Light")
  const isDarkBg = color === "Light";

  // Position emoji
  const positionEmoji =
    item.positionRank === 1
      ? "🥇"
      : item.positionRank === 2
        ? "🥈"
        : item.positionRank === 3
          ? "🥉"
          : "🏆";

  // Rank class
  const rankClass = `rank-${item.positionRank}`;

  // Theme-aware colors
  const accentColor = "#4767e8";
  const pinkColor = "#f68ed4";
  const blueColor = "#4767e8";
  const primaryColor = isDarkBg ? "#fcf2ff" : "#1c1c1c";

  // Secondary accent: blue on light bg, pink on dark bg
  const secondaryAccent = isDarkBg ? pinkColor : blueColor;

  // Meta icon background based on theme
  const metaIconBg = isDarkBg
    ? "rgba(90,51,249,0.15)"
    : "rgba(71,103,232,0.08)";
  const metaIconBorder = isDarkBg
    ? "1px solid rgba(90,51,249,0.25)"
    : "1px solid rgba(71,103,232,0.15)";

  // Event type pill style
  const eventTypeBg = isDarkBg
    ? "rgba(246,142,212,0.15)"
    : "rgba(71,103,232,0.1)";
  const eventTypeColor = isDarkBg ? pinkColor : blueColor;
  const eventTypeBorder = isDarkBg
    ? `1px solid rgba(246,142,212,0.3)`
    : `1px solid rgba(71,103,232,0.2)`;

  return (
    <div
      className={`section s${index} ${color === "Dark" ? "lightGradient" : "darkGradient"} text-color${color}`}
    >
      <Header color={color} />
      <Bulge type={color} />

      <div className="flex h-[100dvh] w-full items-center px-paddingX">
        <div className="ach-slide mx-auto max-w-maxWidth">
          <div className="ach-inner">
            {/* LEFT — Image Collage */}
            <div className="ach-collage-wrap anime">
              <ImageCollage images={item.images} color={color} />
            </div>

            {/* RIGHT — Details */}
            <div className="ach-details anime">
              {/* Faded number */}
              <div
                className="ach-number"
                style={{ color: isDarkBg ? "rgba(222,244,56,0.06)" : "rgba(28,28,28,0.06)" }}
              >
                0{index + 1}
              </div>

              {/* Event type tag */}
              <span
                className="ach-event-type"
                style={{
                  background: eventTypeBg,
                  color: eventTypeColor,
                  border: eventTypeBorder,
                }}
              >
                {item.eventType}
              </span>

              {/* Accent line — gradient with portfolio colors */}
              <div
                className="ach-accent-line"
                style={{
                  background: `linear-gradient(90deg, ${accentColor} 0%, ${pinkColor} 100%)`,
                }}
              />

              {/* Title — single solid color */}
              <h2
                className="ach-title"
                style={{ color: isDarkBg ? "#def438" : "#4767e8" }}
              >
                {item.title}
              </h2>

              {/* Position badge */}
              <div className={`ach-position-badge ${rankClass}`}>
                <span>{positionEmoji}</span>
                <span>{item.position}</span>
              </div>

              {/* Description — multi-color */}
              {(item.descriptionJSX || item.description) && (
                <p className="ach-desc">
                  {item.descriptionJSX || item.description}
                </p>
              )}

              {/* Meta details — always left-aligned */}
              <div className="ach-meta-container ach-meta-left">
                <div className="ach-meta-item">
                  <div
                    className="ach-meta-icon"
                    style={{ background: metaIconBg, border: metaIconBorder }}
                  >
                    📍
                  </div>
                  <div className="flex flex-col">
                    <span className="ach-meta-label" style={{ color: secondaryAccent }}>
                      Venue
                    </span>
                    <span className="ach-meta-value">{item.location}</span>
                  </div>
                </div>

                <div className="ach-meta-item">
                  <div
                    className="ach-meta-icon"
                    style={{ background: metaIconBg, border: metaIconBorder }}
                  >
                    📅
                  </div>
                  <div className="flex flex-col">
                    <span className="ach-meta-label" style={{ color: secondaryAccent }}>
                      Date
                    </span>
                    <span className="ach-meta-value">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div className="anime absolute bottom-10 flex w-full items-end justify-center gap-6">
        {Array(length)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                `h-4 w-1 rounded-full`,
                i === index
                  ? `h-10`
                  : "",
              )}
              style={{
                backgroundColor: i === index
                  ? accentColor
                  : isDarkBg
                    ? "rgba(222,244,56,0.25)"
                    : "rgba(28,28,28,0.2)",
              }}
            />
          ))}
      </div>
    </div>
  );
}
