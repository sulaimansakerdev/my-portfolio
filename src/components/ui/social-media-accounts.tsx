"use client";

import { useTheme } from "@/contexts/ThemeContext";
import SocialMediaAccount from "@/interfaces/social-media-account";
import Image from "next/image";

interface SocialMediaAccountsProps {
  accounts: SocialMediaAccount[];
}

const SocialMediaAccounts: React.FC<SocialMediaAccountsProps> = ({ accounts }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-20">
      {accounts
        .filter((item) => item.theme == theme)
        .map((item, index) => (
          <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
            <Image
              width={32}
              height={32}
              className="cursor-pointer"
              src={item.icon}
              alt={`social-icon-${index}`}
            />
          </a>
        ))}
    </div>
  );
};

export default SocialMediaAccounts;
