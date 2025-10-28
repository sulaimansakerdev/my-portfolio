import React from "react";

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  rows?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  rows = 8,
}) => (
  <div>
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
      placeholder={placeholder}
      autoComplete="off"
      className="w-full border border-neutral-600 dark:border-slate-200 rounded-lg
      hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32"
      rows={rows}
    />

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default FormTextarea;
