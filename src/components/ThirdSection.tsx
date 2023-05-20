import { FC } from "react";
import img1 from "../assets/nasa-fitness-tracking-mobile-app.png";
import img2 from "../assets/measure-total-body-weight-through-fitness-app.png";
import Image from "next/image";
import "aos/dist/aos.css";

interface ThirdSectionProps {
  scrollPosition: number;
  vh: number;
}

const ThirdSection: FC<ThirdSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section3"
      className={
        scrollPosition > 2 * vh - 5 && scrollPosition < 3 * vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="h-[50vh] overflow-hidden w-screen bg-indigo-800 flex flex-row lg:h-screen lg:w-[55vw] lg:items-center lg:justify-center lg:pl-[5vw]">
        <Image
          src={img1}
          alt="img1"
          className="h-[80%] md:h-[90%] object-contain -mb-[8vh] object-center self-end lg:self-center lg:m-0 lg:h-[80vh]"
        />
        <Image
          src={img2}
          alt="img2"
          className="h-[80%] md:h-[90%] object-contain -mt-[8vh] object-center self-start lg:h-[80vh] lg:-mt-[12vh]"
        />
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-indigo-950 flex flex-col items-center gap-y-[4vh] lg:h-screen lg:w-[45vw] lg:justify-end lg:pb-[6vh] lg:pl-[3vw] lg:items-start lg:gap-y-[5vh]">
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 345
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
        We are the best web development company in the world
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] opacity-60 md:text-[35px] md:leading-[40px] font-semibold text-xl lg:text-base lg:mt-[6vh]">
         Comming Soon
        </p>
      </div>
    </section>
  );
};

export default ThirdSection;
