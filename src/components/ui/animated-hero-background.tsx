import AnimatedDiv from "../animation/animated-div";
import HeroBackground from "./hero-background";

const AnimatedHeroBackground = () => {
  return (
    <div
      className="absolute top-0 lg:top-[-50] bottom-0 right-0 left-0 z-[-1] flex justify-center overflow-clip
      max-lg:[mask-image:radial-gradient(circle_at_center,black_0%,transparent_80%)] lg:opacity-60"
      aria-hidden="true"
    >
      <AnimatedDiv
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        <HeroBackground className="h-[100vh]" />
      </AnimatedDiv>
    </div>
  );
};

export default AnimatedHeroBackground;
