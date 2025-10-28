import React from "react";

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle, className = "" }) => {
  return (
    <div id={id} className={`text-center ${className}`}>
      <h2 className="font-extrabold text-neutral-600 dark:text-white text-2xl md:text-3xl xl:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <div className="font-semibold color-gradiant mb-40 text-center text-xs md:text-sm">
          <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
