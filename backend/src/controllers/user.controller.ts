import { Request, Response } from "express";
import userModel from "../models/user.model.js";

const cookieOption = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
};
export const userRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return {
        success: false,
        message: "please fill the all fields",
      };
    }

    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.status(404).json({
        success: false,
        message: "user is already exist",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user is not found",
      });
    }
    const token = user.generateToken();

    res.cookie("auth-token", token, cookieOption);

    return res.status(201).json({
      token,
      success: true,
      message: "Register successfuly",
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
        success: false,
        message: error.message || "something went wrong",
      });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill the all fields",
      });
    }
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user is not found",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "email or password is wrong",
      });
    }

    const token = user.generateToken();
    res.cookie("auth-token", token, cookieOption);
    return res.status(200).json({
      token,
      success: true,
      message: "login successuly",
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
};


export  const  userProfile = async(req:Request,res:Response)=>{
    try {
        const user = req?.user;
        if(!user){
          return res.status(400).json({
            message:"user is not found",
            success:false
          })
        }

        return res.status(200).json({
          message:"user is found",
          success:true,
          user
        })
    } catch (error:any) {
        return res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
          });
    }
}

export const userGuestLogin = async(req:Request,res:Response)=>{
  try {
    const email = process.env.GUEST_EMAIL;
    const password = process.env.GUEST_PASSWORD;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill the all fields",
      });
    }
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user is not found",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "email or password is wrong",
      });
    }

    const token = user.generateToken();
    res.cookie("auth-token", token, cookieOption);
    return res.status(200).json({
      token,
      success: true,
      message: "login successuly",
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}

export const userLogout = async(req:Request,res:Response)=>{
  try {
    const user = req.user;
    if(!user){
      return res.status(400).json({
        message:"user is not login",
        success:false
      })
    }

    res.cookie("auth-token","",{
      maxAge:0,
      httpOnly:true
    });

    return res.status(200).json({
      message:"logout successfuly",
      success:true
    })
  } catch (error:any) {
    return res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
    });
  }
}