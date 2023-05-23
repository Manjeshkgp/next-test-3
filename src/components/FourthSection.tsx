import { FC } from "react";
import img1 from "../assets/domi-img1.png";
import img2 from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import img3 from "../assets/on-demand-app-development-company.png";
import pizzabox from "../assets/pizza_box.png";
import bg1 from "../assets/dominos-bread.png";
import bg2 from "../assets/dominos-masala.png";
import bg3 from "../assets/dominos-bread1.png";
import Image from "next/image";
import "aos/dist/aos.css";
import {BsArrowRight} from "react-icons/bs";
interface FourthSectionProps {
  scrollPosition: number;
  vh: number;
}

const FourthSection: FC<FourthSectionProps> = ({ scrollPosition, vh }) => {
  return (
    <section
      id="section4"
      className={
        scrollPosition > 3 * vh - 5 && scrollPosition < 4 * vh - 5
          ? "flex flex-col w-screen lg:flex-row-reverse lg:fixed lg:z-[100]"
          : "flex flex-col w-screen h-screen lg:flex-row-reverse"
      }
    >
      <div className="h-[50vh] overflow-hidden w-screen bg-gray-900 flex flex-row justify-center relative lg:h-screen lg:w-[55vw] lg:items-center">
        <Image
          src={pizzabox}
          alt="img1"
          className="max-w-[40vw] object-cover z-0 absolute top-0 left-0 lg:w-[20vw]"
        />
        <Image
          src={bg1}
          alt="img1"
          className="max-w-[20vw] object-cover z-0 absolute -top-[15vw] -right-[12vw] lg:-top-[10vh] lg:right-0 lg:w-[15vw]"
        />
        <Image
          src={bg2}
          alt="img1"
          className="max-w-[20vw] object-cover z-0 absolute top-[22vh] -right-[12vw] lg:hidden"
        />
        <Image
          src={bg3}
          alt="img1"
          className="max-w-[20vw] object-cover z-0 absolute bottom-0 -right-[12vw] lg:bottom-0 lg:right-0 lg:w-[15vw]"
        />
        <Image
        data-aos='fade-up'
          src={img1}
          alt="img1"
          className="max-w-[40vw] object-cover z-10 object-top self-end lg:w-[16vw] lg:mt-0"
        />
        <div className="flex z-10 flex-col justify-between w-[40vw] lg:w-auto">
          <Image
          data-aos='fade-down'
            src={img2}
            alt="img2"
            className="max-w-[40vw] w-[40vw] object-cover object-bottom self-start -mt-[4vh] md:-mt-[15vh] lg:w-[16vw] lg:ml-[5vw]"
          />
          <Image
            src={img3}
            alt="img2"
            className="max-w-[40vw] w-[40vw] object-cover object-top self-end lg:hidden"
          />
        </div>
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-slate-800 flex flex-col items-center gap-y-[4vh] lg:h-screen lg:w-[45vw] lg:justify-end lg:pl-[3vw] lg:items-start lg:pb-[6vh] lg:gap-[5vh]">
        <p data-aos='flip-up' className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 456
        </p>
        <p data-aos='flip-up' className="w-[90%] md:text-[24px] md:leading-8 text-sm lg:text-sm lg:-mt-[3vh]">
          We are the best <br className="hidden lg:block"/> web development company <br className="hidden lg:block"/> in the world
        </p>
        <p data-aos='flip-up' className="w-[90%] md:text-[35px] flex justify-start items-center gap-x-[2vw] md:leading-[40px] font-semibold text-xl lg:text-base lg:mt-[6vh]">
          View Case Study <BsArrowRight/>
        </p>
      </div>
    </section>
  );
};

export default FourthSection;
