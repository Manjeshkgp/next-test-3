"use client";

import FirstSection from "@/components/FirstSection";
import FourthSection from "@/components/FourthSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Main() {
  const vh = global.window.innerHeight;
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 500 });
    // setTouch(false);
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        className="lg:hidden w-screen h-screen"
      >
        <div className="h-screen w-screen">
          <FirstSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <SecondSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <ThirdSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <FourthSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <FifthSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <SixthSection scrollPosition={scrollPosition} vh={vh} />
        </div>
        <div className="h-screen w-screen">
          <SeventhSection scrollPosition={scrollPosition} vh={vh} />
        </div>
      </Carousel>
      <main
        id="main"
        className="hidden lg:flex flex-row overflow-x-auto scroll-smooth text-white lg:flex-col lg:overflow-x-hidden transition-all lg:h-[700vh]"
      >
        <p className="fixed hidden lg:block bottom-[5vh] text-[2vw] left-[35vw] z-[111] tracking-[0.8vw]">
          SKIP
        </p>
        <ScrollAnimation scrollPosition={scrollPosition} vh={vh} />
        <FirstSection scrollPosition={scrollPosition} vh={vh} />
        <SecondSection scrollPosition={scrollPosition} vh={vh} />
        <ThirdSection scrollPosition={scrollPosition} vh={vh} />
        <FourthSection scrollPosition={scrollPosition} vh={vh} />
        <FifthSection scrollPosition={scrollPosition} vh={vh} />
        <SixthSection scrollPosition={scrollPosition} vh={vh} />
        <SeventhSection scrollPosition={scrollPosition} vh={vh} />
      </main>
    </>
  );
}
