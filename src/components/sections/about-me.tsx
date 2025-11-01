import React from "react";
import AnimatedDiv from "../animation/animated-div";
import SectionHeader from "../ui/section-header";
import ButtonAsLink from "../ui/button-as-link";
import resumeHref from "@/config/resume-href";
import aboutMe from "@/config/about-me";

const AboutMe: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section
        id="about"
        className="text-center"
        aria-labelledby="about-heading"
        aria-describedby="about-description"
      >
        <SectionHeader title="About Me" subtitle="Get to know me" className="mb-40" />

        <p
          id="about-description"
          className="mb-40 font-medium sm:text-xs md:text-base dark:text-neutral-200 text-neutral-600"
          dangerouslySetInnerHTML={{ __html: aboutMe }}
        />

        <ButtonAsLink
          newTab
          href={resumeHref}
          variant="rounded"
          aria-label="Download my resume in PDF format"
        >
          Download Resume
        </ButtonAsLink>
      </section>
    </AnimatedDiv>
  );
};

export default AboutMe;
