import FirstSection from "@/components/FirstSection";
import FourthSection from "@/components/FourthSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";

export default function Home() {
  return (
    <main
      className="flex flex-row overflow-x-scroll lg:container lg:flex-col lg:overflow-x-hidden"
    >
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </main>
  );
}
