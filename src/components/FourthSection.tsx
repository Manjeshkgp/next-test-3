import { FC } from "react";
import img1 from "../assets/domi-img1.png";
import img2 from "../assets/ux-strategy-for-mobile-app-devlopment.png";
import img3 from "../assets/on-demand-app-development-company.png";
import pizzabox from "../assets/pizza_box.png";
import bg1 from "../assets/dominos-bread.png";
import bg2 from "../assets/dominos-masala.png";
import bg3 from "../assets/dominos-bread1.png";
import Image from "next/image";

interface FourthSectionProps {}

const FourthSection: FC<FourthSectionProps> = ({}) => {
  return (
    <section id="section4" className="flex flex-col w-screen h-screen">
      <div className="h-[50vh] overflow-hidden w-screen bg-gray-900 flex flex-row justify-center relative">
        <Image
          src={pizzabox}
          alt="img1"
          className="w-[40vw] object-cover z-0 absolute top-0 left-0"
        />
        <Image
          src={bg1}
          alt="img1"
          className="w-[20vw] object-cover z-0 absolute -top-[15vw] -right-[12vw]"
        />
        <Image
          src={bg2}
          alt="img1"
          className="w-[20vw] object-cover z-0 absolute top-[22vh] -right-[12vw]"
        />
        <Image
          src={bg3}
          alt="img1"
          className="w-[20vw] object-cover z-0 absolute bottom-0 -right-[12vw]"
        />
        <Image
          src={img1}
          alt="img1"
          className="w-[40vw] object-cover z-10 object-top self-end"
        />
        <div className="flex z-10 flex-col justify-between">
          <Image
            src={img2}
            alt="img2"
            className="w-[40vw] object-cover object-bottom self-start -mt-[4vh] md:-mt-[15vh]"
          />
          <Image
            src={img3}
            alt="img2"
            className="w-[40vw] object-cover object-top self-end"
          />
        </div>
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-slate-800 flex flex-col items-center gap-y-[4vh]">
        <p className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">
          ABC 123
        </p>
        <p className="w-[90%] md:text-[24px] md:leading-8 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          ducimus ipsum soluta.
        </p>
        <p className="w-[90%] md:text-[35px] md:leading-[40px] font-semibold text-xl">
          View Case Study
        </p>
      </div>
    </section>
  );
};

export default FourthSection;
