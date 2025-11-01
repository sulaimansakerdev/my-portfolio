import React from "react";
import classNames from "classnames";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      className={classNames(
        "w-full p-15 text-lg font-bold rounded-lg transition-colors",
        {
          "bg-neutral-600 text-white dark:bg-white dark:text-black hover:bg-sky-400 hover:text-white cursor-pointer":
            !disabled,
          "bg-gray-300 text-gray-600 cursor-not-allowed": disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
