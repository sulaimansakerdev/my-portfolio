"use client";

import { useTheme } from "@/contexts/ThemeContext";
import ModeIcon from "../icons/mode-icon";
import MoonIcon from "../icons/moon-mood";
import classNames from "classnames";
import React from "react";

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const ariaLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      className={classNames(
        "flex cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 rounded-full",
        className
      )}
    >
      <span aria-hidden="true">{isDark ? <ModeIcon /> : <MoonIcon />}</span>
    </button>
  );
};

export default DarkModeToggle;
