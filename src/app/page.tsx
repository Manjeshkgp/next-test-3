import FirstSection from "@/components/FirstSection";

export default function Home() {
  return (
    <main id="main" className="flex flex-row overflow-x-scroll lg:container lg:flex-col lg:overflow-x-hidden">
      <FirstSection/>
      <FirstSection/>
    </main>
  )
}
