import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected")
        })
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
    }
    catch(err){
        console.error("MongoDB connection error:", err.message)
        process.exit(1);
    }
}

export default connectDB;