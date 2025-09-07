import classNames from "classnames";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "normal" | "rounded";
}

const Button: React.FC<ButtonProps> = ({ variant = "normal", children }) => {
  return (
    <button
      className={classNames("border border-sky-400 hover:bg-sky-400 text-white cursor-pointer", {
        "rounded-lg px-19 py-13.5": variant === "normal",
        "rounded-full px-49.5 py-18.5": variant === "rounded",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
