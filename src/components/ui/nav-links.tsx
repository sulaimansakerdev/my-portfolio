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
        <li key={item.href} onClick={onClick} className="font-semibold hover:text-sky-400">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
