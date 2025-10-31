import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
}) => (
  <div>
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
      autoComplete={autoComplete}
      className="w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-lg
      hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32"
      aria-invalid={!!error}
    />

    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
  </div>
);

export default Input;
