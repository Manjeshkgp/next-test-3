import { FC } from "react";
import bgImg from "../assets/erp-app-development-service.png";
import parentBg from "../assets/interior.jpg";
import Image from "next/image";

interface SixthSectionProps {}

const SixthSection: FC<SixthSectionProps> = ({}) => {
  return (
    <section id="section6" className="flex flex-col w-screen h-screen">
      <div className="h-[50vh] overflow-hidden relative w-screen flex flex-col justify-center items-center">
        <Image
          src={bgImg}
          alt="bgImg"
          className="h-[50vh] object-center z-10 scale-110 object-cover"
        />
        <Image
          src={parentBg}
          alt="bgImg"
          className="h-[50vh] w-screen object-center object-cover absolute z-0 inset-0"
        />
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-blue-800 flex flex-col items-center gap-y-[4vh]">
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

export default SixthSection;
