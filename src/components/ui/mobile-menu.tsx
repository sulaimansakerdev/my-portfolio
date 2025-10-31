"use client";

import { useState } from "react";
import CloseIcon from "../icons/close-icon";
import DarkModeToggle from "./dark-mode-toggle";
import NavLinks from "./nav-links";
import MenuIcon from "../icons/menu-icon";

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleShowMenu}>
        <MenuIcon className="text-white dark:text-black" />
      </button>

      {showMenu && (
        <div className="fixed inset-0 flex justify-center bg-background/85">
          <div className="relative w-[85%] animate-[menu-animate_0.7s_1]">
            <div className="absolute top-100 w-full flex flex-col items-center gap-16 dark:bg-black bg-white p-16">
              <div className="w-full flex justify-end">
                <button onClick={toggleShowMenu}>
                  <CloseIcon />
                </button>
              </div>

              <NavLinks
                links={links}
                onClick={toggleShowMenu}
                className="flex-col gap-16 text-center"
              />

              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
