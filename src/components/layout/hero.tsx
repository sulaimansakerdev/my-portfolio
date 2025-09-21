import Image from "next/image";
import HeroBackground from "../icons/hero-background";
import Button from "../ui/button";
import photo from "../../../public/assets/images/photo.svg";


const Hero = () => {
  return (
    <section className="relative  w-full  ">
      <div className="hero-bg absolute top-0 bottom-0 right-0 left-0 z-[-1] flex justify-center">
        <HeroBackground  className=" h-[calc(100vh-var(--header-height))] " />
      </div>

      <div className=" flex justify-center items-center ">
        <div className="w-3/4 md:w-1/2 flex flex-col items-center mt-[5rem]">
          <Image  src={photo} alt="" />

          <h1 className=" text-[var(--maintitle)] font-bold text-[40px] md:text-[40px] text-center lg:text-[2rem] xl:text-[3.875rem]">Sulaiman Saker</h1>

          <h2 className="font-semibold lg:text-[1.625rem] color-gradiant mb-6 text-[18px] text-center md:text-[20px] md:text-center ">
            <span className="[background-image:var(--titlegradient)] to-white bg-clip-text text-transparent">
              Full Stack Developer
            </span>
            🧙‍♂️
          </h2>

          <p className=" text-[var(--title)] font-medium text-[14px] md:text-[1.1875rem] text-center mb-40  ">
            I am a highly motivated Software Engineer with 7+ years of experience building web
            applications. Passionate about developing user-friendly solutions that address
            real-world challenges, I specialize in modern technologies such as React.js, Next.js,
            ASP.net, Node.js, TypeScript, MongoDB, and MySQL.
          </p>
          <a href="#contactUs"><Button className="text-[13px] md:text-[15px]" variant="rounded">Contact Me</Button></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
