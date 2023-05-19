import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <main
      className="flex flex-row overflow-x-scroll lg:container lg:flex-col lg:overflow-x-hidden"
    >
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
    </main>
  );
}
