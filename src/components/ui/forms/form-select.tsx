import React from "react";

interface FormSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  error?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ id, label, value, onChange, options, error }) => (
  <div>
    <label
      htmlFor={id}
      className="inline-block text-lg text-neutral-600 dark:text-white font-bold mb-16"
    >
      {label}
    </label>

    <select
      id={id}
      value={value}
      onChange={onChange}
      className="w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-lg
      hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-32"
    >
      <option value="" disabled>
        Select an option
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
  </div>
);

export default FormSelect;
