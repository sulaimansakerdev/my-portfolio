"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Service from "@/interfaces/service";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { theme } = useTheme();

  const { id, title, des, iconDark, iconLight } = service;

  return (
    <article
      tabIndex={0}
      aria-labelledby={`service-${id}-title`}
      aria-describedby={`service-${id}-desc`}
      className="w-full dark:border dark:border-zinc-800 rounded-2xl p-26 bg-white dark:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      <Image
        src={theme === "dark" ? iconDark : iconLight}
        alt={title}
        width={40}
        height={40}
        className="mb-18"
      />

      <h3 id={`service-${id}-title`} className="font-semibold dark:text-white text-base mb-18">
        {title}
      </h3>

      <p
        id={`service-${id}-desc`}
        className="font-normal text-sm text-body-text-color text-neutral-600 dark:text-neutral-200"
      >
        {des}
      </p>
    </article>
  );
};

export default ServiceCard;
