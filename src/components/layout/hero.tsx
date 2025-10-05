import Image from "next/image";
import HeroBackground from "../ui/hero-background";
import photo from "../../../public/assets/images/photo.svg";
import ButtonAsLink from "../ui/buttonAsLink";

const Hero = () => {
  return (
    <section className="w-full pt-[var(--header-height)]">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex justify-center">
        <HeroBackground className="h-[100vh]" />
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-var(--header-height))]">
        <div className="w-3/4 md:w-1/2 flex flex-col items-center">
          <Image src={photo} alt="" />

          <h1 className="leading-auto text-neutral-600 dark:text-white font-bold text-center text-4xl md:text-4xl lg:text-3xl xl:text-6xl">
            Sulaiman Saker
          </h1>

          <h2 className="font-semibold leading-auto text-lg md:text-xl lg:text-2xl color-gradiant mb-6 text-center md:text-center">
            <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent">
              Software Engineer
            </span>
            🧙‍♂️
          </h2>

          <p className="font-medium text-sm md:text-lg text-center mb-40">
            Software Engineer with 7+ years of experience delivering scalable, high performance web
            apps. Skilled in React, TypeScript, Next.js, Node.js, C#, ASP.NET, MongoDB & MySQL.
            Worked on major projects like Etisalat’s eLife (serving 700k+ users), WOW VIR
            (multi-vendor e-commerce), and CLOUD ERP (ERP software). Strong expertise in clean code,
            agile practices, DevOps, and performance optimization across frontend & backend.
          </p>

          <ButtonAsLink
            href="https://docs.google.com/document/d/1INrQzOB_rxyKBxSJrnYwZFc0X0jbXM-U"
            variant="rounded"
          >
            Download Resume
          </ButtonAsLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
