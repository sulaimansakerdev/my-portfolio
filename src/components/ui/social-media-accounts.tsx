const SocialMediaAccounts = () => {
  const socialLinks = [
    {
      icon: "/assets/images/social-media-icons/linked-icon.svg",
      url: "https://www.linkedin.com/in/your-profile",
    },
    {
      icon: "/assets/images/social-media-icons/web-icon.svg",
      url: "https://www.yourwebsite.com",
    },
    {
      icon: "/assets/images/social-media-icons/facebook-icon.svg",
      url: "https://www.facebook.com/your-profile",
    },
    {
      icon: "/assets/images/social-media-icons/instagram-icon.svg",
      url: "https://www.instagram.com/your-profile",
    },
    {
      icon: "/assets/images/social-media-icons/x-icon.svg",
      url: "https://www.twitter.com/your-profile",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-20">
      {socialLinks.map((item, index) => (
        <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
          <img className="cursor-pointer filter brightness-0 saturate-100 invert-[25%] sepia-[5%]  dark:invert-[70%] dark:brightness-[85%] "  src={item.icon} alt={`social-icon-${index}`} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaAccounts;
