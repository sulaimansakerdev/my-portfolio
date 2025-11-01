import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
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

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={errorId}
        className={`w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-lg
          hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32
          ${className}`}
      />

      {error && (
        <p id={errorId} className="text-red-500 text-sm mt-4" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
