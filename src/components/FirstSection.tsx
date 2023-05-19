import { FC } from "react";
import img1 from "../assets/nexgtv-entertainment-mobile-app-development.png";
import img2 from "../assets/nexgtv-mobile-app-ui-design.png";
import Image from "next/image";
import digitalCommImg from "../assets/world-communication-awards-for-best-digital-experience.png";

interface FirstSectionProps {}

const FirstSection: FC<FirstSectionProps> = ({}) => {
  return (
    <section className="flex flex-col w-screen">
      <div className="bg-[#958f85] h-[50vh] w-screen min-w-[100vw] flex justify-center items-end overflow-hidden">
        <Image
          src={img1}
          alt="img1"
          className="w-[65%] md:w-[50%] -mb-[12%] -ml-[6%] object-scale-down object-top"
        />
        <Image
          src={img2}
          alt="img2"
          className="w-[65%] md:w-[50%] -mb-[12%] -ml-[6%] object-scale-down object-top"
        />
      </div>
      <div className="bg-purple-700 h-[50vh] w-screen min-w-[100vw] relative flex flex-col items-center gap-y-[2vh]">
        <Image
          src={digitalCommImg}
          alt="img2"
          className="h-[10vh] max-w-[70%] object-contain border-2 border-purple-700 absolute -top-[5%] left-[4%] rounded-lg bg-white"
        />
        <p className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">ABC 123</p>
        <p className="w-[90%] md:text-[24px] md:leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus ipsum soluta.</p>
        <p className="w-[90%] md:text-[35px] md:leading-[40px] font-semibold text-xl">View Case Study</p>
      </div>
    </section>
  );
};

export default FirstSection;
