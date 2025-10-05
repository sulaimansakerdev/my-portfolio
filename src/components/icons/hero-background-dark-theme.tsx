interface Props {
  className?: string;
}

const HeroBackgroundDarkTheme: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1025"
      height="892"
      viewBox="0 0 1025 892"
      fill="none"
      className={className}
    >
      <rect width="1025" height="892" rx="382" fill="url(#pattern0_15_68)" />
      <rect width="1025" height="892" rx="382" fill="url(#paint0_linear_15_68)" />

      <defs>
        <pattern
          id="pattern0_15_68"
          patternContentUnits="objectBoundingBox"
          width="0.0653659"
          height="0.0811518"
        >
          <use xlinkHref="#image0_15_68" transform="scale(0.000487805 0.00065445)" />
        </pattern>

        <linearGradient
          id="paint0_linear_15_68"
          x1="591.5"
          y1="963"
          x2="395.06"
          y2="-162.594"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.218511" stopColor="#1A1A1A" />
          <stop offset="0.922752" stopColor="#1A1A1A" stopOpacity="0.65" />
        </linearGradient>

        <image
          id="image0_15_68"
          width="134"
          height="124"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default HeroBackgroundDarkTheme;
