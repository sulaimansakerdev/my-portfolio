import LogoIcon from "../icons/logo-icon";
import NavLinks from "../ui/nav-links";
import DarkModeToggle from "../ui/dark-mode-toggle";
import MobileMenu from "../ui/mobile-menu";
import ButtonAsLink from "../ui/button-as-link";
import classNames from "classnames";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  {
    label: "Resume",
    target: "_blank",
    href: "",
  },
];

interface HeaderProps {
  collapsed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ collapsed = false }) => {
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
        <NavLinks links={navLinks} />

        <ButtonAsLink
          href="#contact-me"
          className="border-2 dark:border-1 dark:text-white text-neutral-600"
        >
          Contact Me
        </ButtonAsLink>

        <DarkModeToggle />
      </nav>

      <MobileMenu links={navLinks} />
    </header>
  );
};

export default Header;
