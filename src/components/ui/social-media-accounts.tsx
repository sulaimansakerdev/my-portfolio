"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

const socialLinks = [
  {
    icon: "/assets/images/social-media-icons/linkedin-icon-dark.svg",
    url: "https://www.linkedin.com/in/your-profile",
    theme: "dark",
  },
  {
    icon: "/assets/images/social-media-icons/web-icon-dark.svg",
    url: "https://www.yourwebsite.com",
    theme: "dark",
  },
  {
    icon: "/assets/images/social-media-icons/facebook-icon-dark.svg",
    url: "https://www.facebook.com/your-profile",
    theme: "dark",
  },
  {
    icon: "/assets/images/social-media-icons/instagram-icon-dark.svg",
    url: "https://www.instagram.com/your-profile",
    theme: "dark",
  },
  {
    icon: "/assets/images/social-media-icons/x-icon-dark.svg",
    url: "https://www.twitter.com/your-profile",
    theme: "dark",
  },
  {
    icon: "/assets/images/social-media-icons/linkedin-icon-light.svg",
    url: "https://www.linkedin.com/in/your-profile",
    theme: "light",
  },
  {
    icon: "/assets/images/social-media-icons/web-icon-light.svg",
    url: "https://www.yourwebsite.com",
    theme: "light",
  },
  {
    icon: "/assets/images/social-media-icons/facebook-icon-light.svg",
    url: "https://www.facebook.com/your-profile",
    theme: "light",
  },
  {
    icon: "/assets/images/social-media-icons/instagram-icon-light.svg",
    url: "https://www.instagram.com/your-profile",
    theme: "light",
  },
  {
    icon: "/assets/images/social-media-icons/x-icon-light.svg",
    url: "https://www.twitter.com/your-profile",
    theme: "light",
  },
];

const SocialMediaAccounts = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-20">
      {socialLinks
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
