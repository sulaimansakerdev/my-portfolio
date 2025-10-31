import React from "react";
import AnimatedDiv from "../animation/animated-div";
import SectionHeader from "../ui/section-header";
import services from "@/config/services";

const WhatIDo: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="services">
        <SectionHeader title="What I do" subtitle="My Services" />

        <div className="flex flex-col justify-center items-center gap-x-20 gap-y-26 sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map(({ id, title, des }, index) => {
            const delay = Math.floor(index / 3) * 0.3;

            return (
              <AnimatedDiv
                key={id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.5 }}
              >
                <div className="border md:w-full w-[85%] border-zinc-800 rounded-2xl p-40 bg-white dark:bg-neutral-800">
                  <h3 className="font-semibold dark:text-white text-base mb-18 h-64">{title}</h3>
                  <p className="font-normal text-sm text-body-text-color h-121 text-neutral-600 dark:text-neutral-200">
                    {des}
                  </p>
                </div>
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default WhatIDo;
