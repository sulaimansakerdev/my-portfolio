import AnimatedDiv from "@/components/animation/animated-div";
import ProjectsGrid from "./projects-grid";
import SectionHeader from "@/components/ui/section-header";

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
    category: ["sql"],
  },
  {
    id: "2",
    image: "/assets/images/project-image.png",
    title: "Project name/description",
    des: "Web Design / Usability Testing sql DATa",
    category: ["sql"],
  },
  {
    id: "3",
    image: "/assets/images/project-image.png",
    title: "Natural Language Processing",
    des: "Web Design / Usability Testing AILLMS DATA",
    category: ["AiLLMS"],
  },
  {
    id: "4",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS"],
  },
  {
    id: "5",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS"],
  },
  {
    id: "6",
    image: "/assets/images/project-image.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS"],
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
  {
    id: "16",
    image: "/assets/images/pro-img-1.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS"],
  },
  {
    id: "17",
    image: "/assets/images/pro-img-2.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["AiLLMS"],
  },
  {
    id: "18",
    image: "/assets/images/pro-img-3.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "19",
    image: "/assets/images/pro-img-4.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "20",
    image: "/assets/images/pro-img-1.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "21",
    image: "/assets/images/pro-img-2.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "22",
    image: "/assets/images/pro-img-3.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "23",
    image: "/assets/images/pro-img-4.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["DataScience"],
  },
  {
    id: "24",
    image: "/assets/images/pro-img-1.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
  {
    id: "25",
    image: "/assets/images/pro-img-2.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
  {
    id: "26",
    image: "/assets/images/pro-img-3.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
  {
    id: "27",
    image: "/assets/images/pro-img-4.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
  {
    id: "28",
    image: "/assets/images/pro-img-1.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
  {
    id: "29",
    image: "/assets/images/pro-img-2.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["MachineLearning"],
  },
  {
    id: "30",
    image: "/assets/images/pro-img-3.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
  {
    id: "31",
    image: "/assets/images/pro-img-4.png",
    title: "Educational Platform",
    des: "Web Design / Usability Testing",
    category: ["PowerBI"],
  },
];

const categories: Category[] = [
  { key: "MachineLearning", label: "Machine Learning" },
  { key: "sql", label: "SQL" },
  { key: "PowerBI", label: "Power BI" },
  { key: "AiLLMS", label: "AI/LLMs" },
  { key: "DataScience", label: "Spatial Data Science" },
];

export default function Projects() {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="projects">
        <SectionHeader title="Projects" subtitle="Some of my Work" />

        <ProjectsGrid items={items} categories={categories} />
      </section>
    </AnimatedDiv>
  );
}
