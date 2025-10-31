import React from "react";

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, children }) => (
  <button
    type="submit"
    disabled={disabled}
    className={`w-full p-15 text-lg font-bold rounded-lg ${
      !disabled
        ? "bg-neutral-600 text-white dark:bg-white dark:text-black hover:bg-sky-400 hover:text-white cursor-pointer"
        : "bg-gray-300 text-gray-600 cursor-not-allowed"
    }`}
  >
    {children}
  </button>
);

export default SubmitButton;
