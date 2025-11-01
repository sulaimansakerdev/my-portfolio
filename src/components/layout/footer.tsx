import SocialMediaAccounts from "../ui/social-media-accounts";
import socialMediaAccounts from "@/config/social-media-accounts";

const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-22 md:flex-row-reverse md:justify-between pt-42 pb-45"
      aria-label="Footer"
    >
      <div>
        <SocialMediaAccounts accounts={socialMediaAccounts} />
      </div>

      <div>
        <p className="text-gray-800 dark:text-neutral-400 font-normal text-base">
          © 2023 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
