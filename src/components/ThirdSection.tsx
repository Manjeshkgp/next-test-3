import { FC } from "react";
import img1 from "../assets/nasa-fitness-tracking-mobile-app.png";
import img2 from '../assets/measure-total-body-weight-through-fitness-app.png';
import Image from "next/image";

interface ThirdSectionProps {}

const ThirdSection: FC<ThirdSectionProps> = ({}) => {
  return (<section className="flex flex-col w-screen h-screen">
    <div className="h-[50vh] overflow-hidden w-screen bg-indigo-800 flex flex-row">
    <Image
          src={img1}
          alt="img1"
          className="h-[80%] md:h-[90%] object-contain -mb-[8vh] object-center self-end"
        />
        <Image
          src={img2}
          alt="img2"
          className="h-[80%] md:h-[90%] object-contain -mt-[8vh] object-center self-start"
        />
    </div>
    <div className="h-[50vh] overflow-hidden w-screen bg-indigo-950 flex flex-col items-center gap-y-[4vh]">
    <p className="w-[90%] md:text-[40px] md:leading-[45px] font-bold text-3xl mt-[15vh]">ABC 123</p>
        <p className="w-[90%] md:text-[24px] md:leading-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus ipsum soluta.</p>
        <p className="w-[90%] md:text-[35px] md:leading-[40px] font-semibold text-xl">View Case Study</p>
    </div>
  </section>);
};

export default ThirdSection;
