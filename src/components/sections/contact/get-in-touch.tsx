import React from "react";
import AnimatedDiv from "../../animation/animated-div";
import SectionHeader from "../../ui/section-header";
import ContactForm from "./contact-form";

const GetInTouch: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="contact-me" aria-labelledby="contact-heading">
        <SectionHeader title="Get In Touch" subtitle="Let's work together" className="mb-40" />

        <div className="flex items-center justify-center">
          <div className="w-600">
            <ContactForm />
          </div>
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default GetInTouch;
