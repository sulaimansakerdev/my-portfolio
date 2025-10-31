import Image from "next/image";
import HeroBackground from "../ui/hero-background";
import photo from "../../../public/assets/images/photo.svg";
import ButtonAsLink from "../ui/button-as-link";

const Hero = () => {
  return (
    <section className="w-full pt-[var(--header-height)]">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex justify-center">
        <HeroBackground className="h-[100vh]" />
      </div>

      <div className="container flex justify-center items-center h-[calc(100vh-var(--header-height))]">
        <div className="md:w-1/2 flex flex-col items-center">
          <Image src={photo} alt="" />

          <h1 className="leading-[auto] text-neutral-600 dark:text-white font-bold text-center text-4xl md:text-4xl lg:text-3xl xl:text-6xl">
            Georgy Georgy
          </h1>

          <h2 className="font-semibold leading-[auto] text-lg md:text-xl lg:text-2xl color-gradiant mb-6 text-center md:text-center">
            <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent">
              Data Sorcerer
            </span>
            🧙‍♂️
          </h2>

          <p className="font-medium text-sm md:text-lg text-center mb-40">
            As a passionate data scientist, with expertise in machine learning, AI, and data
            analytics, I thrive on the challenges of exploring complex data landscapes and
            uncovering meaningful patterns that drive innovation
          </p>

          <ButtonAsLink href="#contact-me" variant="rounded">
            Contact Me
          </ButtonAsLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
