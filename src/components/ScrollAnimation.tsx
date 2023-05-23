import { FC } from "react";
import clsx from "clsx";
import Svgicon from "./Svgicon";
import nasaLogo from "../assets/nasa-mobile-app.png";
import Image from "next/image";
import "aos/dist/aos.css";

interface ScrollAnimationProps {
  scrollPosition: number;
  vh: number;
}

const ScrollAnimation: FC<ScrollAnimationProps> = ({ scrollPosition, vh }) => {
  const svgBg = () => {
    if (scrollPosition < vh) {
      return "bg-[#7E22CE]";
    }
    if (scrollPosition >= vh && scrollPosition < 2 * vh) {
      return "bg-indigo-700";
    }
    if (scrollPosition >= 2 * vh && scrollPosition < 3 * vh) {
      return "bg-[#1E1B4B]";
    }
    if (scrollPosition >= 3 * vh && scrollPosition < 4 * vh) {
      return "bg-[#1E293B]";
    }
    if (scrollPosition >= 4 * vh && scrollPosition < 5 * vh) {
      return "bg-[#2563EB]";
    }
    if (scrollPosition >= 5 * vh && scrollPosition < 6 * vh) {
      return "bg-[#1E40AF]";
    }
    
    return "bg-[#059669]";
  };
  return (
    <div
      className={clsx(
        "hidden transition-all lg:flex justify-center items-center h-[22.5vw] w-[22.5vw] lg:fixed z-[110] top-[7.5vh] left-[32.5vw] rounded-[50%]",
        svgBg()
      )}
    >
      <div data-aos='flip-up' className={scrollPosition >= 6 * vh?"absolute top-[6.5vw] -left-[0] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">Biggest Classifieds</p>
        <p className="text-[3.5vw] font-bold">East Asia</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>Countries</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 5 * vh && scrollPosition < 6 * vh?"absolute top-[6.5vw] -left-[6vw] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">Developing ERP Solution for</p>
        <p className="text-[3.5vw] font-bold">Text Headline</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>in furniture industry</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 4 * vh && scrollPosition < 5 * vh?"absolute top-[6vw] -left-[6vw] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">Text Headline</p>
        <p className="text-[3.5vw] font-bold">Text Headline</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>Footer Headline</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 3 * vh && scrollPosition < 4 * vh?"absolute top-[6vw] -left-[6vw] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">Redifining</p>
        <p className="text-[3.5vw] font-bold">UX Strategy</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>and UI design</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 2 * vh && scrollPosition < 3 * vh?"absolute top-[6vw] -left-[4vw] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">Powered by advance</p>
        <div className="flex flex-row-reverse items-center w-full"><Image src={nasaLogo} alt="NASA Logo" className="h-[6vw] object-contain"/></div>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>algorithms</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 1 * vh && scrollPosition < 2 * vh?"absolute top-[6vw] -left-[6vw] w-max flex-col flex items-start":"hidden"}>
        <p className="text-[1.7vw]">The Next Big</p>
        <p className="text-[3.5vw] font-bold">Blockchain</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>Revolution</p>
        </div>
      </div>
      <div data-aos='flip-up' className={scrollPosition >= 0 * vh && scrollPosition < 1 * vh?"absolute top-[6vw] -left-[12vw] w-max flex-col flex items-start":"hidden"}>
        {/* <p className="text-[1.7vw]">The Next Big</p> */}
        <p className="text-[3.5vw] font-bold">25M+ Downloads</p>
        <div className="flex text-[1.8vw] flex-row-reverse items-center w-full">
          <p>on appstore & google playstore</p>
        </div>
      </div>
      <Svgicon scrollPosition={scrollPosition} vh={vh} />
    </div>
  );
};

export default ScrollAnimation;
