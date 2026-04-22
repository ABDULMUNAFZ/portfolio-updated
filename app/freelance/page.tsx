"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Counseling & <br />Healing Services
      </>
    ),
    description: "Freelance Website",
    link: "#",
    imageLink: "/img/projects/1.avif",
  },
  {
    title: (
      <>
        Custom Bakery <br />Concept Website
      </>
    ),
    description: "Freelance Website",
    link: "#",
    imageLink: "/img/projects/2.avif",
  },
  {
    title: (
      <>
        Smart India <br />Hackathon (SIH)
      </>
    ),
    description: "Hackathon Project",
    link: "#",
    imageLink: "/img/projects/3.avif",
  },
  {
    title: (
      <>
        Transport & <br />Logistics App
      </>
    ),
    description: "Hackathon Project",
    link: "#",
    imageLink: "/img/projects/4.avif",
  },
  {
    title: (
      <>
        Reinforcement <br />Learning Game
      </>
    ),
    description: "Hackathon Project",
    link: "#",
    imageLink: "/img/projects/5.avif",
  },
];

export default function FreelancePage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            FREELANCE
            <br />
            WORK
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
