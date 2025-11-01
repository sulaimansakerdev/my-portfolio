import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = "", id }) => {
  return (
    <header
      className={`text-center ${className}`}
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <h2
        id={id ? `${id}-title` : undefined}
        className="font-extrabold text-neutral-600 dark:text-white text-3xl xl:text-5xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="font-semibold color-gradiant text-center text-sm">
          <span className="[background-image:var(--subtitle-gradient)] to-white bg-clip-text text-transparent">
            {subtitle}
          </span>
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
