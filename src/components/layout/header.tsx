"use client";

import LogoIcon from "../icons/logo-icon";
import NavLinks from "../ui/nav-links";
import DarkModeToggle from "../ui/dark-mode-toggle";
import MobileMenu from "../ui/mobile-menu";
import ButtonAsLink from "../ui/buttonAsLink";
import { useEffect, useState } from "react";
import classNames from "classnames";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Contact Me", href: "#contact-me" },
];

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY >= 30) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => window.removeEventListener("scroll", handlScroll);
  }, []);

  return (
    <header
      className={classNames("flex justify-between items-center py-30", {
        "bg-background": collapsed,
      })}
    >
      <div className="w-150 md:w-170 lg:w-198">
        <LogoIcon className="w-full text-black dark:text-white" />
      </div>

      <nav className="hidden md:flex md:gap-15 lg:gap-30 xl:gap-160 items-center">
        <NavLinks items={navItems.slice(0, -1)} />

        <ButtonAsLink href="#contact-me">Contact Me</ButtonAsLink>

        <DarkModeToggle />
      </nav>

      <MobileMenu items={navItems} />
    </header>
  );
};

export default Header;
