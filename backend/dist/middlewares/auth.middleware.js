import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
export const authMiddleware = async (req, res, next) => {
    try {
        /**
         * eg. headers:{
         * authorization:bearer kjhhskfsdfdf(token)
         * }
         *
         */
        const token = req.headers.authorization?.split(" ")[1] || req.cookies["auth-token"];
        if (!token) {
            return res.status(401).json({
                message: "unauthorized",
                success: false
            });
        }
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, secret);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || "internal error",
            success: false
        });
    }
};
