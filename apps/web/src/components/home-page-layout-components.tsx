import React from "react";
import { HeroSection } from "./hero-section";
import { AboutMeDescription } from "./about-me-description";
import { WebsitesShowcase } from "./website-links-showcase";

export function HomePageLayoutComponents() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto text-center">
        <AboutMeDescription />
        <WebsitesShowcase />
      </div>
    </>
  );
}
