import resumeHref from "./resume-href";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  {
    label: "Resume",
    target: "_blank",
    href: resumeHref,
  },
];

export default navLinks;
