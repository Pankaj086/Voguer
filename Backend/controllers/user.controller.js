import { User } from '../models/user.model.js';
import validator from 'validator';
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        const accessToken = user.generateAccessToken(); 
        const refreshToken = user.generateRefreshToken(); 
        
        user.refreshToken = refreshToken;

        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        console.error("Token generation error:", error);
        throw error;
    }
}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(req.body);

        if(!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // checking if all fields are provided by user (cannot be empty)
        if([name, email, password].some(field => field?.trim() === "")) {
            return res.status(400).json({ message: 'Fileds cannot be empty' });
        }

        // checking if email is valid
        if(!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        // checking if password is strong enough
        if(password.length < 6) {
            return res.status(400).json({ message: 'Password enter a strong password' });
        }

        // checking if user already exists
        const existingUser = await User.findOne({ email });
        // console.log(existingUser);
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // creating new user
        const user = await User.create({
            name,
            email,
            password,
        });

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
        // console.log(accessToken);
        // console.log(refreshToken);
        
        

        const createdUser = await User.findById(user._id).select("-password -refreshToken");

        if (!createdUser) {
            return res.status(503).json({ message: 'Error creating user' });
        }

        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'  // Add this to ensure cookies are accessible across all paths
        };

        // console.log(user);

        return res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json({
                message: 'User registered successfully',
                createdUser,
                accessToken,
                refreshToken,
                success: true
            });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Internal server error during registration' });
        
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(403).json({ message: 'All fields are required' });
        }

        if([email, password].some(field => field?.trim() === "")) {
            return res.status(403).json({ message: 'Fields cannot be empty' });
        }

        if(!validator.isEmail(email)) {
            return res.status(403).json({ message: 'Invalid email address' });
        }

        const user = await User.findOne({ email});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // checking if password is correct
        const isCorrect = await user.isPasswordCorrect(password);
        if (!isCorrect) {
            return res.status(403).json({ message: 'Incorrect password' });
        }

        // genrate access and refresh token
        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
        if (!loggedInUser) {
            return res.status(503).json({ message: 'Error logging in user' });
        }

        const options = {
            // cookie jo hoti hai use koi bhi frontend se modify kar sakta hai jab httpOnly and secure kar deta hai tab usko sirf sever se hi modify kiya ja sakta hai
            httpOnly: true,  // Cannot be accessed via JavaScript (only sent with HTTP requests)
            secure: true,
            sameSite: 'None', // Allows cross-origin cookie transmission (important for cross-origin requests)
            path: '/'  // Add this to ensure cookies are accessible across all paths
        };

        return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            message: 'User logged in successfully',
            user: loggedInUser, accessToken, refreshToken,
            success: true
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error login issue' });
    }
}

const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(
            req.user._id,
            // what to update
            {
                $unset: {
                    refreshToken: 1,
                }
            },
            {
                // response me new updated value milegi
                new: true
            }
        )
        // options for cookies
        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            path: '/'  // Add this to ensure cookies are accessible across all paths
        }

        return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
            message: 'User logged out successfully',
            success: true
        });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error logout issue' });
    }
}

// route for admin login

const adminLogin = async (req, res) => {
    try {
        
        const { email, password } = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.status(200).json({
                success:true,
                token
            })
        }
        else{
            res.status(500).json({
                success:false,
                message: "Invalid Admin Credentials"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

export { registerUser, loginUser, logoutUser, adminLogin, generateAccessAndRefreshToken };