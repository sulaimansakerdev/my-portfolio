"use client";

import React from "react";
import Button from "./button";
import GmailIcon from "../icons/gmail-icon";
import { motion } from "framer-motion";
const LetsWorkTogether: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex gap-10 align-center justify-between mb-40"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide">
        <div className="">Let&apos;s</div>
        <div>Work Together -</div>
      </div>
      <div className="flex items-center justify-center md:items-end md:justify-end">
        <a href="mailto:Georgy@gmail.com">
          <Button className="flex items-center justify-center md:items-center md:justify-center gap-5 text-base md:text-lg lg:text-2xl px-10">
            <GmailIcon />
            Georgy@gmail.com
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default LetsWorkTogether;
