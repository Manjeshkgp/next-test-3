import { FC } from "react";
import img1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import img2 from "../assets/nexgtv-mobile-app-ui-design.png";
import Image from "next/image";
import digitalCommImg from "../assets/world-communication-awards-for-best-digital-experience.png";
import "aos/dist/aos.css";
import {BsArrowRight} from "react-icons/bs";

interface FirstSectionProps {
  scrollPosition: number;
  vh: number;
}

const FirstSection: FC<FirstSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section1"
      className={
        scrollPosition < vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen lg:flex-row-reverse"
      }
    >
      <div className="bg-[#958f85] h-[50vh] lg:h-screen lg:w-[55vw] w-screen flex justify-center items-end overflow-hidden lg:items-center">
        <Image
          src={img1}
          alt="img1"
          className="max-w-[65%] md:max-w-[50%] -mb-[12%] -ml-[6%] object-scale-down object-top lg:m-0 lg:-ml-[5vw]"
        />
        <Image
          src={img2}
          alt="img2"
          className="max-w-[65%] md:max-w-[50%] -mb-[12%] -ml-[6%] object-scale-down object-top lg:m-0 lg:-ml-[5vw]"
        />
      </div>
      <div className="bg-purple-700 h-[50vh] lg:h-screen lg:w-[45vw] w-screen relative flex flex-col items-center gap-y-[2vh] lg:gap-y-[5vh] lg:justify-end lg:items-start lg:pl-[3vw]">
        <Image
          src={digitalCommImg}
          alt="img2"
          className="h-[10vh] lg:h-[12vh] max-w-[70%] object-contain border-2 border-purple-700 absolute -top-[5%] left-[4%] rounded-lg bg-white lg:static"
        />
        <p   className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh] lg:mt-0">
          ABC 123
        </p>
        <p   className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
          We are the best web development company in the world
        </p>
        <p   className="w-[90%] md:text-[35px] md:leading-[40px] flex justify-start items-center gap-x-[2vw] font-semibold text-xl lg:mb-[6vh] lg:text-base lg:mt-[6vh]">
          View Case Study <BsArrowRight/>
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
