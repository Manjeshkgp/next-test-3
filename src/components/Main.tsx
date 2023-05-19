"use client";

import FirstSection from "@/components/FirstSection";
import FourthSection from "@/components/FourthSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import { useEffect, useState } from "react";

export default function Main() {
//   const main = document.getElementById("main");
//   const vw = window.screen.width;
//   const [touch, setTouch] = useState<boolean>(true);
//   useEffect(() => {
//     setTouch(false);
//     main?.addEventListener("touchstart", () => {
//       setTouch(true);
//     });
//     main?.addEventListener("touchend", () => {
//       setTouch(false);
//     });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const autoScroll = () => {
//     const autoScrollInterval = setInterval(() => {
//       if (!main||touch===true) {
//         clearInterval(autoScrollInterval);
//         return;
//       }
//       main.scrollLeft = (main?.scrollLeft as number) + vw;
//     }, 2000);
//     return () => {
//       clearInterval(autoScrollInterval);
//     };
//   };
//   useEffect(() => {
//     if (touch===false) {
//       autoScroll();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [touch]);
  return (
    <main
      id="main"
      className="flex flex-row overflow-x-scroll lg:container lg:flex-col lg:overflow-x-hidden transition-all"
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </main>
  );
}
