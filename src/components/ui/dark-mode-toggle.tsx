"use client";

import { useTheme } from "@/contexts/ThemeContext";
import ModeIcon from "../icons/mode-icon";
import MoonIcon from "../icons/moon-mood";
import classNames from "classnames";

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className = "" }: DarkModeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={classNames("flex cursor-pointer", className)}>
      {theme === "dark" ? <ModeIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkModeToggle;
