import Category from "@/interfaces/category";
import classNames from "classnames";

interface CategoryFilterProps {
  categories: Category[];
  onSelect: (key: string) => void;
  activeKey: string;
}

export default function CategoryFilter({ categories, onSelect, activeKey }: CategoryFilterProps) {
  return (
    <ul className="flex gap-25 md:gap-25 text-center items-center justify-center flex-wrap">
      {categories.map((cat) => (
        <li
          key={cat.key}
          onClick={() => onSelect(cat.key)}
          className={classNames(
            "min-w-115 px-25 h-55 py-15 border rounded-full text-xs xl:text-sm md:text-base border-neutral-600 cursor-pointer",
            {
              "bg-neutral-600 text-neutral-100": activeKey === cat.key,
              "text-neutral-600 dark:text-neutral-400": activeKey !== cat.key,
            }
          )}
        >
          {cat.label}
        </li>
      ))}
    </ul>
  );
}
