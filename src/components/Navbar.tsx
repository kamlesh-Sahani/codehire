import { BrainCircuit } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-4  border-b-2 border-[#4b4b4b] text-[#868686]">
      <div className="flex  justify-center items-center gap-2">
      <BrainCircuit color="#ae6eff" className="text-2xl" />
      <h1 className="font-semibold text-xl text-white">CodeHire</h1>
      </div>


      <div className="flex justify-center items-center gap-5 ">
        <Link href="#feature" className="font-medium text-[13px]">FEATURE</Link>
        <Link href={"#pricing"} className="font-medium text-[13px]">PRICING</Link>
      </div>

      <div className="flex justify-center items-center gap-5">
      <Link href="/register" className="font-medium text-[13px]">NEW ACCOUNT</Link>
      <Link href={"/login"} className="font-medium text-[13px]"><button className="bg-[#fff] w-[100px] h-[30px] text-black rounded-md rounded-tr-2xl">SIGN IN</button> </Link>
      </div>
    </div>
  )
}

export default Navbar
