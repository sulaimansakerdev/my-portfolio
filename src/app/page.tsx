import Hero from "@/components/sections/hero";
import AboutMe from "@/components/sections/about-me";
import GetInTouch from "@/components/sections/get-in-touch";
import LetsWorkTogether from "@/components/sections/lets-work-together";
import WhatIDo from "@/components/sections/what-i-do";
import Projects from "@/components/sections/projects/projects";

export default function Home() {
  return (
    <main>
      <div className="md:mb-177">
        <Hero />
      </div>

      <div className="flex justify-center mb-90 md:mb-155">
        <div className="w-3/4 md:w-1/2">
          <AboutMe />
        </div>
      </div>

      <div className="container mb-155">
        <WhatIDo />
      </div>

      <div className="container mb-155">
        <Projects />
      </div>

      <div className="container mb-155">
        <GetInTouch />
      </div>

      <div className="container border-b">
        <LetsWorkTogether />
      </div>
    </main>
  );
}
