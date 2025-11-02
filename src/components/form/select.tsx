import Image from "next/image";
import React from "react";

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
  className = "",
}) => {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="inline-block text-lg text-neutral-600 dark:text-white font-bold mb-16"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={`w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-lg
            hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32 appearance-none
            ${className}`}
        >
          <option value="" disabled hidden>
            Select an option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-white dark:bg-slate-800 text-neutral-800 dark:text-slate-100"
            >
              {option}
            </option>
          ))}
        </select>

        {error && (
          <p id={errorId} className="text-red-500 text-sm mt-4" role="alert">
            {error}
          </p>
        )}

        <Image
          width={15}
          height={15}
          className="w-15 h-15 transform transition-transform duration-200 absolute right-25 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400"
          src="/assets/icons/select-arrow.svg"
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Select;
