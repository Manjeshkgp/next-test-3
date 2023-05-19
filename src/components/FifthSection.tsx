import { FC } from "react";
import img1 from "../assets/karavan-social-networking-app-screen.png";
import img2 from "../assets/karavan_2.png";
import img3 from "../assets/social-networking-app-case-study.png";
import img4 from "../assets/karavan-social-networking-app-screen-2.png";
import img5 from "../assets/developers-for-social-media-app.png";
import Image from "next/image";

interface FifthSectionProps {}

const FifthSection: FC<FifthSectionProps> = ({}) => {
  return (
    <section id="section5" className="flex flex-col w-screen h-screen">
      <div className="h-[50vh] overflow-hidden w-screen bg-cyan-400 flex flex-row justify-center flex-nowrap relative">
        <div className="flex z-10 w-[40vw] flex-col items-center justify-between">
          <Image
            src={img1}
            alt="img2"
            className="w-[40vw] h-[25vh] object-cover object-bottom"
          />
          <Image
            src={img2}
            alt="img2"
            className="w-[40vw] h-[25vh] object-cover object-top"
          />
        </div>
        <div className="flex z-10 w-[40vw] flex-col justify-between">
          <Image
            src={img3}
            alt="img2"
            className="w-[40vw] object-cover object-bottom self-start md:-mt-[15vh]"
          />
          <Image
            src={img4}
            alt="img2"
            className="w-[40vw] object-cover object-top self-end"
          />
        </div>
        <Image
          src={img5}
          alt="img2"
          className="w-[40vw] object-cover object-bottom self-end -mr-[22vw] -mb-[11vw]"
        />
      </div>
      <div className="h-[50vh] overflow-hidden w-screen bg-blue-600 flex flex-col items-center gap-y-[4vh]">
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

export default FifthSection;
