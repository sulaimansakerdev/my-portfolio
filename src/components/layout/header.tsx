import LogoIcon from "../icons/logo-icon";
import Button from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-30">
      <LogoIcon />

      <nav>
        <ul className="flex gap-50 text-stone-300">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>

      <Button>Contact Me</Button>

      {/* <LightModeIcon /> */}
    </header>
  );
};

export default Header;
