import React from "react";
import { HeroSection } from "@/components/heroSection/heroSection";
import { AboutSection } from "@/components/aboutSection/aboutSection";
import { SkillsSection } from "@/components/skillsSection/skillsSection";
import { ExperienceSection } from "@/components/experienceSection/experienceSection";
import { ProjectsSection } from "@/components/projectsSection/projectsSection";
import { ContactSection } from "@/components/contactSection/contactSection";

export function Main() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
