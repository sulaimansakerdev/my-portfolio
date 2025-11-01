import React from "react";
import classNames from "classnames";

type ButtonVariant = "normal" | "rounded";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  ariaLabel?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "normal",
  children,
  className,
  ariaLabel,
  isLoading = false,
  disabled,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "border border-neutral-600 dark:border-sky-400 hover:bg-sky-400 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variantStyles =
    variant === "rounded" ? "rounded-full px-49.5 py-16" : "rounded-lg md:px-10 lg:px-16 py-12";

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={classNames(baseStyles, variantStyles, className)}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="sr-only">Loading...</span> : children}
    </button>
  );
};

export default Button;
