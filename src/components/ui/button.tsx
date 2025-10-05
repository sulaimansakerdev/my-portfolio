import classNames from "classnames";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "normal" | "rounded";
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ variant = "normal", children, className }) => {
  return (
    <button
      className={classNames(
        "border border-neutral-600 dark:border-sky-400 hover:bg-sky-400 hover:text-white cursor-pointer transition duration-300",
        {
          "rounded-lg md:px-10 lg:px-16 py-12": variant === "normal",
          "rounded-full px-49.5 py-16": variant === "rounded",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
