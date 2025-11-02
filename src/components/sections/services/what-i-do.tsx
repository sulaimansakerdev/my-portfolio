import React from "react";
import AnimatedDiv from "../../animation/animated-div";
import SectionHeader from "../../ui/section-header";
import services from "@/config/services";
import ServiceCard from "./service-card";

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
          {services.map((service, index) => {
            const delay = Math.floor(index / 3) * 0.3;

            return (
              <AnimatedDiv
                key={service.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 1.5 }}
              >
                <ServiceCard service={service} />
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default WhatIDo;
