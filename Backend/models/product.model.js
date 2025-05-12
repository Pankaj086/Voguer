import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        default: 50,
    },
    discount:{
        type: Number,
        required: true,
        default: 0,
    },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    subCategory:{
        type: String,
        required: true,
        trim: true,
    },
    images:[
        {
            type: String,
            required: true,
        }
    ],
    stock:{
        type: Number,
        required: true,
        default: 0,
    },
    ratings:{
        type: Number,
        default: 3,
    },
    bestSeller:{
        type: Boolean,
        default: false,
    },
    size:[
        {
            type: String,
            required: true,
        }
    ],
    date:{
        type: Number,
        required: true,
    },
},{timestamps: true});


export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
// moongoose.models.Product : This is useful if you want to avoid re-creating the model in the same file or in different files.