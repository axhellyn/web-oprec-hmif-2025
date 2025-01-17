import React from "react";
import HeroContent from "../molecules/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col w-full h-full overflow-hidden"
      id="about-me"
    >
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 hidden lg:flex absolute top-[-440px] lg:top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      {/* <Image
        src="/diamond.svg"
        alt="Light"
        width={100}
        height={100}
        className="hidden lg:flex absolute top-[-500px] lg:top-[-450px] h-full w-full left-0 z-[1]"
      /> */}
      <Image
        src="/light-1.svg"
        alt="Light"
        width={100}
        height={100}
        className="hidden lg:flex absolute top-[-500px] lg:top-[-750px] h-[150%] w-[150%] z-[1] opacity-70"
      />
      <HeroContent />
    </div>
  );
};

export default Hero;
