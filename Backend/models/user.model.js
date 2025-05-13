import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    address:{
        type: String,
    },
    phone:{
        type: Number,
    },
    wishlist:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ],
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ],
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
    refreshToken:{
        type: String,
    },
},{timestamps: true});

// .pre is used here to hash the password before saving it to the database
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

// using bcrypt.compare method to compare the password with the hashed password in the database
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

// this function is used to generate the JWT access token for the user
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            name: this.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        },
    )
}

// this function is used to generate the JWT refresh token for the user
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            id: this._id, 
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        },
    )
}

export const User = mongoose.models.User || mongoose.model("User", userSchema);