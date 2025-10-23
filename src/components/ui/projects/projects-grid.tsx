"use client";

import { useState } from "react";
import Image from "next/image";
import { Category, Project } from "./projects-section";
import MotionDiv from "@/components/animation/motion-div";
import LinkIcon from "@/components/icons/link-icon";

interface ProjectsGridProps {
  items: Project[];
  categories: Category[];
}

export default function ProjectsGrid({ items, categories }: ProjectsGridProps) {
  const [currentActive, setCurrentActive] = useState<string>("MachineLearning");
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredItems = items.filter((item) => item.category.includes(currentActive));
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <div className="flex flex-col gap-70">
      <div className="type-project">
        <ul className="flex gap-25 md:gap-[25px] text-center items-center justify-center flex-wrap">
          {categories.map((cat) => (
            <li
              key={cat.key}
              onClick={() => {
                setCurrentActive(cat.key);
                setShowAll(false);
              }}
              className={`min-w-115 px-25 h-55 py-15 border rounded-full text-xs xl:text-sm md:text-base border-neutral-600 text-neutral-600  dark:text-neutral-400 font-normal cursor-pointer ${
                currentActive === cat.key ? "active" : ""
              }`}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center gap-x-25 gap-y-35 sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {displayedItems.map(({ id, image, title, des }) => (
          <MotionDiv
            key={id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-background shadow-sm"
          >
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-t-2xl object-cover w-full"
            />
            <div className="p-4 flex justify-between items-end">
              <div>
                <h3 className="text-lg font-bold text-neutral-700 dark:text-stone-300">{title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{des}</p>
              </div>
              <a
                href="#"
                aria-label={`Visit ${title}`}
                className="hover:rotate-45 transition-transform duration-300"
              >
                <LinkIcon />
              </a>
            </div>
          </MotionDiv>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          disabled={filteredItems.length <= 6}
          className={`font-normal text-base border rounded-full text-neutral-600 dark:text-white border-neutral-600 transition duration-300 rounded-75 w-210 h-56 text-center cursor-pointer
          ${filteredItems.length <= 6 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
}
