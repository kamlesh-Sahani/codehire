import { Request,Response,NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler.js";

const errorMiddleware = (error:ErrorHandler,req:Request,res:Response,next:NextFunction)=>{
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal server error";
    res.status(error.statusCode).json({
        success:false,
        message:error.message
    })
}


export default errorMiddleware;