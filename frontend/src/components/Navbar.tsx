"use client";
import { useState, useEffect, useContext } from "react";
import { Gitlab } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { AuthContext } from "@/context/authContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMe = async () => {
    try {
      const { data } = await axios.get("/api/user/me");
      console.log(data, "me");
      if (data.success) {
        setUser(data.user);
      }
    } catch (error: any) {
      setUser(null);
      console.log(error?.response?.data);
    }
  };

 
  useEffect(() => {
    if(!user){
      fetchMe();
    }
  }, [user]);
  return (
    <div
      className={`flex justify-between items-center  max-sm:w-[90%] px-5 h-[60px] sm:w-[75%] mx-auto rounded-2xl fixed top-4 z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? "bg-black/20 backdrop-blur-lg shadow shadow-[#333333]"
          : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full bg-mainColor flex justify-center items-center">
            <Gitlab className="text-2xl" />
          </div>
          <h1 className="font-semibold text-[25px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            CodeHire
          </h1>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-5">
        {user && user?.email ? (
          <Link href={"/profile"}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href={"/login"} className="font-medium text-[13px]">
            <button
              className="bg-mainColor text-black h-[40px] w-[140px] text-[17px] rounded-xl font-semibold flex justify-center items-center gap-3 hover:shadow-mainColor/50 transition-all hover:shadow-lg"
              aria-label="Login to CodeHire"
            >
              <p>Login</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
