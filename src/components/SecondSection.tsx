import { FC } from "react";
import img1 from "../assets/veme-blockchain-app-developed.png";
import img2 from "../assets/veme-app-ui-design.png";
import Image from "next/image";
import "aos/dist/aos.css";

interface SecondSectionProps {
  scrollPosition: number;
  vh: number;
}

const SecondSection: FC<SecondSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section2"
      className={
        scrollPosition > vh - 5 && scrollPosition < 2 * vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="h-[50vh] lg:h-screen overflow-hidden w-screen lg:w-[55vw] bg-indigo-950 flex flex-row lg:pl-[6vw] lg:justify-center">
        <Image
          src={img1}
          alt="img1"
          className="h-[80%] md:h-[90%] object-scale-down object-center self-end lg:h-[70%]"
        />
        <Image
          src={img2}
          alt="img2"
          className="h-[80%] md:h-[90%] object-scale-down object-center self-start lg:h-[70%]"
        />
      </div>
      <div className="h-[50vh] lg:h-screen overflow-hidden w-screen lg:w-[45vw] bg-gradient-to-br from-[#fa56fd] to-purple-700 flex flex-col items-center gap-y-[4vh] lg:gap-y-[5vh] lg:justify-end lg:items-start lg:pl-[3vw] lg:pb-[6vh]">
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 234
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
        We are the best web development company in the world
        </p>
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[35px] opacity-60 md:leading-[40px] font-semibold text-xl lg:text-base lg:mt-[6vh]">
          Comming Soon
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
