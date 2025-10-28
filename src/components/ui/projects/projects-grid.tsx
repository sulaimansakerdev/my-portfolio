"use client";

import { useState } from "react";
import { Category, Project } from "./projects";
import CategoryFilter from "./category-filter";
import ProjectCard from "./project-card";
import Button from "../button";
import classNames from "classnames";

interface ProjectsGridProps {
  items: Project[];
  categories: Category[];
}

export default function ProjectsGrid({ items, categories }: ProjectsGridProps) {
  const [currentActive, setCurrentActive] = useState("MachineLearning");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = items.filter((item) => item.category.includes(currentActive));

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const handleCategorySelect = (key: string) => {
    setCurrentActive(key);
    setShowAll(false);
  };

  return (
    <div className="flex flex-col gap-70">
      <CategoryFilter
        categories={categories}
        onSelect={handleCategorySelect}
        activeKey={currentActive}
      />

      <div className="flex flex-col justify-center items-center gap-x-25 gap-y-35 sm:flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {displayedItems.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          variant="rounded"
          onClick={() => setShowAll(!showAll)}
          className={classNames({ hidden: filteredItems.length <= 6 })}
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}
