"use client";
import React, { ChangeEvent, useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/util";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";

export interface RegisterDataType {
  companyName: string;
  adminEmail: string;
  adminName: string;
  city: string;
  state: string;
  country: string;
  password: string;
}

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState<RegisterDataType>({
    companyName: "",
    adminEmail: "",
    adminName: "",
    city: "",
    state: "",
    country: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const valueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(registerData);
      const res: any = // await registerAction(registerData);
      console.log(res);

      if (res.success) {
        toast.success(res.message);
        setRegisterData({
          companyName: "",
          adminEmail: "",
          adminName: "",
          city: "",
          state: "",
          country: "",
          password: "",
        });
        setUser(res?.user);
        router.push("/dashboard");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-20">
      <h1 className="text-xl font-semibold text-center mt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Register your <span className="text-mainColor"><Cover>Company</Cover></span>
      </h1>
      <form className="my-8" onSubmit={handleSubmit}>
        {Object.keys(registerData).map((key) => (
          <LabelInputContainer key={key} className="mb-4">
            <Label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").trim()}</Label>
            <Input
              id={key}
              onChange={valueHandler}
              name={key}
              placeholder={`Enter ${key}`}
              type={key === "password" ? "password" : "text"}
              className="text-white"
            />
          </LabelInputContainer>
        ))}
        <button
          className="bg-gradient-to-br relative group/btn block font-bold bg-mainColor w-full text-black rounded-md h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
        >
          {loading ? "Loading.." : "Register"} &rarr;
          <BottomGradient />
        </button>
      </form>
      <Link href={"/company/login"} className="text-white text-center w-full block italic">
        Already have an account?
        <span className="text-mainColor font-semibold underline"> Login</span>
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
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};