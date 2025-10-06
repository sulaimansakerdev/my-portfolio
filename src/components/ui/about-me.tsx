"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./button";
import ButtonAsLink from "./buttonAsLink";

const AboutMe: React.FC = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h2
        id="about"
        className="font-extrabold text-2xl md:text-3xl xl:text-5xl text-neutral-600 dark:text-white  scroll-mt-60"
      >
        About Me
      </h2>

      <div className="font-semibold color-gradiant mb-40 text-center text-sm">
        <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent font-semibold color-gradiant mb-40 text-center text-xs xl:text-sm md:text-base">
          Get to know me
        </span>
      </div>

      <p id="resume" className="mb-40 font-medium sm:text-xs md:text-base dark:text-neutral-200 text-neutral-600">
        I am Sulaiman Saker, a Software Engineer with 7+ years of experience. I am based in Dubai.
        <br />
        <br />I began my career in 2017 at Haram Transfers, developing desktop accounting
        applications using C#, Windows Forms and SQL Server, which provided me with a strong
        foundation in backend systems, data modeling, and enterprise software development. <br />
        <br />I then transitioned into frontend development, mastering React.js, Next.js and
        Typescript. Between 2018 and 2021, I worked at ISoft, Smart Soft, and Wizme, where I built
        responsive interfaces, reusable component libraries, ERP solution, and a meeting management
        platform.
        <br />
        <br />
        In 2021, I joined Cloud Systems in Beirut as a full stack developer, delivering 10+
        applications, including platforms such as Knowledge4All, ARENA (Management System) and
        Lebanon’s Ministry of Agriculture.
        <br />
        <br /> Later, at Brain Click Ads in Dubai, I contributed to 5+ major projects including WOW
        VIR (multi-vendor e-commerce) and CONSEAS (healthcare platform). My role spanned both
        frontend and backend development, database design and deployment.
        <br />
        <br /> Currently, I am part of Vianeos, where I contribute to eLife, Etisalat’s IPTV and OTT
        platform serving 700k+ users across the UAE.
        <br />
        <br /> Throughout my career, I have built strong expertise in clean code practices, DevOps,
        and performance optimization. My technical stack includes JavaScript, TypeScript, React.js,
        Next.js, C#, ASP.NET, Node.js, MongoDB, MySQL, and more.
      </p>

      <ButtonAsLink
        href="https://docs.google.com/document/d/1INrQzOB_rxyKBxSJrnYwZFc0X0jbXM-U"
        variant="rounded"
      >
        Download Resume
      </ButtonAsLink>
    </motion.div>
  );
};

export default AboutMe;
