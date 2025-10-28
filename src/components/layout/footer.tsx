import SocaialMediaAccounts from "../ui/social-media-accounts";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-22 md:flex-row-reverse md:justify-between pt-42 pb-45">
      <div>
        <SocaialMediaAccounts />
      </div>

      <div>
        <div className="text-gray-800 dark:text-neutral-400 font-normal text-base">
          © 2023 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
