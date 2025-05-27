import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';
import cookieParser from 'cookie-parser'; // Add this import
import cartRouter from './routes/cart.routes.js';

// app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// const corsOptions = {
//     origin: ["http://localhost:5173", "https://hackoclock-axion-ai-frontend.vercel.app"],
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true, // Enable cookies in requests and responses
// };

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token", "x-refresh-token", "token"]
};

// middleware
app.use(express.json());
 // Add this middleware to parse cookies
app.use(cors(corsOptions));
app.use(cookieParser());

// api endpoints
app.get('/', (req, res) => res.status(200).send('API is running'));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/cart',cartRouter);

app.listen(port, ()=> console.log(`Server is running on port: ${process.env.PORT}`));