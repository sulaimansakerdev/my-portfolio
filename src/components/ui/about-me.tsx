"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./button"; 

const AboutMe: React.FC = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}>
      <h2 id="about" className="font-extrabold text-[24px] md:text-[34px] xl:text-[2.8125rem] text-[var(--maintitle)]">About Me</h2>
      <div className="font-semibold color-gradiant mb-[40px] text-center text-[0.875rem] ">
        <span className="[background-image:var(--titlegradient)] to-white bg-clip-text text-transparent font-semibold color-gradiant mb-40 text-center  text-[13px] xl:text-[0.875rem] md:text-[17px] ">
        Get to know me
        </span>
      </div>

      <p  id="resume" className=" text-[var(--title)] mb-40 sm:text-[13px] md:text-[17px] ">
        Hi there! I'm [Your Name], a data scientist specializing in data
        analytics, predictive modeling, natural language processing, machine
        learning, and AI chatbots. With a passion for unraveling insights from
        complex datasets, I'm dedicated to helping businesses make informed
        decisions and stay ahead in today's data-driven world. <br /> <br /> I
        bring a blend of technical expertise, hands-on experience, and a
        commitment to clear communication to every project. Whether it's
        uncovering hidden patterns, predicting future trends, or automating
        processes with AI, I'm here to help you harness the full potential of
        your data. <br /> <br /> Let's work together to transform your data into
        actionable insights that drive real results. Get in touch, and let's
        start unlocking the power of your data today!
      </p>
      <Button variant="rounded">Download Resume</Button>
    </motion.div>
  );
};

export default AboutMe;
