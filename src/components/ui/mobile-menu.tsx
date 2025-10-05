"use client";

import { useState } from "react";
import CloseIcon from "../icons/close-icon";
import DarkModeToggle from "./dark-mode-toggle";
import NavLinks from "./nav-links";
import MenuIcon from "../icons/menu-icon";

interface MobileMenuProps {
  items: { label: string; href: string }[];
}

const MobileMenu = ({ items }: MobileMenuProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="md:hidden">
      <button className="flex" onClick={toggleShowMenu}>
        <MenuIcon className="text-white dark:text-black" />
      </button>

      {showMenu && (
        <div className="fixed inset-0 bg-background/85 z-50 flex justify-center">
          <div className="w-[85%] animate-[menuAnimate_0.7s_1] p-4 flex flex-col items-start gap-10">
            <ul className="w-full p-15 flex flex-col items-center gap-10 rounded-10 bg-black dark:bg-white translate-y-[50%]">
              <li className="w-full text-right">
                <button
                  className="hover:rotate-[180deg] hover:text-[1.7rem] transition-all duration-300 mt-4 px-4 py-2 text-white rounded"
                  onClick={toggleShowMenu}
                >
                  <CloseIcon />
                </button>
              </li>

              <NavLinks
                items={items}
                onClick={toggleShowMenu}
                className="flex-col gap-10 text-center"
              />

              <li>
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
