import { FC } from "react";
import bgImg from "../assets/erp-app-development-service.png";
import parentBg from "../assets/interior.jpg";
import Image from "next/image";
import "aos/dist/aos.css";

interface SixthSectionProps {
  scrollPosition: number;
  vh: number;
}

const SixthSection: FC<SixthSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section6"
      className={
        scrollPosition > 5 * vh - 5 && scrollPosition < 6 * vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="h-[50vh] overflow-hidden relative w-screen flex flex-col justify-center items-center lg:w-[55vw] lg:h-screen">
        <Image
          src={bgImg}
          alt="bgImg"
          className="h-[50vh] object-center z-10 scale-110 object-cover lg:object-cover lg:w-[50vw] lg:h-[100vh]"
        />
        <Image
          src={parentBg}
          alt="bgImg"
          className="h-[50vh] w-screen object-center object-cover absolute z-0 inset-0 lg:h-[100vh]"
        />
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-blue-800 flex flex-col items-center gap-y-[4vh] lg:w-[45vw] lg:h-screen lg:gap-y-[5vh] lg:pl-[3vw] lg:items-start lg:justify-end lg:pb-[6vh]">
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 678
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
          Best since 2017
          We offer wide range of
          web development and app development.
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[35px] md:leading-[40px] font-semibold text-xl lg:text-base lg:mt-[6vh]">
          View Case Study
        </p>
      </div>
    </section>
  );
};

export default SixthSection;
