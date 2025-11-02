import Hero from "@/components/sections/hero";
import AboutMe from "@/components/sections/about-me";
import GetInTouch from "@/components/sections/contact/get-in-touch";
import LetsWorkTogether from "@/components/sections/lets-work-together";
import WhatIDo from "@/components/sections/services/what-i-do";
import Projects from "@/components/sections/projects/projects";
import AnimatedDiv from "@/components/animation/animated-div";
import HeroBackground from "@/components/ui/hero-background";

export default function Home() {
  return (
    <main>
      <div
        className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex justify-center overflow-clip"
        aria-hidden="true"
      >
        <AnimatedDiv
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <HeroBackground className="h-[100vh]" />
        </AnimatedDiv>
      </div>

      <div className="container flex justify-center md:mb-177">
        <div className="lg:w-1/2">
          <Hero />
        </div>
      </div>

      <div className="container flex justify-center mb-90 md:mb-155">
        <div className="lg:w-1/2">
          <AboutMe />
        </div>
      </div>

      <div className="container mb-90 md:mb-155">
        <WhatIDo />
      </div>

      <div className="container mb-90 md:mb-155">
        <Projects />
      </div>

      <div className="container mb-90 md:mb-155">
        <GetInTouch />
      </div>

      <div className="container border-b">
        <LetsWorkTogether />
      </div>
    </main>
  );
}
