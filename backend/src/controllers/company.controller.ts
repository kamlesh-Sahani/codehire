import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import companyModel from "../models/company.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const newCompany = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { companyName, adminEmail, adminName, address, password } = req.body;


        if (!companyName || !adminEmail || !adminName || !password) {
            return next(new ErrorHandler("All required fields must be filled", 400));
        }

        // Check if the company already exists
        const existingCompany = await companyModel.findOne({ amdminEmail: adminEmail }); // Schema typo fix
        if (existingCompany) {
            return next(new ErrorHandler("Company with this email already exists", 400));
        }

        // Create a new company
        const company = await companyModel.create({
            companyName,
            amdminEmail: adminEmail, 
            adminName,
            address,
            password,
        });
        if(!company){
            return next(new ErrorHandler("failed to register please try again", 400));
        }


        

        res.status(201).json({
            success: true,
            message: "verify mail please check your mail",
        });
    } catch (error:any) {
        next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
});
