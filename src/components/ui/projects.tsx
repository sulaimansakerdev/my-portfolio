"use client";
import { useState } from "react";
import LinkIcon from "../icons/link-icon";
import { motion } from "framer-motion";

const items = [
  {
    id: "1",
    image: "/assets/images/project-image.png",
    title: "Project name/description",
    des: "Technology used sql AILLMS",
    category: ["sql", "AiLLMS"],
  },
  {
    id: "2",
    image: "/assets/images/project-image.png",
    title: "Project name/description",
    des: "Web Design / Usability Testing sql DATa",
    category: ["sql", "DataScience"],
  },
  {
    id: "3",
    image: "/assets/images/project-image.png",
    title: "Natural Language Processing",
    des: "Web Design / Usability Testing AILLMS DATA",
    category: ["AiLLMS", "DataScience"],
  },
  {
    id: "4",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS", "PowerBI"],
  },
  {
    id: "5",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS", "MachineLearning"],
  },
  {
    id: "6",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS", "MachineLearning"],
  },
  {
    id: "7",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["sql"],
  },
  {
    id: "8",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["sql"],
  },
  {
    id: "9",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["sql"],
  },
  {
    id: "10",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["sql"],
  },
  {
    id: "11",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["sql"],
  },
  {
    id: "12",
    image: "/assets/images/pro-img-1.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
  {
    id: "13",
    image: "/assets/images/pro-img-2.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
  {
    id: "14",
    image: "/assets/images/pro-img-3.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
  {
    id: "15",
    image: "/assets/images/pro-img-4.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
];

const categories = [
  { key: "MachineLearning", label: "Machine Learning" },
  { key: "sql", label: "SQL" },
  { key: "PowerBI", label: "Power BI" },
  { key: "AiLLMS", label: "AI/LLMs" },
  { key: "DataScience", label: "Spatial Data Science" },
];

const Projects = () => {
  const [currentActive, setCurrentActive] = useState("MachineLearning");
  const [showAll, setShowAll] = useState(false);
  const [fade, setFade] = useState(false);
  const filteredItems = items.filter((item) => item.category.includes(currentActive));
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div id="projects" className="text-center scroll-mt-60">
        <h2 className="font-extrabold text-neutral-600 dark:text-white text-2xl md:text-3xl xl:text-5xl">
          Projects
        </h2>

        <div className="font-semibold color-gradiant mb-40 text-center text-xs md:text-sm">
          <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent">
            Some of my Work
          </span>
        </div>
      </div>

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
            <motion.div
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", stiffness: 24 }}
              key={id}
              className="transition-transform duration-300 rounded-2xl bg-background"
            >
              <div>
                <img
                  className="object-cover w-full rounded-tr-2xl rounded-tl-2xl"
                  src={image}
                  alt={title}
                />
                <div className="pb-10 pt-7 flex justify-between items-end">
                  <div>
                    <div className="pt-12 mb-18 text-xl font-bold mt-5 text-neutral-600 dark:text-stone-300">{title}</div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 text-body-text-color">
                      {des}
                    </p>
                  </div>

                  <a
                    className="hover:rotate-[45deg] transition-transform duration-300 cursor-pointer"
                    href=""
                  >
                    <LinkIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            disabled={filteredItems.length <= 6}
            className={`font-normal text-base border text-neutral-600 dark:text-white border-neutral-600 transition duration-300 rounded-75 w-210 h-56 text-center cursor-pointer
          ${filteredItems.length <= 6 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
