import Category from "@/interfaces/category";
import classNames from "classnames";

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
      {categories.map((cat) => {
        const isActive = activeKey === cat.key;

        return (
          <li
            key={cat.key}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onClick={() => onSelect(cat.key)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(cat.key);
              }
            }}
            className={classNames(
              "lg:min-w-115 px-25 h-55 py-15 border rounded-full text-xs xl:text-sm md:text-base border-neutral-600 cursor-pointer select-none",
              {
                "bg-neutral-600 text-neutral-100": isActive,
                "text-neutral-600 dark:text-neutral-400": !isActive,
              }
            )}
          >
            {cat.label}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryFilter;
