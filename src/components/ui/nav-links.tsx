import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
import classNames from "classnames";

interface NavLinksProps {
  links: { label: string; href: string; target?: HTMLAttributeAnchorTarget }[];
  onClick?: () => void;
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, onClick, className = "" }) => {
  return (
    <nav aria-label="Main navigation">
      <ul className={classNames("flex gap-15 lg:gap-40 xl:gap-50", className)}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target={link.target}
              onClick={onClick}
              className="font-sans font-semibold hover:text-sky-400 text-zinc-950 dark:text-stone-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
