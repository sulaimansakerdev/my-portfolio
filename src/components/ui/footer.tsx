import SocaialMediaAccounts from "./social-media-accounts";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 md:flex-row md:justify-between pt-42 pb-45">
      <div>
        <div>© 2023 All rights reserved.</div>
      </div>

      <div><SocaialMediaAccounts /></div>
    </div>
  );
};

export default Footer;
