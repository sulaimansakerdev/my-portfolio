import React from "react";
import classNames from "classnames";

type ButtonVariant = "normal" | "rounded";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "normal", children, className, ...props }) => {
  return (
    <button
      type="button"
      className={classNames(
        "border border-neutral-600 dark:border-sky-400 hover:bg-sky-400 hover:text-white cursor-pointer",
        {
          "rounded-lg md:px-10 lg:px-16 py-12": variant === "normal",
          "rounded-full px-49.5 py-16": variant === "rounded",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
