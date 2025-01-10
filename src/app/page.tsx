import FeatureSection from "@/components/Feature";
import PricingSection from "@/components/Pricing";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/backgroud-line";

export default function Home() {
  return (
    <BackgroundLines className="m-auto   max-lg:p-5 max-lg:w-full lg:w-[90%] xl:w-[80%] ">
      <div className="flex flex-col gap-20 items-center w-full   justify-center ">
        <section className="text-center h-screen  flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-9xl  font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Hire Top Coders in <br /> Just <Cover>Minutes</Cover>
          </h1>
          <Link href="/interview">
          <button className="bg-mainColor  text-black py-3 px-6 text-lg font-semibold drop-shadow-md  transition duration-300  h-[45px] w-[210px] text-[17px] rounded-xl  flex justify-center items-center gap-3 hover:shadow-mainColor/50  hover:shadow-lg cursor-pointer">
            Try Now
          </button>
          </Link>
        

        </section>

        
        <FeatureSection />
        <PricingSection />
      </div>
    </BackgroundLines>
  );
}
