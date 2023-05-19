import { FC } from "react";
import img1 from "../assets/melltoo-img1.png";
import img2 from "../assets/melltoo-img2.png";
import Image from "next/image";
import appOfTheyr from "../assets/mobile-app-of-the-year-by-entrepreneur.png";

interface SeventhSectionProps {}

const SeventhSection: FC<SeventhSectionProps> = ({}) => {
  return (
    <section id="section7" className="flex flex-col w-screen">
      <div className="bg-[#00C074] h-[50vh] w-screen min-w-[100vw] flex items-end overflow-hidden">
        <Image
          src={img2}
          alt="img1"
          className="w-[65vw] md:w-[50vw] -mb-[6vh] md:-mb-[8vh] ml-[10vw] md:ml-[20vw] -mr-[50vw] self-end z-10 object-top"
        />
        <Image
          src={img1}
          alt="img2"
          className="w-[65vw] md:w-[50vw] scale-75 -mb-[18vh] md:-mb-[20vh] ml-[15vw] md:ml-[25vw] -mr-[20vw] self-end z-0 object-top"
        />
      </div>
      <div className="bg-emerald-600 z-10 h-[50vh] w-screen min-w-[100vw] relative flex flex-col items-center gap-y-[2vh]">
        <Image
          src={appOfTheyr}
          alt="img2"
          className="h-[10vh] max-w-[70%] object-contain absolute -top-[5%] left-[4%] rounded-lg"
        />
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

export default SeventhSection;
