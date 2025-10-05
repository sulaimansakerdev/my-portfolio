import Link from "next/link";

interface NavLinksProps {
  items: { label: string; href: string }[];
  onClick?: () => void;
  className?: string;
}

const NavLinks = ({ items, onClick, className = "" }: NavLinksProps) => {
  return (
    <ul className={`flex gap-15 lg:gap-40 xl:gap-50 ${className}`}>
      {items.map((item) => (
        <li key={item.href} onClick={onClick} className=" transition duration-300 hover:text-sky-400 text-zinc-950 dark:text-stone-300">
        <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
