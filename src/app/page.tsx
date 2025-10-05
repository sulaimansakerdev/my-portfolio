import Hero from "@/components/layout/hero";
import AboutMe from "@/components/ui/about-me";
import LetsWorkTogether from "@/components/ui/lets-work-together";
import Projects from "@/components/ui/projects";
import WhatIDo from "@/components/ui/what-i-ido";
import GetInTouch from "@/components/ui/get-in-touch";

export default function Home() {
  return (
    <main className="fade-up">
      <div className="mb-177">
        <Hero />
      </div>

      <div className="flex justify-center mb-155">
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
