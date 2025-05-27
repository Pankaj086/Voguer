import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { generateAccessAndRefreshToken } from "../controllers/user.controller.js";

export const verifyJWT = async (req, res, next) => {
    try {
        // Improved token extraction that checks headers and cookies more thoroughly
        const token = 
            req.cookies?.accessToken || 
            req.header("Authorization")?.replace("Bearer ", "") ||
            req.headers["x-access-token"];
        
        // console.log("Cookies received:", req.cookies);
        // console.log("Headers:", req.headers);
        // console.log("Access token being used:", token);
        
        if (!token) {
            return res.status(401).json({ 
                message: "Authentication failed: No access token provided", 
                success: false 
            });
        }

        let decodedToken;

        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log("Token verified successfully");
        } catch (err) {
            if (err.name === "TokenExpiredError") {
                const refToken = req.cookies?.refreshToken || req.header("x-refresh-token");

                if (!refToken) {
                    return res.status(401).json({ message: "Refresh token missing" });
                }

                let refreshDecoded;
                try {
                    refreshDecoded = jwt.verify(refToken, process.env.REFRESH_TOKEN_SECRET);
                } catch (err) {
                    return res.status(403).json({ message: "Refresh token expired or invalid" });
                }

                const user = await User.findById(refreshDecoded?.id).select("-password -refreshToken");
                if (!user) {
                    return res.status(401).json({ message: "Invalid refresh token" });
                }

                const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

                res.cookie("accessToken", accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "None",
                    path: '/'  // Add this to ensure cookies are accessible across all paths
                });

                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "None",
                    path: '/'  // Add this to ensure cookies are accessible across all paths
                });

                // decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

            } else {
                return res.status(401).json({ message: "Invalid access token" });
            }
        }

        const user = await User.findById(decodedToken?.id).select("-password -refreshToken");
        // console.log(user);
        

        if (!user) {
            return res.status(401).json({ message: "Invalid access token" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized request" });
    }
};