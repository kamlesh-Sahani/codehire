"use server";
import userModel from "@/models/user.model";
import { registerDataType } from "../register/page";
import { cookies } from "next/headers";
import dbConnect from "@/lib/dbConnect";
import { LoginDataType } from "../login/page";

const setCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("auth-token", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
};

export const registerAction = async (registerData: registerDataType) => {
  try {
    await dbConnect();
    const { name, email, password } = registerData;
    if (!name || !email || !password) {
      return {
        success: false,
        message: "please fill the all fields",
      };
    }

    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return {
        success: false,
        message: "user is already exist",
      };
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });
    if (!user) {
      return {
        success: false,
        message: "something went wrong",
      };
    }
    const token = user.generateToken();
    await setCookie(token);
    return {
      success: true,
      message: "Register successfuly",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "something went wrong",
    };
  }
};

export const loginAction = async(loginData:LoginDataType)=>{
  try {
   await dbConnect();
    const {email,password} = loginData;
    console.log("server",email,password);
    if(!email || !password){
      return {
        success: false,
        message: "please fill the all fields",
      };
    }

    const user = await userModel.findOne({email}).select("+password");
    if(!user){
      return {
        success:false,
        message:"user is not found"
      }
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return {
        success:false,
        message:"email or password is wrong"
      }

    }

    const token = user.generateToken();
    await setCookie(token);
    return {
      success:true,
      message:"login successuly"
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || "something went wrong",
    };
  }
}