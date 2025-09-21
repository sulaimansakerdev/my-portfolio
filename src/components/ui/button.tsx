import classNames from "classnames";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "normal" | "rounded";
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  variant = "normal",
  children,
  className,

 ...props
}) => {
  return (
    <button
      className={classNames(
        "border border-sky-400 hover:bg-sky-400  text-[var(--title)] cursor-pointer transition duration-300 ", 
        {
          "rounded-lg md:px-11 lg:px-19 py-13.5": variant === "normal",
          "rounded-full px-49.5 py-18.5": variant === "rounded",
        },
        className 
      )}
    >
      {children}
    </button>
  );
};

export default Button;
