'use client';
import React from "react";
import { HeroSectionOne } from "./hero-section-1";
import Skills from "./skills-list";
import { AboutMeDescription } from "./about-me-description";
import Contact from "@/app/contact/page";

export function HomePageLayoutComponents() {
  return (
    <>
      <HeroSectionOne />
      <AboutMeDescription />
      <Skills />
      <Contact />
    </>
  );
}
