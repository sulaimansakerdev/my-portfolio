import React from "react";

interface Props {
  className?: string;
}

const HeroBackgroundLightTheme: React.FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1025"
    height="754"
    viewBox="0 0 1025 754"
    fill="none"
    className={className}
  >
    <rect width="1025" height="892" rx="382" fill="url(#pattern0_134_42)" fillOpacity="0.2" />
    <rect width="1025" height="892" rx="382" fill="url(#paint0_linear_134_42)" />
    <defs>
      <pattern
        id="pattern0_134_42"
        patternContentUnits="objectBoundingBox"
        width="0.0653659"
        height="0.0811518"
      >
        <use href="#image0_134_42" transform="scale(0.000487805 0.00065445)" />
      </pattern>
      <linearGradient
        id="paint0_linear_134_42"
        x1="512.5"
        y1="0"
        x2="522.5"
        y2="652.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E8F6" stopOpacity="0" />
        <stop offset="1" stopColor="#E0E8F6" />
      </linearGradient>
      <image
        id="image0_134_42"
        width="134"
        height="124"
        preserveAspectRatio="none"
        href="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default HeroBackgroundLightTheme;
