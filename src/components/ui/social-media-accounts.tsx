"use client";

import { useTheme } from "@/contexts/ThemeContext";
import SocialMediaAccount from "@/interfaces/social-media-account";
import Image from "next/image";
import React from "react";

interface SocialMediaAccountsProps {
  accounts: SocialMediaAccount[];
}

const SocialMediaAccounts: React.FC<SocialMediaAccountsProps> = ({ accounts }) => {
  const { theme } = useTheme();

  return (
    <nav aria-label="Social media links">
      <ul className="flex justify-center items-center gap-20">
        {accounts.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${item.name} profile`}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 rounded"
            >
              <Image
                width={32}
                height={32}
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                src={theme === "dark" ? item.icons.dark : item.icons.light}
                alt={`${item.name} icon`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMediaAccounts;
