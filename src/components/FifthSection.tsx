import { FC } from "react";
import img1 from "../assets/karavan-social-networking-app-screen.png";
import img2 from "../assets/karavan_2.png";
import img3 from "../assets/social-networking-app-case-study.png";
import img4 from "../assets/karavan-social-networking-app-screen-2.png";
import img5 from "../assets/developers-for-social-media-app.png";
import Image from "next/image";
import "aos/dist/aos.css";
import {BsArrowRight} from "react-icons/bs";

interface FifthSectionProps {
  scrollPosition: number;
  vh: number;
}

const FifthSection: FC<FifthSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section5"
      className={
        scrollPosition > 4 * vh - 5 && scrollPosition < 5 * vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="h-[50vh] overflow-hidden w-screen bg-cyan-400 flex flex-row justify-center flex-nowrap relative lg:h-screen lg:w-[55vw]">
        <div className="flex z-10 w-[40vw] flex-col items-center justify-between lg:w-[16vw]">
          <Image
            src={img1}
            alt="img2"
            className="w-[40vw] h-[25vh] object-cover object-bottom lg:w-[16vw] lg:h-auto lg:-mt-[10vh]"
          />
          <Image
            src={img2}
            alt="img2"
            className="w-[40vw] h-[25vh] object-cover object-top lg:w-[16vw] lg:h-auto"
          />
        </div>
        <div className="flex z-10 w-[40vw] flex-col justify-between lg:w-[16vw]">
          <Image
            src={img3}
            alt="img2"
            className="w-[40vw] object-cover object-bottom self-start md:-mt-[15vh] lg:w-[16vw] lg:m-0"
          />
          <Image
            src={img4}
            alt="img2"
            className="w-[40vw] object-cover object-top self-end lg:w-[16vw] lg:m-0"
          />
        </div>
        <Image
          src={img5}
          alt="img2"
          className="max-w-[40vw] object-cover object-bottom self-end -mr-[22vw] -mb-[11vw] lg:w-[16vw] lg:-mr-[5vw] lg:mb-[12vh]"
        />
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-blue-600 flex flex-col items-center gap-y-[4vh] lg:h-screen lg:w-[45vw] lg:gap-[5vh] lg:pl-[3vw] lg:items-start lg:pb-[6vh] lg:justify-end">
        <p   className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 567
        </p>
        <p   className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
          we are the best AR <br className="hidden lg:block"/> Development company <br className="hidden lg:block"/> in the world
        </p>
        <p   className="w-[90%] flex justify-start items-center gap-x-[2vw] md:text-[35px] md:leading-[40px] font-semibold text-xl lg:text-base lg:mt-[6vh]">
          View Case Study <BsArrowRight/>
        </p>
      </div>
    </section>
  );
};

export default FifthSection;
