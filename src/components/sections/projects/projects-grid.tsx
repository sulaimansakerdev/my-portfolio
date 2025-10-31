"use client";

import { useState } from "react";
import CategoryFilter from "./category-filter";
import ProjectCard from "./project-card";
import AnimatedDiv from "@/components/animation/animated-div";
import Category from "@/interfaces/category";
import Project from "@/interfaces/project";

interface ProjectsGridProps {
  categories: Category[];
  projects: Project[];
}

export default function ProjectsGrid({ categories, projects }: ProjectsGridProps) {
  const [currentActive, setCurrentActive] = useState("MachineLearning");

  const filteredItems = projects.filter((item) => item.category.includes(currentActive));

  const handleCategorySelect = (key: string) => {
    setCurrentActive(key);
  };

  return (
    <div className="flex flex-col gap-70">
      <CategoryFilter
        categories={categories}
        onSelect={handleCategorySelect}
        activeKey={currentActive}
      />

      <div className="flex flex-col justify-center items-center gap-x-25 gap-y-35 sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((project, index) => {
          const delay = Math.floor(index / 3) * 0.3;

          return (
            <AnimatedDiv
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay, duration: 1.5 }}
            >
              <ProjectCard project={project} />
            </AnimatedDiv>
          );
        })}
      </div>
    </div>
  );
}
