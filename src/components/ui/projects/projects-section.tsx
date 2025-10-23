import MotionDiv from "@/components/animation/motion-div";
import ProjectsGrid from "./projects-grid";

export type Project = {
  id: string;
  image: string;
  title: string;
  des: string;
  category: string[];
};

export type Category = {
  key: string;
  label: string;
};

const items: Project[] = [
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

const categories: Category[] = [
  { key: "MachineLearning", label: "Machine Learning" },
  { key: "sql", label: "SQL" },
  { key: "PowerBI", label: "Power BI" },
  { key: "AiLLMS", label: "AI/LLMs" },
  { key: "DataScience", label: "Spatial Data Science" },
];

export default function ProjectsSection() {
  return (
    <MotionDiv
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

      <ProjectsGrid items={items} categories={categories} />
    </MotionDiv>
  );
}
