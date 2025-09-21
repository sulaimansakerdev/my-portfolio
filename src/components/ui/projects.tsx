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
  const filteredItems = items.filter((item) =>
    item.category.includes(currentActive)
  );
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}>

      <div id="projects" className="text-center">
        <h2 className="font-extrabold text-[24px] md:text-[34px] xl:text-[2.8125rem] text-[var(--maintitle)]">
          Projects
        </h2>

        <div className="font-semibold color-gradiant mb-[40px] text-center text-[13px] md:text-[0.875rem]">
          <span className="[background-image:var(--titlegradient)] to-white bg-clip-text text-transparent">
            Some of my Work
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-70">
        <div className="type-project">

          <ul className="flex gap-[25px] md:gap[25px] text-center items-center justify-center flex-wrap">
            {categories.map((cat) => (
              <li key={cat.key} onClick={() => {
                  setCurrentActive(cat.key);
                  setShowAll(false);}}
                  className={`min-w-[115px] px-[25px] h-[55px] py-[15px] rounded-[50px] border text-[13px] xl:text-[0.875rem]  md:text-[17px] border-[#484E53] text-[#484E53] text-base font-normal cursor-pointer ${
                    currentActive === cat.key ? "active" : ""
                  }`} >

                {cat.label}

              </li>
            ))}
          </ul>

        </div>

        <div className="flex flex-col justify-center items-center gap-x-25 gap-y-[35px] sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {displayedItems.map(({ id, image, title, des }) => (

            <motion.div
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", stiffness: 24 }}
              key={id}
              className="transition-transform duration-300  rounded-2xl  bg-[var(--background)]">

              <div>
                <img className="object-cover w-full rounded-tr-2xl rounded-tl-2xl " src={image} alt={title}/>
                <div className="pb-[10px] pt-[7px] flex justify-between items-end">
                  <div>

                    <div className="pt-[12px] text-2xl mb-18 text-[18px] font-bold mt-5 text-[var(--title)]">
                      {title}
                    </div>

                    <p className=" text-sm text-[var(--subtitle)] text-body-text-color">
                      {des}
                    </p>

                  </div>

                  <a className="hover:rotate-[45deg] transition-transform duration-300  cursor-pointer" href="">
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
            className={` text-[var(--title)] border border-[#484E53] transition duration-300 rounded-[75px] w-[210px] h-[56px] text-center cursor-pointer
            ${filteredItems.length <= 6 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}>

            {showAll ? "Show Less" : "View All"}

          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default Projects;
