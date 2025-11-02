import React from "react";
import Category from "@/interfaces/category";
import CategoryItem from "./category-item";

interface CategoryFilterProps {
  categories: Category[];
  onSelect: (key: string) => void;
  activeKey: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelect, activeKey }) => {
  return (
    <ul
      className="flex gap-16 md:gap-25 items-center justify-center flex-wrap"
      role="list"
      aria-label="Category filter"
    >
      {categories.map((category) => (
        <CategoryItem
          key={category.key}
          category={category}
          isActive={activeKey === category.key}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default CategoryFilter;
