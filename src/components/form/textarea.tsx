import React from "react";

interface TextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  rows = 6,
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

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={errorId}
        rows={rows}
        autoComplete="off"
        className={`w-full border border-neutral-600 dark:border-slate-200 rounded-lg
          hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32 py-16
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

export default Textarea;
