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
      <section id="services" aria-labelledby="services-heading">
        <SectionHeader title="What I do" subtitle="My Services" className="mb-40" />

        <div
          role="list"
          className="grid grid-cols-1 gap-x-20 gap-y-26 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center"
        >
          {services.map(({ id, title, des }, index) => {
            const delay = Math.floor(index / 3) * 0.3;

            return (
              <AnimatedDiv
                key={id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.5 }}
              >
                <article
                  tabIndex={0}
                  aria-labelledby={`service-${id}-title`}
                  aria-describedby={`service-${id}-desc`}
                  className="border w-full border-zinc-800 rounded-2xl p-40 bg-white dark:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <h3
                    id={`service-${id}-title`}
                    className="font-semibold dark:text-white text-base mb-18 h-64"
                  >
                    {title}
                  </h3>

                  <p
                    id={`service-${id}-desc`}
                    className="font-normal text-sm text-body-text-color h-121 text-neutral-600 dark:text-neutral-200"
                  >
                    {des}
                  </p>
                </article>
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default WhatIDo;
