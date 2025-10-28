import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

interface NavLinksProps {
  links: { label: string; href: string; target?: HTMLAttributeAnchorTarget }[];
  onClick?: () => void;
  className?: string;
}

const NavLinks = ({ links, onClick, className = "" }: NavLinksProps) => {
  return (
    <ul className={`flex gap-15 lg:gap-40 xl:gap-50 ${className}`}>
      {links.map((link) => (
        <li
          key={link.href}
          onClick={onClick}
          className="hover:text-sky-400 text-zinc-950 dark:text-stone-300 transition duration-300"
        >
          <Link href={link.href} target={link.target}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
