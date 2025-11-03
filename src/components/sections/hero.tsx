import Image from "next/image";
import photo from "../../../public/assets/images/my-photo.svg";
import LinkButton from "../ui/link-button";
import AnimatedDiv from "../animation/animated-div";
import hero from "@/config/hero";

const Hero: React.FC = () => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section
        className="w-full text-center pt-[var(--header-height)] relative"
        aria-labelledby="hero-heading"
        aria-describedby="hero-description"
        role="banner"
      >
        <div className="flex justify-center items-center h-[calc(100vh-var(--header-height))]">
          <div className="flex flex-col items-center">
            <Image src={photo} alt="Portrait of the site owner" />

            <h1
              id="hero-heading"
              className="font-sans leading-[auto] text-neutral-600 dark:text-white font-bold text-center text-4xl md:text-4xl lg:text-3xl xl:text-6xl"
            >
              {hero.title}
            </h1>

            <h2 className="font-semibold leading-[auto] text-lg md:text-xl lg:text-2xl color-gradiant mb-6 text-center md:text-center">
              <span className="[background-image:var(--subtitle-gradient)] to-white bg-clip-text text-transparent">
                {hero.subTitle}
              </span>{" "}
              <span role="img" aria-label="wizard emoji">
                🧙‍♂️
              </span>
            </h2>

            <p id="hero-description" className="font-medium text-sm md:text-lg text-center mb-40">
              {hero.des}
            </p>

            <LinkButton href="#contact-me" variant="rounded" aria-label="Go to contact section">
              Contact Me
            </LinkButton>
          </div>
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default Hero;
