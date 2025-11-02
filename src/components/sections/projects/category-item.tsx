import React from "react";
import classNames from "classnames";
import Category from "@/interfaces/category";

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onSelect: (key: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isActive, onSelect }) => {
  return (
    <li
      key={category.key}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onClick={() => onSelect(category.key)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(category.key);
        }
      }}
      className={classNames(
        "text-center lg:min-w-115 px-25 h-55 py-15 border rounded-full text-xs xl:text-sm md:text-base border-neutral-600 cursor-pointer select-none",
        {
          "bg-neutral-600 text-neutral-100": isActive,
          "text-neutral-600 dark:text-neutral-400": !isActive,
        }
      )}
    >
      {category.label}
    </li>
  );
};

export default CategoryItem;
