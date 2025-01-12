"use server";
import userModel from "@/models/user.model";
import { registerDataType } from "../register/page";
import { cookies } from "next/headers";
import dbConnect from "@/lib/dbConnect";

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
  } catch (error) {
    return {
      success: false,
      message: error.message || "something went wrong",
    };
  }
};
