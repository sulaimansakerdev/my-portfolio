"use client";

import { useTheme } from "@/contexts/ThemeContext";
import HeroBackgroundDarkTheme from "../icons/hero-background-dark-theme";
import HeroBackgroundLightTheme from "../icons/hero-background-light-theme";

interface HeroBackgroundProps {
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ className }) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return <HeroBackgroundDarkTheme className={className} />;
  }

  if (theme === "light") {
    return <HeroBackgroundLightTheme className={className} />;
  }
};

export default HeroBackground;
