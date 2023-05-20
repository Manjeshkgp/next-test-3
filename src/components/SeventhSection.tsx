import { FC } from "react";
import img1 from "../assets/melltoo-img1.png";
import img2 from "../assets/melltoo-img2.png";
import Image from "next/image";
import appOfTheyr from "../assets/mobile-app-of-the-year-by-entrepreneur.png";
import "aos/dist/aos.css";

interface SeventhSectionProps {
  scrollPosition: number;
  vh: number;
}

const SeventhSection: FC<SeventhSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section7"
      className={
        scrollPosition > 6 * vh - 5 && scrollPosition <= 7 * vh
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="bg-[#00C074] h-[50vh] w-screen flex items-end overflow-hidden lg:h-screen lg:w-[55vw] lg:justify-center">
        <Image
          src={img2}
          alt="img1"
          className="w-[65vw] md:w-[50vw] -mb-[6vh] md:-mb-[8vh] ml-[10vw] md:ml-[20vw] -mr-[50vw] self-end z-10 object-top lg:w-[30vw] lg:m-0 lg:-mr-[15vw] lg:-mb-[25vh] lg:ml-[5vw]"
        />
        <Image
          src={img1}
          alt="img2"
          className="w-[65vw] md:w-[50vw] scale-75 -mb-[18vh] md:-mb-[20vh] ml-[15vw] md:ml-[25vw] -mr-[20vw] self-end z-0 object-top lg:w-[30vw] lg:m-0 lg:-mb-[25vh]"
        />
      </div>
      <div className="bg-emerald-600 z-10 h-[50vh] w-screen relative flex flex-col items-center gap-y-[2vh] lg:h-screen lg:w-[45vw] lg:justify-end lg:pb-[6vh] lg:gap-y-[5vh] lg:pl-[3vw] lg:items-start">
        <Image
          src={appOfTheyr}
          alt="img2"
          className="h-[10vh] max-w-[70%] object-contain absolute -top-[5%] left-[4%] rounded-lg lg:static lg:h-[12vh] lg:-ml-[10%] 2xl:ml-0"
        />
        <p data-aos="zoom-in-down" className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh] lg:mt-0">
          ABC 23478
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

export default SeventhSection;
