"use client";
import { useState } from "react";
import { registerAction } from "../action/auth.action";
import Link from "next/link";

export default function LoginPage() {
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [guestLoading, setGuestLoading] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center">
      <form
        action={async (e: FormData) => {
          await registerAction(e);
        }}
        className="flex flex-col gap-2 items-center w-[400px] mt-[100px]  p-4"
      >
        <h1 className="font-semibold text-2xl">CodeHire 🤠</h1>
        <div className="flex flex-col  w-full">
          <p>Enter the name</p>
          <input
            type="text"
            name="name"
            placeholder="eg. Kamlesh Sahani "
            className="w-full h-[35px] rounded-md bg-transparent text-[#969696] pl-3 outline-none border-2 border-[#464646] text-base"
          />
        </div>
        <div className="flex flex-col  w-full">
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="eg. code@hire"
            className="w-full h-[35px] rounded-md bg-transparent text-[#969696] pl-3 outline-none border-2 border-[#464646] text-base"
          />
        </div>
        <div className="flex flex-col  w-full">
          <p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="eg. kamleshbca2005@gmail.com"
            className="w-full h-[35px] rounded-md bg-transparent text-[#969696] pl-3 outline-none border-2 border-[#464646] text-base"
          />
        </div>
        <Link href={"/login"} className="font-semibold text-[13px] text-[#3d3d3dde] underline items-end w-full text-right">Alreay have an account</Link>
        <div className="w-full flex flex-col gap-3 mt-6">
          <button
            type="submit"
            className="w-full h-[35px] rounded  outline-none bg-white text-black font-semibold cursor-pointer"
          >
            {submitLoading ? "Loading.." : "Register"}
          </button>
          <button
            type="button"
            className="w-full h-[35px] rounded  text-white bg-[#000] font-semibold  outline-none cursor-pointer"
          >
            {guestLoading ? "Loading.." : "GUEST"}
          </button>
        </div>
      </form>
    </div>
  );
}
