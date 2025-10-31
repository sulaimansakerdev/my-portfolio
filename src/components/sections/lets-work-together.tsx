import React from "react";
import AnimatedDiv from "../animation/animated-div";
import EmailLink from "../ui/email-link";
import emailId from "@/config/email-id";

const LetsWorkTogether: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section className="flex gap-10 items-center justify-between mb-40">
        <h2 className="text-lg md:text-5xl lg:text-6xl font-medium tracking-wide dark:text-neutral-200 text-gray-800">
          <span className="">Let&apos;s</span>
          <br />
          <span>Work Together -</span>
        </h2>

        <EmailLink emailId={emailId} />
      </section>
    </AnimatedDiv>
  );
};

export default LetsWorkTogether;
