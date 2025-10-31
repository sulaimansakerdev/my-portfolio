import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonAsLinkProps {
  href: string;
  children: ReactNode;
  variant?: "normal" | "rounded";
  className?: string;
}
const ButtonAsLink: React.FC<ButtonAsLinkProps> = ({
  variant = "normal",
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        "inline-block border border-neutral-600 dark:border-sky-400 hover:bg-sky-400 hover:text-white cursor-pointer transition duration-300",
        {
          "rounded-lg md:px-10 lg:px-19 py-11": variant === "normal",
          "rounded-full px-49.5 py-16": variant === "rounded",
        },
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
