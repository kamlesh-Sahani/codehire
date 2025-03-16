"use client";
import React, { ChangeEvent, useState,useContext, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/util";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import {v4 as uuid } from  "uuid"
export interface LoginDataType {
  email: string;
  password: string;
}
export default function LoginPage() {
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [guestLoading, setGuestLoading] = useState<boolean>(false);
  const [interviewId, setInterviewId] = useState('');
  const {setUser} = useContext(AuthContext)
  const router = useRouter();

  const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(loginData);
      const res:any = //await loginAction(loginData);
      console.log(res);
 
      if (res.success) {
        toast.success(res.message);
        setLoginData({
          email: "",
          password: "",
        });
        setUser(res?.user)
        router.push(`/interview/${interviewId}`);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const guestHandler = async () => {
    try {
      setGuestLoading(true);
      const guestLoginData = {
        email: process.env.NEXT_PUBLIC_GUEST_EMAIL,
        password: process.env.NEXT_PUBLIC_GUEST_PASSWORD,
      };
      console.log(guestLoginData, "guest");
      const res:any = await loginAction(guestLoginData);
      if (res.success) {
        setUser(res?.user)
        toast.success(res.message);
        router.push(`/interview/${interviewId}`);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message || "something went wrong");
    } finally {
      setGuestLoading(false);
    }
  };


  useEffect(()=>{
    const id = uuid();
    setInterviewId(id);
  },[])

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input   mt-20 ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200"></h2>
      <h1 className="text-xl  font-semibold  mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Welcome back{" "}
        <span className="text-mainColor">
          <Cover>CodeHire</Cover>{" "}
        </span>
      </h1>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            onChange={valueHandler}
            name="email"
            placeholder="kamleshbca2005@gmail.com"
            type="email"
            className="text-white"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            onChange={valueHandler}
            name="password"
            placeholder="••••••••"
            type="password"
            className="text-white"
          />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn  block font-bold bg-mainColor w-full text-black rounded-md h-10  shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? "Loading.." : "Login"}
          &rarr;
          <BottomGradient />
        </button>

        <button
          className="mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="button"
          onClick={guestHandler}
        >
          {guestLoading ? "अतिथि देवो भवः" : "GUEST"}
          &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <Link
        href={"/register"}
        className="text-white text-center w-full  block italic"
      >
        Register new account
        <span className="text-mainColor font-semibold underline">
          {" "}
          Register
        </span>
      </Link>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
