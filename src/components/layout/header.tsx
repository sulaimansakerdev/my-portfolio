"use client";
import LogoIcon from "../icons/logo-icon";
import Button from "../ui/button";
import MenuIcon from "../icons/menu-icon";
import { useEffect, useState } from "react";
import ModeIcon from "../icons/mode-icon";
import CloseIcon from "../icons/close-icon";
import MoonIcon from "../icons/moon-mood";
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Contact Me", href: "#contactUs" },
];
const Header = () => {
  const [showModel, setShowModel] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("currentMode");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
    localStorage.setItem("currentMode", theme);
  }, [theme]);

  return (
    <header className="flex justify-between items-center py-30">
      <div className="w-[150px] md:w-[170px] lg:w-[198px]">
        <LogoIcon className="w-full  text-[var(--logocolor)]" />
      </div>

      <button
        className="flex md:hidden -pointer "
        onClick={() => {
          setShowModel(true);
        }}
      >
        <MenuIcon className="text-[var(--logocolor)]" />
      </button>

      <nav className="hidden md:flex md:gap-[15px] lg:gap-[30px] xl:gap-[60px] justify-between items-center">
        <ul className=" text-[var(--title)] flex  md:gap-[15px] lg:gap-[40px] xl:gap-[50px] ">
          <li className="hover:text-[#4FC3F7] transition duration-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-[#4FC3F7] transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#4FC3F7] transition duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#4FC3F7] transition duration-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#4FC3F7] transition duration-300">
            <a href="#resume">Resume</a>
          </li>
        </ul>

        <a href="#contactUs"><Button >Contact Me</Button></a>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex cursor-pointer"
        >
          {theme === "dark" ? <ModeIcon /> : <MoonIcon />}
        </button>
      </nav>

      {showModel && (
        <div className="fixed inset-0 bg-[var(--background)]/85 z-50 flex  justify-center">
          <div className="w-[85%] animate-[menuAnimate_0.7s_1]    p-4 flex flex-col items-start gap-10">
            <ul className="w-full p-15 flex items-center rounded-[10px]  translate-y-[50%] bg-[var(--menucard)] justify-center flex-col gap-10  ">
              <li className=" text-right w-full">
                <button
                  className="hover:rotate-[180deg] hover:text-[1.7rem] transition-all duration-300 mt-4 px-4 py-2 text-white rounded cursor-pointer"
                  onClick={() => {
                    setShowModel(false);
                  }}
                >
                  <CloseIcon />
                </button>
              </li>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setShowModel(false)} 
                  className="hover:text-[#4FC3F7] transition duration-300 pt-2 pb-5 text-#C1C1C1 text-base w-full text-center cursor-pointer"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const newTheme = theme === "dark" ? "light" : "dark";
                    localStorage.setItem("currentMode", newTheme);
                    setTheme(newTheme);
                  }}
                  className="flex cursor-pointer"
                >
                  {theme === "dark" ? <ModeIcon /> : <MoonIcon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
