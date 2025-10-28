import React from "react";
import MotionDiv from "../animation/motion-div";
import SectionHeader from "../ui/section-header";

const items = [
  {
    id: "1",
    title: "Data Analytics & Visualization",
    des: "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
  },
  {
    id: "2",
    title: "Predictive Analytics and Forecasting",
    des: "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success",
  },
  {
    id: "3",
    title: "Natural Language Processing",
    des: "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age",
  },
  {
    id: "4",
    title: "AI Chatbots",
    des: "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
  },
  {
    id: "5",
    title: "Machine Learning",
    des: "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success",
  },
  {
    id: "6",
    title: "Natural Language Processing",
    des: "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age",
  },
];

const WhatIDo: React.FC = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <SectionHeader id="services" title="What I do" subtitle="My Services" />

      <div className="flex flex-col justify-center items-center gap-x-20 gap-y-26 sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {items.map(({ id, title, des }, index) => (
          <MotionDiv
            key={id}
            className="border md:w-full w-[85%] border-zinc-800 rounded-2xl p-40 bg-white dark:bg-neutral-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <div>
              <div className="font-semibold dark:text-white text-base mb-18 h-64">{title}</div>

              <p className="font-normal text-sm text-body-text-color h-121 text-neutral-600 dark:text-neutral-200">
                {des}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
};
export default WhatIDo;
