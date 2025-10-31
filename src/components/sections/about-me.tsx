import React from "react";
import AnimatedDiv from "../animation/animated-div";
import SectionHeader from "../ui/section-header";
import ButtonAsLink from "../ui/button-as-link";

const AboutMe: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="about" className="text-center">
        <SectionHeader title="About Me" subtitle="Get to know me" />

        <p className="mb-40 font-medium sm:text-xs md:text-base dark:text-neutral-200 text-neutral-600">
          Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive
          modeling, natural language processing, machine learning, and AI chatbots. With a passion
          for unraveling insights from complex datasets, I'm dedicated to helping businesses make
          informed decisions and stay ahead in today's data-driven world.
          <br />
          <br />I bring a blend of technical expertise, hands-on experience, and a commitment to
          clear communication to every project. Whether it's uncovering hidden patterns, predicting
          future trends, or automating processes with AI, I'm here to help you harness the full
          potential of your data. <br />
          <br />
          Let's work together to transform your data into actionable insights that drive real
          results. Get in touch, and let's start unlocking the power of your data today!
        </p>

        <ButtonAsLink href="your_resume_link" variant="rounded">
          Download Resume
        </ButtonAsLink>
      </section>
    </AnimatedDiv>
  );
};

export default AboutMe;
