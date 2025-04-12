import mongoose from "mongoose";

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
    role:{
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
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
},{timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);