import Image from "next/image";
import HeroBackground from "../icons/hero-background";
import Button from "../ui/button";
import photo from "../../../public/assets/images/photo.svg";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-var(--header-height))] w-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-[-1] flex justify-center">
        <HeroBackground className="h-[calc(100vh-var(--header-height))]" />
      </div>

      <div className="h-full flex justify-center items-center">
        <div className="w-1/2 flex flex-col items-center">
          <Image src={photo} alt="" />

          <h1 className="font-bold text-[3.875rem]">Sulaiman Saker</h1>

          <h2 className="font-semibold text-[1.625rem] color-gradiant mb-6">
            <span className="bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            🧙‍♂️
          </h2>

          <p className="font-medium text-[1.1875rem] text-center mb-40">
            I am a highly motivated Software Engineer with 7+ years of experience building web
            applications. Passionate about developing user-friendly solutions that address
            real-world challenges, I specialize in modern technologies such as React.js, Next.js,
            ASP.net, Node.js, TypeScript, MongoDB, and MySQL.
          </p>

          <Button variant="rounded">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
