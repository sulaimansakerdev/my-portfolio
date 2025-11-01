import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonAsLinkProps {
  href: string;
  variant?: "normal" | "rounded";
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
  newTab?: boolean;
  download?: boolean;
}

const ButtonAsLink: React.FC<ButtonAsLinkProps> = ({
  variant = "normal",
  href,
  ariaLabel,
  className,
  children,
  newTab = false,
  download = false,
}) => {
  const baseStyles =
    "inline-block border border-neutral-600 dark:border-sky-400 hover:bg-sky-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2";

  const variantStyles =
    variant === "rounded" ? "rounded-full px-49.5 py-16" : "rounded-lg md:px-10 lg:px-19 py-11";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={classNames(baseStyles, variantStyles, className)}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      download={download}
      role="button"
    >
      {children}
    </Link>
  );
};

export default ButtonAsLink;
