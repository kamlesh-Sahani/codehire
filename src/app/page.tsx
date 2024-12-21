import Image from "next/image";
import aiImage from "@/assets/ai.png"
import { Activity, Brain, GlobeLock } from "lucide-react";
import FeatureSection from "@/components/Feature";
import PricingSection from "@/components/Pricing";
export default function Home() {
  return (
    <div className="flex flex-col gap-20 items-center w-full h-full  justify-center   ">
      <div className="w-full h-full py-10 flex flex-col gap-20">
        <div className="flex justify-between md:items-center w-full h-full flex-wrap max-md:flex-col max-md:justify-center">
          <div className="flex flex-col gap-4 ">
            <div className="">
              <h1 className="text-5xl font-semibold drop-shadow-md">Revolutionize Talent</h1>
              <h1 className="text-5xl font-semibold drop-shadow-md">Screening</h1>
            </div>

            <div>
              <p className="text-[#6e6e6e] font-medium">Identify the best talent with real-time collaboration</p>
              <p className="text-[#6e6e6e] font-medium">AI-powered analysis</p>
              <p className="text-[#6e6e6e] font-medium">robust proctoring tools</p>
            </div>


            <button className="bg-white text-black outline-none rounded-md rounded-tr-2xl  w-[200px] h-[40px] cursor-pointer hover:bg-[#eee] font-medium">GET STARTED NOW</button>
          </div>

          <Image src={aiImage} alt="aiImage" className="max-lg:w-[200px] " />

        </div>
        <div className="flex w-full h-full justify-between flex-wrap gap-4 ">
          <button className="bg-transparent flex gap-3 justify-center items-center font-medium text-lg cursor-pointer"><div className="p-2 rounded-md bg-[#AE6EFF]"><GlobeLock className="text-black" /></div> <p>Cheat-Proof System</p></button>
          <button className="bg-transparent flex gap-3 justify-center items-center font-medium text-lg cursor-pointer"><div className="p-2 rounded-md bg-[#FEBE52]"><Activity className="text-black" /> </div><p>Real-Time Collaboration</p></button>
          <button className="bg-transparent flex gap-3 justify-center items-center font-medium text-lg cursor-pointer"><div className="p-2 rounded-md bg-[#77DB7B]"><Brain className="text-black" /></div> <p>Customizable Questions</p></button>
        </div>
      </div>


      <FeatureSection />
      <PricingSection />
    </div>
  );
}
